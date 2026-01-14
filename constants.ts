import { Product, ProductType, DiscordConfig } from './types';

export const DISCORD_CONFIG: DiscordConfig = {
  serverUrl: 'https://discord.gg/k68VPhdjwF',
  adminDmUrl: 'https://discord.com/users/1425689088761266380'
};

export const LOGO_URL = "file:///C:/Users/Lenovo/Downloads/ChatGPT_Image_Jan_13__2026__09_50_01_AM-removebg-preview.png";

export const PANELS: Product[] = [
  {
    id: 'p1',
    name: 'Internal Panel',
    description: 'Undetected internal memory manipulation tool with seamless injection.',
    price: '$49.99',
    type: ProductType.PANEL,
    features: ['Aimbot', 'ESP', 'Stream Proof'],
    imageGradient: 'from-cyan-500 to-blue-600',
    detailedFeatures: `FUNCTIONS:
AIMBOT VISIBLE
AIMSILENT (WORKING WITH AWM)
REAL AIMBOT
SPAWN KILL
Pull 360°
UP PLAYER
TELEKILL
NO RECOIL
SNIPER SCOPE
SNIPER SWITCH
IGNORE KNOCKED
STREAM MODE
SPEED HACK
CAMERA RIGHT
SHAKE KILL
WALL HACK
GLITCH FIRE
VISION HACK
NO RELOAD
FAST FIRE
FLY HACK
ETC.

ESP FUNCTIONS:
ESP TRACKER
ESP NAME
ESP LINE
ESP BOX
ESP SKELETON
ESP DISTANCE
ESP HEALTH ADDED`
  },
  {
    id: 'p2',
    name: 'External Panel',
    description: 'High-performance external overlay optimized for safety and speed.',
    price: '$39.99',
    type: ProductType.PANEL,
    features: ['Overlay ESP', 'Radar', 'Safe Mode'],
    imageGradient: 'from-purple-500 to-indigo-600',
    detailedFeatures: `FEATURES:-

• AIMBOT NECK
• AIMBOT AI
• NO RECOIL
• SNIPER AIM
• SNIPER SCOPE
• VSK SCOPE
• SNIPER SWITCH
• SNIPER SCOPE TRACKING
• SNIPER DELAY FIX
• VISION HACK
• GLITCH FIRE
• BLACK SKY

• WALL HACK (On/Off)
• SPEED HACK (On/Off)
• CAMERA RIGHT (On/Off)
• GLITCH FIRE
• CHAMS MENU
• CHAMS 64BIT
• CHAMS WHITE

NOTE:-
AVAILABLE PAID PROJECTS,
NO MATCH LIMIT,
NO BAN BLACKLIST`
  },
  {
    id: 'p3',
    name: 'Internal Maxx',
    description: 'The ultimate internal solution with advanced rage and legit features.',
    price: '$79.99',
    type: ProductType.PANEL,
    features: ['Rage Config', 'Skin Changer', 'Cloud Configs'],
    imageGradient: 'from-fuchsia-500 to-pink-600'
  },
  {
    id: 'p4',
    name: 'PC Logo Bypass',
    description: 'Bypass standard anti-cheat logos and splash screens effectively.',
    price: '$29.99',
    type: ProductType.PANEL,
    features: ['HWID Spoofer', 'Cleaner', 'Logo Skip'],
    imageGradient: 'from-emerald-400 to-green-600',
    detailedFeatures: `Features of Bypass Emulator : -

・There Are No Bot Enemies inside Ranked Matches.
・You Will Not Be With Any Hacker in A Match [ This Way You Can Achieve A High Rank in A Short Time ].
・You Only Play With Phone Owners And There Are More Than 50 People During A Match.
・You Can Combine it With Other Functions Such As Aimbot, Sniper And Many More Functions.
・Safe in All Ranked Modes And On All Servers With No Match Limits.`
  },
  {
    id: 'p5',
    name: 'iOS Panel',
    description: 'Mobile dominance. Root and non-root support available.',
    price: '$40.00',
    type: ProductType.PANEL,
    features: ['Touch Simulation', 'ESP', 'No Recoil'],
    imageGradient: 'from-slate-400 to-slate-600',
    detailedFeatures: `👑 IOS PANEL — 

❌ Functions

❌ Aimbot Head

❌ Sniper Aim

❌ Sniper Switch

❌ Chams Menu

❌ Chams Red


👑 Prices

✅ Permanent: $40

👑 How to Buy`
  },
  {
    id: 'p6',
    name: 'Android Panel',
    description: 'Advanced APK modification and injection for Android devices.',
    price: '$40.00',
    type: ProductType.PANEL,
    features: ['Injector', 'Mod Menu', 'Anti-Ban'],
    imageGradient: 'from-lime-400 to-green-500'
  },
  {
    id: 'p7',
    name: 'Custom Panel',
    description: 'Tailor-made solutions for specific needs and private builds.',
    price: 'Contact',
    type: ProductType.PANEL,
    features: ['Private Build', 'Unique Signature', '24/7 Support'],
    imageGradient: 'from-amber-400 to-orange-600'
  }
];

export const COURSES: Product[] = [
  {
    id: 'c1',
    name: 'Coding Fundamentals',
    description: 'Learn C++ and memory management for game hacking.',
    price: '$120.00',
    type: ProductType.COURSE,
    features: ['C++ Basics', 'Memory Reading', 'Pointers'],
    imageGradient: 'from-blue-400 to-cyan-400'
  },
  {
    id: 'c2',
    name: 'Panel Cracking',
    description: 'Master the art of reverse engineering authentication systems.',
    price: '$150.00',
    type: ProductType.COURSE,
    features: ['Assembly', 'Debuggers', 'Auth Bypass'],
    imageGradient: 'from-red-500 to-rose-600'
  },
  {
    id: 'c3',
    name: 'Custom Technical',
    description: 'Deep dive into kernel drivers and system architecture.',
    price: '$200.00',
    type: ProductType.COURSE,
    features: ['Kernel Drivers', 'System Internals', 'Security'],
    imageGradient: 'from-violet-500 to-purple-800'
  }
];