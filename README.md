# 🎮 Design Quest

**Master UI/UX Design · Level Up Your Skills**

A gamified UI/UX learning experience with an AI Game Master powered by Qwen. Progress through 4 levels, complete modules, tackle real-world quests, and build your design portfolio.

## 🌐 [Live Server](https://sethski.github.io/Design-Quest-UI-UX-Learning-HUB/)

Try it now at: **[https://sethski.github.io/Design-Quest-UI-UX-Learning-HUB/](https://sethski.github.io/Design-Quest-UI-UX-Learning-HUB/)**

## ✨ Features

- 🌱 **4 Progressive Levels**: From Padawan to God Mode
- 📚 **20+ Interactive Modules**: Color theory, typography, Figma, accessibility, and more
- ⚔️ **Real-World Quests**: Build actual portfolio projects
- 🧠 **Knowledge Quizzes**: Test your understanding
- 🤖 **AI Game Master**: Get personalized guidance and feedback
- 💾 **Progress Saving**: Your journey is automatically saved
- 🎨 **Beautiful UI**: Cyberpunk-inspired design system

## 🚀 Quick Start

### Installation

```bash
npm install
```

### Development

**Run frontend only:**
```bash
npm run dev
```

**Run both frontend and backend (for AI features):**
```bash
npm run dev:all
```

Open your browser to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The production build will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## 📖 How to Play

1. **Enter Your Name**: Start by creating your designer identity
2. **Chat with Game Master**: Ask questions, get guidance, learn concepts
3. **Complete Modules**: Study topics and mark them complete to earn XP
4. **Take on Quests**: Build real projects for your portfolio
5. **Pass Quizzes**: Test your knowledge and earn bonus XP
6. **Level Up**: Unlock new levels and advanced topics

## 🎯 Learning Path

### Level 1: The Padawan (0-2,500 XP)
- Visual Hierarchy & Eye Training
- Color Theory Mastery
- Typography That Slaps
- Laws of UX — The Sacred Texts
- Figma Foundations

### Level 2: The Designer (2,500-5,000 XP)
- User Flows & Information Architecture
- Accessibility & WCAG 2.1
- Wireframing & Lo-Fi Prototyping
- User Research Fundamentals
- Figma Intermediate Power

### Level 3: The Architect (5,000-7,500 XP)
- Design Systems Architecture
- Psychology of Design
- Micro-interactions & Motion
- Data-Driven Design
- Figma Advanced Techniques

### Level 4: God Mode (7,500-10,000 XP)
- AI in Design — The Real Story
- Design Ops & Process Design
- Mentorship & Design Leadership
- Breaking the Rules
- Figma God-Tier Mastery

## 🔧 Technology Stack

- **React 19**: Modern UI library
- **Vite 8**: Lightning-fast build tool
- **Qwen AI**: Alibaba's Qwen via OpenRouter for the Game Master
- **Local Storage**: Progress persistence
- **Express**: Backend API server

## 📝 AI Configuration

The Game Master uses **Qwen** via **OpenRouter**:

- **qwen/qwen-2.5-72b-instruct** - Best quality (recommended)
- **qwen/qwen-2-7b-instruct** - Faster, more economical
- **qwen/qwen-2.5-coder-32b-instruct** - Specialized for code

Get your OpenRouter API key at https://openrouter.ai/ and configure locally in `.env` for development. For the live site we use GitHub Actions to inject the key at build time via repository secrets.

To enable the AI on the deployed **Live Server** (GitHub Pages), add the following repository secrets in GitHub:

- `QWEN_API_KEY` — your OpenRouter API key
- `QWEN_BASE_URL` — (optional) API URL, default: `https://openrouter.ai/api/v1/chat/completions`
- `QWEN_MODEL` — (optional) model name, default: `qwen/qwen-2.5-72b-instruct`

How to add a secret:

1. Go to your repository on GitHub → Settings → Secrets and variables → Actions → New repository secret
2. Add `QWEN_API_KEY` and the key value
3. (Optional) add `QWEN_BASE_URL` and `QWEN_MODEL` if you want to override defaults

The GitHub Actions workflow will use these secrets during the build step to bake the API key into the production bundle. Note: exposing an API key client-side is inherently less secure — consider hosting the backend on a secure server and pointing the frontend to that URL if you require stronger protection.

> **The app works without AI!** All study content is built-in. AI provides optional guidance and encouragement.

## 🎨 Design Philosophy

Design Quest combines:
- **Gamification**: XP, levels, quests, achievements
- **Real Learning**: Actual UI/UX knowledge and Figma skills
- **AI Mentorship**: Personalized guidance when you need it
- **Portfolio Building**: Real projects you can showcase

---

**Ready to begin your design journey? May your kerning be tight and your contrast ratios be accessible. ⚡**
