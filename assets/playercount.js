/* =========================================
   ARC RAIDERS PLAYER COUNT
========================================= */

const PLAYER_API="https://arcraiders.gg/.netlify/functions/steam-player-count";
const STORAGE_KEY="arcRaidersPlayerHistory";
let playerHistory=JSON.parse(localStorage.getItem(STORAGE_KEY)||"[]");

/* =========================================
   FETCH PLAYER COUNT
========================================= */

async function fetchPlayerCount(){
    try{
        const response=await fetch(PLAYER_API,{cache:"no-store"});
        if(!response.ok)throw new Error(`API Error: ${response.status}`);

        const data=await response.json();
        const players=Number(data.player_count);
        const timestamp=new Date(data.timestamp).getTime();

        if(!Number.isFinite(players))throw new Error("Invalid player count");
        if(!Number.isFinite(timestamp))throw new Error("Invalid timestamp");

        playerHistory.push({players,timestamp});

        const thirtyDaysAgo=Date.now()-(30*24*60*60*1000);
        playerHistory=playerHistory.filter(item=>item.timestamp>=thirtyDaysAgo);

        localStorage.setItem(STORAGE_KEY,JSON.stringify(playerHistory));

        updatePlayerStats();
        updateCurrentTime(data);
        updateApiTime(data);
        updateReadingCount();
        updateStatus("Live");

        return data;
    }catch(error){
        console.error("Player API Error:",error);
        updateStatus("API Error");
    }
}

/* =========================================
   PLAYER STATISTICS
========================================= */

function updatePlayerStats(){
    const now=Date.now();
    const day24=now-(24*60*60*1000);
    const day7=now-(7*24*60*60*1000);
    const day30=now-(30*24*60*60*1000);

    const last24h=playerHistory.filter(x=>x.timestamp>=day24);
    const last7d=playerHistory.filter(x=>x.timestamp>=day7);
    const last30d=playerHistory.filter(x=>x.timestamp>=day30);

    const current=playerHistory.length
        ?playerHistory[playerHistory.length-1].players
        :0;

    const peak24=last24h.length
        ?Math.max(...last24h.map(x=>x.players))
        :current;

    const peak7=last7d.length
        ?Math.max(...last7d.map(x=>x.players))
        :current;

    const average30=last30d.length
        ?Math.round(last30d.reduce((sum,x)=>sum+x.players,0)/last30d.length)
        :current;

    const currentEl=document.getElementById("currentPlayers");
    const peak24El=document.getElementById("peak24");
    const peak7El=document.getElementById("peak7");
    const average30El=document.getElementById("avg30");

    if(currentEl)currentEl.textContent=current.toLocaleString();
    if(peak24El)peak24El.textContent=peak24.toLocaleString();
    if(peak7El)peak7El.textContent=peak7.toLocaleString();
    if(average30El)average30El.textContent=average30.toLocaleString();

    updatePlayerGraph();
}

/* =========================================
   GRAPH
========================================= */

function updatePlayerGraph(){
    const canvas=document.getElementById("playerGraph");
    if(!canvas)return;

    const info=document.getElementById("graphInfo");

    if(!playerHistory.length){
        if(info)info.textContent="No readings yet";
        return;
    }

    const ctx=canvas.getContext("2d");
    const rect=canvas.getBoundingClientRect();
    const width=Math.max(rect.width,300);
    const height=Math.max(rect.height,250);
    const dpr=window.devicePixelRatio||1;

    canvas.width=width*dpr;
    canvas.height=height*dpr;
    ctx.setTransform(dpr,0,0,dpr,0,0);
    ctx.clearRect(0,0,width,height);

    const paddingLeft=60;
    const paddingRight=20;
    const paddingTop=25;
    const paddingBottom=40;

    const graphWidth=width-paddingLeft-paddingRight;
    const graphHeight=height-paddingTop-paddingBottom;

    const now=Date.now();
    const thirtyDaysAgo=now-(30*24*60*60*1000);

    const history=playerHistory.filter(
        item=>item.timestamp>=thirtyDaysAgo
    );

    if(!history.length)return;

    const values=history.map(item=>item.players);
    let minPlayers=Math.min(...values);
    let maxPlayers=Math.max(...values);

    if(minPlayers===maxPlayers){
        minPlayers-=1000;
        maxPlayers+=1000;
    }

    const range=maxPlayers-minPlayers;

    /* Grid */

    ctx.font="12px Fredoka,Arial,sans-serif";
    ctx.textAlign="right";
    ctx.textBaseline="middle";

    const gridLines=5;

    for(let i=0;i<=gridLines;i++){
        const y=paddingTop+(graphHeight/gridLines)*i;

        ctx.beginPath();
        ctx.moveTo(paddingLeft,y);
        ctx.lineTo(width-paddingRight,y);
        ctx.strokeStyle="rgba(255,255,255,0.08)";
        ctx.lineWidth=1;
        ctx.stroke();

        const value=maxPlayers-((maxPlayers-minPlayers)/gridLines)*i;

        ctx.fillStyle="rgba(255,255,255,0.55)";
        ctx.fillText(
            Math.round(value).toLocaleString(),
            paddingLeft-10,
            y
        );
    }

    /* Graph Line */

    ctx.beginPath();

    history.forEach((item,index)=>{
        const x=paddingLeft+
            ((item.timestamp-thirtyDaysAgo)/
            (now-thirtyDaysAgo))*graphWidth;

        const y=paddingTop+
            graphHeight-
            ((item.players-minPlayers)/range)*graphHeight;

        index===0?ctx.moveTo(x,y):ctx.lineTo(x,y);
    });

    ctx.strokeStyle="#ffb700";
    ctx.lineWidth=3;
    ctx.lineJoin="round";
    ctx.lineCap="round";
    ctx.stroke();

    /* Data Points */

    history.forEach(item=>{
        const x=paddingLeft+
            ((item.timestamp-thirtyDaysAgo)/
            (now-thirtyDaysAgo))*graphWidth;

        const y=paddingTop+
            graphHeight-
            ((item.players-minPlayers)/range)*graphHeight;

        ctx.beginPath();
        ctx.arc(x,y,3,0,Math.PI*2);
        ctx.fillStyle="#fff";
        ctx.fill();
    });

    /* X Axis */

    ctx.textAlign="center";
    ctx.textBaseline="top";
    ctx.fillStyle="rgba(255,255,255,0.5)";

    const labels=6;

    for(let i=0;i<=labels;i++){
        const timestamp=
            thirtyDaysAgo+
            ((now-thirtyDaysAgo)/labels)*i;

        const x=paddingLeft+(graphWidth/labels)*i;
        const date=new Date(timestamp);

        const label=date.toLocaleDateString(undefined,{
            month:"short",
            day:"numeric"
        });

        ctx.fillText(
            label,
            x,
            height-paddingBottom+12
        );
    }

    if(info){
        info.textContent=
            `${history.length} reading${history.length===1?"":"s"} · Last 30 days`;
    }
}

/* =========================================
   CURRENT TIME
========================================= */

function updateCurrentTime(data){
    const el=document.getElementById("currentTime");
    if(!el)return;

    el.textContent=`Updated ${new Date(data.timestamp).toLocaleString()}`;
}

/* =========================================
   API TIME
========================================= */

function updateApiTime(data){
    const el=document.getElementById("apiTime");
    if(!el)return;

    el.textContent=new Date(data.timestamp).toLocaleString();
}

/* =========================================
   READING COUNT
========================================= */

function updateReadingCount(){
    const el=document.getElementById("readingCount");
    if(!el)return;

    el.textContent=playerHistory.length.toLocaleString();
}

/* =========================================
   STATUS
========================================= */

function updateStatus(text){
    const statusText=document.getElementById("statusText");
    if(statusText)statusText.textContent=text;

    const status=document.getElementById("status");

    if(status){
        status.classList.toggle("error",text==="API Error");
    }
}

/* =========================================
   MANUAL REFRESH
========================================= */

function fetchPlayerData(){
    fetchPlayerCount();
}

/* =========================================
   CLEAR HISTORY
========================================= */

function clearHistory(){
    if(!confirm("Are you sure you want to clear all player history?"))return;

    playerHistory=[];
    localStorage.removeItem(STORAGE_KEY);

    updatePlayerStats();
    updateReadingCount();
    updatePlayerGraph();

    const info=document.getElementById("graphInfo");
    if(info)info.textContent="No readings yet";
}

/* =========================================
   INITIALIZE
========================================= */

updatePlayerStats();
updateReadingCount();
updatePlayerGraph();
fetchPlayerCount();

/* =========================================
   AUTO REFRESH
========================================= */

setInterval(fetchPlayerCount,60*1000);

/* =========================================
   RESIZE
========================================= */

window.addEventListener("resize",updatePlayerGraph);
