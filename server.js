import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import fs from 'fs';
import path from 'path';

const app = express();
app.use(cors());
app.use(express.json());

// Qwen AI via OpenRouter
const QWEN_CONFIG = {
  apiKey: process.env.QWEN_API_KEY,
  model: process.env.QWEN_MODEL || 'qwen/qwen-2.5-72b-instruct',
  baseUrl: process.env.QWEN_BASE_URL || 'https://openrouter.ai/api/v1/chat/completions'
};

// In-memory user database (for demo - use real DB in production)
const USERS_FILE = './users-data.json';
let usersDB = {};

// Load users from file
try {
  if (fs.existsSync(USERS_FILE)) {
    usersDB = JSON.parse(fs.readFileSync(USERS_FILE, 'utf8'));
    console.log(`📂 Loaded ${Object.keys(usersDB).length} user accounts`);
  }
} catch (error) {
  console.log('📂 Starting with fresh user database');
  usersDB = {};
}

// Save users to file
function saveUsers() {
  try {
    fs.writeFileSync(USERS_FILE, JSON.stringify(usersDB, null, 2));
  } catch (error) {
    console.error('Error saving users:', error);
  }
}

// User Authentication & Progress API
app.post('/api/auth/login', async (req, res) => {
  try {
    const { username } = req.body;
    
    if (!username || username.trim().length < 2) {
      return res.status(400).json({ error: 'Username must be at least 2 characters' });
    }

    const normalizedUsername = username.trim().toLowerCase();
    
    // Check if user exists
    if (usersDB[normalizedUsername]) {
      // Existing user - return their progress
      return res.json({
        success: true,
        isNewUser: false,
        username: usersDB[normalizedUsername].username,
        progress: usersDB[normalizedUsername].progress
      });
    }
    
    // New user - create account
    usersDB[normalizedUsername] = {
      username: username.trim(),
      createdAt: new Date().toISOString(),
      lastActive: new Date().toISOString(),
      progress: null // No progress yet
    };
    
    saveUsers();
    
    res.json({
      success: true,
      isNewUser: true,
      username: username.trim(),
      progress: null
    });
  } catch (error) {
    console.error('Auth error:', error);
    res.status(500).json({ error: 'Authentication failed' });
  }
});

// Save user progress
app.post('/api/progress/save', async (req, res) => {
  try {
    const { username, progress } = req.body;
    
    if (!username) {
      return res.status(400).json({ error: 'Username required' });
    }

    const normalizedUsername = username.toLowerCase();
    
    if (!usersDB[normalizedUsername]) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Update progress
    usersDB[normalizedUsername].progress = progress;
    usersDB[normalizedUsername].lastActive = new Date().toISOString();
    
    saveUsers();
    
    res.json({ 
      success: true, 
      message: 'Progress saved',
      lastSaved: usersDB[normalizedUsername].lastActive
    });
  } catch (error) {
    console.error('Save error:', error);
    res.status(500).json({ error: 'Failed to save progress' });
  }
});

// Get user progress
app.get('/api/progress/:username', async (req, res) => {
  try {
    const normalizedUsername = req.params.username.toLowerCase();
    
    if (!usersDB[normalizedUsername]) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json({
      success: true,
      username: usersDB[normalizedUsername].username,
      progress: usersDB[normalizedUsername].progress,
      lastActive: usersDB[normalizedUsername].lastActive
    });
  } catch (error) {
    console.error('Load error:', error);
    res.status(500).json({ error: 'Failed to load progress' });
  }
});

// AI endpoint - Qwen 3.5
app.post('/api/chat', async (req, res) => {
  try {
    const { message, playerName, context } = req.body;
    
    if (!QWEN_CONFIG.apiKey) {
      return res.status(500).json({ error: 'Qwen API key not configured' });
    }

    const systemPrompt = `You are the GAME MASTER of "Design Quest". Speak like a witty senior designer + RPG dungeon master. Mentoring ${playerName}.

YOUR PERSONALITY:
- Direct, no-nonsense, but encouraging
- Use gaming terminology (XP, quest, level up)
- Mix design expertise with RPG energy
- SHORT responses (3-6 sentences). Be punchy.
- Drop real design wisdom — cite Hick's Law, Fogg's Model, WCAG, Figma

Keep responses under 150 words. Context: ${context}`;

    const response = await fetch(QWEN_CONFIG.baseUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${QWEN_CONFIG.apiKey}`,
        'HTTP-Referer': 'http://localhost:5173',
        'X-Title': 'Design Quest'
      },
      body: JSON.stringify({
        model: QWEN_CONFIG.model,
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: message }
        ],
        max_tokens: 300,
        temperature: 0.8
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('API Error Response:', errorText);
      throw new Error(`API returned ${response.status}: ${errorText}`);
    }

    const data = await response.json();
    
    if (data.error) {
      throw new Error(data.error.message || JSON.stringify(data.error));
    }

    res.json({ 
      reply: data.choices?.[0]?.message?.content || 'The Game Master is thinking...',
      provider: 'qwen'
    });
  } catch (error) {
    console.error('AI Error:', error);
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`🚀 Design Quest API running on http://localhost:${PORT}`);
  console.log(`🤖 AI Provider: Qwen via OpenRouter`);
  console.log(`📦 Model: ${QWEN_CONFIG.model}`);
  console.log(`🔑 API Key: ${QWEN_CONFIG.apiKey ? '✓ Configured' : '✗ Missing'}`);
});
