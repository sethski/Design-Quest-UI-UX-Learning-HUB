import { useState, useEffect, useRef, useCallback } from "react";
import { STUDY_CONTENT } from "./studyContent";

// ─── GAME DATA ────────────────────────────────────────────────────────────────
const LEVELS = [
  {
    id: 1, slug: "padawan", title: "THE PADAWAN", subtitle: "Eye Training & Fundamentals",
    color: "#00f5a0", colorDim: "rgba(0,245,160,0.12)", xpRequired: 0, xpMax: 2500,
    emoji: "🌱", unlocked: true,
    lore: "You know nothing. And that's beautiful. Welcome to the dojo.",
    modules: [
      { id: "1-1", title: "Visual Hierarchy & Eye Training", xp: 300, emoji: "👁", topics: ["Gestalt Laws", "Contrast", "Spacing", "Balance"], done: false },
      { id: "1-2", title: "Color Theory Mastery", xp: 300, emoji: "🎨", topics: ["HSL Model", "Palettes", "60/30/10 Rule", "Dark Mode"], done: false },
      { id: "1-3", title: "Typography That Slaps", xp: 300, emoji: "✍️", topics: ["Type Scale", "Font Pairing", "Readability", "Hierarchy"], done: false },
      { id: "1-4", title: "Laws of UX — The Sacred Texts", xp: 300, emoji: "📜", topics: ["Hick's Law", "Fitts's Law", "Jakob's Law", "Miller's Law"], done: false },
      { id: "1-5", title: "Figma Foundations", xp: 500, emoji: "🔷", topics: ["Frames", "Auto Layout", "Components", "Styles", "Prototyping"], done: false, isFigma: true },
    ],
    quest: {
      title: "Design a Recipe App Screen",
      description: "Build a single mobile screen (375×812) for any recipe. Apply correct typography, a real color palette, proper spacing, and at least one reusable component. From scratch. In Figma. No templates.",
      xpReward: 800,
      practices: [
        {
          id: "1-p1",
          title: "Create a Color Palette",
          description: "Create a 3-color palette using 60/30/10 rule. Choose colors with proper contrast (4.5:1 minimum). Test on background and text. Document hex codes.",
          instructions: [
            "Pick a primary color (60% usage)",
            "Pick a secondary color (30% usage)",
            "Pick an accent color (10% usage)",
            "Test contrast ratios on WebAIM checker",
            "Save hex codes in Figma or notes"
          ],
        },
        {
          id: "1-p2",
          title: "Build a Typography Scale",
          description: "Create a type scale with 4 sizes: H1, H2, Body, Caption. Use max 2 font families. Ensure readable line heights (1.5 for body text).",
          instructions: [
            "Choose 1-2 Google Fonts",
            "Define H1 size (32-48px)",
            "Define H2 size (24-32px)",
            "Define Body size (16-18px)",
            "Set line heights: 1.2 for headings, 1.5 for body"
          ],
        },
        {
          id: "1-p3",
          title: "Design the Recipe Card",
          description: "Build a mobile screen (375×812) with a hero image, title, ingredients list, and steps. Apply your color palette and typography. Use proper spacing (8pt grid).",
          instructions: [
            "Create a 375×812 frame in Figma",
            "Add hero image placeholder (375×200)",
            "Add recipe title using H1",
            "Create ingredients section with list",
            "Add cooking steps with numbers",
            "Use 8pt grid for all spacing"
          ],
        },
      ],
    },
    quiz: [
      { q: "What's the minimum WCAG AA contrast ratio for normal body text?", options: ["3:1", "4.5:1", "7:1", "2:1"], answer: 1 },
      { q: "Which Gestalt principle explains why we see clouds as shapes?", options: ["Proximity", "Continuity", "Closure", "Similarity"], answer: 2 },
      { q: "In Figma, what's the core difference between a Group and a Frame?", options: ["Frames have fill, groups don't", "Frames act as containers with constraints, groups don't", "Groups are for components only", "There is no difference"], answer: 1 },
      { q: "The 60/30/10 rule refers to what?", options: ["Font sizing", "Color distribution", "Grid columns", "Animation timing"], answer: 1 },
      { q: "Hick's Law states that...", options: ["The more options, the faster decisions", "Decision time increases with number of choices", "Users prefer 3 options", "Menus should scroll"], answer: 1 },
    ]
  },
  {
    id: 2, slug: "designer", title: "THE DESIGNER", subtitle: "Patterns, Research & Wireframing",
    color: "#7c6fff", colorDim: "rgba(124,111,255,0.12)", xpRequired: 2500, xpMax: 5000,
    emoji: "⚡", unlocked: false,
    lore: "Skills without context are just art school. You're a problem-solver now.",
    modules: [
      { id: "2-1", title: "User Flows & Information Architecture", xp: 350, emoji: "🗺", topics: ["User Flows", "Sitemaps", "Card Sorting", "Mental Models"], done: false },
      { id: "2-2", title: "Accessibility & WCAG 2.1", xp: 350, emoji: "♿", topics: ["WCAG AA/AAA", "Screen Readers", "Focus States", "Color Blindness"], done: false },
      { id: "2-3", title: "Wireframing & Lo-Fi Prototyping", xp: 350, emoji: "📐", topics: ["Lo-Fi Wireframes", "Sketching", "Content Hierarchy", "UI Patterns"], done: false },
      { id: "2-4", title: "User Research Fundamentals", xp: 350, emoji: "🔬", topics: ["Interviews", "Surveys", "Affinity Mapping", "Usability Testing"], done: false },
      { id: "2-5", title: "Figma Intermediate Power", xp: 600, emoji: "🔷", topics: ["Variants", "Interactive Prototypes", "Design Tokens", "Dev Mode"], done: false, isFigma: true },
    ],
    quest: {
      title: "Redesign a Broken App",
      description: "Pick any app you hate (banking apps are prime targets). Run 3 informal user interviews, find 3 core pain points, wireframe a solution in Figma, and present it as a proper before/after case study.",
      xpReward: 750,
      practices: [
        {
          id: "2-p1",
          title: "Conduct User Interviews",
          description: "Interview 3 people who use the app. Ask about pain points, frustrations, and what they wish was different. Take notes.",
          instructions: [
            "Pick an app with known UX issues",
            "Find 3 people who use it regularly",
            "Ask: What's most frustrating about this app?",
            "Ask: What takes too long to do?",
            "Document 3 core pain points"
          ],
        },
        {
          id: "2-p2",
          title: "Create User Flow Diagram",
          description: "Map out the user journey for one key task in the app. Show current (broken) flow and your proposed (fixed) flow.",
          instructions: [
            "Choose 1 key task (e.g., transfer money)",
            "Draw current flow with pain points marked",
            "Draw improved flow with solutions",
            "Use Figma or FigJam for flowchart",
            "Label each step clearly"
          ],
        },
        {
          id: "2-p3",
          title: "Wireframe the Solution",
          description: "Create lo-fi wireframes (black & white, simple shapes) for 3-5 key screens that fix the pain points you identified.",
          instructions: [
            "Start with low-fidelity (boxes & text)",
            "Design 3-5 screens addressing pain points",
            "Focus on layout, not visuals",
            "Add labels explaining changes",
            "Connect screens to show flow"
          ],
        },
      ],
    },
    quiz: [
      { q: "What is the 8pt grid system?", options: ["Fonts must be 8pt", "All spacing/sizing uses multiples of 8", "8 columns per layout", "8 breakpoints minimum"], answer: 1 },
      { q: "Card sorting is used to...", options: ["Test visual design", "Understand how users categorize information", "Measure page load", "Rank typography"], answer: 1 },
      { q: "In Figma, Component Variants allow you to...", options: ["Group multiple components with different states", "Add animations", "Export multiple sizes", "Share with developers"], answer: 0 },
      { q: "A mental model in UX is...", options: ["A user's beliefs about how a system works", "A designer's wireframe", "A research document", "An AI-generated prototype"], answer: 0 },
      { q: "WCAG stands for...", options: ["Web Content Accessibility Guidelines", "World Class App Guide", "Web Component Architecture Group", "None of the above"], answer: 0 },
    ]
  },
  {
    id: 3, slug: "architect", title: "THE ARCHITECT", subtitle: "Psychology, Systems & Complex Problems",
    color: "#ff6b35", colorDim: "rgba(255,107,53,0.12)", xpRequired: 5000, xpMax: 7500,
    emoji: "🏗", unlocked: false,
    lore: "You've stopped making screens. Now you make systems. Welcome to the deep end.",
    modules: [
      { id: "3-1", title: "Design Systems Architecture", xp: 400, emoji: "🧪", topics: ["Atomic Design", "Token Architecture", "Component Docs", "Versioning"], done: false },
      { id: "3-2", title: "Psychology of Design", xp: 400, emoji: "🧠", topics: ["Cognitive Load", "Fogg Model", "Dark Patterns", "Persuasive UX"], done: false },
      { id: "3-3", title: "Micro-interactions & Motion", xp: 400, emoji: "💃", topics: ["Easing Curves", "State Transitions", "Loading States", "Smart Animate"], done: false },
      { id: "3-4", title: "Data-Driven Design", xp: 400, emoji: "📊", topics: ["A/B Testing", "Heatmaps", "Funnels", "Design KPIs"], done: false },
      { id: "3-5", title: "Figma Advanced Techniques", xp: 700, emoji: "🔷", topics: ["Variables & Modes", "Advanced Prototyping", "Branching", "Team Libraries"], done: false, isFigma: true },
    ],
    quest: {
      title: "Full Product Redesign",
      description: "Pick a real SaaS (Notion, Jira, anything). Do a competitive audit, interview 5 real users, define 3 core UX problems, build a complete design system in Figma, and deliver a fully interactive prototype with documented design decisions.",
      xpReward: 1000,
      practices: [
        {
          id: "3-p1",
          title: "Competitive Audit",
          description: "Research 3 competitors in the same space. Document their strengths, weaknesses, and unique features. Create a comparison table.",
          instructions: [
            "Choose 3 similar products",
            "Screenshot key features from each",
            "List 3 strengths per competitor",
            "List 3 weaknesses per competitor",
            "Create comparison table in Figma"
          ],
        },
        {
          id: "3-p2",
          title: "Build a Design System",
          description: "Create a mini design system with colors, typography, spacing tokens, and 5 reusable components (button, input, card, etc).",
          instructions: [
            "Define color tokens (primary, secondary, neutral)",
            "Define type scale (6 sizes)",
            "Define spacing scale (4, 8, 16, 24, 32, 48px)",
            "Create 5 components with variants",
            "Document usage in a Figma page"
          ],
        },
        {
          id: "3-p3",
          title: "Interactive Prototype",
          description: "Design 10+ screens showing core user flows. Add interactive prototyping with proper transitions and micro-interactions.",
          instructions: [
            "Design 10+ screens using your system",
            "Add prototyping connections",
            "Use Smart Animate for transitions",
            "Add hover states and feedback",
            "Test the full flow end-to-end"
          ],
        },
      ],
    },
    quiz: [
      { q: "What is Fogg's Behavior Model?", options: ["Behavior = Motivation × Ability × Prompt", "Behavior = Design + Color + Copy", "A UX testing method", "A typography scale"], answer: 0 },
      { q: "Atomic Design breaks UI into...", options: ["Pages, screens, buttons", "Atoms, Molecules, Organisms, Templates, Pages", "Components, views, containers", "None of the above"], answer: 1 },
      { q: "Figma Variables (vs Styles) are primarily used for...", options: ["Font sizes only", "Multi-mode theming (light/dark, brand tokens)", "Exporting assets", "Animations"], answer: 1 },
      { q: "A/B testing in design means...", options: ["Testing 2 fonts", "Testing 2 versions to see which performs better with real users", "Testing on 2 devices", "Accessibility testing"], answer: 1 },
      { q: "Cognitive load in UX refers to...", options: ["Server processing time", "The mental effort required to use an interface", "File size of designs", "Animation complexity"], answer: 1 },
    ]
  },
  {
    id: 4, slug: "godmode", title: "GOD MODE", subtitle: "Innovation, Leadership & Future",
    color: "#ffd700", colorDim: "rgba(255,215,0,0.12)", xpRequired: 7500, xpMax: 10000,
    emoji: "👑", unlocked: false,
    lore: "Design is no longer what you do — it's how you see the world.",
    modules: [
      { id: "4-1", title: "AI in Design — The Real Story", xp: 450, emoji: "🤖", topics: ["Figma AI", "AI Prototyping", "Prompt Design", "Ethics of AI UX"], done: false },
      { id: "4-2", title: "Design Ops & Process Design", xp: 450, emoji: "⚙️", topics: ["Design Ops", "Design Principles", "Critique Culture", "Tooling Strategy"], done: false },
      { id: "4-3", title: "Mentorship & Design Leadership", xp: 450, emoji: "🎓", topics: ["Running Critiques", "Influence w/o Authority", "Design Vision", "Career Ladders"], done: false },
      { id: "4-4", title: "Breaking the Rules", xp: 450, emoji: "🔥", topics: ["Anti-patterns as Features", "Brand-led UX", "Experimental UI", "Emotion-first Design"], done: false },
      { id: "4-5", title: "Figma God-Tier Mastery", xp: 700, emoji: "🔷", topics: ["Figma API", "Plugin Development", "Multi-team Libraries", "Design at Scale"], done: false, isFigma: true },
    ],
    quest: {
      title: "⚡ BOSS BATTLE: Solve a Global Problem",
      description: "Pick a real, messy, global problem — climate, mental health, financial literacy. Research it. Design a complete digital product. Build a design system. Build a 20+ screen prototype. Write a case study. Post publicly. This is your legacy project.",
      xpReward: 2500,
      practices: [
        {
          id: "4-p1",
          title: "Research & Problem Definition",
          description: "Choose a global problem. Research 10+ data points. Interview 5+ users. Create a problem brief defining who, what, why, and how you'll solve it.",
          instructions: [
            "Pick a meaningful problem space",
            "Gather 10+ statistics/research data",
            "Interview 5+ potential users",
            "Define target audience persona",
            "Write 1-page problem brief"
          ],
        },
        {
          id: "4-p2",
          title: "Complete Design System",
          description: "Build a production-ready design system with tokens, components, patterns, and documentation. Include accessibility guidelines.",
          instructions: [
            "Create design tokens (colors, spacing, typography)",
            "Build 15+ components with variants",
            "Add accessibility annotations",
            "Document usage guidelines",
            "Include do's and don'ts examples"
          ],
        },
        {
          id: "4-p3",
          title: "Full Product & Case Study",
          description: "Design 20+ screens with advanced prototyping. Write a complete case study with problem, process, solution, and impact. Publish it.",
          instructions: [
            "Design 20+ screens covering all flows",
            "Add advanced prototyping & animations",
            "Write case study (2000+ words)",
            "Include before/after comparisons",
            "Publish on Behance/portfolio site"
          ],
        },
      ],
    },
    quiz: [
      { q: "Which best describes Design Ops?", options: ["Making design look good", "Scaling design processes, tools and culture across teams", "A Figma plugin", "A hiring framework"], answer: 1 },
      { q: "What makes a dark pattern unethical?", options: ["It uses dark colors", "It manipulates users against their own interests", "It has bad contrast", "It's slow to load"], answer: 1 },
      { q: "The Figma API enables you to...", options: ["Generate AI images", "Programmatically read/write to Figma files", "Export to all formats", "Auto-fix accessibility"], answer: 1 },
      { q: "'Influence without authority' means...", options: ["Being a manager", "Shaping decisions through expertise and trust, not title", "Ignoring stakeholders", "Having a big team"], answer: 1 },
      { q: "When should you break a UX rule?", options: ["Never", "When you don't know the rule", "When you fully understand the rule and have strong evidence for why breaking it serves users better", "Whenever you feel like it"], answer: 2 },
    ]
  }
];

// ─── INITIAL STATE ────────────────────────────────────────────────────────────
const INITIAL_STATE = {
  playerName: "",
  xp: 0,
  level: 1,
  completedModules: [],
  completedQuests: [],
  completedQuizzes: [],
  chatHistory: [],
  activeView: "character-select",
  activeLevel: null,
  activeModule: null,
  currentQuiz: null,
  currentModuleQuiz: null, // For module-specific quizzes
  quizIndex: 0,
  quizScore: 0,
  quizAnswers: [], // Track answers with explanations
  notifications: [],
  streak: 0,
  lastActive: null,
  // Quest practice states
  activeQuest: null,
  completedPractices: [], // Array of practice IDs (e.g., ["1-p1", "1-p2"])
  practiceSubmissions: {}, // { "1-p1": { link: "", image: "" }, ... }
};

// ─── SERVER API HELPERS ──────────────────────────────────────────────────────
async function loginUser(username) {
  const isLocal = typeof window !== 'undefined' && (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1');
  try {
    if (isLocal) {
      try {
        const response = await fetch('http://localhost:3001/api/auth/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ username })
        });
        const data = await response.json();
        return data;
      } catch (err) {
        // Backend unreachable — fall back to local-only auth
        console.warn('Local backend unreachable, falling back to localStorage auth', err);
      }
    }

    // Production / static hosting OR backend unreachable: fallback to localStorage-only auth
    const saved = await loadStateLocal();
    if (saved && saved.playerName && saved.playerName.toLowerCase() === username.trim().toLowerCase()) {
      return { success: true, isNewUser: false, username: saved.playerName, progress: saved };
    }

    // Create a local-only account and persist to localStorage
    const initState = { ...INITIAL_STATE, playerName: username.trim() };
    await saveStateLocal(initState);
    return { success: true, isNewUser: true, username: username.trim(), progress: initState };
  } catch (error) {
    console.error('Login error:', error);
    throw error;
  }
}

async function saveProgressToServer(username, progress) {
  const isLocal = typeof window !== 'undefined' && (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1');
  try {
    if (isLocal) {
      try {
        const response = await fetch('http://localhost:3001/api/progress/save', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ username, progress })
        });
        const data = await response.json();
        return data;
      } catch (err) {
        console.warn('Save to local backend failed — saving to localStorage instead', err);
        await saveStateLocal(progress);
        return { success: true, offline: true };
      }
    }

    // Static hosting: persist only to localStorage
    await saveStateLocal(progress);
    return { success: true };
  } catch (error) {
    console.error('Save error:', error);
    return null;
  }
}

// Fallback: Local storage for offline use
async function saveStateLocal(state) {
  try { await window.storage.set("dq_state", JSON.stringify(state)); } catch (e) {}
}
async function loadStateLocal() {
  try {
    const r = await window.storage.get("dq_state");
    return r ? JSON.parse(r.value) : null;
  } catch (e) { return null; }
}

// ─── AI GAME MASTER (Build-time or backend) ─────────────────────────────────
async function askGameMaster(userMessage, gameState, context = "general") {
  try {
    const apiKey = import.meta.env.VITE_QWEN_API_KEY;
    const baseUrl = import.meta.env.VITE_QWEN_BASE_URL || 'https://openrouter.ai/api/v1/chat/completions';
    const model = import.meta.env.VITE_QWEN_MODEL || 'qwen/qwen-2.5-72b-instruct';

    // Prefer local backend during development
    const isLocal = typeof window !== 'undefined' && (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1');
    if (isLocal) {
      const response = await fetch('http://localhost:3001/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMessage, playerName: gameState.playerName || 'Player', context })
      });
      if (!response.ok) throw new Error('Backend API error');
      const data = await response.json();
      return data.reply;
    }

    // Production: call OpenRouter directly using build-time Vite env vars
    if (!apiKey) {
      throw new Error('Qwen API key not configured (set VITE_QWEN_API_KEY)');
    }

    const systemPrompt = `You are the GAME MASTER of "Design Quest". Speak like a witty senior designer + RPG dungeon master. Mentoring ${gameState.playerName || 'Player'}.\n\nYOUR PERSONALITY:\n- Direct, no-nonsense, but encouraging\n- Use gaming terminology (XP, quest, level up)\n- Mix design expertise with RPG energy\n- SHORT responses (3-6 sentences). Be punchy.\n- Drop real design wisdom — cite Hick's Law, Fogg's Model, WCAG, Figma\n\nKeep responses under 150 words. Context: ${context}`;

    const response = await fetch(baseUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model,
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: userMessage }
        ],
        max_tokens: 300,
        temperature: 0.8
      })
    });

    if (!response.ok) {
      const errText = await response.text();
      throw new Error(`API returned ${response.status}: ${errText}`);
    }

    const data = await response.json();
    return data.choices?.[0]?.message?.content || 'The Game Master is thinking...';
  } catch (error) {
    console.error('AI Error:', error);
    return `🎮 **Game Master is offline or unavailable.** Continue studying the modules — the AI will return when configured.`;
  }
}

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────
export default function DesignQuest() {
  const [gs, setGs] = useState(INITIAL_STATE);
  const [loading, setLoading] = useState(true);
  const [aiLoading, setAiLoading] = useState(false);
  const [input, setInput] = useState("");
  const [nameInput, setNameInput] = useState("");
  const [loginError, setLoginError] = useState("");
  const chatEndRef = useRef(null);
  const inputRef = useRef(null);
  const saveTimeoutRef = useRef(null);

  // Debugging helpers: capture unhandled promise rejections and window messages
  useEffect(() => {
    const onUnhandled = (e) => {
      console.error('Unhandled Rejection (captured):', e);
    };
    const onMessage = (ev) => {
      // Ignore messages from browser extensions (they often inject content scripts)
      try {
        const origin = ev.origin || '';
        if (origin.startsWith('chrome-extension://') || origin.startsWith('moz-extension://') || origin.startsWith('safari-extension://') || origin.startsWith('ms-browser-extension://')) {
          // Silently ignore extension messages — they can trigger CSP/eval warnings we can't control
          return;
        }

        // Log incoming postMessage events for non-extension origins
        console.debug('window.message event:', { origin: ev.origin, data: ev.data });
      } catch (err) { }
    };

    const onError = (errEvent) => {
      try { console.error('Window error (captured):', errEvent.message || errEvent); } catch (e) {}
    };

    window.addEventListener('unhandledrejection', onUnhandled);
    window.addEventListener('message', onMessage);
    window.addEventListener('error', onError);
    return () => {
      window.removeEventListener('unhandledrejection', onUnhandled);
      window.removeEventListener('message', onMessage);
      window.removeEventListener('error', onError);
    };
  }, []);

  // Load saved state from local storage (fallback)
  useEffect(() => {
    console.log('🎮 Initializing Design Quest...');
    loadStateLocal().then(saved => {
      console.log('💾 Loaded state:', saved);
      if (saved && saved.playerName) {
        console.log('👤 Found saved player:', saved.playerName);
        // Merge with INITIAL_STATE to ensure new fields exist and sanitize values
        const mergedSaved = { 
          ...INITIAL_STATE, 
          ...saved, 
          level: Math.max(1, saved.level || 1),
          activeView: saved.activeView || "hub" // Default to hub if invalid
        };
        // Try to sync with server
        loginUser(saved.playerName).then(data => {
          console.log('✅ Server sync result:', data);
          if (data.success && data.progress) {
            const mergedProgress = { 
              ...INITIAL_STATE, 
              ...data.progress, 
              level: Math.max(1, data.progress.level || 1),
              activeView: data.progress.activeView || "hub"
            };
            setGs(mergedProgress);
          } else {
            setGs(mergedSaved);
          }
        }).catch(err => {
          console.warn('⚠️ Server sync failed, using local state:', err);
          setGs(mergedSaved);
        }).finally(() => {
          setLoading(false);
        });
      } else {
        console.log('🆕 No saved player, starting fresh');
        setLoading(false);
      }
    }).catch(err => {
      console.error('❌ Error loading state:', err);
      setLoading(false);
    });
  }, []);

  // Auto-scroll chat
  useEffect(() => { chatEndRef.current?.scrollIntoView({ behavior: "smooth" }); }, [gs.chatHistory]);

  // Auto-save progress to server (debounced)
  useEffect(() => {
    if (!loading && gs.playerName) {
      // Save locally immediately
      saveStateLocal(gs);
      
      // Debounce server save
      if (saveTimeoutRef.current) {
        clearTimeout(saveTimeoutRef.current);
      }
      
      saveTimeoutRef.current = setTimeout(() => {
        saveProgressToServer(gs.playerName, gs).then(result => {
          if (result?.success) {
            console.log('✓ Progress saved to server');
          }
        });
      }, 1000);
    }
  }, [gs, loading]);

  const updateGs = useCallback((updates) => {
    setGs(prev => {
      const next = typeof updates === "function" ? updates(prev) : { ...prev, ...updates };
      return next;
    });
  }, []);

  const addNotification = useCallback((msg, color = "#00f5a0") => {
    const id = Date.now();
    setGs(prev => ({ ...prev, notifications: [...prev.notifications, { id, msg, color }] }));
    setTimeout(() => setGs(prev => ({ ...prev, notifications: prev.notifications.filter(n => n.id !== id) })), 3500);
  }, []);

  const awardXP = useCallback((amount, reason) => {
    setGs(prev => {
      const newXp = prev.xp + amount;
      const newLevel = LEVELS.findIndex(l => newXp < l.xpMax) + 1 || 4;
      const leveledUp = newLevel > prev.level;
      return { ...prev, xp: newXp, level: Math.max(prev.level, newLevel) };
    });
    addNotification(`+${amount} XP — ${reason}`, "#ffd700");
  }, [addNotification]);

  const sendMessage = useCallback(async (text) => {
    if (!text.trim() || aiLoading) return;
    const userMsg = { role: "user", content: text, ts: Date.now() };
    setGs(prev => ({ ...prev, chatHistory: [...prev.chatHistory, userMsg] }));
    setInput("");
    setAiLoading(true);

    try {
      const reply = await askGameMaster(text, gs);
      const aiMsg = { role: "assistant", content: reply, ts: Date.now() };
      setGs(prev => ({ ...prev, chatHistory: [...prev.chatHistory, aiMsg] }));
    } catch (e) {
      const errMsg = { role: "assistant", content: "⚠️ Connection to the Game Master was lost. Try again.", ts: Date.now() };
      setGs(prev => ({ ...prev, chatHistory: [...prev.chatHistory, errMsg] }));
    }
    setAiLoading(false);
  }, [gs, aiLoading]);

  const completeModule = useCallback(async (moduleId, xp) => {
    if (gs.completedModules.includes(moduleId)) return;
    updateGs(prev => ({ ...prev, completedModules: [...prev.completedModules, moduleId] }));
    awardXP(xp, "Module Complete");
    setAiLoading(true);
    const mod = LEVELS.flatMap(l => l.modules).find(m => m.id === moduleId);
    const reply = await askGameMaster(
      `I just completed the module: "${mod?.title}". Give me a punchy congratulation and one real actionable tip about this topic I should try today.`,
      { ...gs, completedModules: [...gs.completedModules, moduleId] },
      `completed module: ${mod?.title}`
    );
    const aiMsg = { role: "assistant", content: `🎯 MODULE COMPLETE: **${mod?.title}**\n\n${reply}`, ts: Date.now() };
    setGs(prev => ({ ...prev, chatHistory: [...prev.chatHistory, aiMsg] }));
    setAiLoading(false);
  }, [gs, updateGs, awardXP]);

  const startQuest = useCallback((levelId) => {
    try {
      console.log('startQuest called for levelId:', levelId);
      const level = LEVELS.find(l => l.id === levelId);
      if (!level) {
        console.error('startQuest: level not found', levelId);
        return;
      }
      updateGs(prev => ({ 
        ...prev, 
        activeView: "quest-practices", 
        activeQuest: level,
      }));
    } catch (err) {
      console.error('startQuest error:', err);
      addNotification('Could not start quest. See console for details.', '#ff6b35');
    }
  }, [updateGs]);

  const completeQuest = useCallback(async (levelId) => {
    if (gs.completedQuests.includes(levelId)) return;
    const level = LEVELS.find(l => l.id === levelId);
    
    // Calculate new XP BEFORE any async operations (gs will be stale after await)
    const newXP = gs.xp + level.quest.xpReward;
    const nextLevel = LEVELS.find(l => l.id === levelId + 1);
    const shouldOpenNextLevel = nextLevel && newXP >= nextLevel.xpRequired;
    
    updateGs(prev => ({ ...prev, completedQuests: [...prev.completedQuests, levelId] }));
    awardXP(level.quest.xpReward, `Quest: ${level.quest.title}`);
    setAiLoading(true);
    const reply = await askGameMaster(
      `I just completed the quest: "${level.quest.title}" for Level ${levelId}. React dramatically as a game master and tell me exactly what I should have learned from this quest and what awaits me next.`,
      gs, `quest completion: ${level.quest.title}`
    );
    const aiMsg = { role: "assistant", content: `⚔️ QUEST COMPLETE: **${level.quest.title}**\n\n${reply}`, ts: Date.now() };
    setGs(prev => ({ ...prev, chatHistory: [...prev.chatHistory, aiMsg] }));
    setAiLoading(false);
    
    // Auto-open next level if it was unlocked by completing this quest
    if (shouldOpenNextLevel) {
      setTimeout(() => {
        updateGs({ activeView: "level-detail", activeLevel: nextLevel.id, activeQuest: null });
        addNotification(`🎉 Level ${nextLevel.id} unlocked!`, nextLevel.color);
      }, 2000);
    }
  }, [gs, updateGs, awardXP, addNotification]);

  const completePractice = useCallback(async (practiceId) => {
    const completed = gs.completedPractices || [];
    if (completed.includes(practiceId)) return;
    
    updateGs(prev => ({ ...prev, completedPractices: [...(prev.completedPractices || []), practiceId] }));
    addNotification("✓ Practice complete!", "#00f5a0");
    
    // Check if all practices for this quest are done
    const { activeQuest } = gs;
    if (activeQuest && activeQuest.quest.practices) {
      const allPracticeIds = activeQuest.quest.practices.map(p => p.id);
      const newCompleted = [...completed, practiceId];
      const allDone = allPracticeIds.every(id => newCompleted.includes(id));
      
      if (allDone && !gs.completedQuests.includes(activeQuest.id)) {
        // Auto-complete quest when all practices are done
        setTimeout(() => {
          completeQuest(activeQuest.id);
        }, 500);
      }
    }
  }, [gs, updateGs, addNotification, completeQuest]);

  const startQuiz = useCallback((levelId) => {
    const level = LEVELS.find(l => l.id === levelId);
    updateGs(prev => ({ ...prev, activeView: "quiz", currentQuiz: level, quizIndex: 0, quizScore: 0 }));
  }, [updateGs]);

  const answerQuiz = useCallback(async (answerIdx) => {
    const { currentQuiz, quizIndex, quizScore } = gs;
    const question = currentQuiz.quiz[quizIndex];
    const correct = answerIdx === question.answer;
    const newScore = correct ? quizScore + 1 : quizScore;
    const isLast = quizIndex === currentQuiz.quiz.length - 1;

    if (isLast) {
      const xpEarned = newScore * 100;
      const alreadyDone = gs.completedQuizzes.includes(currentQuiz.id);
      if (!alreadyDone) {
        awardXP(xpEarned, `Quiz: ${newScore}/5 correct`);
        updateGs(prev => ({ ...prev, completedQuizzes: [...prev.completedQuizzes, currentQuiz.id] }));
      }
      const reply = await askGameMaster(
        `I just finished the Level ${currentQuiz.id} quiz and scored ${newScore}/5. ${correct ? "I got the last question right." : "I got the last question wrong."} React as my game master.`,
        gs, "quiz completed"
      );
      const aiMsg = { role: "assistant", content: `🧠 QUIZ DONE: **${newScore}/5** ${newScore === 5 ? "PERFECT!" : newScore >= 3 ? "SOLID!" : "Keep grinding!"}\n\n${reply}`, ts: Date.now() };
      setGs(prev => ({ ...prev, chatHistory: [...prev.chatHistory, aiMsg], activeView: "level-detail", quizIndex: 0, quizScore: newScore }));
    } else {
      updateGs(prev => ({ ...prev, quizIndex: quizIndex + 1, quizScore: newScore }));
    }
    addNotification(correct ? "✓ CORRECT!" : "✗ Wrong answer", correct ? "#00f5a0" : "#ff6b35");
  }, [gs, updateGs, awardXP, addNotification]);

  const answerModuleQuiz = useCallback((answerIdx) => {
    const { currentModuleQuiz, quizIndex, quizScore, quizAnswers, activeModule } = gs;
    const question = currentModuleQuiz.quiz[quizIndex];
    const correct = answerIdx === question.answer;
    const newScore = correct ? quizScore + 1 : quizScore;
    const isLast = quizIndex === currentModuleQuiz.quiz.length - 1;

    // Store answer with explanation
    const newAnswers = [...quizAnswers, {
      question: question.q,
      userAnswer: answerIdx,
      correctAnswer: question.answer,
      correct,
      explanation: question.explanation
    }];

    addNotification(correct ? "✓ CORRECT!" : "✗ Wrong answer", correct ? "#00f5a0" : "#ff6b35");

    if (isLast) {
      // Quiz complete - show results
      const module = LEVELS.flatMap(l => l.modules).find(m => m.id === activeModule);
      const passed = newScore >= 3; // Need 60% to pass (3/5)
      
      if (passed) {
        // Mark module complete and award XP
        completeModule(activeModule, module.xp);
        updateGs({ 
          activeView: "module-quiz-results", 
          quizScore: newScore,
          quizAnswers: newAnswers
        });
      } else {
        // Failed - show results but don't complete
        updateGs({ 
          activeView: "module-quiz-results", 
          quizScore: newScore,
          quizAnswers: newAnswers
        });
      }
    } else {
      // Next question
      updateGs({ 
        quizIndex: quizIndex + 1, 
        quizScore: newScore,
        quizAnswers: newAnswers
      });
    }
  }, [gs, updateGs, addNotification, completeModule]);


  const currentLevel = LEVELS[gs.level - 1];
  const totalXpNeeded = 10000;
  const xpPercent = Math.min((gs.xp / totalXpNeeded) * 100, 100);

  // Compute which levels are unlocked
  const levelsWithUnlock = LEVELS.map(l => ({ ...l, unlocked: gs.xp >= l.xpRequired }));

  if (loading) return (
    <div style={{ background: "#080810", height: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ fontFamily: "'Courier New', monospace", color: "#00f5a0", fontSize: 18, letterSpacing: 4 }}>
        LOADING SAVE DATA...
      </div>
    </div>
  );

  // ─── CHARACTER SELECT ──────────────────────────────────────────────────────
  if (gs.activeView === "character-select") {
    return (
      <div style={styles.root}>
        <Particles />
        <div style={styles.charSelect}>
          <div style={styles.pixelBorder}>
            <div style={{ textAlign: "center", marginBottom: 40 }}>
              <div style={{ fontFamily: "monospace", fontSize: 12, letterSpacing: 6, color: "#00f5a0", marginBottom: 16, opacity: 0.7 }}>
                DESIGN QUEST v1.0 · PRESS START
              </div>
              <div style={{ fontFamily: "'Georgia', serif", fontSize: 52, fontStyle: "italic", color: "#fff", lineHeight: 1, marginBottom: 8 }}>
                Design
              </div>
              <div style={{ fontFamily: "'Courier New', monospace", fontSize: 42, fontWeight: 900, color: "#ffd700", letterSpacing: 8, textShadow: "0 0 40px rgba(255,215,0,0.5)" }}>
                QUEST
              </div>
              <div style={{ fontFamily: "monospace", fontSize: 11, color: "#6b6b8a", marginTop: 12, letterSpacing: 3 }}>
                MASTER UI/UX DESIGN · LEVEL UP YOUR SKILLS
              </div>
              <div style={{ 
                marginTop: 20, 
                padding: "14px 18px", 
                background: "rgba(0,245,160,0.05)", 
                border: "1px solid rgba(0,245,160,0.2)",
                borderRadius: 8,
                fontSize: 11,
                color: "#8080a0",
                lineHeight: 1.7,
                textAlign: "left"
              }}>
                💾 Your progress saves to your account automatically<br />
                🌐 Log in from any device with your username<br />
                ✨ New here? Just enter a username to create an account
              </div>
            </div>

            <div style={{ marginBottom: 24 }}>
              <label htmlFor="dq-username" style={{ fontFamily: "monospace", fontSize: 10, letterSpacing: 3, color: "#6b6b8a", marginBottom: 10, textTransform: "uppercase", display: 'block' }}>
                Enter your unique username
              </label>
              <input
                value={nameInput}
                id="dq-username"
                name="username"
                autoComplete="username"
                onChange={e => {
                  setNameInput(e.target.value);
                  setLoginError("");
                }}
                onKeyDown={async (e) => {
                  if (e.key === "Enter" && nameInput.trim()) {
                    setAiLoading(true);
                    setLoginError("");
                    try {
                      const authResult = await loginUser(nameInput.trim());
                      
                      if (!authResult.success) {
                        throw new Error(authResult.error || "Login failed");
                      }

                      // User authenticated
                      if (authResult.progress) {
                        // Existing user - load their progress
                        setGs(authResult.progress);
                      } else {
                        // New user - get welcome message
                        let greeting;
                        try {
                          greeting = await askGameMaster(
                            `A new player named "${authResult.username}" just started Design Quest. Welcome them dramatically as the game master, tell them what awaits them, and give them their first mission hint. Be exciting and specific about UI/UX design.`,
                            { ...INITIAL_STATE, playerName: authResult.username },
                            "game start"
                          );
                        } catch (apiError) {
                          greeting = `⚔️ Welcome, **${authResult.username}**!\n\nYou've entered the Design Quest arena. Your journey begins at **Level 1: The Padawan** — where you'll master visual hierarchy, color theory, typography, and the sacred Laws of UX.\n\nComplete modules to earn XP. Finish quests to level up. Take quizzes to prove your knowledge.\n\n🎯 Your first mission: Check out Level 1 modules and start training!`;
                        }
                        
                        const initState = {
                          ...INITIAL_STATE,
                          playerName: authResult.username,
                          activeView: "hub",
                          chatHistory: [{ role: "assistant", content: greeting, ts: Date.now() }]
                        };
                        setGs(initState);
                        await saveProgressToServer(authResult.username, initState);
                      }
                    } catch (error) {
                      setLoginError(error.message || "Connection failed. Check if server is running.");
                      console.error("Login error:", error);
                    } finally {
                      setAiLoading(false);
                    }
                  }
                }}
                placeholder="e.g. PixelWizard99"
                style={styles.nameInput}
                autoFocus
              />
              {loginError && (
                <div style={{ 
                  marginTop: 10, 
                  padding: "8px 12px", 
                  background: "rgba(255,107,53,0.1)", 
                  border: "1px solid rgba(255,107,53,0.3)",
                  borderRadius: 6,
                  fontSize: 12,
                  color: "#ff6b35",
                  fontFamily: "monospace"
                }}>
                  ⚠️ {loginError}
                </div>
              )}
            </div>

            <button
              onClick={async () => {
                if (!nameInput.trim()) return;
                setAiLoading(true);
                setLoginError("");
                try {
                  const authResult = await loginUser(nameInput.trim());
                  
                  if (!authResult.success) {
                    throw new Error(authResult.error || "Login failed");
                  }

                  // User authenticated
                  if (authResult.progress) {
                    // Existing user - load their progress
                    setGs(authResult.progress);
                  } else {
                    // New user - get welcome message
                    let greeting;
                    try {
                      greeting = await askGameMaster(
                        `A new player named "${authResult.username}" just started Design Quest. Welcome them dramatically as the game master, tell them what awaits them, and give them their first mission hint. Be exciting and specific about UI/UX design.`,
                        { ...INITIAL_STATE, playerName: authResult.username },
                        "game start"
                      );
                    } catch (apiError) {
                      greeting = `⚔️ Welcome, **${authResult.username}**!\n\nYou've entered the Design Quest arena. Your journey begins at **Level 1: The Padawan** — where you'll master visual hierarchy, color theory, typography, and the sacred Laws of UX.\n\nComplete modules to earn XP. Finish quests to level up. Take quizzes to prove your knowledge.\n\n🎯 Your first mission: Check out Level 1 modules and start training!`;
                    }
                    
                    const initState = {
                      ...INITIAL_STATE,
                      playerName: authResult.username,
                      activeView: "hub",
                      chatHistory: [{ role: "assistant", content: greeting, ts: Date.now() }]
                    };
                    setGs(initState);
                    await saveProgressToServer(authResult.username, initState);
                  }
                } catch (error) {
                  setLoginError(error.message || "Connection failed. Check if server is running.");
                  console.error("Login error:", error);
                } finally {
                  setAiLoading(false);
                }
              }}
              style={styles.startBtn}
              disabled={aiLoading || !nameInput.trim()}
            >
              {aiLoading ? "⏳ LOADING..." : "▶  START QUEST"}
            </button>

            <div style={{ display: "flex", justifyContent: "center", gap: 24, marginTop: 32 }}>
              {[{ e: "🌱", l: "LVL 1", c: "#00f5a0" }, { e: "⚡", l: "LVL 2", c: "#7c6fff" }, { e: "🏗", l: "LVL 3", c: "#ff6b35" }, { e: "👑", l: "LVL 4", c: "#ffd700" }].map(x => (
                <div key={x.l} style={{ textAlign: "center" }}>
                  <div style={{ fontSize: 24 }}>{x.e}</div>
                  <div style={{ fontFamily: "monospace", fontSize: 9, color: x.c, marginTop: 4, letterSpacing: 2 }}>{x.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );

    function startGame(name) {}
  }

  // ─── STUDY VIEW ────────────────────────────────────────────────────────────
  if (gs.activeView === "study" && gs.activeModule) {
    const content = STUDY_CONTENT[gs.activeModule];
    if (!content) {
      return <div style={styles.root}><div style={{ padding: 40, color: "#fff" }}>Study content not found.</div></div>;
    }

    const module = LEVELS.flatMap(l => l.modules).find(m => m.id === gs.activeModule);
    const level = LEVELS.find(l => l.modules.some(m => m.id === gs.activeModule));
    const lc = level?.color || "#00f5a0";

    return (
      <div style={styles.root}>
        <div style={{ maxWidth: 800, margin: "0 auto", padding: "24px 24px 80px" }}>
          <button 
            onClick={() => updateGs({ activeView: "level-detail", activeModule: null })} 
            style={{ ...styles.ghostBtn, marginBottom: 24 }}
          >
            ← BACK TO LEVEL
          </button>

          {/* Header */}
          <div style={{ 
            background: `${lc}10`, 
            border: `1px solid ${lc}30`, 
            borderRadius: 16, 
            padding: 32, 
            marginBottom: 32,
            position: "relative"
          }}>
            <div style={{ fontSize: 48, marginBottom: 12 }}>{content.emoji}</div>
            <div style={{ fontSize: 28, fontWeight: 700, color: "#e8e8f0", marginBottom: 8 }}>
              {content.title}
            </div>
            <div style={{ fontFamily: "monospace", fontSize: 11, color: lc, letterSpacing: 2 }}>
              📚 STUDY MODULE · {module?.xp} XP
            </div>
          </div>

          {/* Study Content Sections */}
          {content.sections.map((section, idx) => (
            <div key={idx} style={{ 
              background: "#0e0e1a", 
              border: "1px solid #1e1e30", 
              borderRadius: 12, 
              padding: 28, 
              marginBottom: 20 
            }}>
              <div style={{ 
                fontSize: 18, 
                fontWeight: 700, 
                color: lc, 
                marginBottom: 16 
              }}>
                {section.heading}
              </div>
              
              {/* Image if available */}
              {section.image && (
                <div style={{ 
                  marginBottom: 20, 
                  borderRadius: 8, 
                  overflow: "hidden",
                  border: "1px solid #2a2a3a"
                }}>
                  <img 
                    src={section.image} 
                    alt={section.heading}
                    style={{ 
                      width: "100%", 
                      height: "auto",
                      display: "block",
                      maxHeight: "400px",
                      objectFit: "cover"
                    }}
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                </div>
              )}
              
              <div style={{ 
                color: "#b0b0cc", 
                fontSize: 14, 
                lineHeight: 1.8, 
                whiteSpace: "pre-wrap" 
              }}>
                {section.content}
              </div>
            </div>
          ))}

          {/* Key Takeaways */}
          {content.keyTakeaways && content.keyTakeaways.length > 0 && (
            <div style={{ 
              background: `${lc}08`, 
              border: `2px solid ${lc}30`, 
              borderRadius: 12, 
              padding: 28, 
              marginBottom: 20 
            }}>
              <div style={{ 
                fontSize: 16, 
                fontWeight: 700, 
                color: lc, 
                marginBottom: 16,
                letterSpacing: 2,
                fontFamily: "monospace"
              }}>
                ✨ KEY TAKEAWAYS
              </div>
              <ul style={{ margin: 0, paddingLeft: 20, color: "#e8e8f0", lineHeight: 1.8 }}>
                {content.keyTakeaways.map((takeaway, idx) => (
                  <li key={idx} style={{ marginBottom: 8, fontSize: 14 }}>{takeaway}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Resources */}
          {content.resources && content.resources.length > 0 && (
            <div style={{ 
              background: "#0e0e1a", 
              border: "1px solid #1e1e30", 
              borderRadius: 12, 
              padding: 24, 
              marginBottom: 24 
            }}>
              <div style={{ 
                fontSize: 14, 
                fontWeight: 700, 
                color: "#6b6b8a", 
                marginBottom: 14,
                letterSpacing: 2,
                fontFamily: "monospace"
              }}>
                📚 RESOURCES
              </div>
              {content.resources.map((resource, idx) => (
                <div key={idx} style={{ 
                  color: "#8080a0", 
                  marginBottom: 6,
                  fontSize: 13,
                  fontFamily: "monospace"
                }}>
                  {resource}
                </div>
              ))}
            </div>
          )}

          {/* Action Buttons */}
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <button
              onClick={() => {
                // Show quiz first before marking complete
                if (!gs.completedModules.includes(gs.activeModule)) {
                  updateGs({ 
                    activeView: "module-quiz", 
                    currentModuleQuiz: content,
                    quizIndex: 0,
                    quizScore: 0,
                    quizAnswers: []
                  });
                }
              }}
              disabled={gs.completedModules.includes(gs.activeModule)}
              style={{ 
                ...styles.smallBtn, 
                background: gs.completedModules.includes(gs.activeModule) ? `${lc}20` : lc, 
                color: gs.completedModules.includes(gs.activeModule) ? lc : "#000", 
                fontWeight: 700, 
                border: "none",
                padding: "12px 24px",
                fontSize: 12
              }}
            >
              {gs.completedModules.includes(gs.activeModule) ? "✓ MODULE COMPLETE" : `✓ TAKE QUIZ TO COMPLETE (+${module.xp} XP)`}
            </button>
            <button
              onClick={() => sendMessage(`I just studied "${content.title}". Can you give me a quick challenge or quiz question to test my knowledge?`)}
              style={{ 
                ...styles.smallBtn, 
                borderColor: `${lc}40`, 
                color: lc,
                padding: "12px 24px",
                fontSize: 12
              }}
            >
              💬 ASK GAME MASTER
            </button>
          </div>
        </div>
        <Notifications notifications={gs.notifications} />
      </div>
    );
  }

  // ─── MODULE QUIZ VIEW ──────────────────────────────────────────────────────
  if (gs.activeView === "module-quiz" && gs.currentModuleQuiz) {
    const content = gs.currentModuleQuiz;
    const q = content.quiz[gs.quizIndex];
    const module = LEVELS.flatMap(l => l.modules).find(m => m.id === gs.activeModule);
    const level = LEVELS.find(l => l.modules.some(m => m.id === gs.activeModule));
    const lc = level?.color || "#00f5a0";
    const isLastQuestion = gs.quizIndex === content.quiz.length - 1;

    return (
      <div style={styles.root}>
        <div style={{ maxWidth: 700, margin: "0 auto", padding: "60px 24px 80px" }}>
          {/* Header */}
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <div style={{ fontSize: 32, marginBottom: 8 }}>{content.emoji}</div>
            <div style={{ fontFamily: "monospace", fontSize: 10, letterSpacing: 3, color: lc, marginBottom: 10 }}>
              MODULE QUIZ · QUESTION {gs.quizIndex + 1}/{content.quiz.length}
            </div>
            <div style={{ fontSize: 20, fontWeight: 700, color: "#e8e8f0" }}>
              {content.title}
            </div>
          </div>

          {/* Progress Bar */}
          <div style={{ height: 6, background: "#1e1e30", borderRadius: 10, marginBottom: 36, overflow: "hidden" }}>
            <div style={{ 
              width: `${(gs.quizIndex / content.quiz.length) * 100}%`, 
              height: "100%", 
              background: lc, 
              borderRadius: 10, 
              transition: "width 0.4s" 
            }} />
          </div>

          {/* Question Card */}
          <div style={{ 
            background: "#13131f", 
            border: `2px solid ${lc}33`, 
            borderRadius: 16, 
            padding: 32,
            marginBottom: 24
          }}>
            <div style={{ 
              fontFamily: "monospace", 
              fontSize: 10, 
              color: "#6b6b8a", 
              marginBottom: 14, 
              letterSpacing: 2 
            }}>
              QUESTION {gs.quizIndex + 1}
            </div>
            <div style={{ 
              fontSize: 17, 
              fontWeight: 600, 
              color: "#e8e8f0", 
              lineHeight: 1.6, 
              marginBottom: 28 
            }}>
              {q.q}
            </div>

            {/* Options */}
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {q.options.map((opt, i) => (
                <button 
                  key={i} 
                  onClick={() => answerModuleQuiz(i)} 
                  style={{ 
                    ...styles.quizOption, 
                    borderColor: `${lc}40`,
                    background: "#0e0e1a"
                  }}
                >
                  <span style={{ 
                    fontFamily: "monospace", 
                    fontSize: 12, 
                    fontWeight: 700,
                    color: lc, 
                    marginRight: 14,
                    minWidth: 24,
                    display: "inline-block"
                  }}>
                    {String.fromCharCode(65 + i)}
                  </span>
                  <span style={{ fontSize: 14 }}>{opt}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Score Display */}
          <div style={{ 
            textAlign: "center", 
            fontFamily: "monospace", 
            fontSize: 12, 
            color: "#6b6b8a",
            marginBottom: 20
          }}>
            Current Score: {gs.quizScore}/{gs.quizIndex} correct
          </div>

          <button 
            onClick={() => updateGs({ 
              activeView: "study", 
              currentModuleQuiz: null,
              quizIndex: 0,
              quizScore: 0,
              quizAnswers: []
            })} 
            style={{ ...styles.ghostBtn, width: "100%" }}
          >
            ← BACK TO STUDY
          </button>
        </div>
        <Notifications notifications={gs.notifications} />
      </div>
    );
  }

  // ─── MODULE QUIZ RESULTS ───────────────────────────────────────────────────
  if (gs.activeView === "module-quiz-results" && gs.currentModuleQuiz) {
    const content = gs.currentModuleQuiz;
    const module = LEVELS.flatMap(l => l.modules).find(m => m.id === gs.activeModule);
    const level = LEVELS.find(l => l.modules.some(m => m.id === gs.activeModule));
    const lc = level?.color || "#00f5a0";
    const passed = gs.quizScore >= 3;
    const percentage = Math.round((gs.quizScore / content.quiz.length) * 100);

    return (
      <div style={styles.root}>
        <div style={{ maxWidth: 800, margin: "0 auto", padding: "60px 24px 80px" }}>
          {/* Results Header */}
          <div style={{
            background: passed ? `${lc}10` : "rgba(255,107,53,0.1)",
            border: `2px solid ${passed ? lc : "#ff6b35"}40`,
            borderRadius: 16,
            padding: 40,
            marginBottom: 32,
            textAlign: "center"
          }}>
            <div style={{ fontSize: 56, marginBottom: 16 }}>
              {passed ? "🎉" : "📚"}
            </div>
            <div style={{
              fontSize: 32,
              fontWeight: 700,
              color: passed ? lc : "#ff6b35",
              marginBottom: 12
            }}>
              {passed ? "QUIZ PASSED!" : "NEEDS MORE STUDY"}
            </div>
            <div style={{
              fontSize: 48,
              fontWeight: 900,
              color: "#e8e8f0",
              marginBottom: 16
            }}>
              {gs.quizScore}/{content.quiz.length}
            </div>
            <div style={{
              fontSize: 16,
              color: "#9090b0",
              marginBottom: 8
            }}>
              {percentage}% Correct {passed ? `· +${module.xp} XP Earned!` : "· Need 60% to pass"}
            </div>
            {passed && (
              <div style={{
                fontFamily: "monospace",
                fontSize: 11,
                color: lc,
                letterSpacing: 2,
                marginTop: 20
              }}>
                ✓ MODULE COMPLETE · {content.title}
              </div>
            )}
          </div>

          {/* Answer Review */}
          <div style={{
            fontSize: 18,
            fontWeight: 700,
            color: "#e8e8f0",
            marginBottom: 20
          }}>
            📝 Answer Review
          </div>

          {gs.quizAnswers.map((answer, idx) => (
            <div key={idx} style={{
              background: "#0e0e1a",
              border: `1px solid ${answer.correct ? "#00f5a0" : "#ff6b35"}40`,
              borderRadius: 12,
              padding: 24,
              marginBottom: 16
            }}>
              <div style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                marginBottom: 12
              }}>
                <div style={{
                  fontSize: 24,
                  width: 36,
                  height: 36,
                  borderRadius: "50%",
                  background: answer.correct ? "rgba(0,245,160,0.15)" : "rgba(255,107,53,0.15)",
                  color: answer.correct ? "#00f5a0" : "#ff6b35",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 700
                }}>
                  {answer.correct ? "✓" : "✗"}
                </div>
                <div style={{
                  fontFamily: "monospace",
                  fontSize: 10,
                  color: answer.correct ? "#00f5a0" : "#ff6b35",
                  letterSpacing: 2
                }}>
                  QUESTION {idx + 1}
                </div>
              </div>

              <div style={{
                fontSize: 15,
                color: "#e8e8f0",
                marginBottom: 16,
                lineHeight: 1.6
              }}>
                {answer.question}
              </div>

              <div style={{
                background: answer.correct ? "rgba(0,245,160,0.08)" : "rgba(255,107,53,0.08)",
                borderRadius: 8,
                padding: 16
              }}>
                <div style={{
                  fontSize: 13,
                  color: "#9090b0",
                  marginBottom: 8
                }}>
                  <strong style={{ color: answer.correct ? "#00f5a0" : "#ff6b35" }}>
                    {answer.correct ? "✓ Your answer was correct!" : "✗ Your answer was incorrect"}
                  </strong>
                </div>
                <div style={{
                  fontSize: 14,
                  color: "#b0b0cc",
                  lineHeight: 1.7
                }}>
                  <strong>Explanation:</strong> {answer.explanation}
                </div>
              </div>
            </div>
          ))}

          {/* Action Buttons */}
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 32 }}>
            {!passed && (
              <button
                onClick={() => {
                  updateGs({
                    activeView: "module-quiz",
                    quizIndex: 0,
                    quizScore: 0,
                    quizAnswers: []
                  });
                }}
                style={{
                  ...styles.smallBtn,
                  background: lc,
                  color: "#000",
                  fontWeight: 700,
                  border: "none",
                  padding: "12px 24px",
                  fontSize: 12,
                  flex: 1
                }}
              >
                🔄 RETAKE QUIZ
              </button>
            )}
            <button
              onClick={() => {
                updateGs({
                  activeView: passed ? "level-detail" : "study",
                  currentModuleQuiz: null,
                  quizIndex: 0,
                  quizScore: 0,
                  quizAnswers: []
                });
              }}
              style={{
                ...styles.smallBtn,
                borderColor: `${lc}40`,
                color: lc,
                padding: "12px 24px",
                fontSize: 12,
                flex: 1
              }}
            >
              {passed ? "← BACK TO LEVEL" : "← BACK TO STUDY"}
            </button>
          </div>
        </div>
        <Notifications notifications={gs.notifications} />
      </div>
    );
  }

  // ─── QUIZ VIEW ─────────────────────────────────────────────────────────────
  if (gs.activeView === "quiz" && gs.currentQuiz) {
    const q = gs.currentQuiz.quiz[gs.quizIndex];
    const lc = gs.currentQuiz.color;
    return (
      <div style={styles.root}>
        <div style={{ maxWidth: 640, margin: "0 auto", padding: "60px 24px" }}>
          <div style={{ fontFamily: "monospace", fontSize: 10, letterSpacing: 3, color: lc, marginBottom: 30, textAlign: "center" }}>
            KNOWLEDGE CHECK · LEVEL {gs.currentQuiz.id} · Q{gs.quizIndex + 1}/5
          </div>
          <div style={{ background: "#13131f", border: `1px solid ${lc}33`, borderRadius: 16, padding: 36 }}>
            <div style={{ height: 4, background: "#1e1e30", borderRadius: 10, marginBottom: 28, overflow: "hidden" }}>
              <div style={{ width: `${(gs.quizIndex / 5) * 100}%`, height: "100%", background: lc, borderRadius: 10, transition: "width 0.4s" }} />
            </div>
            <div style={{ fontFamily: "monospace", fontSize: 10, color: "#6b6b8a", marginBottom: 12, letterSpacing: 2 }}>QUESTION {gs.quizIndex + 1}</div>
            <div style={{ fontSize: 18, fontWeight: 600, color: "#e8e8f0", lineHeight: 1.5, marginBottom: 28 }}>{q.q}</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {q.options.map((opt, i) => (
                <button key={i} onClick={() => answerQuiz(i)} style={{ ...styles.quizOption, borderColor: `${lc}40` }}>
                  <span style={{ fontFamily: "monospace", fontSize: 11, color: lc, marginRight: 12 }}>{String.fromCharCode(65 + i)}</span>
                  {opt}
                </button>
              ))}
            </div>
          </div>
          <button onClick={() => updateGs({ activeView: "level-detail" })} style={{ ...styles.ghostBtn, marginTop: 24, width: "100%" }}>
            ← ESCAPE QUIZ
          </button>
        </div>
        <Notifications notifications={gs.notifications} />
      </div>
    );
  }

  // ─── LEVEL DETAIL ──────────────────────────────────────────────────────────
  if (gs.activeView === "level-detail" && gs.activeLevel) {
    const level = levelsWithUnlock.find(l => l.id === gs.activeLevel);
    const lc = level.color;
    const isLocked = !level.unlocked;
    const questDone = gs.completedQuests.includes(level.id);
    const quizDone = gs.completedQuizzes.includes(level.id);

    return (
      <div style={styles.root}>
        <div style={{ maxWidth: 900, margin: "0 auto", padding: "24px 24px 80px" }}>
          {/* Header */}
          <button onClick={() => updateGs({ activeView: "hub" })} style={{ ...styles.ghostBtn, marginBottom: 24 }}>
            ← BACK TO HUB
          </button>

          <div style={{ background: `${lc}10`, border: `1px solid ${lc}30`, borderRadius: 16, padding: 32, marginBottom: 24, position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: -20, right: -20, fontSize: 120, opacity: 0.05 }}>{level.emoji}</div>
            <div style={{ fontFamily: "monospace", fontSize: 10, letterSpacing: 3, color: lc, marginBottom: 8 }}>
              LEVEL {level.id} · {isLocked ? "🔒 LOCKED" : "ACTIVE"}
            </div>
            <div style={{ fontFamily: "'Georgia', serif", fontSize: 36, fontStyle: "italic", color: lc, marginBottom: 4 }}>{level.title}</div>
            <div style={{ color: "#6b6b8a", fontSize: 14, marginBottom: 16 }}>{level.lore}</div>
            <div style={{ fontFamily: "monospace", fontSize: 11, color: "#6b6b8a" }}>
              {level.xpRequired.toLocaleString()} XP Required · {level.modules.reduce((a, m) => a + m.xp, 0) + level.quest.xpReward} XP Available
            </div>
          </div>

          {isLocked ? (
            <div style={{ textAlign: "center", padding: 60, color: "#6b6b8a", fontFamily: "monospace" }}>
              <div style={{ fontSize: 48, marginBottom: 16 }}>🔒</div>
              <div style={{ fontSize: 14, letterSpacing: 2 }}>REACH {level.xpRequired.toLocaleString()} XP TO UNLOCK</div>
              <div style={{ fontSize: 12, marginTop: 8, color: "#444" }}>Current XP: {gs.xp.toLocaleString()}</div>
            </div>
          ) : (
            <>
              {/* Modules */}
              <div style={{ marginBottom: 24 }}>
                <SectionTitle text="TRAINING MODULES" color={lc} />
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 14 }}>
                  {level.modules.map(mod => {
                    const done = gs.completedModules.includes(mod.id);
                    return (
                      <div key={mod.id} style={{ ...styles.moduleCard, borderColor: done ? `${lc}60` : "#1e1e30" }}>
                        {done && <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: lc }} />}
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 10 }}>
                          <span style={{ fontSize: 22 }}>{mod.emoji}</span>
                          <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
                            {mod.isFigma && <span style={{ fontFamily: "monospace", fontSize: 8, color: "#a259ff", background: "rgba(162,89,255,0.1)", padding: "2px 6px", borderRadius: 4, letterSpacing: 1 }}>FIGMA</span>}
                            <span style={{ fontFamily: "monospace", fontSize: 10, color: done ? lc : "#6b6b8a" }}>{mod.xp} XP</span>
                          </div>
                        </div>
                        <div style={{ fontSize: 14, fontWeight: 600, color: "#e8e8f0", marginBottom: 8 }}>{mod.title}</div>
                        <div style={{ display: "flex", flexWrap: "wrap", gap: 5, marginBottom: 14 }}>
                          {mod.topics.map(t => <span key={t} style={styles.chip}>{t}</span>)}
                        </div>
                        <div style={{ display: "flex", gap: 8 }}>
                          <button
                            onClick={() => updateGs({ activeView: "study", activeModule: mod.id })}
                            style={{ ...styles.smallBtn, borderColor: `${lc}40`, color: lc, flex: 1 }}
                          >
                            📖 STUDY
                          </button>
                          <button
                            onClick={() => completeModule(mod.id, mod.xp)}
                            disabled={done}
                            style={{ ...styles.smallBtn, background: done ? `${lc}20` : lc, color: done ? lc : "#000", fontWeight: 700, flex: 1, border: "none", opacity: done ? 0.7 : 1 }}
                          >
                            {done ? "✓ DONE" : "COMPLETE"}
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Quest */}
              <div style={{ ...styles.questCard, borderColor: `${lc}40`, background: `${lc}08`, marginBottom: 24 }}>
                <div style={{ fontFamily: "monospace", fontSize: 10, letterSpacing: 3, color: lc, marginBottom: 10 }}>
                  ⚔️ {level.id === 4 ? "FINAL BOSS BATTLE" : "MAIN QUEST"}
                </div>
                <div style={{ fontSize: 20, fontWeight: 700, color: "#e8e8f0", marginBottom: 10 }}>{level.quest.title}</div>
                <div style={{ fontSize: 13, color: "#9090b0", lineHeight: 1.7, marginBottom: 18 }}>{level.quest.description}</div>
                
                {/* Practice Count */}
                {level.quest.practices && (
                  <div style={{ 
                    fontSize: 12, 
                    color: lc, 
                    fontFamily: "monospace", 
                    letterSpacing: 1,
                    marginBottom: 18,
                    display: "flex",
                    alignItems: "center",
                    gap: 8
                  }}>
                    <span>📋</span>
                    <span>{level.quest.practices.length} HANDS-ON PRACTICES</span>
                  </div>
                )}

                <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                  <button
                    onClick={() => sendMessage(`I'm about to start the quest: "${level.quest.title}". Give me your best game master briefing — what should I focus on, what pitfalls to avoid, and how to make this project portfolio-worthy.`)}
                    style={{ ...styles.smallBtn, borderColor: `${lc}40`, color: lc }}
                  >
                    🗺 GET BRIEFING
                  </button>
                  <button
                    onClick={() => startQuest(level.id)}
                    style={{ ...styles.smallBtn, background: questDone ? `${lc}20` : lc, color: questDone ? lc : "#000", fontWeight: 700, border: "none" }}
                  >
                    {questDone ? `✓ VIEW PRACTICES (+${level.quest.xpReward} XP earned)` : `⚔️ START QUEST (+${level.quest.xpReward} XP)`}
                  </button>
                </div>
              </div>

              {/* Quiz */}
              <div style={{ background: "#13131f", border: `1px solid ${lc}30`, borderRadius: 12, padding: 24 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
                  <div>
                    <div style={{ fontFamily: "monospace", fontSize: 10, letterSpacing: 3, color: lc, marginBottom: 6 }}>🧠 KNOWLEDGE CHECK</div>
                    <div style={{ fontSize: 14, color: "#b0b0cc" }}>
                      {quizDone ? "Quiz completed! Re-take to practice." : "5 questions. All must be answered without Googling."}
                    </div>
                  </div>
                  <button
                    onClick={() => startQuiz(level.id)}
                    style={{ ...styles.smallBtn, borderColor: `${lc}40`, color: lc, whiteSpace: "nowrap" }}
                  >
                    {quizDone ? "🔄 RETAKE QUIZ" : "▶ START QUIZ (500 XP)"}
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
        <Notifications notifications={gs.notifications} />
      </div>
    );
  }

  // ─── QUEST PRACTICES VIEW ────────────────────────────────────────────────
  if (gs.activeView === "quest-practices" && gs.activeQuest) {
    const level = gs.activeQuest;
    const lc = level.color;
    const questDone = gs.completedQuests.includes(level.id);
    const practices = level.quest.practices || [];
    const completed = gs.completedPractices || [];
    const practicesDone = practices.filter(p => completed.includes(p.id)).length;
    const allPracticesDone = practicesDone === practices.length;

    return (
      <div style={styles.root}>
        <Particles />
        <div style={{ maxWidth: 1000, margin: "0 auto", padding: "60px 24px 80px" }}>
          <button 
            onClick={() => updateGs({ activeView: "level-detail", activeQuest: null })} 
            style={{ ...styles.ghostBtn, marginBottom: 24 }}
          >
            ← BACK TO LEVEL
          </button>

          {/* Header */}
          <div style={{ 
            background: `${lc}10`, 
            border: `2px solid ${lc}33`, 
            borderRadius: 16, 
            padding: 40, 
            marginBottom: 32,
            textAlign: "center"
          }}>
            <div style={{ fontSize: 52 }}>⚔️</div>
            <div style={{ 
              fontFamily: "monospace", 
              fontSize: 12, 
              letterSpacing: 3, 
              color: lc, 
              marginBottom: 12 
            }}>
              {level.id === 4 ? "FINAL BOSS BATTLE" : `LEVEL ${level.id} MAIN QUEST`}
            </div>
            <div style={{ fontSize: 28, fontWeight: 700, color: "#e8e8f0", marginBottom: 12 }}>
              {level.quest.title}
            </div>
            <div style={{ fontSize: 15, color: "#9090b0", lineHeight: 1.7, maxWidth: 600, margin: "0 auto 20px" }}>
              {level.quest.description}
            </div>
            
            {/* Progress indicator */}
            {!questDone && (
              <div style={{ 
                display: "inline-flex", 
                alignItems: "center", 
                gap: 8, 
                background: "rgba(0,0,0,0.3)", 
                padding: "8px 16px", 
                borderRadius: 20,
                fontFamily: "monospace",
                fontSize: 12
              }}>
                <span style={{ color: lc, fontWeight: 700 }}>{practicesDone}/{practices.length}</span>
                <span style={{ color: "#9090b0" }}>PRACTICES COMPLETE</span>
              </div>
            )}
          </div>

          {/* Practices List */}
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {questDone && (
              <div style={{ 
                background: `${lc}10`, 
                border: `1px solid ${lc}30`, 
                borderRadius: 12, 
                padding: 24, 
                textAlign: "center",
                marginBottom: 8
              }}>
                <div style={{ fontSize: 36, marginBottom: 8 }}>✅</div>
                <div style={{ fontSize: 16, fontWeight: 700, color: lc, marginBottom: 6 }}>
                  Quest Completed!
                </div>
                <div style={{ fontSize: 13, color: "#9090b0" }}>
                  You earned {level.quest.xpReward} XP
                </div>
              </div>
            )}
            
            {practices.map((practice, idx) => {
                const isDone = (gs.completedPractices || []).includes(practice.id);
                
                return (
                  <div key={practice.id} style={{ 
                    background: isDone ? `${lc}08` : "#0e0e1a", 
                    border: isDone ? `2px solid ${lc}40` : "1px solid #1e1e30", 
                    borderRadius: 12, 
                    padding: 32,
                    position: "relative",
                    opacity: isDone ? 0.7 : 1
                  }}>
                    {/* Practice Number Badge */}
                    <div style={{ 
                      position: "absolute", 
                      top: 20, 
                      right: 20, 
                      width: 40, 
                      height: 40, 
                      borderRadius: "50%", 
                      background: isDone ? lc : "rgba(255,255,255,0.06)", 
                      border: isDone ? "none" : `2px solid ${lc}30`,
                      display: "flex", 
                      alignItems: "center", 
                      justifyContent: "center",
                      fontFamily: "monospace",
                      fontSize: 16,
                      fontWeight: 700,
                      color: isDone ? "#000" : lc
                    }}>
                      {isDone ? "✓" : idx + 1}
                    </div>

                    {/* Practice Title  */}
                    <div style={{ 
                      fontFamily: "monospace", 
                      fontSize: 11, 
                      letterSpacing: 2, 
                      color: lc, 
                      marginBottom: 12 
                    }}>
                      PRACTICE {idx + 1}
                    </div>
                    <div style={{ fontSize: 20, fontWeight: 700, color: "#e8e8f0", marginBottom: 12 }}>
                      {practice.title}
                    </div>
                    <div style={{ fontSize: 14, color: "#9090b0", lineHeight: 1.7, marginBottom: 24 }}>
                      {practice.description}
                    </div>

                    {/* Instructions */}
                    <div style={{ 
                      background: "#13131f", 
                      border: "1px solid #2a2a40", 
                      borderRadius: 8, 
                      padding: 20,
                      marginBottom: 20
                    }}>
                      <div style={{ 
                        fontFamily: "monospace", 
                        fontSize: 10, 
                        letterSpacing: 2, 
                        color: "#6b6b8a", 
                        marginBottom: 12 
                      }}>
                        📋 STEP-BY-STEP INSTRUCTIONS
                      </div>
                      {practice.instructions.map((instruction, i) => (
                        <div key={i} style={{ 
                          fontSize: 13, 
                          color: "#b0b0cc", 
                          marginBottom: 8,
                          paddingLeft: 20,
                          position: "relative"
                        }}>
                          <span style={{ 
                            position: "absolute", 
                            left: 0, 
                            color: lc,
                            fontWeight: 700 
                          }}>
                            {i + 1}.
                          </span>
                          {instruction}
                        </div>
                      ))}
                    </div>

                    {/* Complete Button */}
                    {!isDone && (
                      <div>
                        {/* Submission Fields */}
                        <div style={{ marginBottom: 20 }}>
                          <label style={{ 
                            display: "block", 
                            fontSize: 12, 
                            color: "#9090b0", 
                            marginBottom: 8,
                            fontWeight: 600,
                            fontFamily: "monospace",
                            letterSpacing: 1
                          }}>
                            🔗 YOUR DESIGN/WORK LINK (optional)
                          </label>
                          <input
                            type="text"
                            placeholder="Paste Figma, Dribbble, or any link..."
                            value={(gs.practiceSubmissions || {})[practice.id]?.link || ""}
                            id={`dq-practice-link-${practice.id}`}
                            name={`practice_link_${practice.id}`}
                            onChange={(e) => {
                              const subs = gs.practiceSubmissions || {};
                              updateGs({ 
                                practiceSubmissions: { 
                                  ...subs, 
                                  [practice.id]: { ...(subs[practice.id] || {}), link: e.target.value }
                                }
                              });
                            }}
                            style={{
                              width: "100%",
                              background: "#13131f",
                              border: "1px solid #2a2a40",
                              borderRadius: 8,
                              padding: "12px 14px",
                              color: "#e8e8f0",
                              fontSize: 13,
                              fontFamily: "monospace",
                              outline: "none",
                            }}
                          />
                        </div>

                        <div style={{ marginBottom: 20 }}>
                          <label style={{ 
                            display: "block", 
                            fontSize: 12, 
                            color: "#9090b0", 
                            marginBottom: 8,
                            fontWeight: 600,
                            fontFamily: "monospace",
                            letterSpacing: 1
                          }}>
                            📸 IMAGE URL (optional)
                          </label>
                          <input
                            type="text"
                            placeholder="Paste image URL (from Imgur, etc)..."
                            value={(gs.practiceSubmissions || {})[practice.id]?.image || ""}
                            id={`dq-practice-image-${practice.id}`}
                            name={`practice_image_${practice.id}`}
                            onChange={(e) => {
                              const subs = gs.practiceSubmissions || {};
                              updateGs({ 
                                practiceSubmissions: { 
                                  ...subs, 
                                  [practice.id]: { ...(subs[practice.id] || {}), image: e.target.value }
                                }
                              });
                            }}
                            style={{
                              width: "100%",
                              background: "#13131f",
                              border: "1px solid #2a2a40",
                              borderRadius: 8,
                              padding: "12px 14px",
                              color: "#e8e8f0",
                              fontSize: 13,
                              fontFamily: "monospace",
                              outline: "none",
                            }}
                          />
                        </div>

                        <button
                          onClick={() => completePractice(practice.id)}
                          style={{
                            ...styles.smallBtn,
                            background: lc,
                            color: "#000",
                            fontWeight: 700,
                            border: "none",
                            padding: "12px 24px",
                            fontSize: 13,
                          }}
                        >
                          ✓ MARK AS COMPLETE
                        </button>
                      </div>
                    )}

                    {isDone && (
                      <div>
                        <div style={{ 
                          fontSize: 13, 
                          color: lc, 
                          fontWeight: 600,
                          fontFamily: "monospace",
                          letterSpacing: 1,
                          marginBottom: 16
                        }}>
                          ✓ COMPLETED
                        </div>
                        
                        {/* Display submitted work */}
                        {(gs.practiceSubmissions || {})[practice.id] && (
                          <div style={{ 
                            background: "#13131f", 
                            border: `1px solid ${lc}20`, 
                            borderRadius: 8, 
                            padding: 16,
                            marginTop: 12
                          }}>
                            {(gs.practiceSubmissions[practice.id].link) && (
                              <div style={{ marginBottom: 12 }}>
                                <div style={{ 
                                  fontSize: 10, 
                                  color: "#6b6b8a", 
                                  fontFamily: "monospace", 
                                  letterSpacing: 1, 
                                  marginBottom: 6 
                                }}>
                                  YOUR WORK
                                </div>
                                <a 
                                  href={gs.practiceSubmissions[practice.id].link} 
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  style={{ 
                                    color: lc, 
                                    fontSize: 12, 
                                    textDecoration: "none",
                                    wordBreak: "break-all"
                                  }}
                                >
                                  🔗 {gs.practiceSubmissions[practice.id].link}
                                </a>
                              </div>
                            )}
                            
                            {(gs.practiceSubmissions[practice.id].image) && (
                              <div>
                                <div style={{ 
                                  fontSize: 10, 
                                  color: "#6b6b8a", 
                                  fontFamily: "monospace", 
                                  letterSpacing: 1, 
                                  marginBottom: 6 
                                }}>
                                  PREVIEW
                                </div>
                                <img 
                                  src={gs.practiceSubmissions[practice.id].image} 
                                  alt="Practice submission"
                                  style={{ 
                                    maxWidth: "100%", 
                                    borderRadius: 6, 
                                    border: `1px solid ${lc}20` 
                                  }}
                                  onError={(e) => { e.target.style.display = 'none'; }}
                                />
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
          </div>

          {/* Helpful Tips */}
          {!questDone && (
            <div style={{ 
              background: "#13131f", 
              border: "1px solid #2a2a3a", 
              borderRadius: 12, 
              padding: 24, 
              marginTop: 32 
            }}>
              <div style={{ 
                fontFamily: "monospace", 
                fontSize: 10, 
                letterSpacing: 2, 
                color: "#6b6b8a", 
                marginBottom: 16 
              }}>
                💡 PRO TIPS
              </div>
              <div style={{ fontSize: 13, color: "#8080a0", lineHeight: 1.8 }}>
                • Take your time with each practice — quality over speed<br />
                • Use Figma to create your designs (it's free!)<br />
                • Follow the step-by-step instructions carefully<br />
                • Complete all {practices.length} practices to earn {level.quest.xpReward} XP<br />
                • You can come back anytime to finish remaining practices
              </div>
            </div>
          )}
        </div>
        <Notifications notifications={gs.notifications} />
      </div>
    );
  }

  // ─── MAIN HUB ──────────────────────────────────────────────────────────────
  const activeL = levelsWithUnlock[gs.level - 1] || levelsWithUnlock[0]; // Fallback to Level 1 if invalid

  return (
    <div style={styles.root}>
      <Particles />
      {/* TOP BAR */}
      <div style={styles.topBar}>
        <div style={{ fontFamily: "monospace", fontSize: 13, color: "#ffd700", letterSpacing: 3, fontWeight: 700 }}>⚡ DESIGN QUEST</div>
        <div style={{ display: "flex", alignItems: "center", gap: 20, flexWrap: "wrap" }}>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontFamily: "monospace", fontSize: 10, color: "#6b6b8a", letterSpacing: 2 }}>PLAYER</div>
            <div style={{ fontSize: 13, fontWeight: 600, color: "#e8e8f0" }}>{gs.playerName || "Guest"}</div>
          </div>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontFamily: "monospace", fontSize: 10, color: "#6b6b8a", letterSpacing: 2 }}>XP</div>
            <div style={{ fontSize: 13, fontWeight: 700, color: "#ffd700" }}>{gs.xp.toLocaleString()} / 10,000</div>
          </div>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontFamily: "monospace", fontSize: 10, color: "#6b6b8a", letterSpacing: 2 }}>LEVEL</div>
            <div style={{ fontSize: 13, fontWeight: 700, color: activeL?.color || "#00f5a0" }}>{activeL?.title || "Level 1"}</div>
          </div>
          <button onClick={() => { if (window.confirm("Reset all progress? This will clear your account data.")) { saveProgressToServer(gs.playerName, INITIAL_STATE); setGs(INITIAL_STATE); saveStateLocal(INITIAL_STATE); }}} style={{ fontFamily: "monospace", fontSize: 9, color: "#444", background: "none", border: "1px solid #222", borderRadius: 4, padding: "4px 8px", cursor: "pointer", letterSpacing: 1 }}>RESET</button>
          <button 
            onClick={() => { 
              if (window.confirm("Log out? Your progress is saved to your account.")) { 
                // Clear localStorage to allow fresh login
                window.storage.clear();
                // Reset to initial state
                setGs(INITIAL_STATE); 
                setNameInput("");
                setLoginError("");
              }
            }} 
            style={{ 
              fontFamily: "monospace", 
              fontSize: 10, 
              color: "#00f5a0", 
              background: "rgba(0,245,160,0.08)", 
              border: "1px solid rgba(0,245,160,0.2)", 
              borderRadius: 6, 
              padding: "6px 12px", 
              cursor: "pointer", 
              letterSpacing: 1,
              fontWeight: 600,
              transition: "all 0.2s"
            }}
            onMouseEnter={(e) => {
              e.target.style.background = "rgba(0,245,160,0.15)";
              e.target.style.borderColor = "rgba(0,245,160,0.4)";
            }}
            onMouseLeave={(e) => {
              e.target.style.background = "rgba(0,245,160,0.08)";
              e.target.style.borderColor = "rgba(0,245,160,0.2)";
            }}
          >
            ↪ LOGOUT
          </button>
        </div>
      </div>

      {/* XP BAR */}
      <div style={{ height: 3, background: "#0f0f1a" }}>
        <div style={{ width: `${xpPercent}%`, height: "100%", background: `linear-gradient(90deg, #00f5a0, #ffd700)`, transition: "width 0.8s ease" }} />
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 380px", height: "calc(100vh - 67px)", overflow: "hidden" }}>
        {/* LEFT: LEVELS + CONTENT */}
        <div style={{ overflowY: "auto", padding: "24px 24px 80px" }}>
          {/* QUICK ACTIONS */}
          <div style={{ background: "#13131f", border: "1px solid #1e1e30", borderRadius: 12, padding: 20, marginBottom: 20 }}>
            <div style={{ fontFamily: "monospace", fontSize: 9, color: "#6b6b8a", letterSpacing: 3, marginBottom: 14 }}>⚡ QUICK ACTIONS — TELL YOUR GAME MASTER:</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {[
                { label: "What should I do next?", icon: "🎯" },
                { label: "Teach me color theory", icon: "🎨" },
                { label: "Help me with Figma Auto Layout", icon: "🔷" },
                { label: "Explain Hick's Law", icon: "📜" },
                { label: "Review my current level", icon: "📊" },
                { label: "Give me a Figma challenge", icon: "⚡" },
              ].map(a => (
                <button key={a.label} onClick={() => sendMessage(a.label)} style={styles.quickBtn}>
                  {a.icon} {a.label}
                </button>
              ))}
            </div>
          </div>

          {/* LEVEL CARDS */}
          <div style={{ fontFamily: "monospace", fontSize: 9, color: "#6b6b8a", letterSpacing: 3, marginBottom: 14 }}>
            YOUR LEARNING MAP — {gs.completedModules.length} MODULES COMPLETE · {gs.completedQuests.length} QUESTS DONE
          </div>

          {levelsWithUnlock.map(level => {
            const done = gs.completedModules.filter(id => id.startsWith(`${level.id}-`)).length;
            const total = level.modules.length;
            const pct = (done / total) * 100;
            const lc = level.color;
            const locked = !level.unlocked;
            const questDone = gs.completedQuests.includes(level.id);

            return (
              <div
                key={level.id}
                style={{ ...styles.levelCard, borderColor: locked ? "#1a1a28" : `${lc}30`, opacity: locked ? 0.5 : 1, cursor: "pointer" }}
                onClick={() => !locked && updateGs({ activeView: "level-detail", activeLevel: level.id })}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 14 }}>
                  <div style={{ display: "flex", gap: 14, alignItems: "center" }}>
                    <div style={{ fontSize: 28 }}>{locked ? "🔒" : level.emoji}</div>
                    <div>
                      <div style={{ fontFamily: "monospace", fontSize: 9, color: lc, letterSpacing: 3, marginBottom: 3 }}>
                        LEVEL {level.id} {level.xpRequired > 0 ? `· ${level.xpRequired.toLocaleString()} XP` : "· STARTER"}
                      </div>
                      <div style={{ fontFamily: "'Georgia', serif", fontSize: 20, fontStyle: "italic", color: locked ? "#4a4a60" : "#e8e8f0" }}>{level.title}</div>
                    </div>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <div style={{ fontFamily: "monospace", fontSize: 20, fontWeight: 700, color: done === total ? lc : "#4a4a60" }}>{done}/{total}</div>
                    <div style={{ fontFamily: "monospace", fontSize: 9, color: "#6b6b8a", letterSpacing: 1 }}>MODULES</div>
                  </div>
                </div>

                {!locked && (
                  <>
                    <div style={{ height: 4, background: "#1e1e30", borderRadius: 10, marginBottom: 12, overflow: "hidden" }}>
                      <div style={{ width: `${pct}%`, height: "100%", background: lc, borderRadius: 10, transition: "width 0.8s" }} />
                    </div>
                    <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                      {level.modules.map(m => {
                        const mdone = gs.completedModules.includes(m.id);
                        return (
                          <div key={m.id} style={{ fontSize: 11, padding: "3px 10px", borderRadius: 100, background: mdone ? `${lc}20` : "#1e1e30", border: `1px solid ${mdone ? lc : "transparent"}`, color: mdone ? lc : "#6b6b8a", fontFamily: "monospace", letterSpacing: 0.5 }}>
                            {mdone ? "✓" : "○"} {m.title.split(" ")[0]}
                          </div>
                        );
                      })}
                      <div style={{ fontSize: 11, padding: "3px 10px", borderRadius: 100, background: questDone ? `${lc}20` : "#1e1e30", border: `1px solid ${questDone ? lc : "transparent"}`, color: questDone ? lc : "#6b6b8a", fontFamily: "monospace" }}>
                        {questDone ? "✓" : "○"} QUEST
                      </div>
                    </div>
                    <div style={{ marginTop: 12, textAlign: "right" }}>
                      <span style={{ fontFamily: "monospace", fontSize: 10, color: lc, letterSpacing: 1 }}>→ ENTER LEVEL</span>
                    </div>
                  </>
                )}
                {locked && (
                  <div style={{ fontFamily: "monospace", fontSize: 11, color: "#444", letterSpacing: 1 }}>
                    REQUIRES {level.xpRequired.toLocaleString()} XP · YOU HAVE {gs.xp.toLocaleString()} XP
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* RIGHT: GAME MASTER CHAT */}
        <div style={styles.chatPanel}>
          <div style={styles.chatHeader}>
            <div style={{ display: "flex", align: "center", gap: 10, alignItems: "center" }}>
              <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#00f5a0", boxShadow: "0 0 8px #00f5a0", animation: "pulse 2s infinite" }} />
              <div>
                <div style={{ fontFamily: "monospace", fontSize: 10, color: "#00f5a0", letterSpacing: 2 }}>GAME MASTER</div>
                <div style={{ fontSize: 11, color: "#6b6b8a" }}>Your AI Design Mentor</div>
              </div>
            </div>
            <button onClick={() => updateGs({ chatHistory: [] })} style={{ fontFamily: "monospace", fontSize: 9, color: "#444", background: "none", border: "1px solid #222", borderRadius: 4, padding: "3px 7px", cursor: "pointer" }}>CLEAR</button>
          </div>

          <div style={styles.chatMessages}>
            {gs.chatHistory.length === 0 && (
              <div style={{ textAlign: "center", padding: 40, color: "#444", fontFamily: "monospace", fontSize: 11, lineHeight: 2 }}>
                <div style={{ fontSize: 32, marginBottom: 12 }}>🎮</div>
                Type anything to speak with your Game Master.
                <br />Ask questions. Get unstuck. Receive guidance.
              </div>
            )}
            {gs.chatHistory.map((msg, i) => (
              <div key={i} style={{ marginBottom: 16, display: "flex", flexDirection: msg.role === "user" ? "row-reverse" : "row", gap: 8, alignItems: "flex-end" }}>
                <div style={{ width: 28, height: 28, borderRadius: "50%", background: msg.role === "user" ? "#2a1f4a" : "#0f2a1f", border: `1px solid ${msg.role === "user" ? "#7c6fff50" : "#00f5a050"}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, flexShrink: 0 }}>
                  {msg.role === "user" ? "🧑" : "🎮"}
                </div>
                <div style={{
                  maxWidth: "80%",
                  background: msg.role === "user" ? "#1a1430" : "#0e1e18",
                  border: `1px solid ${msg.role === "user" ? "#7c6fff30" : "#00f5a020"}`,
                  borderRadius: msg.role === "user" ? "12px 12px 0 12px" : "12px 12px 12px 0",
                  padding: "10px 14px",
                  fontSize: 13,
                  color: "#d0d0e0",
                  lineHeight: 1.6,
                  whiteSpace: "pre-wrap",
                  wordBreak: "break-word",
                }}>
                  {msg.content.replace(/\*\*(.*?)\*\*/g, "$1")}
                </div>
              </div>
            ))}
            {aiLoading && (
              <div style={{ display: "flex", gap: 8, alignItems: "center", padding: "8px 0" }}>
                <div style={{ width: 28, height: 28, borderRadius: "50%", background: "#0f2a1f", border: "1px solid #00f5a050", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12 }}>🎮</div>
                <div style={{ display: "flex", gap: 4 }}>
                  {[0, 1, 2].map(i => (
                    <div key={i} style={{ width: 6, height: 6, borderRadius: "50%", background: "#00f5a0", animation: `bounce 1s infinite ${i * 0.2}s`, opacity: 0.7 }} />
                  ))}
                </div>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          <div style={styles.chatInput}>
            <input
              ref={inputRef}
              id="dq-chat"
              name="chatMessage"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === "Enter" && sendMessage(input)}
              placeholder="Ask your Game Master anything..."
              autoComplete="off"
              style={styles.chatTextInput}
            />
            <button onClick={() => sendMessage(input)} disabled={aiLoading || !input.trim()} style={styles.sendBtn}>
              ▶
            </button>
          </div>
        </div>
      </div>

      <Notifications notifications={gs.notifications} />

      <style>{`
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.4} }
        @keyframes bounce { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-4px)} }
        @keyframes fadeInUp { from{opacity:0;transform:translateY(10px)} to{opacity:1;transform:translateY(0)} }
        @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-20px)} }
        * { scrollbar-width: thin; scrollbar-color: #1e1e30 transparent; }
        *::-webkit-scrollbar { width: 4px; }
        *::-webkit-scrollbar-track { background: transparent; }
        *::-webkit-scrollbar-thumb { background: #1e1e30; border-radius: 10px; }
        button { cursor: pointer; }
      `}</style>
    </div>
  );
}

// ─── SUB-COMPONENTS ───────────────────────────────────────────────────────────
function SectionTitle({ text, color }) {
  return (
    <div style={{ fontFamily: "monospace", fontSize: 9, letterSpacing: 3, color, marginBottom: 14, textTransform: "uppercase" }}>
      {text}
    </div>
  );
}

function Notifications({ notifications }) {
  return (
    <div style={{ position: "fixed", bottom: 24, left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", gap: 8, zIndex: 1000, pointerEvents: "none" }}>
      {notifications.map(n => (
        <div key={n.id} style={{ background: "#13131f", border: `1px solid ${n.color}60`, borderRadius: 8, padding: "10px 20px", fontFamily: "monospace", fontSize: 12, color: n.color, letterSpacing: 2, animation: "fadeInUp 0.3s ease", whiteSpace: "nowrap", textAlign: "center", boxShadow: `0 0 20px ${n.color}30` }}>
          {n.msg}
        </div>
      ))}
    </div>
  );
}

function Particles() {
  return (
    <div style={{ position: "fixed", inset: 0, pointerEvents: "none", overflow: "hidden", zIndex: 0 }}>
      {[...Array(12)].map((_, i) => (
        <div key={i} style={{
          position: "absolute",
          width: Math.random() * 3 + 1,
          height: Math.random() * 3 + 1,
          borderRadius: "50%",
          background: ["#00f5a0", "#7c6fff", "#ff6b35", "#ffd700"][i % 4],
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          opacity: 0.2 + Math.random() * 0.2,
          animation: `float ${4 + Math.random() * 6}s ease-in-out infinite ${Math.random() * 4}s`
        }} />
      ))}
    </div>
  );
}

// ─── STYLES ───────────────────────────────────────────────────────────────────
const styles = {
  root: {
    background: "#080810",
    minHeight: "100vh",
    color: "#e8e8f0",
    fontFamily: "'Segoe UI', system-ui, sans-serif",
    position: "relative",
  },
  charSelect: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "40px 20px",
    position: "relative",
    zIndex: 1,
  },
  pixelBorder: {
    background: "#0e0e1a",
    border: "1px solid #2a2a40",
    borderRadius: 20,
    padding: "48px 52px",
    width: "100%",
    maxWidth: 500,
    boxShadow: "0 0 60px rgba(0,245,160,0.05), 0 0 120px rgba(124,111,255,0.03)",
  },
  nameInput: {
    width: "100%",
    background: "#13131f",
    border: "1px solid #2a2a40",
    borderRadius: 8,
    padding: "14px 18px",
    color: "#e8e8f0",
    fontSize: 16,
    fontFamily: "monospace",
    outline: "none",
    letterSpacing: 1,
  },
  startBtn: {
    width: "100%",
    background: "#00f5a0",
    color: "#000",
    border: "none",
    borderRadius: 8,
    padding: "16px",
    fontSize: 14,
    fontFamily: "monospace",
    fontWeight: 700,
    letterSpacing: 3,
    cursor: "pointer",
    boxShadow: "0 0 30px rgba(0,245,160,0.3)",
    transition: "all 0.2s",
  },
  topBar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "12px 24px",
    background: "rgba(8,8,16,0.95)",
    borderBottom: "1px solid #1e1e30",
    backdropFilter: "blur(20px)",
    flexWrap: "wrap",
    gap: 12,
    position: "relative",
    zIndex: 10,
  },
  chatPanel: {
    display: "flex",
    flexDirection: "column",
    borderLeft: "1px solid #1e1e30",
    background: "#09090f",
    height: "100%",
    overflow: "hidden",
  },
  chatHeader: {
    padding: "16px 20px",
    borderBottom: "1px solid #1e1e30",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexShrink: 0,
  },
  chatMessages: {
    flex: 1,
    overflowY: "auto",
    padding: "20px",
  },
  chatInput: {
    padding: "14px 16px",
    borderTop: "1px solid #1e1e30",
    display: "flex",
    gap: 10,
    flexShrink: 0,
  },
  chatTextInput: {
    flex: 1,
    background: "#13131f",
    border: "1px solid #1e1e30",
    borderRadius: 8,
    padding: "10px 14px",
    color: "#e8e8f0",
    fontSize: 13,
    outline: "none",
    fontFamily: "inherit",
  },
  sendBtn: {
    background: "#00f5a0",
    color: "#000",
    border: "none",
    borderRadius: 8,
    padding: "10px 16px",
    fontWeight: 700,
    fontSize: 13,
  },
  levelCard: {
    background: "#13131f",
    border: "1px solid #1e1e30",
    borderRadius: 12,
    padding: "20px 24px",
    marginBottom: 12,
    transition: "border-color 0.2s, transform 0.2s",
  },
  moduleCard: {
    background: "#0e0e1a",
    border: "1px solid #1e1e30",
    borderRadius: 10,
    padding: "18px",
    position: "relative",
    overflow: "hidden",
    transition: "border-color 0.2s",
  },
  questCard: {
    border: "1px solid #2a2a40",
    borderRadius: 14,
    padding: "28px 32px",
    position: "relative",
  },
  chip: {
    fontFamily: "monospace",
    fontSize: 10,
    padding: "3px 8px",
    borderRadius: 100,
    background: "#1e1e30",
    color: "#6b6b8a",
    border: "1px solid #2a2a3a",
    letterSpacing: 0.5,
  },
  smallBtn: {
    fontFamily: "monospace",
    fontSize: 10,
    letterSpacing: 1,
    padding: "8px 14px",
    borderRadius: 6,
    background: "transparent",
    border: "1px solid #2a2a40",
    color: "#9090b0",
    cursor: "pointer",
    textTransform: "uppercase",
    transition: "all 0.2s",
  },
  ghostBtn: {
    background: "transparent",
    border: "1px solid #1e1e30",
    borderRadius: 6,
    padding: "8px 16px",
    color: "#6b6b8a",
    fontFamily: "monospace",
    fontSize: 11,
    letterSpacing: 1,
    cursor: "pointer",
  },
  quizOption: {
    background: "#0e0e1a",
    border: "1px solid #2a2a40",
    borderRadius: 8,
    padding: "14px 18px",
    color: "#b0b0cc",
    fontSize: 14,
    textAlign: "left",
    cursor: "pointer",
    fontFamily: "inherit",
    display: "flex",
    alignItems: "center",
    transition: "all 0.15s",
  },
  quickBtn: {
    fontFamily: "monospace",
    fontSize: 10,
    letterSpacing: 0.5,
    padding: "7px 12px",
    borderRadius: 6,
    background: "#13131f",
    border: "1px solid #2a2a3a",
    color: "#8080a0",
    cursor: "pointer",
    textAlign: "left",
    transition: "all 0.15s",
    whiteSpace: "nowrap",
  },
};
