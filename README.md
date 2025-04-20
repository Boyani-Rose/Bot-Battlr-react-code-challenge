
# Bot Battlr - Galactic Bot Army Manager

A React web app that allows a galactic overlord to browse, enlist, and manage an army of robots. 

## Core Features
1. **View All Bots**: See a list of available bots fetched from a local JSON server.
2. **Enlist Bots**: Click on a bot to add it to your army (no duplicates).
3. **Release Bots**: Click on an enlisted bot to remove it from your army.
4. **Delete Bots**: Permanently discharge a bot by clicking the "x" button.

## Technologies Used
- React (Components, State, Props, Events)
- Fetch API (GET, DELETE requests)
- JSON Server (Mock backend)


## Setup Instructions

### 1. Install Dependencies
Run this command in your project directory:
bash
npm install
2. Start JSON Server
Run the mock backend server
json-server --watch db.json
3. Start React App
In a separate terminal, start the app:
npm start
Project Structure
src/
├── components/
│   ├── BotCard.js       
│   ├── BotCollection.js 
│   └── YourBotArmy.js  
├── App.js               # Main logic (state, fetch)
└── README.md

API Endpoints Used
GET /bots: Fetch all bots.

DELETE /bots/:id: Permanently delete a bot.

How to Use
Browse Bots: Open http://localhost:8001 to see all bots.

Enlist: Click any bot to add it to your army.

Release: Click an enlisted bot to remove it.

Delete: Click the red "x" button to discharge a bot forever.
