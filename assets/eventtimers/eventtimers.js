/* =========================================================
ARC RAIDERS — SOLO EVENT TIMER
COMPACT SCHEDULE TRACKER

Everything runs locally.

No API.
No server.
No external event timer.

========================================================= */


/* =========================================================
CONFIG
========================================================= */

const CONFIG = {

    duration:60,

    upcomingMini:3,

    instances:5,

    storage:{
        region:"arcRaidersRegion",
        format:"arcRaidersTimeFormat",
        map:"arcRaidersMap",
        view:"arcRaidersView"
    }

};


/* =========================================================
EVENT SCHEDULE
=========================================================

Add/remove event times here.

Example:

"03:00":"Night Raid"

means the event starts at 3:00 AM.

========================================================= */

const EVENT_SCHEDULE = {

    "Blue Gate":{

        "00:00":"Prospecting Probes",
        "01:00":"Close Scrutiny",
        "02:00":"Husk Graveyard",
        "03:00":"Night Raid",
        "04:00":null,
        "05:00":"Close Scrutiny",
        "06:00":null,
        "07:00":"Locked Gate",
        "08:00":"Matriarch",
        "09:00":"Close Scrutiny",
        "10:00":null,
        "11:00":"Hurricane",
        "12:00":"Locked Gate",
        "13:00":null,
        "14:00":"Husk Graveyard",
        "15:00":"Night Raid",
        "16:00":"Electromagnetic Storm",
        "17:00":"Harvester",
        "18:00":"Locked Gate",
        "19:00":"Locked Gate",
        "20:00":"Night Raid",
        "21:00":"Close Scrutiny",
        "22:00":"Harvester",
        "23:00":"Hurricane"

    },


    "Buried City":{

        "00:00":"Close Scrutiny",
        "01:00":"Night Raid",
        "02:00":null,
        "03:00":null,
        "04:00":"Close Scrutiny",
        "05:00":"Hurricane",
        "06:00":null,
        "07:00":"Bird City",
        "08:00":"Close Scrutiny",
        "09:00":"Night Raid",
        "10:00":"Husk Graveyard",
        "11:00":null,
        "12:00":"Close Scrutiny",
        "13:00":"Hurricane",
        "14:00":null,
        "15:00":null,
        "16:00":"Close Scrutiny",
        "17:00":"Night Raid",
        "18:00":null,
        "19:00":null,
        "20:00":"Bird City",
        "21:00":"Hurricane",
        "22:00":null,
        "23:00":"Uncovered Caches"

    },


    "Dam":{

        "00:00":"Hurricane",
        "01:00":null,
        "02:00":"Close Scrutiny",
        "03:00":null,
        "04:00":"Night Raid",
        "05:00":null,
        "06:00":"Close Scrutiny",
        "07:00":"Prospecting Probes",
        "08:00":"Electromagnetic Storm",
        "09:00":null,
        "10:00":"Harvester",
        "11:00":null,
        "12:00":"Matriarch",
        "13:00":"Prospecting Probes",
        "14:00":"Close Scrutiny",
        "15:00":null,
        "16:00":"Uncovered Caches",
        "17:00":"Close Scrutiny",
        "18:00":"Matriarch",
        "19:00":"Harvester",
        "20:00":null,
        "21:00":"Close Scrutiny",
        "22:00":"Electromagnetic Storm",
        "23:00":"Matriarch"

    },


    "Riven Tides":{

        "00:00":null,
        "01:00":"Beachcombing",
        "02:00":"Lush Blooms",
        "03:00":null,
        "04:00":"Beachcombing",
        "05:00":null,
        "06:00":null,
        "07:00":"Beachcombing",
        "08:00":null,
        "09:00":"Beachcombing",
        "10:00":"Beachcombing",
        "11:00":null,
        "12:00":"Beachcombing",
        "13:00":"Beachcombing",
        "14:00":null,
        "15:00":"Beachcombing",
        "16:00":"Beachcombing",
        "17:00":null,
        "18:00":"Beachcombing",
        "19:00":null,
        "20:00":null,
        "21:00":"Beachcombing",
        "22:00":"Beachcombing",
        "23:00":"Night Raid"

    },


    "Spaceport":{

        "00:00":null,
        "01:00":"Harvester",
        "02:00":"Hurricane",
        "03:00":"Close Scrutiny",
        "04:00":null,
        "05:00":null,
        "06:00":"Hidden Bunker",
        "07:00":"Close Scrutiny",
        "08:00":null,
        "09:00":"Husk Graveyard",
        "10:00":"Uncovered Caches",
        "11:00":"Close Scrutiny",
        "12:00":"Matriarch",
        "13:00":null,
        "14:00":"Hurricane",
        "15:00":"Hidden Bunker",
        "16:00":null,
        "17:00":null,
        "18:00":"Hidden Bunker",
        "19:00":"Close Scrutiny",
        "20:00":"Hidden Bunker",
        "21:00":"Hurricane",
        "22:00":"Night Raid",
        "23:00":"Close Scrutiny"

    },


    "Stella Montis":{

        "00:00":"Night Raid",
        "01:00":"Night Raid",
        "02:00":"Night Raid",
        "03:00":null,
        "04:00":"Night Raid",
        "05:00":null,
        "06:00":null,
        "07:00":"Night Raid",
        "08:00":"Night Raid",
        "09:00":null,
        "10:00":null,
        "11:00":"Night Raid",
        "12:00":"Night Raid",
        "13:00":"Night Raid",
        "14:00":null,
        "15:00":"Night Raid",
        "16:00":"Night Raid",
        "17:00":null,
        "18:00":"Night Raid",
        "19:00":null,
        "20:00":"Night Raid",
        "21:00":"Night Raid",
        "22:00":"Night Raid",
        "23:00":null

    }

};


/* =========================================================
EVENT TIERS
========================================================= */

const EVENT_TIERS = {

    "Close Scrutiny":"major",
    "Electromagnetic Storm":"major",
    "Hidden Bunker":"major",
    "Hurricane":"major",
    "Locked Gate":"major",
    "Night Raid":"major",

    "Beachcombing":"minor",
    "Bird City":"minor",
    "Harvester":"minor",
    "Lush Blooms":"minor",
    "Matriarch":"minor",
    "Uncovered Caches":"minor",
    "Prospecting Probes":"minor",
    "Husk Graveyard":"minor"

};


/* =========================================================
REGIONS
========================================================= */

const REGIONS = {

    NA:{
        name:"North America",
        offset:-3
    },

    EU:{
        name:"Europe",
        offset:0
    },

    SA:{
        name:"South America",
        offset:-2
    },

    ASIA:{
        name:"Asia",
        offset:7
    },

    OCE:{
        name:"Oceania",
        offset:10
    }

};


/* =========================================================
STATE
========================================================= */

const state = {

    region:
        localStorage.getItem(
            CONFIG.storage.region
        ) || "EU",

    format:
        localStorage.getItem(
            CONFIG.storage.format
        ) || "12",

    map:
        localStorage.getItem(
            CONFIG.storage.map
        ) || "All Maps",

    view:
        localStorage.getItem(
            CONFIG.storage.view
        ) || "event"

};


/* =========================================================
DOM
========================================================= */

const $ = selector =>
    document.querySelector(selector);


const els = {

    active:
        $("#activeEvents"),

    upcoming:
        $("#upcomingEvents"),

    mapTabs:
        $("#mapTabs"),

    content:
        $("#scheduleContent"),

    timezone:
        $("#timezoneName"),

    scheduleTimezone:
        $("#scheduleTimezone"),

    footerRegion:
        $("#footerRegion"),

    lastUpdated:
        $("#lastUpdated")

};


/* =========================================================
HELPERS
========================================================= */

function pad(value){

    return String(value).padStart(2,"0");

}


function escapeHTML(value){

    return String(value)
        .replaceAll("&","&amp;")
        .replaceAll("<","&lt;")
        .replaceAll(">","&gt;")
        .replaceAll('"',"&quot;")
        .replaceAll("'","&#039;");

}


/* =========================================================
FORMAT TIME
========================================================= */

function formatTime(date){

    return new Intl.DateTimeFormat(
        undefined,
        {
            timeZone:
                REGION_TIMEZONES[state.region],

            hour:"numeric",
            minute:"2-digit",

            hour12:
                state.format === "12"
        }
    ).format(date);

}

/* =========================================================
FORMAT DATE
========================================================= */

function formatDate(date){

    return new Intl.DateTimeFormat(
        undefined,
        {
            timeZone:
                REGION_TIMEZONES[state.region],

            month:"short",
            day:"numeric",
            year:"numeric"
        }
    ).format(date);

}
/* =========================================================
LOCAL CLOCK
========================================================= */

function updateLocalClock(){

    const now = new Date();

    const time =
        new Intl.DateTimeFormat(
            undefined,
            {
                hour:"numeric",
                minute:"2-digit",
                second:"2-digit",
                hour12:state.format==="12"
            }
        ).format(now);

    const clock =
        document.querySelector("#localClock");

    if(clock){
        clock.textContent = time;
    }

}

/* =========================================================
TIMEZONE
========================================================= */

const REGION_TIMEZONES = {

    NA:"America/Halifax",
    EU:"Europe/Berlin",
    SA:"America/Sao_Paulo",
    ASIA:"Asia/Tokyo",
    OCE:"Australia/Sydney"

};


function getTimezone(){

    return (
        REGION_TIMEZONES[state.region] ||
        "America/Halifax"
    );

}


/* =========================================================
COUNTDOWN
========================================================= */

function formatCountdown(ms){

    ms=Math.max(0,ms);

    const total=
        Math.floor(ms/1000);

    const hours=
        Math.floor(total/3600);

    const minutes=
        Math.floor(
            (total%3600)/60
        );

    const seconds=
        total%60;


    if(hours>0){

        return `${hours}h ${pad(minutes)}m ${pad(seconds)}s`;

    }


    if(minutes>0){

        return `${minutes}m ${pad(seconds)}s`;

    }


    return `${seconds}s`;

}


/* =========================================================
CREATE EVENT
========================================================= */

function createEvent(
    map,
    name,
    date,
    hour
){

    const start =
        new Date(date);

    /*
        EVENT_SCHEDULE is stored using
        Europe as the base schedule.

        Region offsets shift the actual
        server event time.
    */

    const offset =
        REGIONS[state.region]?.offset || 0;


    let regionHour =
        hour + offset;


    /*
        Handle crossing midnight.
    */

    let dayOffset = 0;


    if(regionHour < 0){

        regionHour += 24;
        dayOffset = -1;

    }


    if(regionHour >= 24){

        regionHour -= 24;
        dayOffset = 1;

    }


    start.setDate(
        start.getDate() + dayOffset
    );


    start.setHours(
        regionHour,
        0,
        0,
        0
    );


    const end =
        new Date(
            start.getTime() +
            CONFIG.duration * 60000
        );


    return {

        id:
            `${map}-${name}-${start.getTime()}`,

        map,

        name,

        tier:
            EVENT_TIERS[name] ||
            "minor",

        start,

        end

    };

}


/* =========================================================
BUILD EVENTS
========================================================= */

function buildEvents(
    now=new Date()
){

    const events=[];


    for(
        let day=-1;
        day<=3;
        day++
    ){

        const date=
            new Date(now);

        date.setHours(
            0,
            0,
            0,
            0
        );

        date.setDate(
            date.getDate()+day
        );


        for(
            const map
            of Object.keys(EVENT_SCHEDULE)
        ){

            for(
                const [time,name]
                of Object.entries(
                    EVENT_SCHEDULE[map]
                )
            ){

                if(!name) continue;


                const hour=
                    parseInt(
                        time,
                        10
                    );


                events.push(
                    createEvent(
                        map,
                        name,
                        date,
                        hour
                    )
                );

            }

        }

    }


    return events.sort(
        (a,b)=>
            a.start-b.start
    );

}


/* =========================================================
ACTIVE EVENTS
========================================================= */

function getActiveEvents(now){

    return buildEvents(now)
        .filter(
            event=>
                now>=event.start &&
                now<event.end
        );

}


/* =========================================================
UPCOMING EVENTS
========================================================= */

function getUpcomingEvents(now){

    return buildEvents(now)
        .filter(
            event=>
                event.start>now
        );

}


/* =========================================================
EVENT ICON
========================================================= */

function eventIcon(name){

    const icons={

        "Bird City":"●",
        "Night Raid":"◐",
        "Harvester":"◉",
        "Matriarch":"◆",
        "Beachcombing":"●",
        "Close Scrutiny":"◉",
        "Hurricane":"◌",
        "Lush Blooms":"✦",
        "Hidden Bunker":"◇",
        "Locked Gate":"▣",
        "Uncovered Caches":"◆",
        "Prospecting Probes":"⌁",
        "Husk Graveyard":"◈",
        "Electromagnetic Storm":"⚡"

    };


    return icons[name]||"●";

}


/* =========================================================
MINI EVENT CARD
========================================================= */

function miniEvent(
    event,
    now,
    active=false
){

    const countdown=
        active
            ?formatCountdown(
                event.end-now
            )
            :formatCountdown(
                event.start-now
            );


    return`

        <div class="mini-event ${active?"active":"upcoming"}">

            <div class="mini-icon">
                ${eventIcon(event.name)}
            </div>

            <div class="mini-info">

                <div class="mini-name">
                    ${escapeHTML(event.name)}
                </div>

                <div class="mini-map">
                    ${escapeHTML(event.map)}
                </div>

                <div class="mini-countdown">
                    ${active?"Ends in ":"Starts in "}
                    ${countdown}
                </div>

            </div>

        </div>

    `;

}


/* =========================================================
RENDER LIVE STRIP
========================================================= */

function renderLive(now){

    const active=
        getActiveEvents(now);

    const upcoming=
        getUpcomingEvents(now)
            .slice(
                0,
                CONFIG.upcomingMini
            );


    els.active.innerHTML=
        active.length

            ?active
                .map(
                    event=>
                        miniEvent(
                            event,
                            now,
                            true
                        )
                )
                .join("")

            :`
                <div class="empty">
                    No events are active right now.
                </div>
            `;


    els.upcoming.innerHTML=
        upcoming
            .map(
                event=>
                    miniEvent(
                        event,
                        now,
                        false
                    )
            )
            .join("");

}


/* =========================================================
MAP TABS
========================================================= */

function renderMapTabs(){

    const maps=[
        "All Maps",
        ...Object.keys(EVENT_SCHEDULE)
    ];


    els.mapTabs.innerHTML=
        maps.map(map=>`

            <button
                class="map-tab ${
                    state.map===map
                        ?"active"
                        :""
                }"
                data-map="${escapeHTML(map)}"
                type="button"
            >
                ${escapeHTML(map)}
            </button>

        `)
        .join("");


    els.mapTabs
        .querySelectorAll(".map-tab")
        .forEach(button=>{

            button.addEventListener(
                "click",
                ()=>{

                    state.map=
                        button.dataset.map;


                    localStorage.setItem(
                        CONFIG.storage.map,
                        state.map
                    );


                    renderMapTabs();
                    renderSchedule();

                }
            );

        });

}


/* =========================================================
FILTER EVENTS BY MAP
========================================================= */

function filteredEvents(now){

    let events=
        getUpcomingEvents(now);


    if(state.map!=="All Maps"){

        events=
            events.filter(
                event=>
                    event.map===
                    state.map
            );

    }


    return events;

}


/* =========================================================
GROUP EVENTS BY EVENT NAME
========================================================= */

function groupByEvent(
    now
){

    const events=
        filteredEvents(now);

    const groups=
        new Map();


    for(const event of events){

        const key=
            `${event.name}|${event.map}`;


        if(!groups.has(key)){

            groups.set(
                key,
                {
                    name:event.name,
                    map:event.map,
                    tier:event.tier,
                    events:[]
                }
            );

        }


        groups
            .get(key)
            .events
            .push(event);

    }


    return[
        ...groups.values()
    ];

}


/* =========================================================
NEXT EVENT CARD
========================================================= */

function nextEventCard(
    group,
    now
){

    const next=
        group.events[0];


    if(!next) return "";


    const active=
        now>=next.start &&
        now<next.end;


    const countdown=
        active
            ?next.end-now
            :next.start-now;


    return`

        <div class="
            next-event
            ${active?"active":"upcoming"}
        ">

            <div class="next-top">

                <div>

                    <div class="next-time">

                        ${formatTime(next.start)}
                        –
                        ${formatTime(next.end)}

                    </div>

                    <div class="next-event-label">

                        ${
                            formatDate(
                                next.start
                            )
                        }

                    </div>

                </div>

                <div>

                    <div class="next-label">

                        ${
                            active
                                ?"Ends in"
                                :"Starts in"
                        }

                    </div>

                    <div class="next-countdown">

                        ${
                            formatCountdown(
                                countdown
                            )
                        }

                    </div>

                </div>

            </div>

        </div>

    `;

}


/* =========================================================
EVENT CARD
========================================================= */

function createEventCard(
    group,
    now
){

    const instances=
        group.events
            .slice(
                0,
                CONFIG.instances
            );


    const active=
        instances.find(
            event=>
                now>=event.start &&
                now<event.end
        );


    return`

        <article class="event-card">

            <div class="event-card-header">

                <div class="event-icon">
                    ${eventIcon(group.name)}
                </div>

                <div class="event-title-area">

                    <div class="event-card-name">
                        ${escapeHTML(group.name)}
                    </div>

                    <div class="event-maps">
                        ${escapeHTML(group.map)}
                    </div>

                </div>

                <div class="
                    event-status
                    ${active?"active":"upcoming"}
                ">

                    ${
                        active
                            ?"Active"
                            :"Upcoming"
                    }

                </div>

            </div>


            ${

                active

                    ?nextEventCard(
                        {
                            ...group,
                            events:[
                                active,
                                ...group.events.filter(
                                    e=>e!==active
                                )
                            ]
                        },
                        now
                    )

                    :nextEventCard(
                        group,
                        now
                    )

            }


            <div class="instances">

                <div class="instances-title">
                    Upcoming instances
                </div>


                ${
                    instances
                        .map(
                            event=>
                                instanceRow(
                                    event,
                                    now
                                )
                        )
                        .join("")
                }

            </div>

        </article>

    `;

}


/* =========================================================
INSTANCE ROW
========================================================= */

function instanceRow(
    event,
    now
){

    const active=
        now>=event.start &&
        now<event.end;


    const countdown=
        active
            ?formatCountdown(
                event.end-now
            )
            :formatCountdown(
                event.start-now
            );


    return`

        <div class="
            instance
            ${active?"active":""}
        ">

            <div>

                <div class="instance-time">

                    ${formatTime(event.start)}
                    –
                    ${formatTime(event.end)}

                </div>

                <div class="instance-date">

                    ${formatDate(event.start)}

                </div>

            </div>

            <div class="instance-countdown">

                ${
                    active
                        ?"Now"
                        :countdown
                }

            </div>

        </div>

    `;

}


/* =========================================================
PER EVENT VIEW
========================================================= */

function renderEventView(now){

    const groups=
        groupByEvent(now);


    if(!groups.length){

        els.content.innerHTML=
            `<div class="empty">
                No events found for this map.
            </div>`;

        return;

    }


    els.content.innerHTML=`

        <div class="event-grid">

            ${
                groups
                    .map(
                        group=>
                            createEventCard(
                                group,
                                now
                            )
                    )
                    .join("")
            }

        </div>

    `;

}


/* =========================================================
PER MAP VIEW
========================================================= */

function renderMapView(now){

    const maps=
        state.map==="All Maps"
            ?Object.keys(EVENT_SCHEDULE)
            :[state.map];


    els.content.innerHTML=`

        <div class="map-grid">

            ${
                maps
                    .map(
                        map=>
                            createMapCard(
                                map,
                                now
                            )
                    )
                    .join("")
            }

        </div>

    `;

}


/* =========================================================
MAP CARD
========================================================= */

function createMapCard(
    map,
    now
){

    const events=
        getUpcomingEvents(now)
            .filter(
                event=>
                    event.map===map
            )
            .slice(
                0,
                8
            );


    return`

        <article class="map-card">

            <div class="map-card-header">

                <div class="map-card-name">
                    ${escapeHTML(map)}
                </div>

                <div class="map-card-count">
                    ${events.length} upcoming
                </div>

            </div>


            ${
                events.length

                    ?events
                        .map(
                            event=>
                                mapEventRow(
                                    event,
                                    now
                                )
                        )
                        .join("")

                    :`
                        <div class="empty">
                            No upcoming events.
                        </div>
                    `
            }

        </article>

    `;

}


/* =========================================================
MAP EVENT ROW
========================================================= */

function mapEventRow(
    event,
    now
){

    const active=
        now>=event.start &&
        now<event.end;


    return`

        <div class="
            map-event-row
            ${active?"active":""}
        ">

            <div class="map-row-time">
                ${formatTime(event.start)}
            </div>

            <div class="map-row-name">
                ${escapeHTML(event.name)}
            </div>

            <div class="map-row-countdown">

                ${
                    active
                        ?"ACTIVE"
                        :"IN "+
                        formatCountdown(
                            event.start-now
                        )
                }

            </div>

        </div>

    `;

}


/* =========================================================
TIMELINE VIEW
========================================================= */

function renderTimeline(now){

    let events=
        filteredEvents(now)
            .slice(
                0,
                25
            );


    if(!events.length){

        els.content.innerHTML=
            `<div class="empty">
                No upcoming events.
            </div>`;

        return;

    }


    els.content.innerHTML=`

        <div class="timeline">

            ${
                events
                    .map(
                        event=>
                            timelineRow(
                                event,
                                now
                            )
                    )
                    .join("")
            }

        </div>

    `;

}


/* =========================================================
TIMELINE ROW
========================================================= */

function timelineRow(
    event,
    now
){

    const active=
        now>=event.start &&
        now<event.end;


    const countdown=
        active
            ?formatCountdown(
                event.end-now
            )
            :formatCountdown(
                event.start-now
            );


    return`

        <div class="
            timeline-row
            ${active?"active":""}
        ">

            <div class="timeline-time">

                ${formatTime(event.start)}

            </div>


            <div class="timeline-name">

                ${escapeHTML(event.name)}

            </div>


            <div class="timeline-map">

                ${escapeHTML(event.map)}

            </div>


            <div class="timeline-countdown">

                ${
                    active
                        ?"ENDS "
                        :"IN "
                }

                ${countdown}

            </div>

        </div>

    `;

}


/* =========================================================
RENDER SCHEDULE
========================================================= */

function renderSchedule(){

    const now=
        new Date();


    if(state.view==="event"){

        renderEventView(now);

    }
    else if(state.view==="map"){

        renderMapView(now);

    }
    else{

        renderTimeline(now);

    }

}


/* =========================================================
TIME BUTTONS
========================================================= */

document
    .querySelectorAll(".time-btn")
    .forEach(button=>{

        button.addEventListener(
            "click",
            ()=>{

                state.format=
                    button.dataset.format;


                localStorage.setItem(
                    CONFIG.storage.format,
                    state.format
                );


                document
                    .querySelectorAll(
                        ".time-btn"
                    )
                    .forEach(btn=>
                        btn.classList.toggle(
                            "active",
                            btn===button
                        )
                    );


                update();

            }
        );

    });


/* =========================================================
REGION BUTTONS
========================================================= */

document
    .querySelectorAll(".region-btn")
    .forEach(button=>{

        button.addEventListener(
            "click",
            ()=>{

                state.region=
                    button.dataset.region;


                localStorage.setItem(
                    CONFIG.storage.region,
                    state.region
                );


                updateRegion();

            }
        );

    });


/* =========================================================
VIEW BUTTONS
========================================================= */

document
    .querySelectorAll(".view-btn")
    .forEach(button=>{

        button.addEventListener(
            "click",
            ()=>{

                state.view=
                    button.dataset.view;


                localStorage.setItem(
                    CONFIG.storage.view,
                    state.view
                );


                document
                    .querySelectorAll(
                        ".view-btn"
                    )
                    .forEach(btn=>
                        btn.classList.toggle(
                            "active",
                            btn===button
                        )
                    );


                renderSchedule();

            }
        );

    });


/* =========================================================
REGION UI
========================================================= */

function updateRegion(){

    document
        .querySelectorAll(".region-btn")
        .forEach(button => {

            button.classList.toggle(
                "active",
                button.dataset.region ===
                state.region
            );

        });


    const region =
        REGIONS[state.region] ||
        REGIONS.EU;


    els.footerRegion.textContent =
        region.name;


    els.timezone.textContent =
        getTimezone();


    els.scheduleTimezone.innerHTML=
        `Times shown in local <span id="localClock">--:--:--</span>`;

}

/* =========================================================
RESTORE TIME UI
========================================================= */

function restoreTime(){

    document
        .querySelectorAll(
            ".time-btn"
        )
        .forEach(button=>{

            button.classList.toggle(
                "active",
                button.dataset.format===
                    state.format
            );

        });

}


/* =========================================================
RESTORE VIEW UI
========================================================= */

function restoreView(){

    document
        .querySelectorAll(
            ".view-btn"
        )
        .forEach(button=>{

            button.classList.toggle(
                "active",
                button.dataset.view===
                    state.view
            );

        });

}


/* =========================================================
FULL UPDATE
========================================================= */

function update(){

    const now=
        new Date();


    renderLive(now);

    renderSchedule();

    updateRegion();

    updateLocalClock();

    els.lastUpdated.textContent=
        "Updated just now";

}

/* =========================================================
INITIALIZE
========================================================= */

if(
    !EVENT_SCHEDULE[state.map] &&
    state.map!=="All Maps"
){

    state.map="All Maps";

    localStorage.setItem(
        CONFIG.storage.map,
        state.map
    );

}


restoreTime();
restoreView();
renderMapTabs();
update();


/* =========================================================
LIVE TIMER
========================================================= */

setInterval(
    update,
    1000
);
