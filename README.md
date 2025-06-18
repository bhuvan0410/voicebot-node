📄 README.md (for GitHub)
Here's a ready-to-paste README.md for your GitHub repo:

markdown
Copy
Edit
# 🧠 VoiceBot – Talk to Bhuvan

A friendly voice assistant built using OpenAI's ChatGPT API + Web Speech API. Created for the Home.LLC AI Agent Interview Assessment (Stage 1).

## 🔗 Live Demo

👉 [https://voicebot-node.onrender.com](https://voicebot-node.onrender.com)  
*(Note: Free server may take ~30 seconds to wake up)*

## 🚀 Features

- 🎙️ Voice input via microphone (SpeechRecognition API)
- 🤖 Personalized responses using ChatGPT API
- 🗣️ Bot speaks back using Speech Synthesis
- 💬 Friendly, human-like tone styled to sound like me (Bhuvan)
- 🪄 Deployed using Node.js + Express + Render

## 💻 Tech Stack

- HTML, CSS, JavaScript
- Node.js + Express
- OpenAI ChatGPT API
- Web Speech API (STT & TTS)
- Hosted on Render

## 📸 Screenshots

output : <img width="960" alt="voicebotoutput" src="https://github.com/user-attachments/assets/c7a7fe14-0319-4f5b-bd1e-98c6818b4a4d" />


## 📁 Folder Structure

voicebot-node/
├── public/
│ ├── index.html
│ ├── style.css
│ └── script.js
├── server.js
├── .env (not committed)
├── package.json
└── README.md

perl
Copy
Edit

## 🔐 Environment Variables

Add your OpenAI API key in a `.env` file:

```bash
OPENAI_API_KEY=your_openai_api_key_here
📦 Setup Locally
bash
Copy
Edit
git clone https://github.com/bhuvan0410/voicebot-node.git
cd voicebot-node
npm install
npm start
Then visit http://localhost:3000
```
