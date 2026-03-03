# Design Quest - Setup Instructions

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Qwen AI (Optional - for AI Game Master)

The backend uses **Qwen** via **OpenRouter**. Edit `.env` to add your API key:

```env
QWEN_API_KEY=your-openrouter-api-key-here
QWEN_MODEL=qwen/qwen-2.5-72b-instruct
QWEN_BASE_URL=https://openrouter.ai/api/v1/chat/completions
```

**Available Qwen Models on OpenRouter:**
- `qwen/qwen-2.5-72b-instruct` (recommended - best quality)
- `qwen/qwen-2-7b-instruct` (faster, cheaper)
- `qwen/qwen-2.5-coder-32b-instruct` (specialized for code)

**To get OpenRouter API key:**
1. Visit https://openrouter.ai/
2. Sign up and get your API key
3. Add credits to your account

> **Note:** The app works WITHOUT an AI key! You'll get fallback messages. The core study content is built-in.

### 3. Run the App

**Option A: Frontend Only (Study content works, AI is optional)**
```bash
npm run dev
```
Open http://localhost:5174

**Option B: Frontend + Backend (Full AI support)**

Terminal 1:
```bash
npm run server
```

Terminal 2:
```bash
npm run dev
```

## 🎮 How It Works

### Study Modules
- Click any module → Click **📖 STUDY**
- Read actual design content (no chatbot needed!)
- Complete exercises in Figma
- Mark as complete to earn XP

### AI Game Master (Optional)
- Lives in the right sidebar
- Gives encouragement, tips, and feedback
- Requires backend server + API key
- **Not required for learning** — study content is self-contained

### Backend API
- Lives in `server.js`
- Uses **Qwen** via **OpenRouter**
- OpenAI-compatible API format

**Configuration:**
Edit `.env` to set your OpenRouter API key and model:
```env
QWEN_API_KEY=your-openrouter-key-here
QWEN_MODEL=qwen/qwen-2.5-72b-instruct
QWEN_BASE_URL=https://openrouter.ai/api/v1/chat/completions
```

## 📁 Structure

```
src/
  DesignQuest.jsx    - Main game component
  studyContent.js    - All study materials (edit to add more!)
  storage.js         - LocalStorage wrapper
  
server.js            - Backend API (swappable AI provider)
.env                 - API keys
```

## 🎨 Adding More Content

Edit `src/studyContent.js`:
```js
export const STUDY_CONTENT = {
  "1-1": {
    title: "Your Module",
    sections: [...],
    keyTakeaways: [...],
    resources: [...]
  }
}
```

## 🔧 Troubleshooting

**"Backend API error"** → Run `npm run server` in a separate terminal

**"CORS error"** → Make sure backend is on http://localhost:3001

**No AI responses** → Check your API key in `.env` (or just use without AI!)
