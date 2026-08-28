const scrappyData=[
{id:"s2",name:"Scrappy Lv. 2",info:"Harvest: 5-7x materials",subTasks:[{id:"s2_1",label:"Dog Collar",amount:1,location:"Buried City"}]},
{id:"s3",name:"Scrappy Lv. 3",info:"Increased speed",subTasks:[{id:"s3_1",label:"Lemon",amount:3,location:"Dam (Domes)"},{id:"s3_2",label:"Apricot",amount:3,location:"Dam"}]},
{id:"s4",name:"Scrappy Lv. 4",info:"Loot bonus",subTasks:[{id:"s4_1",label:"Prickly Pear",amount:6,location:"Dam"},{id:"s4_2",label:"Olive",amount:6,location:"Dam"},{id:"s4_3",label:"Cat Basket",amount:1,location:"Buried City"}]},
{id:"s5",name:"Scrappy Lv. 5",info:"Max: 15x",subTasks:[{id:"s5_1",label:"Mushroom",amount:12,location:"Dam (Greenhouses)"},{id:"s5_2",label:"Apricot",amount:12,location:"Dam"},{id:"s5_3",label:"Pillow",amount:3,location:"Residential Areas"}]}
];

const workshopData=[
{level:1,title:"Gunsmith Level 1",upgrades:[{id:"gun1",name:"Gunsmith Lv. 1",priority:"high",subTasks:[{id:"gun1_1",label:"Metal Parts",amount:20,location:"Everywhere (Buy from Celeste)"},{id:"gun1_2",label:"Rubber Parts",amount:30,location:"Everywhere (Buy from Celeste)"}]}]},
{level:2,title:"Gunsmith Level 2",upgrades:[{id:"gun2",name:"Gunsmith Lv. 2",priority:"high",subTasks:[{id:"gun2_1",label:"Rusted Tools",amount:3,location:"Red Boxes (Buried City, Dam)"},{id:"gun2_2",label:"Mechanical Components",amount:5,location:"Everywhere (Buy from Celeste)"},{id:"gun2_3",label:"Wasp Drivers",amount:8,location:"Wasp Arc"}]}]},
{level:3,title:"Gunsmith Level 3",upgrades:[{id:"gun3",name:"Gunsmith Lv. 3",priority:"high",subTasks:[{id:"gun3_1",label:"Rusted Gear",amount:3,location:"T3 Loot (Blue Gate)"},{id:"gun3_2",label:"Advanced Mechanical Components",amount:5,location:"T3 / Refiner Lv. 2"},{id:"gun3_3",label:"Firing Core (Sentinel)",amount:4,location:"T3 Sentinels"}]}]},

{level:1,title:"Gear Level 1",upgrades:[{id:"gear1",name:"Gear Lv. 1",priority:"high",subTasks:[{id:"gear1_1",label:"Plastic",amount:25,location:"Everywhere (Buy from Celeste)"},{id:"gear1_2",label:"Fabric",amount:5,location:"Medical Areas"},]}]},
{level:2,title:"Gear Level 2",upgrades:[{id:"gear2",name:"Gear Lv. 2",priority:"high",subTasks:[{id:"gear2_1",label:"Power Cables",amount:3,location:"Offices (Buried City)"},{id:"gear2_2",label:"Electrical Components",amount:5,location:"Everywhere (Buyable)"},{id:"gear2_3",label:"Hornet Drivers",amount:5,location:"Hornet Arc"}]}]},
{level:3,title:"Gear Level 3",upgrades:[{id:"gear3",name:"Gear Lv. 3",priority:"high",subTasks:[{id:"gear3_1",label:"Industrial Battery",amount:3,location:"T3 Loot"},{id:"gear3_2",label:"Advanced Electrical Components",amount:5,location:"T3 / Refiner"},{id:"gear3_3",label:"Cell (Bastion)",amount:6,location:"T3 Bastions"}]}]},

{level:1,title:"Medical Lab Level 1",upgrades:[{id:"med1",name:"Medical Lab Lv. 1",priority:"medium",subTasks:[{id:"gear1_1",label:"Arc Alloy",amount:8,location:"Looting Arc"},{id:"gear1_2",label:"Fabric",amount:8,location:"Medical Areas"}]}]},
{level:2,title:"Medical Lab Level 2",upgrades:[{id:"med2",name:"Medical Lab Lv. 2",priority:"medium",subTasks:[{id:"med2_1",label:"Cracked Bioscanners",amount:2,location:"Medical Areas"},{id:"med2_2",label:"Durable Cloth",amount:5,location:"T2 Fabric Containers"},{id:"med2_3",label:"Tick Pods",amount:8,location:"Tick Arc"}]}]},
{level:3,title:"Medical Lab Level 3",upgrades:[{id:"med3",name:"Medical Lab Lv. 3",priority:"medium",subTasks:[{id:"med3_1",label:"Rusted Medical Kit",amount:3,location:"Medical Areas"},{id:"med3_2",label:"Antiseptic",amount:8,location:"T3 / Refiner (Buyable)"},{id:"med3_3",label:"Surveyor Vault",amount:5,location:"T3 Surveyors"}]}]},

{level:1,title:"Explosives Level 1",upgrades:[{id:"exp1",name:"Explosives Lv. 1",priority:"low",subTasks:[{id:"exp1_1",label:"Chemicals",amount:50,location:"Everywhere (Buy from Celeste)"},{id:"exp1_2",label:"Arc Alloy",amount:6,location:"Looting Arc"},]}]},
{level:2,title:"Explosives Level 2",upgrades:[{id:"exp2",name:"Explosives Lv. 2",priority:"low",subTasks:[{id:"exp2_1",label:"Synthesized Fuel",amount:3,location:"Industrial Areas, Garages"},{id:"exp2_2",label:"Raw Explosives",amount:5,location:"Everywhere (Buyable)"},{id:"exp2_3",label:"Pop Triggers",amount:5,location:"Pop Arc"}]}]},
{level:3,title:"Explosives Level 3",upgrades:[{id:"exp3",name:"Explosives Lv. 3",priority:"low",subTasks:[{id:"exp3_1",label:"Lab Reagents",amount:3,location:"T3 Labs"},{id:"exp3_2",label:"Explosive Compound",amount:5,location:"T3 / Refiner"},{id:"exp3_3",label:"Driver (Rocketeer)",amount:3,location:"T3 Rocketeers"}]}]},

{level:1,title:"Utility Level 1",upgrades:[{id:"util1",name:"Utility Lv. 1",priority:"medium",subTasks:[{id:"util1_1",label:"Plastic",amount:50,location:"Everywhere (Buy from Celeste)"},{id:"util1_2",label:"Arc Alloy",amount:6,location:"Looting Arc"},]}]},
{level:2,title:"Utility Level 2",upgrades:[{id:"util2",name:"Utility Lv. 2",priority:"medium",subTasks:[{id:"util2_1",label:"Damaged Heat Sinks",amount:2,location:"Offices, PCs"},{id:"util2_2",label:"Electrical Components",amount:5,location:"Everywhere"},{id:"util2_3",label:"Snitch Scanners",amount:6,location:"Snitch Arc"}]}]},
{level:3,title:"Utility Level 3",upgrades:[{id:"util3",name:"Utility Lv. 3",priority:"medium",subTasks:[{id:"util3_1",label:"Burnt Motherboard",amount:3,location:"T3 Tech Areas"},{id:"util3_2",label:"Advanced Electrical Components",amount:5,location:"T3 / Refiner"},{id:"util3_3",label:"Impulse Unit (Leaper)",amount:4,location:"T3 Leapers"}]}]},

{level:1,title:"Refiner Level 1",upgrades:[{id:"ref1",name:"Refiner Lv. 1",priority:"high",subTasks:[{id:"ref1_1",label:"Metal Parts",amount:60,location:"Everywhere"},{id:"ref1_2",label:"Arc Powercell",amount:5,location:"Industrial Areas"},]}]},
{level:2,title:"Refiner Level 2",upgrades:[{id:"ref2",name:"Refiner Lv. 2",priority:"high",subTasks:[{id:"ref2_1",label:"Toasters",amount:3,location:"Kitchens"},{id:"ref2_2",label:"ARC Motion Cores",amount:5,location:"Everywhere"},{id:"ref2_3",label:"Fireball Burners",amount:8,location:"Fireball Arc"}]}]},
{level:3,title:"Refiner Level 3",upgrades:[{id:"ref3",name:"Refiner Lv. 3",priority:"high",subTasks:[{id:"ref3_1",label:"Motor",amount:3,location:"T3 Industrial Areas"},{id:"ref3_2",label:"ARC Circuit",amount:10,location:"T3 / Refiner"},{id:"ref3_3",label:"Cell (Bombardier)",amount:6,location:"T3 Bombardiers"}]}]}
];

const blueprintData=[

/* =========================
   GRIPS
========================= */
{id:"bp_grip",name:"Grips",icon:"🔧",image:"grips",subTasks:[
{id:"bp_ag2",label:"Angled Grip II",location:"Residential Containers"},
{id:"bp_ag3",label:"Angled Grip III",location:"Electromagnetic Storm / Locked Gate / Night Raid"},
{id:"bp_vg2",label:"Vertical Grip II",location:"Residential Containers"},
{id:"bp_vg3",label:"Vertical Grip III",location:"Electromagnetic Storm / Locked Gate / Night Raid"},
]},

/* =========================
   MUZZLES
========================= */
{id:"bp_muzzle",name:"Muzzles",icon:"🔩",image:"muzzles",subTasks:[
{id:"bp_cb2",label:"Compensator II",location:"Residential Containers"},
{id:"bp_cb3",label:"Compensator III",location:"Electromagnetic Storm / Locked Gate / Night Raid"},
{id:"bp_mb2",label:"Muzzle Brake II",location:"Residential Containers"},
{id:"bp_mb3",label:"Muzzle Brake III",location:"Electromagnetic Storm / Locked Gate / Night Raid"},
{id:"bp_sb",label:"Silencer I",location:"Residential Containers"},
{id:"bp_sb2",label:"Silencer II",location:"Residential Containers"},
]},

/* =========================
   BARRELS 
========================= */
{id:"bp_barrel",name:"Barrels",icon:"⚙️",image:"barrels",subTasks:[
{id:"bp_eb2",label:"Extended Barrel II",location:"All Maps / Trials"},
{id:"bp_eb3",label:"Extended Barrel III",location:"Electromagnetic Storm / Locked Gate / Night Raid"},
{id:"bp_splitter",label:"Anvil Splitter",location:"Blueprint Loot Pool"},
]},

/* =========================
    STOCKS
========================= */
{id:"bp_stock",name:"Stocks",icon:"⚙️",image:"stocks",subTasks:[
{id:"bp_lightstock",label:"Lightweight Stock",location:"Electromagnetic Storm / Locked Gate / Night Raid"},
{id:"bp_padstock",label:"Padded Stock",location:"Electromagnetic Storm / Locked Gate / Night Raid / Hidden Bunker"},
{id:"bp_ss2",label:"Stable Stock II",location:"Residential Containers"},
{id:"bp_ss3",label:"Stable Stock III",location:"Electromagnetic Storm / Locked Gate / Night Raid"},
]},
/* =========================
   MAGAZINES
========================= */
{id:"bp_mag",name:"Magazines",icon:"🎯",image:"magazines",subTasks:[
{id:"bp_elm2",label:"Extended Light Mag II",location:"Residential Containers"},
{id:"bp_elm3",label:"Extended Light Mag III",location:"Electromagnetic Storm / Locked Gate / Night Raid"},
{id:"bp_emm2",label:"Extended Medium Mag II",location:"Residential Containers / Night Raid"},
{id:"bp_emm3",label:"Extended Medium Mag III",location:"Electromagnetic Storm / Locked Gate / Night Raid"},
{id:"bp_esm2",label:"Extended Shotgun Mag II",location:"Residential Containers"},
{id:"bp_esm3",label:"Extended Shotgun Mag III",location:"Electromagnetic Storm / Locked Gate / Night Raid"},
]},

/* =========================
   SHOTGUN MODS
========================= */
{id:"bp_shotgun",name:"Shotgun Mods",icon:"💥",image:"shotgun_mods",subTasks:[
{id:"bp_choke2",label:"Shotgun Choke II",location:"Residential Containers"},
{id:"bp_choke3",label:"Shotgun Choke III",location:"Electromagnetic Storm / Locked Gate / Night Raid"},
{id:"bp_ss",label:"Shotgun Silencer",location:"Electromagnetic Storm / Locked Gate / Night Raid / Hidden Bunker"},
]},

/* =========================
   GUN PARTS
========================= */
{id:"bp_parts",name:"Gun Parts",icon:"🔧",image:"gun_parts",subTasks:[
{id:"bp_lightparts",label:"Light Gun Parts",location:"Raider Containers"},
{id:"bp_mediumparts",label:"Medium Gun Parts",location:"Raider Containers"},
{id:"bp_heavyparts",label:"Heavy Gun Parts",location:"Raider Containers"},
{id:"bp_complexparts",label:"Complex Gun Parts",location:"Security Containers"},
]},
/* =========================
   WEAPONS
========================= */
{id:"bp_bettina",name:"Weapons",icon:"🔫",image:"weapons",subTasks:[
{id:"bp_bet",label:"Bettina",location:"Raider Containers / Trials"},
{id:"bp_anv",label:"Anvil",location:"Raider Containers / Trials"},
{id:"bp_bur",label:"Burletta",location:"Quest: Industrial Espionage"},
{id:"bp_ilt",label:"Il Toro",location:"Raider Containers / Trials"},
{id:"bp_ven",label:"Venator",location:"Raider Containers / Trials"},
{id:"bp_tor",label:"Torrente",location:"Raider Containers / Trials"},
{id:"bp_osp",label:"Osprey",location:"Raider Containers / Trials"},
{id:"bp_bob",label:"Bobcat",location:"Locked Gate / Hurricane"},
{id:"bp_canto",label:"Canto",location:"Hurricane / First Wave Cache"},
{id:"bp_temp",label:"Tempest",location:"Night Raid / Hurricane"},
{id:"bp_vul",label:"Vulcano",location:"Hidden Bunker / Hurricane"},
{id:"bp_eq",label:"Equalizer",location:"Harvester Event"},
{id:"bp_jup",label:"Jupiter",location:"Harvester Event"},
{id:"bp_hull",label:"Hullcracker",location:"Quest: The Major's Footlocker"},
{id:"bp_aph",label:"Aphelion",location:"Stella Montis"},
{id:"bp_dol",label:"Dolabra",location:"Close Scrutiny"},
{id:"bp_deadline",label:"Deadline",location:"Stella Montis"},
{id:"bp_rascal",label:"Rascal",location:"Raider Containers / Trials"},
{id:"bp_show",label:"Showstopper",location:"Industrial Containers"},
{id:"bp_trail",label:"Trailblazer",location:"Stella Montis"},
{id:"bp_wolf",label:"Wolfpack",location:"Night Raid"},
]},
/* =========================
   GRENADES & EXPLOSIVES
========================= */
{id:"bp_explosives",name:"Gadgets & Explosives",icon:"💣",image:"gadgets_explosives",subTasks:[
{id:"bp_blaze",label:"Blaze Grenade",location:"Industrial Containers"},
{id:"bp_jolt",label:"Jolt Mine",location:"Industrial Containers"},
{id:"bp_exmine",label:"Explosive Mine",location:"Industrial Containers"},
{id:"bp_gas",label:"Gas Mine",location:"Stella Montis"},
{id:"bp_pulse",label:"Pulse Mine",location:"Stella Montis"},
{id:"bp_gas_special",label:"Gas Mine",location:"Stella Montis"},
{id:"bp_seeker",label:"Seeker Grenade",location:"Stella Montis"},
{id:"bp_smoke",label:"Smoke Grenade",location:"Residential Containers"},
{id:"bp_tag",label:"Tagging Grenade",location:"Electrical Containers"},
{id:"bp_trigger",label:"Trigger 'Nade",location:"Quest: Sparks Fly"},
{id:"bp_lure",label:"Lure Grenade",location:"Quest: Greasing Her Palms"},
{id:"bp_deadline",label:"DeadLine",location:"Stella Montis"},
]},

/* =========================
   QUICK USE
========================= */
{id:"bp_quick",name:"Quick Use",icon:"🎒",image:"quick_use",subTasks:[
{id:"bp_remote",label:"Remote Raider Flare",location:"Electrical Containers"},
{id:"bp_crash",label:"Crash Mat",location:"Riven Tides"},
{id:"bp_white",label:"White Flag",location:"Riven Tides"},
{id:"bp_red",label:"Red Light Stick",location:"Anywhere"},
{id:"bp_green",label:"Green Light Stick",location:"Anywhere"},
{id:"bp_yellow",label:"Yellow Light Stick",location:"Anywhere"},
{id:"bp_blue",label:"Blue Light Stick",location:"Anywhere"},
{id:"bp_powered",label:"Powered Descender",location:"Riven Tides"},
{id:"bp_vita_shot",label:"Vita Shot",location:"Medical Containers / ARC Surveyors"},
{id:"bp_vita_spray",label:"Vita Spray",location:"Quest: Worth Your Salt / Medical Containers"},
{id:"bp_snap",label:"Snap Hook",location:"Electromagnetic Storm / Trophy Reward"},
]},

/* =========================
   AUGMENTS
========================= */
{id:"bp_augments",name:"Augments",icon:"🛡️",image:"augments",subTasks:[
{id:"bp_combat_ag",label:"Combat Mk. 3 (Aggressive)",location:"Medical / Security Containers"},
{id:"bp_combat_fl",label:"Combat Mk. 3 (Flanking)",location:"Medical / Security Containers"},
{id:"bp_loot_safe",label:"Looting Mk. 3 (Safekeeper)",location:"Medical / Security Containers / Metal Crates"},
{id:"bp_loot_surv",label:"Looting Mk. 3 (Survivor)",location:"Medical / Security Containers / Metal Crates"},
{id:"bp_tac_def",label:"Tactical Mk. 3 (Defensive)",location:"Medical / Security Containers / ARC Surveyors"},
{id:"bp_tac_heal",label:"Tactical Mk. 3 (Healing)",location:"Medical / Security Containers"},
{id:"bp_tac_rev",label:"Tactical Mk. 3 (Revival)",location:"Medical / Security Containers"},
{id:"bp_tac_smoke",label:"Tactical Mk. 3 (Smoke)",location:"Blueprint Loot Pool"},
]},

/* =========================
   MEDICAL
========================= */
{id:"bp_medical",name:"Medical",icon:"⚕️",image:"medical",subTasks:[
{id:"bp_defib",label:"Defibrillator",location:"Medical Containers"},
]},

/* =========================
   UTILITIES
========================= */
{id:"bp_utility",name:"Utility",icon:"⚡",image:"utility",subTasks:[
{id:"bp_barricade",label:"Barricade Kit",location:"Electrical Containers"},
{id:"bp_surge",label:"Surge Coil",location:"Electromagnetic Storm"},
{id:"bp_fireworks",label:"Fireworks Box",location:"Cold Snap / Test Case Quest"},
]}

];

const enemyData=[
{name:"Snitch",tier:"T1",health:"158 ",xp:"100 + 200",desc:"ABSOLUTE PRIORITY! Alerts all robots. Red reticle = active alert.",weakness:"Fragile - KILL BEFORE ALERT (3-5 sec)",drop:"Scout Scanners (1), Cell, Alloy",usage:"Utility Lv. 2 (6x required)"},
{name:"Wasp",tier:"T1",health:"110 ",xp:"100 + 200",desc:"Small agile flying drone. Patrols in swarms. Fast, weak attacks.",weakness:"Red rear thrusters (unarmored)",drop:"Wasp Drivers (1-2), ARC Alloy",usage:"Gunsmith Lv. 2 (8x required)"},
{name:"Tick",tier:"T1",health:"10 ",xp:"50 + 100",desc:"Ground explosive robot. VERY DANGEROUS IN GROUPS. Explodes on contact/being shot.",weakness:"Explodes when shot - KEEP 5m+ DISTANCE",drop:"Tick Pods (1), Alloy",usage:"Medical Lab Lv. 2 (8x required)"},
{name:"Turret",tier:"T1",health:"80 ",xp:"100 + 150",desc:"Fixed automatic turret. Rotates 180°. Fast, accurate fire.",weakness:"Rear (no defense) or support legs",drop:"Turret Components (1), Electronics",usage:"Weapon modification crafting"},
{name:"Sentinel",tier:"T2",health:"300 ",xp:"200 + 300",desc:"Heavy bipedal robot. GOOD LOOT/DIFFICULTY RATIO. Slow, powerful attacks.",weakness:"Legs (immobilize) then central body",drop:"Firing Core (1), Advanced Components",usage:"Gunsmith Lv. 3 (4x required)"},
{name:"Fireball",tier:"T2",health:"20 ",xp:"100 + 100",desc:"Launches flaming projectiles. Gas canister visible on its back.",weakness:"Gas canister (massive explosion)",drop:"Fireball Burners (1-2), Cell",usage:"Refiner Lv. 2 (8x required)"},
{name:"Pop",tier:"T2",health:"20 ",xp:"50 + 100",desc:"Jumps for explosive close-range attacks. Predictable pattern.",weakness:"Vulnerable while jumping (airborne)",drop:"Pop Triggers (1), Cell, Explosives",usage:"Explosives Lv. 2 (5x required)"},
{name:"Hornet",tier:"T2",health:"200 ",xp:"150 + 250",desc:"Armored drone with stunning electric projectiles. Slower than Wasp.",weakness:"Thrusters (front armored, rear vulnerable)",drop:"Hornet Drivers (1-2), Energy Cell",usage:"Gear Lv. 2 (5x required)"},
{name:"Surveyor",tier:"T2",health:"257 ",xp:"200 + 400",desc:"Spherical rolling robot. Exposes core during transmission (5-8 sec).",weakness:"Core exposed during transmission",drop:"Surveyor Chest (1), Cell, Alloy",usage:"Medical Lab Lv. 3 (5x required)"},
{name:"Shredder",tier:"T2+",health:"480 ",xp:"200 + 250",desc:"Heavy hovering ARC that unleashes devastating shrapnel attacks. Dangerous in close quarters.",weakness:"Rear thrusters / turbine and exposed orange core",drop:"Shredder Gyro (1), ARC Alloy, Mechanical Components",usage:"Trophy Display (5x required)"},
{name:"Firefly",tier:"T2+",health:"200 ",xp:"150 + 250",desc:"Heavily armored flying ARC equipped with a powerful flamethrower. Hunts Raiders and forces them from cover.",weakness:"Yellow fuel tank and thrusters",drop:"Firefly Burner (1), ARC Performance Steel, ARC Coolant",usage:"Trailblazer Grenades"},
{name:"Comet",tier:"T2+",health:"150 ",xp:"100 + 200",desc:"Fast armored explosive sphere that charges Raiders and self-destructs.",weakness:"Exposed core when armor opens during its charge",drop:"Comet Igniter (1), ARC Coolant, ARC Thermo Lining",usage:"Weather Monitor System"},
{name:"Bastion",tier:"T3",health:"2,050 ",xp:"500 + 500",desc:"Quadrupedal tank with frontal shield (80% absorption). Slow rotation.",weakness:"Flank it to hit the rear (no shield)",drop:"Bastion Cell (1), Advanced Electrical Components",usage:"Gear Lv. 3 (6x required)"},
{name:"Leaper",tier:"T3",health:"1,100 ",xp:"500 + 800",desc:"Large long-distance jumper. Kinetic impact on landing (5m area).",weakness:"Leg joints and front eye",drop:"Impulse Unit (1), Advanced Components",usage:"Utility Lv. 3 (4x required)"},
{name:"Bombardier",tier:"T3",health:"2,670 ",xp:"500 + 500",desc:"Flying artillery. Long-range indirect fire. Stays at a distance.",weakness:"Rear plate and joints",drop:"Bombardier Cell (1), Advanced Components",usage:"Refiner Lv. 3 (6x required)"},
{name:"Rocketeer",tier:"T3",health:"1,100 ",xp:"500 + 200",desc:"Heavy flying unit with rocket launcher. Devastating volleys. Very mobile.",weakness:"Thrusters (requires heavy ammunition)",drop:"Rocketeer Driver (1), Advanced Components",usage:"Explosives Lv. 3 (3x required)"},
{name:"Vaporizer",tier:"T3+",health:"1500 ",xp:"500 + 600 + 500",desc:"Large airborne ARC with a devastating laser that leaves burning fire behind. Uses an energy shield that blocks projectile damage.",weakness:"Thrusters to reduce mobility, then underside core when exposed",drop:"Vaporizer Regulator (1), Advanced ARC Powercell, ARC Alloy, Electrical Components",usage:"Dolabra (2x required), Expedition 4 (3x required)"},
{name:"Turbine",tier:"T3+",health:"4,000 ",xp:"700 + 700 + 200",desc:"Massive airborne ARC protected by heavy armor. Fires cluster lightning missiles and deploys mines before landing.",weakness:"Open landing gear — spinning weak points are exposed when grounded",drop:"Turbine Compressor (1), Advanced ARC Powercell, Launcher Ammo, Medium Gun Parts",usage:"Expedition 4 (5x required)"},
{name:"Queen",tier:"T4 BOSS",health:"23,000 ",xp:"1000 + 1000 + 500",desc:"FINAL BOSS. Massive six-legged ARC guardian with mortar fire, laser attacks, ground slam, and EMP pulse.",weakness:"Core and leg joints",drop:"Queen Reactor (1), Magnetic Accelerator, Complex Gun Parts, Advanced ARC Powercell, ARC Alloy",usage:"Ultimate challenge - Exceptional loot"},
{name:"Matriarch",tier:"T4 BOSS",health:"23,000 ",xp:"1000 + 1000 + 500",desc:"Colossal ARC boss with heavy armor, missile swarms, gas grenades, flashbangs, energy shield, and the ability to summon ARC reinforcements.",weakness:"Central core and leg joints",drop:"Matriarch Reactor (1), Magnetic Accelerator, Complex Gun Parts, ARC Alloy, Advanced ARC Powercell",usage:"Aphelion Rifle (1x required)"},
];
const containerData=[
// =========================
// ARC CONTAINERS
// =========================
{name:"Assessor",contains:"ARC Components, Electronics",icon:"🤖",location:"ARC-related areas",desc:"Destroyed ARC unit that can be searched for components.",usage:"ARC Materials"},
{name:"Courier",contains:"ARC Components, Electronics",icon:"🤖",location:"ARC-related areas",desc:"Destroyed Courier ARC unit.",usage:"ARC Materials"},
{name:"BaronHusk",contains:"ARC Components, Electronics",icon:"🤖",location:"ARC-related areas",desc:"Destroyed Baron ARC husk.",usage:"ARC Materials"},
{name:"DeforesterHusk",contains:"ARC Components, Electronics",icon:"🤖",location:"ARC-related areas",desc:"Destroyed Deforester ARC husk.",usage:"ARC Materials"},
{name:"Harvester",contains:"ARC Components, Electronics",icon:"🤖",location:"Condition-dependent areas",desc:"Large ARC machine that can provide valuable components.",usage:"ARC Materials"},
{name:"Probe",contains:"ARC Components, Electronics",icon:"📡",location:"ARC-related areas",desc:"ARC Probe container.",usage:"ARC Materials"},
{name:"RocketeerHusk",contains:"ARC Components, Electronics",icon:"🚀",location:"ARC-related areas",desc:"Destroyed Rocketeer ARC husk.",usage:"ARC Materials"},
{name:"WaspHusk",contains:"ARC Components, Electronics",icon:"🛸",location:"ARC-related areas",desc:"Destroyed Wasp ARC husk.",usage:"ARC Materials"},
// =========================
// CONDITION / SPECIAL
// =========================
{name:"FirstWaveCache",contains:"High-value mixed loot",icon:"📦",location:"Condition-dependent",desc:"Special cache associated with First Wave conditions.",usage:"Rare Loot"},
{name:"RaiderCache",contains:"Weapons, Ammo, Components",icon:"🎒",location:"Condition-dependent areas",desc:"Cache left behind by Raiders.",usage:"Weapons / Ammo / Components"},
{name:"WickerBasket",contains:"Fruits, Food Items",icon:"🧺",location:"Residential / condition areas",desc:"Basket containing food and seasonal items.",usage:"Scrappy / Food"},
{name:"BirdNest",contains:"Food, Trinkets",icon:"🪺",location:"Condition-dependent areas",desc:"Small nest container.",usage:"Food / Trinkets"},
// =========================
// RAIDER CONTAINERS
// =========================
{name:"AmmoCase",contains:"Ammo",icon:"📦",location:"Military / Raider areas",desc:"Military ammunition container.",usage:"Ammunition"},
{name:"Backpack",contains:"Mixed Raider Loot",icon:"🎒",location:"Raider areas",desc:"Backpack left behind by a Raider.",usage:"Weapons / Components / Items"},
{name:"GrenadeTube",contains:"Grenades / Explosives",icon:"💣",location:"Raider / military areas",desc:"Tube-style container for explosive equipment.",usage:"Explosives"},
{name:"MedicalBag",contains:"Medical Supplies",icon:"🩺",location:"Medical / Raider areas",desc:"Raider medical bag containing medical supplies.",usage:"Medical Consumables"},
{name:"WeaponCase",contains:"Weapons, Ammo, Weapon Mods",icon:"🔫",location:"Military / Raider areas",desc:"Hard weapon storage case.",usage:"Weapons / Mods / Ammo"},
// =========================
// SECURITY CONTAINERS
// =========================
{name:"BlackCrate",contains:"High-value Security Loot",icon:"⬛",location:"Security areas, Stella Montis, Blue Gate",desc:"Black security crate found in restricted areas.",usage:"Rare Loot"},
{name:"BoxLocker",contains:"High-value Security Loot",icon:"🔐",location:"Security areas, Blue Gate, Stella Montis",desc:"Locked security storage container.",usage:"Rare Loot"},
// =========================
// NORMAL CONTAINERS
// =========================
{name:"Android",contains:"Mixed Loot",icon:"🤖",location:"Various locations",desc:"Searchable Android unit.",usage:"General Loot"},
{name:"BeigeMultiDrawers",contains:"Mixed Loot",icon:"🗄️",location:"Industrial / office areas",desc:"Beige multi-drawer storage unit.",usage:"General Loot"},
{name:"BlueCabinet",contains:"Mixed Loot",icon:"🗄️",location:"Various locations",desc:"Blue storage cabinet.",usage:"General Loot"},
{name:"BlueMultiDrawers",contains:"Mixed Loot",icon:"🗄️",location:"Various locations",desc:"Blue multi-drawer storage unit.",usage:"General Loot"},
{name:"BoxLocker",contains:"Security Loot",icon:"🔒",location:"Security areas",desc:"Security storage locker.",usage:"Security Loot"},
{name:"BreakerBox",contains:"Electrical Components",icon:"⚡",location:"Industrial / technical areas",desc:"Electrical breaker box.",usage:"Utility / Electrical Materials"},
{name:"BrokenFridge",contains:"Food, Household Items",icon:"🧊",location:"Residential areas",desc:"Broken refrigerator.",usage:"Scrappy / Food"},
{name:"BusRearTrunk",contains:"Mixed Loot",icon:"🚌",location:"Buses / streets",desc:"Searchable rear section of a bus.",usage:"General Loot"},
{name:"BusSideTrunk",contains:"Mixed Loot",icon:"🚌",location:"Buses / streets",desc:"Side storage compartment on a bus.",usage:"General Loot"},
{name:"CapsuleDeliveryTerminal",contains:"Delivery Items",icon:"📦",location:"Delivery areas",desc:"Delivery terminal containing stored goods.",usage:"General Loot"},
{name:"CarHood",contains:"Vehicle Components",icon:"🚗",location:"Roads / parking areas",desc:"Searchable vehicle hood.",usage:"Mechanical Materials"},
{name:"CarToolCabinet",contains:"Tools, Mechanical Parts",icon:"🧰",location:"Garages / vehicle areas",desc:"Tool cabinet associated with vehicles.",usage:"Mechanical Materials"},
{name:"ChiffonierDrawer",contains:"Clothing, Trinkets",icon:"🗄️",location:"Residential areas",desc:"Bedroom drawer storage.",usage:"Residential Loot"},
{name:"Computer",contains:"Cables, Electronics",icon:"🖥️",location:"Offices / buildings",desc:"Searchable desktop computer.",usage:"Electrical / Utility Materials"},
{name:"ComputerPanelDrawer",contains:"Electronics, Components",icon:"🖥️",location:"Offices / technical areas",desc:"Storage drawer attached to computer equipment.",usage:"Electrical Materials"},
{name:"ControlConsole",contains:"Electronics, Components",icon:"🎛️",location:"Industrial / technical areas",desc:"Searchable control console.",usage:"Electrical Materials"},
{name:"ControlPanel",contains:"Electronics, Components",icon:"🎛️",location:"Industrial / technical areas",desc:"Industrial control panel.",usage:"Electrical Materials"},
{name:"Dumpster",contains:"Mixed Trash Loot",icon:"🗑️",location:"Industrial / urban areas",desc:"Large dumpster containing discarded items.",usage:"General / Scrappy Loot"},
{name:"ElectricalCabinet",contains:"Cables, Electrical Components",icon:"⚡",location:"Technical rooms / industrial areas",desc:"Electrical storage cabinet.",usage:"Electrical / Utility Workshop"},
{name:"FieldDepotPneumaticDeliverySystem",contains:"Delivery / Industrial Loot",icon:"📦",location:"Field depots",desc:"Pneumatic delivery storage system.",usage:"Industrial Materials"},
{name:"Fridge",contains:"Food, Household Items",icon:"🧊",location:"Residential areas",desc:"Household refrigerator.",usage:"Scrappy / Food"},
{name:"GeneratorFuseBox",contains:"Electrical Components",icon:"⚡",location:"Generators / industrial areas",desc:"Fuse box attached to generators.",usage:"Utility Materials"},
{name:"GreenContainerDrawer",contains:"Mixed Loot",icon:"🗄️",location:"Industrial areas",desc:"Green storage drawer.",usage:"General Loot"},
{name:"GreenIndustrialDrawer",contains:"Industrial Components",icon:"🗄️",location:"Industrial areas",desc:"Green industrial storage drawer.",usage:"Industrial Materials"},
{name:"GreenLocker",contains:"Clothing, Personal Items",icon:"🚪",location:"Industrial / locker rooms",desc:"Green metal locker.",usage:"Fabric / Residential Loot"},
{name:"Heater",contains:"Mechanical Components",icon:"🔥",location:"Residential / industrial areas",desc:"Searchable heater.",usage:"Mechanical Materials"},
{name:"HeaterBox",contains:"Mechanical Components",icon:"🔥",location:"Industrial / utility areas",desc:"Small heater equipment box.",usage:"Mechanical Materials"},
{name:"HighVoltageBreakerBox",contains:"Electrical Components",icon:"⚡",location:"Industrial / technical areas",desc:"High-voltage electrical breaker.",usage:"Advanced Electrical Materials"},
{name:"IndustrialCleaner",contains:"Industrial Materials",icon:"🧹",location:"Industrial areas",desc:"Industrial cleaning equipment.",usage:"Industrial Materials"},
{name:"IndustrialDrawer",contains:"Industrial Components",icon:"🗄️",location:"Industrial areas",desc:"Industrial storage drawer.",usage:"Industrial Materials"},
{name:"MechanicalCabinet",contains:"Mechanical Components",icon:"⚙️",location:"Industrial areas",desc:"Cabinet containing mechanical equipment.",usage:"Mechanical Materials"},
{name:"MedicalDrawer",contains:"Medical Supplies",icon:"🏥",location:"Medical areas",desc:"Medical storage drawer.",usage:"Medical Lab Materials"},
{name:"MetalCrate",contains:"Industrial Components, Materials",icon:"📦",location:"Industrial areas",desc:"Heavy metal storage crate.",usage:"Industrial Materials"},
{name:"MobileGenerator",contains:"Electrical Components",icon:"🔋",location:"Industrial / utility areas",desc:"Portable generator unit.",usage:"Electrical / Utility Materials"},
{name:"OfficeTrashCan",contains:"Office Items, Scrappy Loot",icon:"🗑️",location:"Offices",desc:"Office waste bin.",usage:"Scrappy / General Loot"},
{name:"Oscilloscope",contains:"Electrical Components",icon:"📟",location:"Labs / technical areas",desc:"Electronic testing equipment.",usage:"Electrical Materials"},
{name:"OutdoorTrashCan",contains:"Scrappy Items",icon:"🗑️",location:"Outdoor / residential areas",desc:"Outdoor garbage container.",usage:"Scrappy Loot"},
{name:"PowerDistributionBox",contains:"Electrical Components",icon:"⚡",location:"Industrial / technical areas",desc:"Power distribution equipment.",usage:"Electrical / Utility Materials"},
{name:"RecordingPanel",contains:"Electronics, Components",icon:"📼",location:"Offices / technical areas",desc:"Recording and monitoring equipment.",usage:"Electrical Materials"},
{name:"RecyclingBin",contains:"Plastic Parts, Scrap",icon:"♻️",location:"Residential / commercial areas",desc:"Recycling container.",usage:"Plastic / Scrappy Materials"},
{name:"RedLocker",contains:"Residential / Industrial Loot",icon:"🔴",location:"Industrial / residential areas",desc:"Red metal locker. Loot can vary by location.",usage:"General Loot"},
{name:"ResidentialCabinet",contains:"Household Items, Trinkets",icon:"🗄️",location:"Residential areas",desc:"Household storage cabinet.",usage:"Residential Loot"},
{name:"ResidentialCloset",contains:"Clothing, Personal Items",icon:"🚪",location:"Residential areas",desc:"Household closet.",usage:"Fabric / Residential Loot"},
{name:"ResidentialDeskDrawer",contains:"Trinkets, Small Items",icon:"🗄️",location:"Residential areas",desc:"Desk drawer found in homes.",usage:"Residential Loot"},
{name:"ResidentialDrawer",contains:"Household Items, Trinkets",icon:"🗄️",location:"Residential areas",desc:"Standard household drawer.",usage:"Residential Loot"},
{name:"ResidentialUnderDeskDrawer",contains:"Small Household Items",icon:"🗄️",location:"Residential areas",desc:"Drawer underneath residential desks.",usage:"Residential Loot"},
{name:"SecurityLocker",contains:"Security Loot, Components",icon:"🔒",location:"Security areas",desc:"Secure storage locker.",usage:"Rare Components / Blueprints"},
{name:"SeedVault",contains:"Seeds, Agricultural Items",icon:"🌱",location:"Agricultural / greenhouse areas",desc:"Secure agricultural storage.",usage:"Scrappy / Farming Items"},
{name:"SeedDrawerBox",contains:"Seeds, Agricultural Items",icon:"🌱",location:"Agricultural / greenhouse areas",desc:"Small seed storage box.",usage:"Scrappy / Farming Items"},
{name:"ServerRack",contains:"Electronics, Components",icon:"🖥️",location:"Server rooms / offices",desc:"Server equipment rack.",usage:"Electrical Materials"},
{name:"SmallBreakerBox",contains:"Electrical Components",icon:"⚡",location:"Buildings / technical rooms",desc:"Small electrical breaker box.",usage:"Utility Materials"},
{name:"SolarPanelBox",contains:"Electrical Components",icon:"☀️",location:"Solar / utility areas",desc:"Solar equipment storage box.",usage:"Electrical Materials"},
{name:"SteelCupboard",contains:"Industrial / Household Loot",icon:"🗄️",location:"Industrial / residential areas",desc:"Large steel storage cupboard.",usage:"General Loot"},
{name:"Suitcase",contains:"Trinkets, Clothing, Personal Items",icon:"🧳",location:"Residential / travel areas",desc:"Searchable suitcase.",usage:"Residential / Scrappy Loot"},
{name:"SupplyDrop",contains:"High-value Mixed Loot",icon:"📦",location:"Supply drop locations",desc:"Supply container containing valuable loot.",usage:"Weapons / Components / Supplies"},
{name:"Terminal",contains:"Electronics, Components",icon:"💻",location:"Buildings / technical areas",desc:"Searchable terminal.",usage:"Electrical Materials"},
{name:"TinyBreakerBox",contains:"Electrical Components",icon:"⚡",location:"Buildings / technical areas",desc:"Small electrical box.",usage:"Utility Materials"},
{name:"Truck",contains:"Vehicle / Industrial Loot",icon:"🚚",location:"Roads / industrial areas",desc:"Searchable truck storage.",usage:"Mechanical / Industrial Materials"},
{name:"WallTerminal",contains:"Electronics, Components",icon:"🖥️",location:"Buildings / technical areas",desc:"Terminal mounted into a wall.",usage:"Electrical Materials"},
{name:"WhiteMedicalDrawer",contains:"Medical Supplies",icon:"🏥",location:"Medical areas",desc:"White medical storage drawer.",usage:"Medical Lab Materials"},
{name:"WhiteMultiDrawers",contains:"Mixed Loot",icon:"🗄️",location:"Offices / industrial areas",desc:"White multi-drawer storage unit.",usage:"General Loot"},
{name:"WhiteOfficeDrawer",contains:"Office Items, Electronics",icon:"🗄️",location:"Offices",desc:"White office storage drawer.",usage:"Office / Electrical Materials"},
{name:"WoodenDrawer",contains:"Household Items, Trinkets",icon:"🗄️",location:"Residential areas",desc:"Wooden household drawer.",usage:"Residential Loot"},
{name:"YellowToolCabinet",contains:"Tools, Mechanical Components",icon:"🧰",location:"Industrial / garage areas",desc:"Yellow industrial tool cabinet.",usage:"Mechanical Materials"}

];


const questsData=[
{provider:"Shani",icon:"🏃",color:"#3498db",desc:"Mobility and exploration",quests:[
{id:"q_sh1",name:"Pick Up the Pieces",objective:"Loot 3 containers",rewards:"Rattler III, 80x Ammo",difficulty:"Easy",location:"Any zone"},
{id:"q_sh2",name:"Clearer Skies",objective:"Destroy 3 ARC enemies",rewards:"3x Bandage, Light Shield, Bag",difficulty:"Easy",location:"Wasps and Scouts"},
{id:"q_sh3",name:"The Trifecta",objective:"Destroy Wasp, Hornet, Scout",rewards:"Camo Outfit, Tower Key, 2x Defibrillator",difficulty:"Medium",location:"Dam recommended"},
{id:"q_sh4",name:"Package Delivery",objective:"Deliver package to specific area",rewards:"Hiker's Bag, 2x Smoke Grenade",difficulty:"Easy",location:"Follow marker"},
{id:"q_sh5",name:"Against the Clock",objective:"Extract in under 15 minutes",rewards:"Running Boots, 3x Endurance Stim",difficulty:"Medium",location:"Fast raid in Buried City"},
{id:"q_sh6",name:"Wide Stretch",objective:"Visit 3 different POIs in 1 raid",rewards:"Topographic Map, Compass",difficulty:"Medium",location:"Plan an efficient route"},
{id:"q_sh7",name:"Marathon",objective:"Travel 5000m on foot in 1 raid",rewards:"Reinforced Shoes, 2x Stim",difficulty:"Easy",location:"Large maps (Dam)"},
{id:"q_sh8",name:"Collector",objective:"Find 10 rare items",rewards:"XL Collector's Bag, 500 Credits",difficulty:"Hard",location:"T2-T3 Areas, Yellow Lockers"},
{id:"q_sh9",name:"Explorer",objective:"Discover 5 secret locations",rewards:"Explorer's Journal, Marked Map",difficulty:"Hard",location:"Off the beaten path"},
{id:"q_sh10",name:"Survivor",objective:"Extract with 90%+ HP without healing",rewards:"Reinforced Armor, 3x Medical Kit",difficulty:"Hard",location:"Play carefully, avoid fights"},
{id:"q_sh11",name:"Acrobat",objective:"Jump from 20m+ without taking damage",rewards:"Shock-Absorbing Boots, Parachute",difficulty:"Medium",location:"City rooftops, Dam high tower"},
{id:"q_sh12",name:"Infiltration",objective:"Extract without being detected by ARCs",rewards:"Night Camo Outfit, Suppressor",difficulty:"Hard",location:"Stealth mode, avoid Scouts"},
{id:"q_sh13",name:"Transporter",objective:"Extract with 50kg+ of equipment",rewards:"XXL Military Bag, T1 Exoskeleton",difficulty:"Medium",location:"Maximize loot before extraction"},
{id:"q_sh14",name:"Backpacker",objective:"Extract from 3 different extraction points in 3 raids",rewards:"Explorer Badge, 1000 Credits",difficulty:"Easy",location:"Vary extraction zones"},
{id:"q_sh15",name:"Master Scout",objective:"Scan 10 enemy zones",rewards:"Improved Scanner, Night Vision",difficulty:"Expert",location:"Infiltrate ARC bases, dangerous areas"}
]},
{provider:"Celeste",icon:"🔬",color:"#9b59b6",desc:"Materials and crafting",quests:[
{id:"q_ce1",name:"Bad Feeling",objective:"Obtain materials (metal, plastic)",rewards:"10x Metal Parts, 5x Spring, 5x Tape",difficulty:"Easy",location:"Industrial areas"},
{id:"q_ce2",name:"Grease Their Palm",objective:"Visit 3 buildings (3 maps)",rewards:"Surveillance Key, 10x Electrical Components",difficulty:"Hard",location:"Dam, Spaceport, City"},
{id:"q_ce3",name:"Data Collection",objective:"Scan 5 ARC terminals",rewards:"Encrypted Drive, 3x Advanced Components",difficulty:"Medium",location:"Offices, ARC facilities"},
{id:"q_ce4",name:"Biological Samples",objective:"Collect 10 hydroponic plants",rewards:"3x Crafting Kit, 5x Antiseptic",difficulty:"Easy",location:"Domes (Dam)"},
{id:"q_ce5",name:"Advanced Research",objective:"3 advanced electrical components",rewards:"Blueprint: Lure Grenade, 2x Battery",difficulty:"Hard",location:"T3 farm or Refiner Lv. 2"},
{id:"q_ce6",name:"Recycling",objective:"Dismantle 20 items in Refiner",rewards:"5x Components of all types, Tool Kit",difficulty:"Easy",location:"Use Refiner regularly"},
{id:"q_ce7",name:"Alchemist",objective:"Craft 10 different items",rewards:"Portable Crafting Table, Recipes",difficulty:"Medium",location:"Variety of crafting required"},
{id:"q_ce8",name:"Engineer",objective:"Upgrade 5 different pieces of equipment",rewards:"Advanced Upgrade Kit, 10x Components",difficulty:"Medium",location:"Requires Workshop Level 2+"},
{id:"q_ce9",name:"Prospector",objective:"Mine 50 metal resources",rewards:"Reinforced Pickaxe, Metal Detector",difficulty:"Easy",location:"Industrial areas, wrecks"},
{id:"q_ce10",name:"Chemist",objective:"Synthesize 5 chemical compounds",rewards:"Portable Lab, 10x Chemicals",difficulty:"Medium",location:"Requires Medical Lab Lv. 2"},
{id:"q_ce11",name:"Electrician",objective:"Repair 3 electronic devices",rewards:"Multimeter, 15x Electrical Components",difficulty:"Hard",location:"Find damaged devices"},
{id:"q_ce12",name:"Architect",objective:"Upgrade 3 workshop stations to max",rewards:"Advanced Station Blueprints, 2000 Credits",difficulty:"Expert",location:"Requires massive resources"},
{id:"q_ce13",name:"Rare Collector",objective:"Obtain 5 legendary materials",rewards:"Legendary Chest, Vault Key",difficulty:"Expert",location:"Bosses, special events"},
{id:"q_ce14",name:"Thrifty",objective:"Extract with 10000+ credits worth of loot",rewards:"Wallet, x1.2 Sell Multiplier",difficulty:"Hard",location:"Maximize loot value"},
{id:"q_ce15",name:"Industrialist",objective:"Produce 100 crafted items (cumulative)",rewards:"Automated Production Line, 5000 Credits",difficulty:"Expert",location:"Long-term, mass crafting"}
]},
{provider:"Apollo",icon:"💣",color:"#e74c3c",desc:"Combat and explosives",quests:[
{id:"q_ap1",name:"Safe Passage",objective:"Kill 2 ARCs with grenades",rewards:"3x Fragmentation Grenades",difficulty:"Easy",location:"Save grenades, use weak enemies"},
{id:"q_ap2",name:"Payback",objective:"Destroy enemy with Burner",rewards:"3x Blaze Grenade, 2x Noisemaker",difficulty:"Medium",location:"Farm Fireballs first"},
{id:"q_ap3",name:"Demolition Expert",objective:"Destroy 5 explosive enemies",rewards:"Blueprint: Jolt Mine, 5x C4",difficulty:"Medium",location:"Grenades, mines, C4"},
{id:"q_ap4",name:"Fireworks",objective:"Explode 3 Ticks simultaneously",rewards:"3x Impact Grenade, Grenade Launcher",difficulty:"Hard",location:"Attract a group of Ticks"},
{id:"q_ap5",name:"Airstrike",objective:"Destroy explosive Hornet + Wasp",rewards:"Blueprint: Trigger Grenade, Ammo",difficulty:"Medium",location:"Launcher for flying drones"},
{id:"q_ap6",name:"Gunner",objective:"20 heavy weapon eliminations",rewards:"Upgraded Stitcher, 200x Ammo",difficulty:"Medium",location:"Assault rifles, machine guns"},
{id:"q_ap7",name:"Pyromaniac",objective:"Set 10 enemies on fire",rewards:"Flamethrower, 5x Incendiary Grenade",difficulty:"Medium",location:"Blaze Grenades, fire weapons"},
{id:"q_ap8",name:"Sniper",objective:"10 eliminations from +100m distance",rewards:"T2 Sniper Rifle, 8x Scope",difficulty:"Hard",location:"Elevated positions, patience"},
{id:"q_ap9",name:"Tactician",objective:"Eliminate 5 enemies without alerting them",rewards:"Advanced Suppressor, Ghillie Suit",difficulty:"Hard",location:"Kill Scouts first"},
{id:"q_ap10",name:"Berserker",objective:"15 melee weapon eliminations",rewards:"Katana, Heavy Armor",difficulty:"Hard",location:"Risky close combat"},
{id:"q_ap11",name:"Bounty Hunter",objective:"Eliminate 3 Elite targets",rewards:"3000 Credits, Hunter Badge",difficulty:"Expert",location:"Sentinels, Bastions, Bosses"},
{id:"q_ap12",name:"Exterminator",objective:"Eliminate 50 ARCs (cumulative)",rewards:"Exterminator Title, 5000 Credits",difficulty:"Expert",location:"Long-term, intensive combat"}
]},
{provider:"Lance",icon:"⚕️",color:"#2ecc71",desc:"Medical and survival",quests:[
{id:"q_la1",name:"Life as a Pharmacist",objective:"Obtain 3 types of medical items",rewards:"Defibrillator, Recharger, 3x Bandage",difficulty:"Easy",location:"Medical areas, hospitals"},
{id:"q_la2",name:"Bandage Run",objective:"Collect 5 bandages",rewards:"3x Plant Bandages, First Aid Kit",difficulty:"Easy",location:"Craft (2x Fabric) or loot"},
{id:"q_la3",name:"Emergency Rescue",objective:"Revive 2 teammates",rewards:"2x Defibrillator, Advanced Medical Bag",difficulty:"Medium",location:"Team mode"},
{id:"q_la4",name:"ARC Doctor",objective:"Heal 500 HP (cumulative)",rewards:"5x Full Medical Kit, Regen Syringe",difficulty:"Easy",location:"Use bandages across multiple raids"},
{id:"q_la5",name:"Medical Research",objective:"3 Cracked Bioscanners",rewards:"Blueprint: Advanced Stimulant, Antiseptic",difficulty:"Medium",location:"T2 Medical Areas"},
{id:"q_la6",name:"Healer",objective:"Heal 3 different players",rewards:"XL Medical Kit, 10x Bandages",difficulty:"Medium",location:"Team mode, share healing"},
{id:"q_la7",name:"Extreme Survivor",objective:"Survive 30 min without healing",rewards:"Passive Regeneration, Health Armor",difficulty:"Hard",location:"Avoid all damage"},
{id:"q_la8",name:"Field Medic",objective:"Heal during combat (3x)",rewards:"Combat Medical Kit, Fast Stims",difficulty:"Hard",location:"Heal under pressure"},
{id:"q_la9",name:"Pharmacologist",objective:"Use 10 types of medicine",rewards:"Pharmacy Case, All Stims x2",difficulty:"Medium",location:"Use different healing types"},
{id:"q_la10",name:"Resurrection",objective:"Revive teammate 3x in the same raid",rewards:"Rechargeable Defibrillator, Badge",difficulty:"Hard",location:"Dangerous team raid"},
{id:"q_la11",name:"Emergency Doctor",objective:"Save teammate below 10% HP",rewards:"Adrenaline Injection, Emergency Kit",difficulty:"Hard",location:"Requires quick reaction"},
{id:"q_la12",name:"Guardian Angel",objective:"Complete raid with no team deaths",rewards:"Team Healing Aura, 3000 Credits",difficulty:"Expert",location:"Perfect team coordination"}
]},
{provider:"Tian Wen",icon:"🔫",color:"#f39c12",desc:"Weapons and advanced combat",quests:[
{id:"q_ti1",name:"The Right Tool",objective:"Destroy Fireball, Hornet, Turret",rewards:"Stitcher II (Assault Rifle)",difficulty:"Medium",location:"3 enemy types, appropriate weapons"},
{id:"q_ti2",name:"Deadeye",objective:"20 headshot eliminations",rewards:"Blueprint: Holo Sight, 100x Ammo",difficulty:"Hard",location:"Aim for Wasps, Scouts"},
{id:"q_ti3",name:"Full Arsenal",objective:"Own 5 different weapons",rewards:"Weapon Case, 50x Ammo of all types",difficulty:"Easy",location:"Craft/loot various weapons"},
{id:"q_ti4",name:"Master Gunsmith",objective:"Upgrade 3 weapons with mods",rewards:"3x Random T2 Mods, Mod Kit",difficulty:"Medium",location:"Weapon mod blueprints + workshop"},
{id:"q_ti5",name:"Deadly Precision",objective:"10 one-shot eliminations",rewards:"Legendary Sniper Rifle, Ammo",difficulty:"Expert",location:"Headshots, weak enemies"},
{id:"q_ti6",name:"Versatile",objective:"Eliminate enemies with 5 weapon types",rewards:"Multi-Weapon Support, Ammo Kit",difficulty:"Medium",location:"Vary your arsenal"},
{id:"q_ti7",name:"Gunsmith Artisan",objective:"Craft 10 weapons",rewards:"T2 Weapon Blueprints, Weapon Crafting Table",difficulty:"Hard",location:"Resources + blueprints required"},
{id:"q_ti8",name:"Weapon Collector",objective:"Obtain 15 different weapons",rewards:"Weapon Vault, Display Case",difficulty:"Hard",location:"Collect all varieties"},
{id:"q_ti9",name:"Hullcracker (LEGENDARY)",objective:"Complete Tian Wen quest series",rewards:"Blueprint: Hullcracker (Legendary Weapon)",difficulty:"Expert",location:"Final quest of the complete chain"}
]}
];

let savedProgress=JSON.parse(localStorage.getItem('arcProgress'))||{};

function saveProgress(){
    localStorage.setItem('arcProgress',JSON.stringify(savedProgress));
    updateGlobalProgress();
}

function updateGlobalProgress(){
    let total=0,completed=0;

    scrappyData.forEach(item=>{
        item.subTasks.forEach(task=>{
            total++;
            if((parseInt(savedProgress[task.id])||0)>=task.amount)completed++;
        });
    });

    workshopData.forEach(level=>{
        level.upgrades.forEach(upgrade=>{
            upgrade.subTasks.forEach(task=>{
                total++;
                if((parseInt(savedProgress[task.id])||0)>=task.amount)completed++;
            });
        });
    });

    blueprintData.forEach(cat=>{
        cat.subTasks.forEach(task=>{
            total++;
            if(savedProgress[task.id])completed++;
        });
    });

    const percentage=total>0?Math.round((completed/total)*100):0;

    globalProgressBar.style.width = `${percentage}%`;
    globalProgressText.textContent = `${percentage}%`;
    document.getElementById('completedTasks').textContent=completed;
    document.getElementById('totalTasks').textContent=total;
}

function getPriorityBadge(priority){
    if(!priority)return'';

    const labels={
        high:'🔥 Priority',
        medium:'⚡ Recomended',
        low:'💡 Optional'
    };

    const classes={
        high:'priority-high',
        medium:'priority-medium',
        low:'priority-low'
    };

    return `<span class="priority-badge ${classes[priority]}">${labels[priority]}</span>`;
}
const topBtn = document.querySelector('a[href="#top"]');

document.addEventListener("mousemove", (e) => {
    const rect = topBtn.getBoundingClientRect();
    const btnX = rect.left + rect.width / 2;
    const btnY = rect.top + rect.height / 2;

    const dist = Math.hypot(e.clientX - btnX, e.clientY - btnY);
    const scale = gsap.utils.mapRange(300, 0, 1, 1.25, dist);

    gsap.to(topBtn, {
        scale: scale,
        duration: 0.25,
        ease: "power2.out",
        overwrite: true
    });
});

function renderList(container,data,itemClass,itemType){

    data.forEach(item=>{

        let allCompleted=true;

        if(itemType==='counter'&&item.subTasks){

            for(const task of item.subTasks){
                if((parseInt(savedProgress[task.id])||0)<task.amount){
                    allCompleted=false;
                    break;
                }
            }

        }else if(itemType==='checkbox'&&item.subTasks){

            for(const task of item.subTasks){
                if(!savedProgress[task.id]){
                    allCompleted=false;
                    break;
                }
            }
        }

        if((itemType==='counter'||itemType==='checkbox')&&allCompleted)return;

        const itemLi=document.createElement('li');
        itemLi.classList.add('category-item',itemClass);

        if(item.categoryClass)
            itemLi.classList.add(item.categoryClass);

        if(allCompleted)
            itemLi.classList.add('completed');

        const header=document.createElement('h3');

        header.innerHTML=item.name+getPriorityBadge(item.priority);

        itemLi.appendChild(header);

        if(item.info){

            const info=document.createElement('div');

            info.style.cssText=
                'padding:10px 15px;background:rgba(52,152,219,0.1);font-size:0.85em;color:var(--accent-blue);border-left:3px solid var(--accent-blue)';

            info.textContent='💡 '+item.info;

            itemLi.appendChild(info);
        }

        const subtaskList=document.createElement('ul');

        subtaskList.classList.add('subtask-list');

        if(item.subTasks){

            item.subTasks.forEach(task=>{

                const li=document.createElement('li');

                li.classList.add('subtask-item');

                let input='';

                if(itemType==='counter'){

                    const curr=parseInt(savedProgress[task.id])||0;
                    const max=task.amount;

                    if(curr>=max)
                        li.classList.add('completed');

                    input=`
                        <div class="item-counter"
                             data-id="${task.id}"
                             data-max="${max}">
                            <button class="counter-button"
                                    data-action="minus"
                                    ${curr===0?'disabled':''}>
                                -
                            </button>

                            <span class="counter-value">
                                ${curr} / ${max}
                            </span>

                            <button class="counter-button"
                                    data-action="plus"
                                    ${curr===max?'disabled':''}>
                                +
                            </button>
                        </div>
                    `;

                }else if(itemType==='checkbox'){

                    const checked=savedProgress[task.id]||false;

                    if(checked)
                        li.classList.add('completed');

                    input=`
                        <input type="checkbox"
                               data-id="${task.id}"
                               ${checked?'checked':''}>
                    `;
                }

                li.innerHTML=`
                    <label>
                        ${input}

                        <div class="label-wrapper">
                            <span>${task.label}</span>

                            ${task.location?
                                `<span class="location-hint">
                                    📍 ${task.location}
                                </span>`
                                :''
                            }
                        </div>
                    </label>
                `;

                subtaskList.appendChild(li);
            });
        }

        itemLi.appendChild(subtaskList);

        container.appendChild(itemLi);
    });
}

function renderWorkshop(){

    const container=document.getElementById('workshop');

    container.innerHTML=`
        <h2 style="color:var(--accent-orange);border-bottom-color:var(--accent-orange)">
            🔧 Workshop
        </h2>
    `;

    const benches=[
        {key:"Gunsmith",icon:"🔫",image:"gunsmith_bench"},
        {key:"Gear",icon:"🎒",image:"gear_bench"},
        {key:"Medical Lab",icon:"⚕️",image:"medical-lab_bench"},
        {key:"Explosives",icon:"💣",image:"explosives_station"},
        {key:"Utility",icon:"⚡",image:"utility_station"},
        {key:"Refiner",icon:"⚙️",image:"refiner"}
    ];

    benches.forEach(bench=>{

        const benchWrapper=document.createElement('div');

        benchWrapper.className='workshop-bench';

        const header=document.createElement('div');

        header.className='workshop-bench-header';

        const imagePath=`images/workshop/${bench.image}.png`;

        header.innerHTML=`
            <div class="workshop-bench-title">

                <span class="workshop-bench-icon">
                    <img
                        src="${imagePath}"
                        alt="${bench.key}"
                        width="70"
                        height="70"
                        onerror="this.style.display='none';this.parentElement.innerHTML='${bench.icon}'"
                    >
                </span>

                <span>${bench.key}</span>

            </div>

            <span class="workshop-bench-arrow">
                ▼
            </span>
        `;

        const content=document.createElement('div');

        content.className='workshop-bench-content';

        workshopData.forEach(level=>{

            const upgrade=level.upgrades.find(item=>
                item.name.startsWith(bench.key+' ')
            );

            if(!upgrade)return;

            const levelWrapper=document.createElement('div');

            levelWrapper.className='workshop-level';

            const levelHeader=document.createElement('div');

            levelHeader.className='workshop-level-header';

            levelHeader.innerHTML=`
                <span class="workshop-level-title">
                    ${level.title}
                </span>

                <span class="workshop-level-arrow">
                    ▼
                </span>
            `;

            const levelContent=document.createElement('div');

            levelContent.className='workshop-level-content';

            const list=document.createElement('ul');

            list.className='category-list';

            renderList(
                list,
                [upgrade],
                'workshop-item',
                'counter'
            );

            if(list.children.length>0){

                levelContent.appendChild(list);
            }

            levelWrapper.appendChild(levelHeader);
            levelWrapper.appendChild(levelContent);

            content.appendChild(levelWrapper);

            levelHeader.addEventListener('click',event=>{

                event.stopPropagation();

                levelWrapper.classList.toggle('open');
            });
        });

        benchWrapper.appendChild(header);
        benchWrapper.appendChild(content);

        container.appendChild(benchWrapper);

        header.addEventListener('click',event=>{

            event.stopPropagation();

            benchWrapper.classList.toggle('open');
        });
    });
}

function isQuestUnlocked(providerId,questIndex){

    if(questIndex===0)return true;

    const provider=questsData.find(
        p=>p.provider===providerId
    );

    const prevQuest=provider.quests[questIndex-1];

    return savedProgress[prevQuest.id]||false;
}

function renderQuests(){

    const container=document.getElementById('quests');



    const filters=document.createElement('div');

    filters.classList.add('provider-filters');

    let totalQuests=0;
    let completedQuests=0;

    questsData.forEach(provider=>{

        totalQuests+=provider.quests.length;

        provider.quests.forEach(q=>{

            if(savedProgress[q.id])
                completedQuests++;
        });
    });
    container.innerHTML=`
        <h2 style="color:var(--accent-purple);border-bottom-color:var(--accent-purple)">
            📋 Quests List (${completedQuests}/${totalQuests}) (Once finished, they disappear!)
        </h2>
    `;
    filters.innerHTML=`
        <button class="provider-filter active"
                data-provider="all">
            All (${completedQuests}/${totalQuests})
        </button>
    `;

    questsData.forEach(provider=>{

        const provCompleted=
            provider.quests.filter(q=>savedProgress[q.id]).length;

        filters.innerHTML+=`
            <button class="provider-filter"
                    data-provider="${provider.provider}"
                    style="border-color:${provider.color}">
                ${provider.icon}
                ${provider.provider}
                (${provCompleted}/${provider.quests.length})
            </button>
        `;
    });

    container.appendChild(filters);

    const summary=document.createElement('div');

    summary.classList.add('quest-progress-summary');

    const questPercent=
        Math.round((completedQuests/totalQuests)*100);

    summary.innerHTML=`
        <strong>
            Progression:
            ${completedQuests}/${totalQuests}
            completed quests
        </strong>

        <div class="progress-bar-container"
             style="margin-top:10px">

            <div class="progress-bar"
                 style="width:${questPercent}%">
                ${questPercent}%
            </div>

        </div>
    `;

    container.appendChild(summary);

    if(completedQuests===totalQuests){

        const congrats=document.createElement('div');

        congrats.classList.add('completion-message');

        congrats.innerHTML=
            '🎉 CONGRATULATIONS! All quests are complete! 🎉';

        container.appendChild(congrats);
    }

    const questsContainer=document.createElement('div');

    questsContainer.id='questsContainer';

    container.appendChild(questsContainer);

    renderQuestCards('all');
}

function renderQuestCards(providerFilter){

    const container=document.getElementById('questsContainer');

    container.innerHTML='';

    questsData.forEach(provider=>{

        if(providerFilter!=='all'&&provider.provider!==providerFilter)
            return;

        const providerSection=document.createElement('div');

        providerSection.innerHTML=`
            <h3 style="color:${provider.color};margin-top:25px">
                ${provider.icon}
                ${provider.provider}
                -
                ${provider.desc}
            </h3>
        `;

        container.appendChild(providerSection);

        let hasVisibleQuests=false;

        provider.quests.forEach((quest,index)=>{

            const isCompleted=savedProgress[quest.id]||false;

            if(isCompleted)return;

            hasVisibleQuests=true;

            const isLocked=
                !isQuestUnlocked(provider.provider,index);

            const card=document.createElement('div');

            card.classList.add('quest-card');

            if(isLocked)
                card.classList.add('locked');

            card.style.borderLeftColor=provider.color;

            card.dataset.questId=quest.id;

            const diffClass={
                'Facile':'diff-easy',
                'Moyen':'diff-medium',
                'Difficile':'diff-hard',
                'Expert':'diff-expert',
                'Easy':'diff-easy',
                'Medium':'diff-medium',
                'Hard':'diff-hard'
            }[quest.difficulty];

            card.innerHTML=`
                <div class="quest-header">

                    <input type="checkbox"
                           class="quest-checkbox"
                           data-quest-id="${quest.id}"
                           ${isLocked?'disabled':''}>

                    <div class="quest-title-section">

                        <h4>
                            ${provider.icon}
                            ${quest.name}
                        </h4>

                        <span class="quest-provider"
                              style="color:${provider.color}">
                            ${provider.provider}
                            -
                            Quête
                            ${index+1}/${provider.quests.length}
                        </span>

                    </div>

                    <span class="difficulty-badge ${diffClass}">
                        ${quest.difficulty}
                    </span>

                </div>

                <div class="quest-body">

                    <div class="quest-objective">
                        <strong>🎯 Objective :</strong>
                        ${quest.objective}
                    </div>

                    <div class="quest-rewards">
                        <strong>🎁 Awards :</strong>
                        ${quest.rewards}
                    </div>

                    <div class="quest-location">
                        <strong>💡 Advice :</strong>
                        ${quest.location}
                    </div>

                </div>
            `;

            container.appendChild(card);
        });

        if(!hasVisibleQuests){

            const completeMsg=document.createElement('div');

            completeMsg.style.cssText=
                'text-align:center;padding:20px;color:var(--accent-green);font-weight:700;font-size:1.1em';

            completeMsg.innerHTML=`
                ✅ All quests
                ${provider.provider}
                completed !
            `;

            providerSection.appendChild(completeMsg);
        }
    });
}

function renderEnemies(){

    const container=document.getElementById('enemies');

    container.innerHTML=`
        <h2 style="color:var(--accent-red);border-bottom-color:var(--accent-red)">
            👾 Enemy Guide
        </h2>
    `;

    const grid=document.createElement('ul');

    grid.classList.add('visual-grid');

    enemyData.forEach(enemy=>{

        const card=document.createElement('li');

        card.classList.add('visual-card');

        card.style.borderLeftColor='var(--accent-red)';

        /* Convert enemy name into filename */
        const imageName=enemy.name
            .toLowerCase()
            .replace(/[^a-z0-9]+/g,'');

        const imagePath=`images/enemies/${imageName}.png`;

        card.innerHTML=`
            <h4 style="color:var(--accent-red)">
                ${enemy.name}
            </h4>

            <div class="icon">
                <img
                    src="${imagePath}"
                    alt="${enemy.name}"
                    width="100"
                    height="100"
                    onerror="this.style.display='none';this.parentElement.innerHTML='❌<br><small>Missing: ${imagePath}</small>'"
                >
            </div>

            <span class="tier">
                ${enemy.tier}
            </span>

            <p>${enemy.desc}</p>

            <p>
                <strong>HP:</strong>
                ${enemy.health}
                <br>
                <strong>XP:</strong>
                ${enemy.xp}
            </p>

            <div class="weakness">
                ⚠️ ${enemy.weakness}
            </div>

            <div class="drop">
                💎 ${enemy.drop}
            </div>
        `;

        grid.appendChild(card);
    });

    container.appendChild(grid);
}

function renderContainers(){

    const container=document.getElementById('containers');

    container.innerHTML=`
        <h2 style="color:var(--accent-red);border-bottom-color:var(--accent-red)">
            📦 Container Guide
        </h2>
    `;

    const grid=document.createElement('ul');

    grid.classList.add('visual-grid');

    containerData.forEach(item=>{

        const card=document.createElement('li');

        card.classList.add('visual-card');

        card.style.borderLeftColor='var(--accent-red)';

        /* Convert container name into filename */
        const imageName=item.name
            .toLowerCase()
            .replace(/[^a-z0-9]+/g,'');

        const imagePath=`images/containers/${imageName}.png`;

        card.innerHTML=`

            <h4 style="color:var(--accent-red)">
                ${item.name}
            </h4>

            <div class="icon">
                <img
                    src="${imagePath}"
                    alt="${item.name}"
                    width="100"
                    height="100"
                    onerror="this.style.display='none';this.parentElement.innerHTML='❌<br><small>Missing: ${imagePath}</small>'"
                >
            </div>

            <p>
                <strong>Contains:</strong>
                ${item.contains}
            </p>

            <p>
                <strong>📍 Location:</strong>
                ${item.location}
            </p>

            <p>
                ${item.desc}
            </p>

            <div class="drop">
                🎯 ${item.usage}
            </div>

        `;

        grid.appendChild(card);

    });

    container.appendChild(grid);
}
function renderBlueprints(){

    const container=document.getElementById('blueprints');

    /* Remember which dropdowns are open */
    const openCategories=new Set(
        [...container.querySelectorAll('.blueprint-category.open')]
        .map(el=>el.dataset.category)
    );

    container.innerHTML=`
        <h2 style="color:#9b59b6;border-bottom-color:#9b59b6">
            📜 Blueprint Stash
        </h2>
    `;

    blueprintData.forEach(category=>{

        /* Hide category when every blueprint is completed */
        let allCompleted=true;

        category.subTasks.forEach(task=>{
            if(!savedProgress[task.id]){
                allCompleted=false;
            }
        });

        if(allCompleted)return;

        const categoryWrapper=document.createElement('div');

        categoryWrapper.className='workshop-bench blueprint-category';

        categoryWrapper.dataset.category=category.id;

        /* Re-open previously open dropdown */
        if(openCategories.has(category.id)){
            categoryWrapper.classList.add('open');
        }

        /* =========================
           HEADER
        ========================= */

        const header=document.createElement('div');

        header.className='workshop-bench-header';

        /* Blueprint image */
        const imagePath=
            `images/blueprints/${category.image}.png`;

        header.innerHTML=`

            <div class="workshop-bench-title">

                <span class="workshop-bench-icon">

                    <img
                        src="${imagePath}"
                        alt="${category.name}"
                        width="70"
                        height="70"
                        onerror="
                            this.style.display='none';
                            this.parentElement.innerHTML='${category.icon||'📜'}'
                        "
                    >

                </span>

                <span>
                    ${category.name}
                </span>

            </div>

            <span class="workshop-bench-arrow">
                ▼
            </span>

        `;

        /* =========================
           CONTENT
        ========================= */

        const content=document.createElement('div');

        content.className='workshop-bench-content';

        const list=document.createElement('ul');

        list.className='category-list';

        /* =========================
           BLUEPRINT ITEMS
        ========================= */

        category.subTasks.forEach(task=>{

            const li=document.createElement('li');

            li.className=
                'subtask-item blueprint-subtask';

            if(savedProgress[task.id]){
                li.classList.add('completed');
            }

            li.innerHTML=`

                <label>

                    <input
                        type="checkbox"
                        data-id="${task.id}"
                        ${savedProgress[task.id]?'checked':''}
                    >

                    <div class="label-wrapper">

                        <span>
                            ${task.label}
                        </span>

                        ${
                            task.location
                            ?
                            `<span class="location-hint">
                                📍 ${task.location}
                            </span>`
                            :
                            ''
                        }

                    </div>

                </label>

            `;

            list.appendChild(li);

        });

        content.appendChild(list);

        categoryWrapper.appendChild(header);

        categoryWrapper.appendChild(content);

        container.appendChild(categoryWrapper);

        /* =========================
           DROPDOWN CLICK
        ========================= */

        header.addEventListener('click',event=>{

            if(event.target.closest('input,button')){
                return;
            }

            event.stopPropagation();

            categoryWrapper.classList.toggle('open');

        });

    });
}

function renderAll(){

    /* =========================
       SCRAPPY
    ========================= */

    const scrappyContainer=
        document.getElementById('scrappy');

    scrappyContainer.innerHTML=`
        <h2 style="color:var(--accent-blue);border-bottom-color:var(--accent-blue)">
            🐔 Scrappy
        </h2>

        <ul class="category-list"></ul>
    `;

    renderList(
        scrappyContainer.querySelector('.category-list'),
        scrappyData,
        'scrappy-item',
        'counter'
    );


    /* =========================
       WORKSHOP
    ========================= */

    renderWorkshop();


/* =========================
   BLUEPRINTS
========================= */

renderBlueprints();

    /* =========================
       OTHER TABS
    ========================= */

    renderQuests();
    renderEnemies();
    renderContainers();

    updateGlobalProgress();
}


/* =========================================
   GLOBAL CLICK HANDLER
========================================= */

document.addEventListener('click',e=>{

    /* =========================================
       WORKSHOP / SCRAPPY COUNTERS
       IMPORTANT:
       Do NOT call renderAll() here.
       This keeps dropdowns open.
    ========================================= */

    if(e.target.classList.contains('counter-button')){

        const counter=
            e.target.closest('.item-counter');

        if(!counter)return;

        const id=
            counter.dataset.id;

        const max=
            parseInt(counter.dataset.max);

        let curr=
            parseInt(savedProgress[id])||0;

        /* PLUS */

        if(
            e.target.dataset.action==='plus' &&
            curr<max
        ){
            curr++;
        }

        /* MINUS */

        else if(
            e.target.dataset.action==='minus' &&
            curr>0
        ){
            curr--;
        }

        /* SAVE */

        savedProgress[id]=curr;

        localStorage.setItem(
            'arcProgress',
            JSON.stringify(savedProgress)
        );

        /* =========================================
           UPDATE COUNTER TEXT
        ========================================= */

        const value=
            counter.querySelector('.counter-value');

        if(value){

            value.textContent=
                `${curr} / ${max}`;

        }

        /* =========================================
           UPDATE BUTTONS
        ========================================= */
        const minusButton=
            counter.querySelector(
                '[data-action="minus"]'
            );
        const plusButton=
            counter.querySelector(
                '[data-action="plus"]'
            );
        if(minusButton){
            minusButton.disabled=
                curr<=0;
        }
        if(plusButton){
            plusButton.disabled=
                curr>=max;

        }
        /* =========================================
           UPDATE COMPLETED STATE
        ========================================= */
        const subtaskItem=
            counter.closest('.subtask-item');
        if(subtaskItem){
            if(curr>=max){
                subtaskItem.classList.add('completed');
            }else{
                subtaskItem.classList.remove('completed');
            }
        }
        /* =========================================
           UPDATE PARENT CATEGORY
        ========================================= */
        const categoryItem=
            counter.closest('.category-item');
        if(categoryItem){
            const counters=
                categoryItem.querySelectorAll('.item-counter');
            let categoryComplete=true;
            counters.forEach(c=>{
                const cValue=
                    parseInt(
                        c.dataset.max
                    );
                const cCurrent=
                    parseInt(
                        savedProgress[c.dataset.id]
                    )||0;
                if(cCurrent<cValue){
                    categoryComplete=false;
                }
            });
            if(categoryComplete){
                categoryItem.classList.add('completed');
            }else{
                categoryItem.classList.remove('completed');
            }
        }
        /* =========================================
           UPDATE GLOBAL PROGRESS ONLY
        ========================================= */
        updateGlobalProgress();
        return;
    }


    /* =========================================
       BLUEPRINT CHECKBOXES
    ========================================= */
    if(
        e.target.type==='checkbox' &&
        !e.target.classList.contains('quest-checkbox')
    ){
        const id=
            e.target.dataset.id;
        savedProgress[id]=
            e.target.checked;
        saveProgress();
        /*
           Keep the blueprint dropdown open.
           Re-render only the Blueprint tab.
        */
        const blueprintContainer=
            document.getElementById('blueprints');
        if(
            blueprintContainer &&
            blueprintContainer.classList.contains('active')
        ){
            renderBlueprints();
        }
        return;
    }
    /* =========================================
       QUEST CHECKBOXES
    ========================================= */

    if(e.target.classList.contains('quest-checkbox')){
        const id=
            e.target.dataset.questId;
        const card=
            e.target.closest('.quest-card');
        card.classList.add('completing');
        setTimeout(()=>{
            savedProgress[id]=true;
            saveProgress();
            renderQuests();
            updateGlobalProgress();
        },500);
        return;
    }


    /* =========================================
       MAIN TABS
    ========================================= */

    if(e.target.classList.contains('tab-button')){

        document.querySelectorAll('.tab-button')
            .forEach(btn=>
                btn.classList.remove('active')
            );

        e.target.classList.add('active');

        document.querySelectorAll('.tab-content')
            .forEach(tab=>
                tab.classList.remove('active')
            );

        document
            .getElementById(e.target.dataset.tab)
            .classList.add('active');

        return;
    }


    /* =========================================
       QUEST PROVIDER FILTERS
    ========================================= */

    if(e.target.classList.contains('provider-filter')){

        document.querySelectorAll('.provider-filter')
            .forEach(btn=>
                btn.classList.remove('active')
            );

        e.target.classList.add('active');

        renderQuestCards(
            e.target.dataset.provider
        );

        return;
    }

});


/* =========================================
   EXPORT
========================================= */

let exportFolderHandle = null;

document.getElementById('exportButton').addEventListener('click', async () => {

    const data = {
        version: "6.0_auto_hide",
        date: new Date().toISOString(),
        progress: savedProgress
    };

    const jsonData = JSON.stringify(data, null, 2);

    /*
     * =========================================
     * FALLBACK FOR BROWSERS WITHOUT
     * FILE SYSTEM ACCESS API
     * =========================================
     */

    const blob = new Blob(
        [jsonData],
        { type: 'application/json' }
    );

    const url =
        URL.createObjectURL(blob);

    const a =
        document.createElement('a');

    a.href = url;

    a.download =
        'blueprint-progress.json';

    document.body.appendChild(a);

    a.click();

    a.remove();

    URL.revokeObjectURL(url);

});


/* =========================================
   IMPORT
========================================= */

document.getElementById('importButton')
.addEventListener('click',()=>{
    document.getElementById('importModal')
        .style.display='block';
});


/* =========================================
   RESET
========================================= */

document.getElementById('resetAllButton')
.addEventListener('click',()=>{
    if(confirm("⚠️ Caution are you sure..  This will Clear Your Progess?")){
        savedProgress={};
        saveProgress();
        renderAll();
    }
});


/* =========================================
   CLOSE EXPORT
========================================= */

document.getElementById('closeExportModal')
.addEventListener('click',()=>{
    document.getElementById('exportModal')
        .style.display='none';
});


/* =========================================
   CLOSE IMPORT
========================================= */

document.getElementById('closeImportModal')
.addEventListener('click',()=>{
    document.getElementById('importModal')
        .style.display='none';
});


/* =========================================
   COPY EXPORT
========================================= */

window.copyExportData=function(){
    const textarea=
        document.getElementById('exportData');
    textarea.select();
    document.execCommand('copy');
    alert('✅ Copy !');
};


/* =========================================
   IMPORT PROGRESS
========================================= */
window.importProgressData=function(){
    const text=
        document.getElementById('importData')
        .value.trim();
    if(!text)
        return alert('❌ Aucune donnée');
    try{
        const data=JSON.parse(text);
        if(data.progress){
            savedProgress=data.progress;
            saveProgress();
            renderAll();
            document.getElementById('importModal')
                .style.display='none';
            document.getElementById('importData')
                .value='';
            alert('✅ Imported !');
        }else{
            alert('❌ Format invalide');
        }
    }catch(e){
        alert('❌ Error: '+e.message);
    }
};
/* =========================================
   MODAL CLICK
========================================= */
window.onclick=e=>{
    if(e.target.classList.contains('modal')){
        e.target.style.display='none';
    }
};
/* =========================================
   START
========================================= */

renderAll();

function exportProgress(){

    const exportData = {
        savedProgress: savedProgress,
        exportedAt: new Date().toISOString()
    };

    const blob = new Blob(
        [JSON.stringify(exportData, null, 2)],
        {type:"application/json"}
    );

    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");

    a.href = url;
    a.download = "blueprint-progress.json";

    document.body.appendChild(a);
    a.click();

    a.remove();
    URL.revokeObjectURL(url);
}
