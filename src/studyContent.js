// Real study content for each module
export const STUDY_CONTENT = {
  "1-1": {
    title: "UI/UX Design Principles",
    emoji: "🎨",
    sections: [
      {
        heading: "What is Visual Hierarchy?",
        content: `Visual hierarchy is the principle of arranging elements to show their order of importance. Your eye naturally follows patterns — designers control where viewers look first, second, and third.

**Why it matters:** Bad hierarchy = confusion. Good hierarchy = instant understanding.

**Real-World Example:** Compare these two designs:
❌ BAD: All text is 16px, same color, no spacing
✅ GOOD: Headline 32px, subhead 20px, body 16px, clear spacing

Visual Reference: Search "visual hierarchy examples" on Dribbble or Behance to see professional applications.`,
        image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800&q=80"
      },
      {
        heading: "🎯 The 5 Core Principles",
        content: `**1. Size & Scale**
Bigger = more important. Your headline should be larger than body text.

Example ratios:
• H1: 2.5-3× body size (e.g., 48px vs 16px)
• H2: 1.8-2× body size (e.g., 32px vs 16px)
• H3: 1.3-1.5× body size (e.g., 24px vs 16px)

Visual Reference: Look at any Medium.com article — notice the massive headline, medium subtitle, small body text.

**2. Color & Contrast**
High contrast draws attention. Dark text on light background creates focus.

Examples:
• Primary CTA: Bright color on neutral background
• Secondary text: Gray (#6b6b6a) on white
• Error states: Red text on light red background

Tool: Use WebAIM Contrast Checker
Minimum: 4.5:1 for body text, 3:1 for large text (WCAG AA)

**3. Spacing (White Space)**
Elements with more breathing room feel more important. Cramped = less priority.

Example spacing system (8pt grid):
• Between sections: 48-64px
• Between elements in a section: 16-24px
• Between related items: 8-12px
• Line height (body): 1.5-1.7× font size

Visual Reference: Check Apple.com — massive white space around key products.

**4. Alignment**
Aligned elements feel organized. Misalignment creates visual tension (use intentionally).

Types:
• **Left-aligned:** Most readable for body text (Western languages)
• **Center-aligned:** Good for short headlines, logos
• **Right-aligned:** Rare, use for timestamps or secondary info
• **Justified:** AVOID for web (creates rivers of white space)

**5. Proximity (Gestalt Law)**
Items close together are perceived as related. Group related content.

Example: In a form:
✅ Label 4px above input (close = related)
❌ Label 16px above input (feels disconnected)

Visual Reference: Stripe's payment forms — perfect proximity grouping.`,
        image: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&q=80"
      },
      {
        heading: "⚡ Gestalt Laws You MUST Know",
        content: `**Proximity:** Things near each other = related
**Example:** Navigation menu items grouped together = one navigation unit

**Similarity:** Things that look alike = related  
**Example:** All buttons same color = interactive elements
All prices in bold = monetary values

**Closure:** Your brain completes incomplete shapes
**Example:** Dotted outline of a box → you see a complete box
FedEx logo → you see arrow between E and x

**Continuity:** Eyes follow paths/lines naturally
**Example:** Diagonal lines in a design guide eye movement
Timeline with connected dots → you follow the line

**Figure-Ground:** We separate objects from backgrounds
**Example:** Text on a card → text is figure, card is ground
Modal popup → modal is figure, dimmed background is ground

**PRACTICAL APPLICATION:**
Look at Airbnb's card designs:
• Image + Title + Price = grouped (proximity)
• All cards look similar (similarity)
• Cards float above background (figure-ground)
• Grid layout guides eye left-to-right (continuity)
,
        image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80"
Visual Reference: lawsofux.com/gestalt-principles`
      },
      {
        heading: "🎨 Practical Exercise #1: Restaurant Menu",
        content: `**Design a restaurant menu card:**

REQUIREMENTS:
1. Dish name: LARGEST (36-48pt, bold)
2. Description: smaller (14-16pt, regular, gray)
3. Price: medium-bold (18-20pt, accent color)
4. Space between dishes: 32px
5. Space within dish info: 8px max
6. Use color on ONE element only (price OR name)

EXAMPLE STRUCTURE:
━━━━━━━━━━━━━━━━━━
TRUFFLE RISOTTO        $24
Creamy arborio rice with black truffle,
parmesan, and fresh herbs

[32px space]

GRILLED SALMON         $28
Atlantic salmon with lemon butter,
seasonal vegetables
━━━━━━━━━━━━━━━━━━

TOOLS: Open Figma → Create 375×812 frame → Try it in 15 minutes

SUCCESS CRITERIA:
✓ Can clearly identify dish name first
✓ Price is visible but not dominant
✓ Description is readable but seco,
        image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80"ndary
✓ Clear separation between dishes`
      },
      {
        heading: "🎨 Practical Exercise #2: Event Poster",
        content: `**Create a concert poster with perfect hierarchy:**

HIERARCHY ORDER (what you see first → last):
1. Band/Artist name (BIGGEST, boldest)
2. Event type (CONCERT, LIVE, etc.)
3. Date & Time
4. Venue
5. Ticket price/link (CTA)
6. Supporting acts (smallest)

SIZE SCALE:
• Artist: 72-96pt
• Event type: 36-48pt
• Date/Time: 24-32pt
• Venue: 18-24pt
• CTA: 20pt (but use bright color/button)
• Supporting: 14-16pt

COLOR STRATEGY:
• Artist: High contrast (white on dark OR dark on white)
• CTA button: Accent color (orange, green, etc.)
• Everything else: Neutral grays,
        image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&q=80"

Visual Reference: Check concert posters on Pinterest or Poster Cabaret`
      },
      {
        heading: "🚫 Common Mistakes",
        content: `• Making everything the same size (no hierarchy)
• Using 5+ font sizes (too chaotic),
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80"
• Ignoring white space (cramming everything)
• Not checking contrast ratio (WCAG requires 4.5:1 for body text)
• Centering everything (weak, indecisive)`
      }
    ],
    keyTakeaways: [
      "🎯 UI focuses on interface aesthetics, UX focuses on user experience and journey",
      "👁 Visual hierarchy, Gestalt laws, and eye patterns guide effective design",
      "🔍 User-centered design means solving real problems, not just making things pretty",
      "⚡ Great design is invisible — users accomplish goals without friction"
    ],
    resources: [
      "📚 Figma: What is UX Design? → https://www.figma.com/resource-library/what-is-ux-design/",
      "📚 Figma: UI vs UX Difference → https://www.figma.com/resource-library/difference-between-ui-and-ux/",
      "📚 Figma: Design Thinking Guide → https://www.figma.com/resource-library/what-is-design-thinking/",
      "🔍 Contrast Checker → webaim.org/resources/contrastchecker",
      "📖 Don't Make Me Think by Steve Krug"
    ],
    quiz: [
      {
        q: "Look at this scenario: You have a headline, body text, and a CTA button on a landing page. Which element should be LARGEST?",
        image: null,
        options: [
          "The headline (draws attention first)",
          "The CTA button (most important action)",
          "The body text (most content)",
          "All should be same size (balance)"
        ],
        answer: 0,
        explanation: "The headline should be largest to establish hierarchy. Users read top-to-bottom, so the headline captures attention first. The CTA uses COLOR and CONTRAST for emphasis, not size alone."
      },
      {
        q: "A designer creates a card with a product image, title, description, and price. The title is 14px and the description is 16px. What's wrong?",
        image: null,
        options: [
          "Nothing, descriptions should be bigger",
          "Title should be LARGER than description (inverted hierarchy)",
          "Both should be the same size",
          "The price should be biggest"
        ],
        answer: 1,
        explanation: "This is inverted hierarchy. Titles should be larger (18-24px) than descriptions (14-16px) to show importance. The eye should hit the title first."
      },
      {
        q: "What is the MINIMUM contrast ratio for normal body text (16px) according to WCAG AA?",
        image: null,
        options: [
          "3:1",
          "4.5:1",
          "7:1",
          "2:1"
        ],
        answer: 1,
        explanation: "WCAG AA requires 4.5:1 for body text, 3:1 for large text (18pt+). AAA requires 7:1. Use WebAIM Contrast Checker to test."
      },
      {
        q: "You're designing a form. The label 'Email Address' and its input field should be how far apart?",
        image: null,
        options: [
          "32px (lots of space)",
          "2-4px (very close - they're related)",
          "16px (medium space)",
          "Distance doesn't matter"
        ],
        answer: 1,
        explanation: "Proximity! Related elements should be CLOSE (2-4px). Space BETWEEN form fields (24-32px) should be LARGER than space within a field group."
      },
      {
        q: "Look at this white space scenario: Section A has 60px padding, Section B has 12px padding. Which feels more important?",
        image: null,
        options: [
          "Section A (more space = more importance)",
          "Section B (less space = more compact/important)",
          "Both feel equally important",
          "White space doesn't affect importance"
        ],
        answer: 0,
        explanation: "More white space = more importance. Apple uses HUGE white space around hero products. Cramped designs feel cluttered and less premium."
      }
    ]
  },
  "1-2": {
    title: "Color Theory & Application",
    emoji: "�",
    sections: [
      {
        heading: "Why HSL > RGB",
        content: `**HSL = Hue, Saturation, Lightness**

**Hue (0-360°):** The actual color (red, blue, green)
**Saturation (0-100%):** Color intensity (0% = gray, 100% = vivid)
**Lightness (0-100%):** Brightness (0% = black, 100% = white)

**Why it's better:** You can create variations easily. Want a lighter blue? Increase lightness. Want a muted version? Decrease saturation.`
      },
      {
        heading: "🎯 The 60-30-10 Rule",
        content: `**60% — Dominant color** (usually neutral: white, light gray, dark bg)
**30% — Secondary color** (brand color, accent backgrounds)  
**10% — Accent color** (CTAs, highlights, links)

**Example:**
• 60%: Light gray background (#f5f5f5)
• 30%: Navy blue sections (#1a2332)
• 10%: Bright orange buttons (#ff6b35)

This creates balance. Too many accent colors = chaos.

**REAL BRANDS USING THIS:**
• Stripe: 60% white, 30% purple sections, 10% blue CTAs,
        image: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=800&q=80"
• Spotify: 60% black, 30% dark gray, 10% green
• Notion: 60% white, 30% light gray, 10% blue/red accents

Visual Reference: Search "60-30-10 rule design examples" on Pinterest`
      },
      {
        heading: "🌈 Color Palette Strategies",
        content: `**Monochromatic:** One hue, different saturations/lightness
Example: Blue (#0066cc, #3385d6, #66a3e0, #99c2eb)
→ Clean, professional, safe, HARD TO MESS UP

**Analogous:** Adjacent colors on color wheel (blue, teal, green)
Example: #2563eb (blue), #06b6d4 (cyan), #10b981 (green)
→ Harmonious, natural, calming

**Complementary:** Opposite colors (blue & orange, red & green)
Example: #3b82f6 (blue) & #f97316 (orange)
→ High contrast, vibrant, RISKY (can be loud)

**Triadic:** 3 colors equally spaced on wheel
Example: Red, Yellow, Blue OR Purple, Orange, Green
→ Balanced, colorful, playful

**Split-Complementary:** Base + two adjacent to complement
Example: Blue + Yellow-Orange + Red-Orange
→ Balanced but vibrant

**Pro tip:** Start with monochromatic. It's the hardest to mess up.

**TOOLS:**
• Coolors.co → Generate palettes, lock colors you like,
        image: "https://images.unsplash.com/photo-1525909002-1b05e0c869d8?w=800&q=80"
• Adobe Color → Color wheel tool
• Realtime Colors → Preview colors on actual UI
• Paletton → Advanced color scheme designer

Visual Reference: dribbble.com/colors (filter designs by color)`
      },
      {
        heading: "🎨 Practical Exercise: Build a Palette",
        content: `**Create a 5-color palette for a meditation app:**

STEP-BY-STEP:
1. Choose a calming primary (blues: #3b82f6, purples: #8b5cf6, greens: #10b981)
2. Set HSL values: H=220, S=90%, L=60% (example blue)
3. Create 5 shades by varying LIGHTNESS:
   • Darkest: L=20% → #0a1628 (backgrounds)
   • Dark: L=40% → #1a3d5f (cards)
   • Base: L=60% → #3b82f6 (primary)
   • Light: L=75% → #7db3f9 (hover states)
   • Lightest: L=90% → #d9e8fc (subtle backgrounds)

4. Pick an accent (warm: orange #f97316, gold #fbbf24) for CTAs
5. Test contrast:
   • Dark blue text on white: 4.5:1+ ✓
   • White text on dark blue: 4.5:1+ ✓
   • Orange CTA on white: 3:1+ ✓

6. Export as Figma color styles

SUCCESS CRITERIA:,
        image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80"
✓ All text passes WCAG contrast
✓ Palette feels cohesive (not random)
✓ CTA stands out clearly

Visual Reference: Look at Headspace or Calm app color palettes`
      },
      {
        heading: "🌙 Dark Mode Done Right",
        content: `**DON'T use pure black (#000000)**
Use dark grays: #121212, #1a1a1a, #0f0f0f

**WHY?**
• Pure black = too much contrast, causes eye strain
• Dark grays feel softer, more premium
• Colored tints (e.g. #0a0a12 with blue tint) add personality

**DARK MODE COLOR SYSTEM:**
• **Background:** #121212
• **Surface (cards):** #1e1e1e  
• **Elevated (modals):** #2a2a2a
• **Text primary:** #ffffff (or #e8e8f0)
• **Text secondary:** #9090b0
• **Text disabled:** #6b6b8a

**Elevation in dark mode:**
Lighter surfaces = higher elevation (opposite of light mode!)
• Ground level: Darkest (#121212)
• Card level: Medium (#1e1e1e)
• Modal level: Lightest (#2a2a2a)

**ACCENT COLORS IN DARK MODE:**
Reduce saturation by 10-20%!
• Light mode blue: hsl(220, 90%, 60%)
• Dark mode blue: hsl(220, 75%, 65%)

Why? High saturation on dark = eye strain

**EXAMPLES:**
• Discord: Dark gray (#36393f), not black
• Twitter: Dark blue-gray (#15202b)
• YouTube: True dark (#0f0f0f) for video focus

**PRATICAL EXERCISE:**
Take your meditation app palette and create a dark version:,
        image: "https://images.unsplash.com/photo-1618556450994-a6a128ef0d9d?w=800&q=80"
1. Swap background to #121212
2. Reduce blue saturation: 90% → 75%
3. Test white text on dark blue: must be 4.5:1+
4. Add elevation levels (#1e1e1e, #2a2a2a)

Visual Reference: material.io/design/color/dark-theme.html`
      },
      {
        heading: "⚡ Color Psychology Basics",
        content: `**Red:**
Emotion: Urgency, passion, danger, energy
Use: CTAs (buy now), errors, notifications
Brands: Netflix, YouTube, Target, Coca-Cola
Avoid: Large areas (overwhelming), financial apps (stress)

**Blue:**
Emotion: Trust, calm, professional, stable
Use: Finance, healthcare, productivity, social media
Brands: Facebook, Twitter, PayPal, Chase
Why popular: Most preferred color globally

**Green:**
Emotion: Growth, health, success, nature
Use: Finance (money), eco brands, health apps, success states
Brands: Spotify, Whole Foods, Android, Starbucks
Psychology: "Go" signal, positive action

**Orange:**
Emotion: Friendly, energetic, affordable, creative
Use: CTAs (less aggressive than red), food, creative tools
Brands: Fanta, Nickelodeon, SoundCloud
Warning: Can feel "cheap" if overused

**Purple:**
Emotion: Luxury, creativity, imagination, premium
Use: Beauty, luxury brands, creative tools
Brands: Twitch, Yahoo, Cadbury, Hallmark
Note: Rare in nature = feels unique

**Yellow:**
Emotion: Optimism, attention, caution, happiness
Use: Warnings, highlights, children's products
Brands: McDonald's, IKEA, Snapchat
WARNING: Hard to read (low contrast), causes eye strain in large areas

**PRACTICAL APPLICATION:**
Meditation app = Blue/Purple (calm, gentle)
Banking app = Blue (trust, stability)
Fitness app = Red/Orange (energy, action)
Eco brand = Green (nature, sustainability)

Visual Reference: 99designs.com/blog/tips/how-color-impacts-emotions-and-behaviors`
      },
    ],
    keyTakeaways: [
      "Use HSL for easier color variations",
      "60-30-10 rule: dominant, secondary, accent",
      "Avoid pure black in dark mode — use #121212 or similar",
      "Always test contrast ratios (WCAG AA minimum)"
    ],
    resources: [
      "📚 Figma: 100 Color Combinations → https://www.figma.com/resource-library/color-combinations/",
      "🎨 Figma Color Wheel → https://www.figma.com/color-wheel/",
      "🎨 Figma Color Picker → https://www.figma.com/color-picker/",
      "🔍 Figma Contrast Checker → https://www.figma.com/color-contrast-checker/",
      "🎨 Coolors.co → color palette generator",
      "📚 Material Design Color → material.io/design/color"
    ],
    quiz: [
      {
        q: "You're designing a banking app. A user sees a card with white background and needs to read body text. The text color is #767676 (gray). The contrast ratio is 3.8:1. What's the problem?",
        options: [
          "Perfect - gray looks better than black",
          "Fails WCAG AA (needs 4.5:1 for body text)",
          "Too much contrast",
          "Gray should never be used for text"
        ],
        answer: 1,
        explanation: "WCAG AA requires 4.5:1 for normal text. 3.8:1 fails. Use darker gray (#5f5f5f = 4.6:1) or pure black (#000 = 21:1). Large text (18pt+) can be 3:1."
      },
      {
        q: "A designer creates a website: 50% bright blue, 30% bright red, 20% yellow. All high saturation. What color rule did they violate?",
        options: [
          "60-30-10 rule (wrong proportions, too many accent colors)",
          "Nothing wrong - colorful is good",
          "Should use 4 colors instead",
          "Blue and red can't be used together"
        ],
        answer: 0,
        explanation: "60-30-10 rule: 60% neutral dominant, 30% brand secondary, 10% accent. Using 3 vibrant colors at high saturation = visual chaos. Neutrals should dominate."
      },
      {
        q: "In dark mode (#121212 background), a button uses the SAME bright blue (#3b82f6, 90% saturation) as light mode. What should you do?",
        options: [
          "Keep it the same - consistency matters",
          "Reduce saturation to ~75% and slightly increase lightness",
          "Make it darker",
          "Switch to a completely different color"
        ],
        answer: 1,
        explanation: "High saturation on dark backgrounds = eye strain. Reduce saturation by 10-20% and increase lightness slightly. Example: hsl(220, 90%, 60%) → hsl(220, 75%, 65%)"
      },
      {
        q: "You're designing an eco-friendly product app. Which color palette feels most appropriate?",
        options: [
          "Red + Orange (energy)",
          "Green + Earth tones (nature, growth)",
          "Purple + Pink (luxury)",
          "Blue + Gray (corporate)"
        ],
        answer: 1,
        explanation: "Green = nature, growth, sustainability. Earth tones (browns, beiges) reinforce eco/natural feel. Color psychology matters for brand perception."
      },
      {
        q: "A meditation app uses HSL for their primary blue. They want 5 shades. What should they vary?",
        options: [
          "Hue (change the color)",
          "Saturation (change intensity)",
          "Lightness (L=20%, 40%, 60%, 80%, 95%)",
          "All three equally"
        ],
        answer: 2,
        explanation: "Vary LIGHTNESS to create shades of the same color. Keep Hue and Saturation consistent. Example: hsl(220, 90%, 20%) to hsl(220, 90%, 95%). Monochromatic palette = cohesive."
      }
    ]
  },
  "1-3": {
    title: "Typography Foundations",
    emoji: "📝",
    sections: [
      {
        heading: "The Type Scale",
        content: `A type scale creates hierarchy with math.

**Example scale (multiplier 1.25):**
• H1: 48px
• H2: 38px
• H3: 30px
• H4: 24px
• Body: 16px
• Small: 13px

**Tool:** Type-scale.com — generates scales for you.

**Rule:** Stick to 3-5 sizes max. More = chaos.`,
        image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&q=80"
      },
      {
        heading: "🎯 Font Pairing 101",
        content: `**The golden rule:** Pair a serif with a sans-serif (or vice versa)

**Examples:**
• Playfair Display (serif headline) + Inter (sans body)
• Montserrat (sans headline) + Merriweather (serif body)

**Safe strategy:**
• Use ONE font family
• Vary weight and size for hierarchy
• Example: Inter (Bold 32px headline, Regular 16px body)

**Font count limit:** 2 font families max. 3 = messy.`,
        image: "https://images.unsplash.com/photo-1461958508236-9a742665a0d5?w=800&q=80"
      },
      {
        heading: "📏 Line Length & Leading",
        content: `**Line length (measure):**
Ideal: 50-75 characters per line
Too long = hard to track
Too short = choppy reading

**Leading (line-height):**
Body text: 1.5 to 1.7
Headlines: 1.1 to 1.3
Small text: 1.4 to 1.6

**Formula:** line-height = font-size × multiplier
Example: 16px font × 1.5 = 24px line-height`,
        image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=80"
      },
      {
        heading: "⚡ Readability Rules",
        content: `**1. Never use pure black on pure white**
Use #333 on #fff, or #fff on #1a1a1a

**2. Never justify body text**
Left-aligned = most readable

**3. Limit line length**
Use max-width: 65ch (characters)

**4. Respect text hierarchy**
Only ONE h1 per page
h2 → h3 → h4 in order, don't skip

**5. Avoid ALL CAPS for body text**
It's HARDER TO READ (use sparingly for labels)`,
        image: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=800&q=80"
      },
      {
        heading: "🎨 Practical Exercise",
        content: `**Design a blog post layout in Figma:**

1. Set up 3 text styles:
   • Headline (32px, bold)
   • Body (16px, regular, line-height 1.6)
   • Caption (13px, medium)

2. Create a 600px wide frame
3. Add a headline, 2 paragraphs, an image, and caption
4. Set body max-width to ~480px
5. Use proper spacing (24px between paragraphs)

Export as Figma component. Reuse forever.`,
        image: "https://images.unsplash.com/photo-1503095396549-807759245b35?w=800&q=80"
      }
    ],
    keyTakeaways: [
      "Use type scales (type-scale.com) for consistent sizing",
      "Pair fonts: serif + sans OR use one family with weight variation",
      "Line length: 50-75 characters. Line-height: 1.5-1.7 for body",
      "Never use pure black text (#333 minimum)"
    ],
    resources: [
      "� Figma: Best Fonts for Websites → https://www.figma.com/resource-library/best-fonts-for-websites/",
      "📚 Figma: Best Sans Serif Fonts → https://www.figma.com/resource-library/best-sans-serif-fonts/",
      "🎨 Figma Font Library → https://www.figma.com/fonts/",
      "📐 Type-scale.com → generate type scales",
      "🔤 Google Fonts → fonts.google.com",
      "📖 Practical Typography → practicaltypography.com"
    ],
    quiz: [
      {
        q: "A website has: H1=16px, H2=18px, Body=16px, Small=14px. What's wrong with this type scale?",
        options: [
          "Perfect - consistency is good",
          "No clear hierarchy (sizes too similar, H1 should be much larger)",
          "Too many sizes",
          "Small text is too big"
        ],
        answer: 1,
        explanation: "H1 should be 2.5-3× body size. Example: Body=16px means H1=40-48px. This creates clear visual hierarchy. Similar sizes = weak hierarchy."
      },
      {
        q: "A designer pairs Comic Sans (headline) with Times New Roman (body). What's the issue?",
        options: [
          "Nothing - variety is good",
          "Clashing styles (informal + formal = inconsistent tone)",
          "Should use 3 fonts instead of 2",
          "Times New Roman is too old"
        ],
        answer: 1,
        explanation: "Font personality must match. Comic Sans = playful/childish. Times = formal/traditional. They clash. Better: Montserrat (modern sans) + Merriweather (friendly serif)."
      },
      {
        q: "Body text is 16px. What line-height (leading) is most readable?",
        options: [
          "16px (1.0 - tight)",
          "20px (1.25 - compact)",
          "24-27px (1.5-1.7 - ideal)",
          "40px (2.5 - too loose)"
        ],
        answer: 2,
        explanation: "Body text needs 1.5-1.7 line-height for readability. Too tight = lines blend. Too loose = disconnected. Headlines use 1.1-1.3."
      },
      {
        q: "A paragraph has 120 characters per line on desktop. What's the problem?",
        options: [
          "Perfect - more content visible",
          "Too long (ideal: 50-75 characters, max 90)",
          "Too short",
          "Character count doesn't matter"
        ],
        answer: 1,
        explanation: "Long lines = hard to track. Eye gets lost moving from end of line to start of next. Use max-width: 65ch (characters) on paragraph containers."
      },
      {
        q: "A designer uses ALL CAPS for a 3-paragraph body text section. What's wrong?",
        options: [
          "Nothing - it stands out",
          "HARDER TO READ (no word shapes, use for short labels only)",
          "Should be even bigger",
          "ALL CAPS is never acceptable"
        ],
        answer: 1,
        explanation: "ALL CAPS removes word shape (ascenders/descenders), making reading slower. Use ONLY for short labels, buttons, or emphasis. Never body text."
      }
    ]
  },
  "1-4": {
    title: "UX Laws & Design Principles",
    emoji: "⚖️",
    sections: [
      {
        heading: "🎯 Hick's Law",
        content: `**The more choices, the longer it takes to decide.**

**Formula:** Decision Time = b × log₂(n + 1)
(n = number of choices)

**In practice:**
• Limit navigation menu to 5-7 items
• Use progressive disclosure (reveal options gradually)
• Group related choices

**Bad:** 50 options in a dropdown
**Good:** Categorized menu → subcategories → options`,
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
      },
      {
        heading: "🎯 Fitts's Law",
        content: `**The time to acquire a target depends on distance to it and its size.**

**Translation:** Big buttons close to cursor = fast clicks

**In practice:**
• Make CTAs big (min 44×44px)
• Put important actions near where users already are
• Desktop: menu in top-left makes sense
• Mobile: important buttons at bottom (thumb zone)

**Example:** iOS Safari put URL bar at BOTTOM (easier to reach).`,
        image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80"
      },
      {
        heading: "🎯 Jakob's Law",
        content: `**Users spend most time on OTHER sites. Your site should work like those.**

**Translation:** Don't reinvent the wheel.

**In practice:**
• Logo top-left → links to home
• Shopping cart top-right
• Hamburger menu = navigation (don't use for other things)
• Underlined blue text = link

**When to break it:** You have strong brand + UX expertise. 99% of the time: follow conventions.`,
        image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80"
      },
      {
        heading: "🎯 Miller's Law",
        content: `**The average person can hold 7 (±2) items in working memory.**

**Translation:** Limit visible options to 5-9 items.

**In practice:**
• Phone numbers grouped: (555) 123-4567 (not 5551234567)
• Navigation: 5-7 top-level items
• Forms: Break into steps (checkout: shipping → payment → review)
• Product features: Highlight top 5, hide rest in "See more"

**Chunking helps memory.**`,
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
      },
      {
        heading: "🎯 Law of Proximity (Gestalt)",
        content: `**Objects near each other are perceived as related.**

**In practice:**
• Group label + input field (no gap)
• Space between form sections > space within sections
• Related links in menus are close together
• Unrelated content has clear separation

**Example:**
[Name]     [________]  ← label close to input
                       ← big gap
[Email]    [________]  ← next field`
      },
      {
        heading: "⚡ Practical Exercise",
        content: `**Redesign a messy navigation menu:**

1. Find a website with 12+ nav items (banks love this)
2. Apply Hick's Law: Group into 4-5 categories
3. Apply Proximity: Space categories farther apart
4. Apply Fitts's Law: Make CTAs bigger
5. Apply Jakob's Law: Keep logo top-left
6. Present before/after in Figma

Bonus: Time yourself clicking items in both versions.`,
        image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800&q=80"
      }
    ],
    keyTakeaways: [
      "Hick's Law: Limit choices (5-7 menu items)",
      "Fitts's Law: Big targets, close to cursor",
      "Jakob's Law: Follow conventions unless you have a very good reason",
      "Miller's Law: 7±2 items in working memory — chunk content"
    ],
    resources: [
      "📖 Laws of UX → lawsofux.com",
      "🧠 NN Group Articles → nngroup.com/articles",
      "📚 Don't Make Me Think (book)"
    ],
    quiz: [
      {
        q: "A dropdown menu has 47 options in one list. Users take forever to choose. Which law applies?",
        options: [
          "Jakob's Law (conventions)",
          "Hick's Law (more choices = longer decisions)",
          "Fitts's Law (size matters)",
          "Miller's Law (7±2 items)"
        ],
        answer: 1,
        explanation: "Hick's Law: Decision time increases with number of choices. Solution: Categorize into groups (e.g., Countries → continents → countries)."
      },
      {
        q: "A mobile app's main CTA button is 24×24px at the top of the screen. Users miss it. Which law?",
        options: [
          "Hick's Law",
          "Fitts's Law (small target + far away = hard to click)",
          "Jakob's Law",
          "Miller's Law"
        ],
        answer: 1,
        explanation: "Fitts's Law: Time to click = distance + size. Mobile CTAs should be 44×44px minimum and near thumb zone (bottom of screen)."
      },
      {
        q: "A website puts the logo in the bottom-right corner. Users can't figure out how to get home. Why?",
        options: [
          "Jakob's Law (users expect logo top-left to link home)",
          "Hick's Law",
          "Fitts's Law",
          "Miller's Law"
        ],
        answer: 0,
        explanation: "Jakob's Law: Users spend most time on other sites. They expect logo top-left = home. Breaking conventions confuses users."
      },
      {
        q: "A phone number is displayed as: 5551234567. What would make it easier to remember?",
        options: [
          "Make it bigger",
          "Chunk it: (555) 123-4567 (Miller's Law - 7±2 items)",
          "Use all different colors",
          "Remove numbers"
        ],
        answer: 1,
        explanation: "Miller's Law: We can hold 7±2 items in working memory. Chunking groups digits into manageable pieces. Same applies to forms, menus, features."
      },
      {
        q: "A form has 20 fields on one page. Users abandon it. Best solution?",
        options: [
          "Make fields smaller",
          "Use Hick's Law: Remove half the fields OR Miller's Law: Break into steps",
          "Make it full-screen",
          "Add more colors"
        ],
        answer: 1,
        explanation: "Hick's Law + Miller's Law: Too many choices/fields = overwhelming. Solution: Remove unnecessary fields OR use multi-step form (Shipping → Payment → Review)."
      }
    ]
  },
  "1-5": {
    title: "Figma Tools & Workflow",
    emoji: "🔧",
    sections: [
      {
        heading: "🎯 Frames vs Groups",
        content: `**Groups:**
• Just a container
• No layout properties
• No constraints
• Use for temporary organization

**Frames:**
• TRUE containers
• Can have Auto Layout
• Can set constraints
• Can have fills/strokes
• Can clip content
• Can be components

**Rule:** Almost always use Frames. Groups are for quick temporary stuff.`,
        image: "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?w=800&q=80"
      },
      {
        heading: "⚡ Auto Layout Superpowers",
        content: `**What it does:** Automatically arranges & resizes children

**Key properties:**
• **Direction:** Horizontal or Vertical
• **Spacing:** Gap between items (16px, 24px, etc.)
• **Padding:** Space inside frame (all sides or individual)
• **Resizing:** Hug contents or Fill container

**When to use:**
• Navigation bars
• Button groups
• Card layouts
• Lists
• Forms
• Basically EVERYTHING

**Hotkey:** Shift + A (turn frame into auto layout)`,
        image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&q=80"
      },
      {
        heading: "🧩 Components 101",
        content: `**What:** Reusable design elements

**Main Component** (purple icon):
• The source of truth
• Edit this, all instances update

**Instance** (purple-filled icon):
• A copy that stays linked
• Can override text/images
• Can't change structure (unless detached)

**How to create:**
1. Design a button
2. Select it → Cmd/Ctrl + Alt + K
3. Name it: "Button/Primary"
4. Duplicate instances → edit text

**Pro tip:** Use "/" in names to organize
Example: Button/Primary, Button/Secondary`,
        image: "https://images.unsplash.com/photo-1618477371303-b2a56f422d9e?w=800&q=80"
      },
      {
        heading: "🎨 Styles (Color, Text, Effects)",
        content: `**Color Styles:**
• Create reusable colors
• Name them semantically: "Primary", "Text/Body", "BG/Dark"
• Change once, updates everywhere

**Text Styles:**
• H1, H2, Body, Caption, etc.
• Set font, size, line-height, letter-spacing
• Apply to text layers

**Effect Styles:**
• Shadows, blurs
• Example: "Shadow/Card", "Shadow/Button"

**How to create:**
1. Apply color/text properties
2. Click 4-dot icon in properties panel
3. Create style → name it
4. Apply to other layers

**Hotkey:** Alt + Click fill → applies to multiple layers`,
        image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&q=80"
      },
      {
        heading: "🎬 Prototyping Basics",
        content: `**1. Switch to Prototype tab** (right panel)

**2. Create connections:**
• Click a button → drag blue circle to target frame
• Set Interaction: On Click, On Hover, etc.
• Set Animation: Instant, Dissolve, Move In, etc.
• Set Easing: Ease out (best for most)

**3. Set starting frame:**
• Click frame → "Flow starting point" in Prototype panel

**4. Present:**
• Click ▶ Play button (top-right)
• Or share link with clients

**Pro tip:** Use Smart Animate for smooth transitions (works if layer names match)`,
        image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&q=80"
      },
      {
        heading: "⚡ Practical Exercise",
        content: `**Build a button component library:**

1. Create 3 button variants:
   • Primary (filled)
   • Secondary (outline)
   • Ghost (text only)

2. Use Auto Layout (Shift + A):
   • Horizontal direction
   • Padding: 12px vertical, 24px horizontal
   • Hug contents

3. Create component (Cmd/Ctrl + Alt + K)
4. Create color styles: "Button/Primary", etc.
5. Test resizing: Change text, button adapts

Boom. Reusable buttons forever.`,
        image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800&q=80"
      }
    ],
    keyTakeaways: [
      "Use Frames (not groups) for everything",
      "Auto Layout (Shift + A) for flexible, responsive designs",
      "Components for reusable elements (Cmd/Ctrl + Alt + K)",
      "Styles for consistent colors, text, and effects"
    ],
    resources: [
      "� Figma Design Basics Hub → https://www.figma.com/resource-library/design-basics/",
      "📚 Figma: How to Design an App → https://www.figma.com/resource-library/how-to-design-an-app/",
      "📚 Figma: Responsive Web Design → https://www.figma.com/resource-library/responsive-website-design/",
      "📹 Figma YouTube → youtube.com/@Figma",
      "📚 Figma Learn → help.figma.com/hc/en-us",
      "⚡ Config (Figma conference) → config.figma.com"
    ],
    quiz: [
      {
        q: "You create a rectangle and need it to resize its contents and maintain padding. What do you use?",
        options: [
          "Group",
          "Frame with Auto Layout",
          "Component",
          "Just a frame"
        ],
        answer: 1,
        explanation: "Auto Layout (Shift + A) makes frames flexible. Set padding and spacing, and content automatically adjusts. Groups can't do this."
      },
      {
        q: "You design a button and want to reuse it 50 times. When you change the main one, all others update. What feature?",
        options: [
          "Copy-paste",
          "Components (Cmd/Ctrl + Alt + K)",
          "Groups",
          "Frames"
        ],
        answer: 1,
        explanation: "Components create a main component. Instances stay linked. Edit main = all instances update. Perfect for buttons, icons, cards."
      },
      {
        q: "You have a primary color used in 30 places. You need to change it once and update everywhere. What?",
        options: [
          "Manually change all 30",
          "Color Styles (create reusable color)",
          "Copy-paste the color",
          "Use components"
        ],
        answer: 1,
        explanation: "Color Styles: Create once, apply to multiple objects. Change the style = updates everywhere. Same for text styles and effects."
      },
      {
        q: "You want a smooth transition between two screens where elements move to new positions. The feature?",
        options: [
          "Instant transition",
          "Smart Animate (matching layer names)",
          "Dissolve",
          "Move In"
        ],
        answer: 1,
        explanation: "Smart Animate: If layer names match across frames, Figma animates the properties (position, size, rotation, etc.). Smooth transitions!"
      },
      {
        q: "A button should maintain 12px vertical padding even when text changes. What setting?",
        options: [
          "Fixed height",
          "Auto Layout with padding: 12px vertical, Hug contents",
          "Constraints",
          "Group it"
        ],
        answer: 1,
        explanation: "Auto Layout + Hug contents: Frame resizes based on content. Set padding to 12px vertical. Change text, button adapts automatically."
      }
    ]
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // LEVEL 2: THE DESIGNER
  // ═══════════════════════════════════════════════════════════════════════════

  "2-1": {
    title: "User Flows & Information Architecture",
    emoji: "🗺",
    sections: [
      {
        heading: "What is Information Architecture?",
        content: `Information Architecture (IA) is organizing, structuring, and labeling content effectively and sustainably.

**Think of it like:** Designing a city. Streets (navigation), districts (sections), landmarks (key pages), and signs (labels) help people find their way.

**Why it matters:**
• Bad IA = users can't find anything, bounce rate skyrockets
• Good IA = intuitive navigation, users complete tasks easily

**Real-World Example:**
❌ BAD: E-commerce site with "Products > Category > Subcategory > Sub-subcategory" (4 clicks to product)
✅ GOOD: Amazon's mega menu — you see all categories at once, 1-2 clicks to product`,
        image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&q=80"
      },
      {
        heading: "🗺 User Flows 101",
        content: `A **user flow** is a diagram showing the path a user takes to complete a task.

**Components:**
1. **Entry Point** — Where user starts (homepage, ad, email link)
2. **Steps** — Each screen/interaction
3. **Decision Points** — Yes/no branches (logged in? items in cart?)
4. **End Goal** — Task completion (purchase, signup, download)

**How to Create a User Flow:**
1. Define the goal (e.g., "User wants to buy shoes")
2. List all possible entry points
3. Map every screen/interaction
4. Add decision branches
5. Show success AND failure paths

**Example: Checkout Flow**
Entry → View Cart → Logged in? 
  → No → Login/Signup → Checkout
  → Yes → Checkout
→ Enter Shipping → Enter Payment → Confirm → Success

**Tools:** FigJam, Miro, Whimsical, even pen and paper

**Visual Reference:** Search "user flow diagrams" on Dribbble`,
        image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800&q=80"
      },
      {
        heading: "🏗 Card Sorting & Sitemaps",
        content: `**Card Sorting:**
Method to understand how users categorize information.

**Process:**
1. Write website sections/features on cards
2. Give cards to 5-10 users
3. Ask them to group cards that "go together"
4. Ask them to name each group
5. Analyze patterns — what do most people group together?

**Types:**
• **Open:** Users create their own categories
• **Closed:** You provide categories, users sort into them
• **Hybrid:** Mix of both

**Tool:** OptimalSort, UsabilityHub

**Sitemaps:**
Visual hierarchy of all pages on a website.

**Example Structure:**
Homepage
├── Products
│   ├── Category A
│   ├── Category B
│   └── Category C
├── About Us
├── Contact
└── Blog
    ├── Category 1
    └── Category 2

**Best Practices:**
• Limit main nav to 5-7 items (Miller's Law)
• Group related pages
• Show depth (how many clicks to reach page)
• Mark pages requiring login

**Visual Reference:** Look at Airbnb or Shopify's site structure`,
        image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=800&q=80"
      }
    ]
  },

  "2-2": {
    title: "Accessibility & WCAG 2.1",
    emoji: "♿",
    sections: [
      {
        heading: "Why Accessibility Matters",
        content: `**1 billion people worldwide have disabilities.** That's 15% of the global population.

**Types of Disabilities:**
• **Visual:** Blindness, low vision, color blindness
• **Auditory:** Deafness, hard of hearing
• **Motor:** Limited hand function, paralysis
• **Cognitive:** Dyslexia, ADHD, memory issues

**Why You Should Care:**
• It's the law (ADA, Section 508)
• Lawsuits are expensive (Domino's Pizza lost $250k)
• 71% of users with disabilities will leave your site if it's hard to use
• Good accessibility = better UX for everyone

**Real Example:**
Curb cuts (sidewalk ramps) were designed for wheelchairs, but they help:
• Parents with strollers
• Delivery workers with carts
• Cyclists
• People with luggage

**Same with digital accessibility!**`,
        image: "https://images.unsplash.com/photo-1573495627361-d9b87960b12d?w=800&q=80"
      },
      {
        heading: "♿ WCAG 2.1 Compliance Levels",
        content: `**WCAG = Web Content Accessibility Guidelines**

**Three Levels:**

**Level A (Minimum):**
• Text alternatives for images
• Captions for videos
• Keyboard navigation works
• No flashing content (seizure risk)

**Level AA (Target for most sites):**
• Color contrast: 4.5:1 for normal text, 3:1 for large text
• Resize text up to 200% without breaking layout
• Focus indicators visible
• Error messages clear and helpful
• Works on mobile (touch targets 44×44px minimum)

**Level AAA (Enhanced):**
• Color contrast: 7:1 for normal text
• Sign language for video content
• No audio plays automatically
• Context-sensitive help available

**Most companies aim for AA compliance.**

**Testing Tools:**
• WAVE (browser extension)
• axe DevTools
• Lighthouse (Chrome DevTools)
• Screen readers: NVDA (free), JAWS, VoiceOver (Mac)`,
        image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80"
      },
      {
        heading: "🎯 Practical Accessibility Checklist",
        content: `**Color Contrast:**
✅ Body text: 4.5:1 minimum
✅ Large text (18px+): 3:1 minimum
✅ Icons and buttons: 3:1 minimum
❌ Don't rely on color alone (add icons, labels, patterns)

**Keyboard Navigation:**
✅ All interactive elements reachable via Tab key
✅ Visible focus indicators (outline, highlight)
✅ Logical tab order (top to bottom, left to right)
✅ Escape key closes modals
✅ Enter/Space activates buttons

**Screen Reader Support:**
✅ Alt text for images (describe what's IN the image, not "image of")
✅ Proper heading hierarchy (H1 → H2 → H3, don't skip levels)
✅ Form labels connected to inputs
✅ ARIA labels for icon buttons
✅ Announce dynamic content changes

**Example Alt Text:**
❌ "image123.jpg"
❌ "A beautiful sunset"
✅ "Golden sunset over Manhattan skyline, Empire State Building visible"

**Touch Targets:**
✅ Minimum 44×44px for mobile buttons
✅ Spacing between clickable elements (8px+)

**Forms:**
✅ Labels always visible (not just placeholders)
✅ Error messages specific ("Email format invalid" not "Error")
✅ Required fields marked with asterisk AND "required" text

**Visual Reference:** UK Government Design System — Gold standard for accessibility`,
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80"
      }
    ]
  },

  "2-3": {
    title: "Wireframing & Lo-Fi Prototyping",
    emoji: "📐",
    sections: [
      {
        heading: "Why Wireframes?",
        content: `**Wireframes** are low-fidelity, grayscale sketches of your interface.

**Purpose:**
• Focus on structure and layout (not colors/fonts)
• Quick to make, easy to throw away
• Cheaper to change than high-fidelity designs
• Communicate ideas without distractions

**When to Use:**
• Early exploration
• Client presentations (before committing to visual design)
• Testing information hierarchy
• Developer handoff (shows structure clearly)

**Fidelity Levels:**
1. **Lo-Fi** — Paper sketches, boxes and lines
2. **Mid-Fi** — Digital wireframes, basic spacing
3. **Hi-Fi** — Pixel-perfect mockups with real content

**Start with Lo-Fi, increase fidelity as you validate ideas.**

**Real Example:**
Instagram's initial wireframes were pen-and-paper sketches on napkins!`,
        image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&q=80"
      },
      {
        heading: "📐 Wireframing Best Practices",
        content: `**Content First:**
Before you wireframe, know:
• What content goes on each page?
• What's the user's goal?
• What's the business goal?

**Example: Homepage Wireframe**
Must include:
• Value proposition (what is this?)
• Primary CTA (what do you want users to do?)
• Navigation (where can I go?)
• Social proof (why should I trust this?)

**Layout Patterns to Know:**

**1. F-Pattern (Reading)**
Users scan in an F-shape:
• Top left → Top right (headline)
• Left side down (scanning content)
• Occasional right scans (subheadings)

**Use for:** Blogs, news sites, text-heavy content

**2. Z-Pattern (Landing Pages)**
Eye movement: Top left → Top right → Bottom left → Bottom right
• Top left: Logo
• Top right: Navigation/CTA
• Middle: Value prop/image
• Bottom right: Secondary CTA

**Use for:** Landing pages, marketing sites

**3. Grid Pattern (E-commerce)**
Equal-sized cards in a grid
• Each card = product, blog post, team member
• Even spacing, scannable

**Use for:** Product listings, portfolios, galleries

**Annotation Tips:**
Add notes directly on wireframes:
• "This section scrolls horizontally"
• "Search icon opens overlay"
• "This content is dynamic (pulled from CMS)"`,
        image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800&q=80"
      },
      {
        heading: "🧰 Tools & Techniques",
        content: `**Paper Wireframes:**
✅ Fastest method
✅ Great for brainstorming sessions
✅ Easy to iterate (just grab another sheet)
❌ Hard to share remotely
❌ Limited precision

**Digital Wireframes:**
Tools: Figma, Sketch, Adobe XD, Balsamiq, Whimsical

**Figma Wireframing Kit:**
Create a simple component library:
• Box (for containers)
• Text block (lorem ipsum)
• Image placeholder (gray box with X)
• Button (outline rectangle with label)
• Icon placeholders (circles with icons)

**Speed Techniques:**
1. Use Figma plugins: "Content Reel" (fake data), "Wireframe" (instant wireframes)
2. Stick to grayscale (#000, #333, #666, #999, #fff)
3. Use a single font (Inter or Arial)
4. Constanly duplicate frames (Cmd/Ctrl + D)
5. Don't worry about pixel perfection!

**Lo-Fi Prototyping:**
Connect wireframes to test user flows:
• Make key elements clickable
• Show only critical interactions
• Skip animations (adds time, no value at this stage)
• Test with 5 users, iterate, test again

**Validation Questions:**
• Can users find what they're looking for?
• Do they understand the flow?
• Are labels clear?
• Any confusion points?

**Visual Reference:** Balsamiq's wireframe gallery — perfect examples of lo-fi`,
        image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800&q=80"
      }
    ]
  },

  "2-4": {
    title: "User Research Fundamentals",
    emoji: "🔬",
    sections: [
      {
        heading: "Why User Research?",
        content: `**You are not your user.**

Most design failures come from designers assuming they know what users want.

**User Research Goals:**
1. Understand users' problems, needs, behaviors
2. Validate (or invalidate) your assumptions
3. Make data-driven design decisions
4. Avoid expensive mistakes later

**Types of Research:**

**Qualitative (Why?)**
• User interviews
• Usability testing
• Field studies
• Diary studies
→ Understand motivations, emotions, pain points

**Quantitative (How many?)**
• Surveys
• Analytics
• A/B tests
• Heatmaps
→ Measure behavior, find patterns

**When to Use Each:**
• Early stage: Qualitative (explore problems)
• Mid stage: Mix (validate concepts)
• Post-launch: Quantitative (measure success)

**Jakob Nielsen's Rule:** Test with **5 users** to find 85% of usability issues.`,
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
      },
      {
        heading: "🎤 Conducting User Interviews",
        content: `**Preparation:**
1. Define research goals (What do you need to learn?)
2. Recruit 5-8 participants (target users, not friends/family)
3. Create discussion guide (questions to ask)
4. Book 45-60 minute sessions
5. Get consent to record (for notes, not sharing)

**Interview Structure:**
1. **Intro (5 min)** — Build rapport, explain purpose
2. **Background (10 min)** — Learn about participant
3. **Main Questions (30 min)** — Explore behaviors, pain points
4. **Wrap-up (5 min)** — Ask final thoughts, thank them

**Good Interview Questions:**
✅ "Tell me about the last time you..."
✅ "Walk me through how you currently..."
✅ "What's frustrating about..."
✅ "How do you decide..."

**BAD Questions:**
❌ "Would you use this feature?" (Hypothetical, people lie)
❌ "Do you like this design?" (Opinion, not behavior)
❌ "Don't you think this is confusing?" (Leading question)

**Pro Tips:**
• Ask "Why?" 5 times to get to root cause
• Silence is okay (let them think)
• Don't pitch your solution (you're learning, not selling)
• Notice what they DO, not just what they SAY
• Take notes: direct quotes in "quotes", observations in [brackets]

**After Interviews:**
1. Synthesize notes (affinity mapping)
2. Find patterns (3+ people mention = pattern)
3. Create insights ("Users struggle to find X because Y")
4. Turn insights into design requirements`,
        image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80"
      },
      {
        heading: "🧪 Usability Testing Essentials",
        content: `**What is Usability Testing?**
Watch users try to complete tasks in your design. See where they struggle.

**Setup:**
1. Create 3-5 realistic tasks
2. Recruit users (target audience, 5 people minimum)
3. Use prototype or live site
4. Record screen + audio (with permission)
5. Take notes: struggles, confusion, successes

**Example Tasks:**
❌ "Click the Sign Up button" (Too specific)
✅ "You want to create an account. Show me how you'd do that." (Open-ended)

**Test Moderator Script:**
"I'm testing the site, not you. There are no wrong answers. Please think aloud — tell me what you're thinking as you go. If you get stuck, that's valuable feedback. Any questions? Okay, here's your first task..."

**During the Test:**
✅ Stay quiet (don't help them!)
✅ Ask "What are you thinking?" if they go silent
✅ Note exact quotes: "I don't know what this button does"
✅ Observe body language (leaning in = engaged, leaning back = confused)

**Metrics to Track:**
• **Task success rate** (Did they complete it?)
• **Time on task** (How long did it take?)
• **Error rate** (How many mistakes?)
• **Satisfaction** (Post-test survey: "How easy was that?")

**After Testing:**
1. Rate severity of issues:
   • **Critical:** Can't complete task
   • **Major:** Completes with difficulty
   • **Minor:** Completes with slight hesitation
2. Prioritize fixes (critical first)
3. Iterate and test again

**Tools:** Maze, UserTesting, Lookback, or just Zoom + screen share

**Visual Reference:** NNGroup's usability test videos on YouTube`,
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80"
      }
    ]
  },

  "2-5": {
    title: "Figma Intermediate Power",
    emoji: "🔷",
    sections: [
      {
        heading: "Component Variants",
        content: `**Variants** group related components into one master component with properties.

**Example: Button Component**
Instead of creating:
• Button/Primary
• Button/Secondary
• Button/Primary/Hover
• Button/Secondary/Hover  
... (16 separate components 😱)

**Use Variants:**
One component with properties:
• **Type:** Primary, Secondary
• **State:** Default, Hover, Disabled
• **Size:** Small, Medium, Large

**How to Create:**
1. Design all button states
2. Select all button frames
3. Right-click → "Combine as variants"
4. Add properties (Type, State, Size)
5. Name each variant: Type=Primary, State=Hover, Size=Medium

**Benefits:**
• Swap between variants instantly
• Prototyping: Hover changes state automatically
• Smaller file size
• Easier to maintain

**Real Example:**
Material Design Button has 18 variants (3 types × 3 states × 2 sizes)`,
        image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&q=80"
      },
      {
        heading: "Interactive Prototypes",
        content: `**Advanced Interactions:**

**1. While Hovering**
Button changes on hover (no click)
• Trigger: While hovering
• Action: Change to (Hover variant)
• Animation: Instant (or 200ms ease out)

**2. While Pressing**
Button pressed state
• Trigger: While pressing
• Action: Change to (Pressed variant)

**3. After Delay**
Toast notification auto-dismisses
• Trigger: After delay (3000ms)
• Action: Change to (Hidden state)
• Animation: Smart animate, 300ms

**4. Drag**
Swipeable cards or drag-to-refresh
• Trigger: On drag
• Action: Change to (Next screen)
• Overflow: Horizontal scrolling

**5. Mouse Enter/Leave**
Tooltip appears on hover, disappears on leave
• Main frame: Mouse enter → Show tooltip
• Tooltip: Mouse leave → Close overlay

**Prototyping Best Practices:**
• Use Smart Animate for smooth transitions (same layer names required)
• Add 300-400ms easing for natural feel
• Prototype critical flows only (don't prototype everything)
• Test on mobile device (Figma Mirror app)

**Presentation Mode:**
Press Cmd/Ctrl + Option/Alt + Enter
→ Starts prototype from current frame
→ Show flows panel for navigation`,
        image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800&q=80"
      },
      {
        heading: "Design Tokens & Dev Mode",
        content: `**Design Tokens** are named variables for design decisions.

**Instead of:**
• Button background: #007AFF
• Link color: #007AFF
• Primary CTA: #007AFF

**Use Token:**
• Token: color/primary/base = #007AFF
• Button background: {color/primary/base}
• Link color: {color/primary/base}

**Change #007AFF once → Updates everywhere!**

**Figma's Design Tokens:**
• **Styles:** Colors, text styles, effects
• **Variables:** Colors, numbers, strings, booleans (NEW)

**Variables vs Styles:**
• Variables: Can change based on mode (light/dark theme)
• Styles: Static

**Dev Mode (For Developers):**
Optimized view for handoff:
• Shows CSS/iOS/Android code
• Highlights spacing, colors, fonts
• Marks assets ready for export
• Shows component properties

**Inspect Panel:**
Developers can:
• Copy CSS code
• See exact spacing values
• Download assets
• View interactive prototype

**Plugins for Tokens:**
• **Design Tokens:** Export tokens to JSON
• **Figma Tokens:** Advanced token management
• **Style Dictionary:** Convert tokens to code

**Visual Reference:** Material Design's token system (color, typography, spacing tokens)`,
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
      }
    ]
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // LEVEL 3: THE ARCHITECT
  // ═══════════════════════════════════════════════════════════════════════════

  "3-1": {
    title: "Design Systems Architecture",
    emoji: "🧪",
    sections: [
      {
        heading: "What is a Design System?",
        content: `A **Design System** is a complete set of standards for design and code, including components, patterns, and documentation.

**It's NOT just a UI kit.** It's a living ecosystem.

**Components:**
1. **Design Library** (Figma/Sketch components)
2. **Code Library** (React/Vue/Angular components)
3. **Documentation** (How and when to use each component)
4. **Design Tokens** (Colors, spacing, typography values)
5. **Guidelines** (Writing, accessibility, brand principles)

**Why Companies Build Design Systems:**
• **Consistency** across products (think Google's Material Design)
• **Speed** (designers and developers move faster)
• **Scale** (10 designers → 100 designers, system helps coordinate)
• **Quality** (pre-tested, accessible components)

**Famous Design Systems:**
• Material Design (Google)
• Human Interface Guidelines (Apple)
• Fluent (Microsoft)
• Polaris (Shopify)
• Carbon (IBM)
• Atlassian Design System

**ROI:** Airbnb saved 60% design time after implementing their design system.`,
        image: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&q=80"
      },
      {
        heading: "🧬 Atomic Design Methodology",
        content: `**Atomic Design** by Brad Frost: Build interfaces from smallest to largest.

**5 Levels:**

**1. Atoms** (Smallest building blocks)
• Button
• Input field
• Label
• Icon
• Color swatch

Can't be broken down further.

**2. Molecules** (Simple groups of atoms)
• Search bar (input + button + icon)
• Form field (label + input + error message)
• Card header (avatar + name + timestamp)

Still fairly simple, single purpose.

**3. Organisms** (Complex components)
• Header (logo + nav + search bar + profile menu)
• Product card (image + title + price + CTA button)
• Comment thread (multiple comment molecules)

Distinct sections of interface.

**4. Templates** (Page layouts)
• Homepage template
• Product detail page template
• Dashboard layout

Shows content structure, not real content.

**5. Pages** (Specific instances)
• Homepage with actual products
• Specific user's profile

Real content, real data.

**In Practice:**
Most teams focus on Atoms → Molecules → Organisms
Templates and Pages are often handled differently per product.

**Figma Structure:**
• Page: Atoms
• Page: Molecules
• Page: Organisms
• Page: Templates

**Visual Reference:** Checkout Brad Frost's "Atomic Design" book (free online)`,
        image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800&q=80"
      },
      {
        heading: "📚 Documentation & Versioning",
        content: `**Why Documentation Matters:**
Your design system is useless if no one knows how to use it.

**What to Document:**

**1. Component Documentation:**
• **What it is** — "A primary button for the main action on a page"
• **When to use** — "Use for primary CTAs. Max 1 per screen."
• **When NOT to use** — "Don't use for destructive actions (use danger button)"
• **Variants** — Show all states (default, hover, disabled, loading)
• **Props/Properties** — What can be customized?
• **Code example** — \`<Button variant="primary" size="large">Click me</Button>\`
• **Accessibility notes** — "Minimum touch target: 44×44px"

**2. Pattern Documentation:**
• **Navigation patterns** — How to structure menus
• **Forms patterns** — Label position, error handling
• **Loading states** — When to use spinners vs skeletons
• **Empty states** — What to show when there's no data

**3. Guidelines:**
• **Writing/Voice** — "Use conversational tone, avoid jargon"
• **Iconography** — "Use 24×24px grid, 2px stroke"
• **Motion** — "Use 300ms ease-out for most transitions"

**Tools for Documentation:**
• **Storybook** (React/Vue components with docs)
• **Zeroheight** (Syncs with Figma, creates web docs)
• **Notion** or **Confluence** (Simple docs)
• **Figma Comments** (Quick annotations)

**Versioning:**
• Use semantic versioning: v1.2.3
  • Major (v2.0.0): Breaking changes
  • Minor (v1.3.0): New features, backwards compatible
  • Patch (v1.2.4): Bug fixes
• Document what changed in each version
• Deprecate components gracefully (warn before removing)

**Visual Reference:** Atlassian Design System docs — gold standard`,
        image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&q=80"
      }
    ]
  },

  "3-2": {
    title: "Psychology of Design",
    emoji: "🧠",
    sections: [
      {
        heading: "Cognitive Load Theory",
        content: `**Cognitive Load** = Mental effort required to use your interface.

**3 Types:**

**1. Intrinsic Load** (Inherent complexity)
• Booking a flight has high intrinsic load (dates, destinations, passengers, seats)
• Liking a post has low intrinsic load (one action)

You can't change this much.

**2. Extraneous Load** (Bad design)
• Confusing labels
• Poor visual hierarchy
• Too many options
• Distracting animations

**YOU CAN FIX THIS!** This is where design matters.

**3. Germane Load** (Learning)
• Helps users understand the system
• Onboarding tutorials, progressive disclosure
• Good cognitive load

**Goal:** Minimize extraneous load, optimize germane load.

**Hick's Law:** Decision time increases with number of choices.

**Example:**
❌ Dropdown with 50 countries (alphabetical)
✅ Dropdown with search + popular countries at top

**Miller's Law:** People can hold 7±2 items in working memory.

**Example:**
❌ Navigation with 15 items
✅ Navigation with 5-7 items, grouped logically

**Visual Reference:** Every Google product — simplicity is the goal`,
        image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&q=80"
      },
      {
        heading: "🎯 Fogg Behavior Model",
        content: `**BJ Fogg's Formula:** Behavior = Motivation × Ability × Prompt

For a user to take action:
1. They must be **Motivated** (want to do it)
2. They must have **Ability** (easy to do)
3. They must be **Prompted** (reminded/triggered)

**All three required!**

**Example: Sign Up Flow**

**High Motivation, Low Ability:**
User wants to sign up, but form has 20 fields → Abandoned
**Fix:** Reduce friction (social login, progressive form)

**High Ability, Low Motivation:**
Easy to sign up, but user doesn't see the value → Ignored
**Fix:** Better value prop, social proof, urgency

**High Motivation + Ability, No Prompt:**
User wants it, it's easy, but they forget → No action
**Fix:** Email reminder, push notification, retargeting ad

**Designing with Fogg:**
1. **Increase Motivation:**
   • Show benefits clearly
   • Add social proof (testimonials, user counts)
   • Use scarcity/urgency ("Only 3 left!")
   • Highlight value prop

2. **Increase Ability (Reduce Friction):**
   • Fewer form fields
   • Autofill when possible
   • Clear labels and instructions
   • Remove unnecessary steps

3. **Add Prompts:**
   • CTA buttons in the right place
   • Notifications (don't overdo it)
   • Email reminders
   • Contextual tooltips

**Real Example:**
Duolingo perfected this:
• **Motivation:** Gamification, streaks, leaderboards
• **Ability:** Lessons take 5 minutes
• **Prompt:** Daily notifications ("Your streak is in danger!")

**Dark Pattern Warning:** This model can be abused. Use ethically!`,
        image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&q=80"
      },
      {
        heading: "🚫 Dark Patterns to Avoid",
        content: `**Dark Patterns** = Deceptive UI tricks that manipulate users.

**Common Dark Patterns:**

**1. Sneak into Basket**
Adding items without consent
• Example: Newsletter signup pre-checked
• Example: "Add insurance?" pre-selected on checkout

**2. Roach Motel**
Easy to get in, hard to get out
• Example: Sign up with one click, cancel requires phone call
• Example: Unsubscribe link broken or hidden

**3. Bait and Switch**
Promising one thing, delivering another
• Example: "Free trial" requires credit card, auto-charges
• Example: Download button → Opens ad instead

**4. Confirmshaming**
Guilt-tripping users
• Example: "No thanks, I don't want to save money" (instead of "No thanks")
• Example: "I hate puppies" to decline newsletter

**5. Disguised Ads**
Ads that look like content
• Example: "Download" button that's actually an ad
• Example: Sponsored content not labeled

**6. Forced Continuity**
Charging without warning
• Example: Free trial ends, starts charging (no reminder)

**7. Hidden Costs**
Surprise fees at checkout
• Example: "$50 flight" → $127 total (fees, taxes added later)

**How to Design Ethically:**
✅ Be transparent (show total price upfront)
✅ Make unsubscribe easy (1-click)
✅ Default to unchecked (let users opt-in)
✅ Label clearly (ads as ads, buttons as buttons)
✅ Remind before charging

**Legal Issues:**
• EU's GDPR bans many dark patterns
• California's CCPA requires opt-out links
• Class action lawsuits increasing

**Your Reputation > Short-term gains**

**Resource:** darkpatterns.org — Learn what NOT to do`,
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80"
      }
    ]
  },

  "3-3": {
    title: "Micro-interactions & Motion",
    emoji: "💃",
    sections: [
      {
        heading: "What are Micro-interactions?",
        content: `**Micro-interactions** are small, focused moments that accomplish a single task.

**Examples:**
• Liking a post (heart animation)
• Pulling to refresh (spinner appears)
• Toggle switch flips
• Button changes color on hover
• Form field glows red on error
• Notification badge bounces

**4 Parts (Dan Saffer's framework):**

**1. Trigger** — What starts the micro-interaction?
• User action (click, swipe, hover)
• System action (notification arrives, timer expires)

**2. Rules** — What happens?
• If user clicks heart → add to favorites
• If form invalid → show error

**3. Feedback** — How does user know it worked?
• Visual (checkmark appears, color changes)
• Audio (click sound, notification ping)
• Haptic (phone vibrates)

**4. Loops & Modes** — What determines behavior?
• Does it repeat? (loading animation loops)
• Does state change? (on/off toggle modes)

**Why They Matter:**
• **Humanize** the interface (feels alive, responsive)
• **Communicate status** (loading, success, error)
• **Prevent errors** (confirm destructive actions)
• **Delight users** (memorable, fun)

**Real Example:**
Twitter's like animation — Simple heart → burst of particles
Result: 6% increase in likes (people wanted to see animation again!)`,
        image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&q=80"
      },
      {
        heading: "⚡ Motion Design Principles",
        content: `**12 Principles of Animation** (Disney, adapted for UI)

**Key Principles for UI:**

**1. Easing (Slow In / Slow Out)**
Objects don't start/stop instantly in real life.

**Types:**
• **Ease-out** — Fast start, slow end (elements entering screen)  
  Use for: Buttons appearing, modals opening
• **Ease-in** — Slow start, fast end (elements leaving screen)  
  Use for: Modals closing, items deleting
• **Ease-in-out** — Slow both ends (smooth, natural)  
  Use for: Transitions between states

❌ Linear: Robotic, unnatural
✅ Ease-out: Smooth, professional

**2. Timing & Duration**
How long should animations last?

**Guidelines:**
• **Micro (buttons, toggles):** 100-200ms
• **Small (tooltips, dropdowns):** 200-300ms
• **Medium (modals, page transitions):** 300-500ms
• **Large (page loads, onboarding):** 500-800ms

❌ Too fast (<100ms): Feels glitchy
❌ Too slow (>1s): Feels sluggish

**3. Follow Through**
After one element moves, others react.

**Example:** Card swipe →
1. Card moves (200ms)
2. Next card slides in (300ms, slight delay)
3. Indicator dot updates (100ms after card stops)

Creates natural, sequenced motion.

**4. Anticipation**
Prepare users for what's coming.

**Example:** Pull-to-refresh
• Pull down → Arrow rotates, copy changes ("Release to refresh")
• Release → Spinner appears
• Refresh → Checkmark, content appears

**5. Staging**
Direct attention to what matters.

**Example:** Form error
• Shake incorrect field (200ms)
• Red highlight (instant)
• Error message fades in (300ms)

Focus: The error field (everything else fades/dims)`,
        image: "https://images.unsplash.com/photo-1551650541-6d5d03d88f90?w=800&q=80"
      },
      {
        heading: "🎨 Implementing Motion in Figma",
        content: `**Smart Animate:**
Figma's tool for smooth transitions between frames.

**Requirements for Smart Animate:**
1. Two frames (before and after state)
2. Layers with **identical names** in both frames
3. Connection: Prototype → Smart Animate

**What Smart Animate Can Do:**
• **Move** (layer changes position)
• **Scale** (layer grows/shrinks)
• **Rotate** (layer spins)
• **Opacity** (layer fades in/out)
• **Color** (layer changes fill)
• **Corner radius** (rounded → sharp corners)

**Example: Button Hover**
Frame 1: Button (name: "Button")
Frame 2: Button (name: "Button", larger, different color)
Connection: While hovering → Smart Animate, 200ms, Ease out

**Loading States:**
Frame 1: Button with text "Submit"
Frame 2: Button with spinner (text hidden)
Frame 3: Button with checkmark "Success!"

Connections: On click → After delay (1000ms) → After delay (2000ms)

**Advanced: Master Component Animation**
Create button variants:
• State=Default
• State=Hover
• State=Loading
• State=Success

Add interactions to variants:
• While hovering: Change to Hover
• On click: Change to Loading
• After delay (2000ms): Change to Success

**Easing Presets:**
• **Ease out** — Most common (elements entering)
• **Ease in** — Elements leaving
• **Ease in-out** — Smooth, both directions
• **Custom bezier** — Full control

**Testing Motion:**
• Present prototype (Cmd/Ctrl + Option/Alt + Enter)
• Test on actual device (Figma Mirror app)
• Record video (check timing feels right)

**Resources:**
• Material Motion (Google's guidelines)
• iOS Human Interface Guidelines (Apple's motion specs)

**Visual Reference:** Dribbble tag "micro-interactions" — endless inspiration`,
        image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&q=80"
      }
    ]
  },

  "3-4": {
    title: "Data-Driven Design",
    emoji: "📊",
    sections: [
      {
        heading: "Why Data Matters",
        content: `**Opinions are useless. Data shows truth.**

**Common Scenarios:**
• Designer: "Users will love this new feature!"
• CEO: "I think blue is better."
• Developer: "No one will use that."

**Solution:** Test with data.

**Types of Data:**

**1. Behavioral Data (What users do)**
• Where they click
• How far they scroll
• What they search for
• Where they drop off

**Tools:** Google Analytics, Mixpanel, Amplitude

**2. Attitudinal Data (What users say)**
• User interviews
• Surveys
• Support tickets
• App store reviews

**Tools:** Typeform, Usertesting.com, Hotjar surveys

**When to Use:**
• **Before designing:** User research, competitive analysis
• **During design:** Usability testing, prototype feedback
• **After launch:** A/B testing, analytics, heatmaps

**Data-Driven Culture:**
• Start with hypothesis: "I think X will improve Y"
• Design solution
• Test with users
• Measure results
• Iterate

**Real Example:**
Booking.com runs 1000+ A/B tests simultaneously. Every design decision is tested.
Result: 50%+ increase in conversions year over year.`,
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
      },
      {
        heading: "📈 Setting Design KPIs",
        content: `**KPI = Key Performance Indicator**

Metrics that show if your design is successful.

**Common Design KPIs:**

**1. Task Success Rate**
• % of users who complete a task
• Goal: 80%+ for critical flows
• Example: "90% of users successfully checked out"

**2. Time on Task**
• How long to complete a task
• Lower = better (for utility)
• Higher = better (for content/engagement)
• Example: "Average checkout time: 2min 15sec"

**3. Error Rate**
• % of tasks with errors
• Goal: <5%
• Example: "12% of users entered invalid email format"

**4. Conversion Rate**
• % of visitors who complete goal action
• Goal: Varies by industry (2-5% typical for e-commerce)
• Example: "3.2% of visitors purchased"

**5. Bounce Rate**
• % of visitors who leave immediately
• Goal: <40% for landing pages
• Example: "28% bounced from homepage"

**6. Net Promoter Score (NPS)**
• "How likely are you to recommend?" (0-10 scale)
• Score: % Promoters (9-10) - % Detractors (0-6)
• Goal: NPS > 50 (world-class)
• Example: "NPS: 62"

**7. Customer Satisfaction (CSAT)**
• "How satisfied are you?" (1-5 scale)
• Goal: 4+ average
• Example: "Average CSAT: 4.3/5"

**8. Accessibility Score**
• Lighthouse audit (0-100)
• Goal: 90+ (AA compliance)
• Example: "Accessibility score: 94"

**How to Set KPIs:**
1. Identify business goal (e.g., "Increase sign-ups")
2. Define design solution (e.g., "Simplify registration form")
3. Choose metric (e.g., "Sign-up conversion rate")
4. Set baseline (e.g., "Currently 2%")
5. Set target (e.g., "Goal: 3%")
6. Test and measure
7. Iterate if target not hit`,
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
      },
      {
        heading: "🔬 A/B Testing & Heatmaps",
        content: `**A/B Testing:**
Show two versions of a design to different users, measure which performs better.

**Example:**
• Version A: Green "Buy Now" button
• Version B: Orange "Buy Now" button
• Show each to 50% of users
• Measure: Which has higher click rate?

**Process:**
1. **Hypothesis:** "Orange button will increase clicks by 10%"
2. **Create variants:** Design A and B
3. **Split traffic:** 50/50 or 90/10 (safer for risky tests)
4. **Run test:** Minimum 1-2 weeks (need statistical significance)
5. **Analyze:** Did B win? By how much?
6. **Implement winner**

**What to Test:**
• CTA button color/text
• Headline copy
• Image vs video
• Form length (5 fields vs 10 fields)
• Pricing display ($99/month vs $1,188/year - save 20%)

**What NOT to Test:**
• Too many things at once (can't tell what worked)
• Without enough traffic (need 100+ conversions per variant)
• Brand changes (some things shouldn't be A/B tested)

**Tools:** Google Optimize, Optimizely, VWO, AB Tasty

**Heatmaps:**
Visual representation of where users click, scroll, move mouse.

**Types:**
1. **Click Heatmap:** Where users click (red = more clicks)
2. **Scroll Heatmap:** How far users scroll (see what content is missed)
3. **Move Heatmap:** Where mouse moves (indicates attention)

**What Heatmaps Reveal:**
• Users clicking on non-clickable elements (make them clickable or remove confusion)
• CTAs not getting clicks (reposition or redesign)
• Content below fold never seen (move important content up)

**Tools:** Hotjar, Crazy Egg, Microsoft Clarity (free)

**Real Example:**
Obama 2008 campaign A/B tested donation page.
Winner: "Learn More" button (vs "Sign Up") + family photo (vs Obama solo)
Result: $60 million extra in donations!`,
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
      }
    ]
  },

  "3-5": {
    title: "Figma Advanced Techniques",
    emoji: "🔷",
    sections: [
      {
        heading: "Variables & Modes",
        content: `**Variables** (Figma's newest feature) = Dynamic values that can change based on context.

**Use Cases:**
1. **Themes** (Light/Dark mode)
2. **Brands** (Multi-brand products)
3. **Responsive spacing** (Mobile/Desktop)
4. **Localization** (Different languages)

**Creating Variables:**

**Step 1: Create Collection**
Local Variables panel → "+" → Create collection
Name: "Color Tokens"

**Step 2: Add Modes**
• Mode 1: Light
• Mode 2: Dark

**Step 3: Create Variables**
• Variable: color/background/primary
  • Light mode: #FFFFFF
  • Dark mode: #000000
• Variable: color/text/primary
  • Light mode: #000000
  • Dark mode: #FFFFFF

**Step 4: Apply Variables**
Select frame → Fill → Link to variable → color/background/primary

**Switching Modes:**
Select frame → Layer panel → Mode → Switch between Light/Dark

**Magic:** Entire interface updates instantly!

**Advanced:**
• **Number variables:** Spacing (spacing/small = 8, spacing/large = 24)
• **String variables:** Button labels (can change by language)
• **Boolean variables:** Show/hide elements based on mode

**Example: Multi-Brand System**
Collection: "Brand"
• Mode 1: Brand A (Blue theme)
• Mode 2: Brand B (Green theme)

Switch modes → All brand colors update across entire file!

**Real-World:**
Uber uses variables for:
• Uber (Black)
• Uber Eats (Green)
• Uber Freight (Blue)
→ One design file, three brands`,
        image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&q=80"
      },
      {
        heading: "🔀 Advanced Prototyping",
        content: `**Branching:**
User choices change prototype flow.

**Example: Quiz App**
Question 1: "Are you a designer?"
• Yes → Designer-specific questions
• No → General questions

**How to Build:**
1. Create all question frames
2. Add buttons with interactions:
   • "Yes" button → Navigate to → Designer Q2
   • "No" button → Navigate to → General Q2
3. Continue branching logic

**Variables in Prototyping:**
Show different content based on user actions.

**Example: Shopping Cart**
• User clicks "Add to Cart"
• Cart count increases (using number variable)
• Subtotal updates (using number variable)

**Conditional Logic:**
Figma's conditional prototype (Beta):
IF cart count > 0 THEN show checkout button
ELSE show "Cart is empty"

**Advanced Interactions:**

**1. Drag to Delete**
• Trigger: On drag
• Direction: Left
• Distance: 100px
• Action: Change to (Deleted state)

**2. Keyboard Shortcuts**
• Trigger: Key/Gamepad
• Key: Escape
• Action: Close overlay

**3. Scroll Position**
• Trigger: While scrolling
• Position: After scroll
• Action: Change to (Sticky header state)

**4. Variable Change**
• Trigger: On click
• Action: Set variable → cart_count → +1
• Another frame listens: If cart_count > 0 → Show badge

**Testing Complex Prototypes:**
• Use Figma Mirror app (mobile testing)
• Share prototype link with teammates
• Record user flows (Loom, screen recording)
• Test all branches and edge cases`,
        image: "https://images.unsplash.com/photo-1551650541-6d5d03d88f90?w=800&q=80"
      },
      {
        heading: "📚 Team Libraries & Design at Scale",
        content: `**Team Libraries** = Shared components, styles, and variables across team.

**Setup:**
1. Create master file: "Design System - Components"
2. Publish as library: Assets panel → Publish
3. Team members: Assets panel → Enable library

**Benefits:**
• Everyone uses same components (consistency)
• Update component once → Updates in all files
• Onboard new designers faster

**Library Structure:**

**File 1: Foundations**
• Colors (as styles)
• Typography (text styles)
• Spacing system
• Iconography

**File 2: Components**
• Buttons
• Form fields
• Cards
• Modals
• Navigation

**File 3: Patterns**
• Page templates
• Common layouts
• Flows

**Publishing Updates:**
1. Make changes to master components
2. Click "Publish changes"
3. Write changelog: "Updated button hover states"
4. Team gets notification: "2 updates available"
5. They click "Review and update"
6. Choose which updates to accept

**Versioning:**
• Use Figma's version history (File → Show version history)
• Name important versions: "v2.0 - New color system"
• Restore old versions if needed

**Multi-Team Libraries:**
Large companies have layered libraries:
• Company-wide library (brand, colors)
• Product-specific library (components for that product)
• Team-specific library (experimental components)

**Governance:**
• Assign library owners (maintain quality)
• Review process for new components
• Deprecate old components (mark with ⚠️ in name)

**Performance Tips:**
• Don't put everything in one file (slow)
• Split by category (Foundations, Components, Patterns)
• Archive unused components (don't delete, move to "Archive" page)

**Real Example:**
Shopify's Polaris design system:
• 100+ components
• Used by 5000+ employees
• Updated weekly
• Powers all Shopify products`,
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
      }
    ]
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // LEVEL 4: THE MASTER
  // ═══════════════════════════════════════════════════════════════════════════

  "4-1": {
    title: "AI in Design — The Real Story",
    emoji: "🤖",
    sections: [
      {
        heading: "AI Tools for Designers (2026)",
        content: `**The landscape has evolved fast.** Here's what's actually useful:

**1. Figma AI (Built-in)**
• **Auto Layout suggestions:** Figures out spacing/layout
• **Content generation:** Real product descriptions, user names
• **Design critique:** "This contrast is too low" (accessibility check)
• **Smart rename:** Renames messy layers ("Rectangle 47" → "Profile Avatar")

**2. Midjourney / DALL-E / Stable Diffusion**
• Generate hero images, illustrations, backgrounds
• Great for: Mood boards, early concepts, placeholder images
• NOT good for: Precise UI work, pixel-perfect elements

**Prompt Example:**
"Modern minimalist dashboard UI, glassmorphism, purple and blue gradient, 4k, trending on Dribbble"

**3. ChatGPT / Claude (Content)**
• Write microcopy ("Empty state message for abandoned cart")
• Generate fake data (user profiles, product descriptions)
• Brainstorm ideas ("10 ways to gamify a fitness app")

**4. AI  Wireframing**
• Tools: Uizard, Galileo AI, Diagram
• Input: Text description → Outputs: Wireframe
• Example: "Dashboard with sidebar nav, 3 cards, and a chart"
• Use Case: Rapid exploration, not final designs

**5. AI Code Generation**
• Tools: v0.dev, Anima, Locofy
• Input: Figma design → Outputs: React/Vue code
• Reality: 70% accurate, still needs developer cleanup
• Best for: Simple components, prototyping

**What AI CAN'T Do (Yet):**
• Understand user needs (requires empathy, research)
• Make strategic decisions (business context)
• Collaborate with stakeholders (human relationships)
• Iterate based on nuanced feedback

**Your Job is Safe IF:**
You focus on:
• User research & empathy
• Strategic thinking
• Systems thinking
• Cross-functional collaboration
• Quality critique

**AI is a tool, not a replacement.** Like Figma replaced Photoshop, AI will augment, not eliminate designers.`,
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80"
      },
      {
        heading: "🧠 Prompt Engineering for Designers",
        content: `**Prompting** = How you communicate with AI to get good results.

**Framework: The 4Cs**

**1. Clear**
❌ "Make me a website"
✅ "Create a landing page for a SaaS product targeting small business owners, featuring: hero section with headline and CTA, 3 feature cards, testimonials, pricing table, footer"

**2. Context**
❌ "Design a button"
✅ "Design a primary CTA button for a mobile banking app. Target audience: seniors (65+). Needs high contrast for accessibility, large touch target (48px), clear label."

**3. Constraints**
❌ "Generate an icon"
✅ "Generate a 24×24px line icon for 'Calendar' using 2px stroke, rounded corners, suitable for iOS app, monochrome black"

**4. Criteria**
❌ "Make it better"
✅ "Improve this design by: increasing white space, using a type scale of 1.5, applying the 60/30/10 color rule, and ensuring 4.5:1 text contrast"

**Advanced Prompting:**

**Iterative Refinement:**
1. "Create a dashboard card for sales data"
2. (AI generates)
3. "Make it more modern, add glassmorphism effect"
4. (AI iterates)
5. "Remove the shadows, use flat design instead"

**Reference Style:**
"Design a pricing page in the style of Linear.app — clean, minimal, dark mode, glassmorphism"

**Negative Prompts:**
"...but avoid: gradients, rounded corners, 3D effects, drop shadows"

**For Image Generation:**

**Good Prompt:**
"Professional product photography of wireless headphones, studio lighting, white background, minimal composition, high resolution, commercial quality, shadows visible"

**Add Style Modifiers:**
• "in the style of Dieter Rams" (minimalist)
• "Memphis design style" (80s geometric, colorful)
• "Neumorphism UI" (soft shadows, subtle depth)
• "Brutalist web design" (bold, raw, intentionally "ugly")

**Pro Tip:** Save your best prompts in a Notion doc. Build a prompt library over time.`,
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80"
      },
      {
        heading: "⚖️ Ethics of AI in UX",
        content: `**Real Ethical Questions:**

**1. Bias in AI**
• AI trained on existing designs → Perpetuates existing patterns (often exclusionary)
• Example: Image generation underrepresents minorities
• Example: AI autocomplete suggests stereotypical professions by gender

**Your Responsibility:**
• Review AI output critically
• Manually diversify generated content
• Don't blindly trust AI recommendations

**2. Copyright & Ownership**
• Is AI-generated art copyright-free?
• If AI trained on copyrighted work, who owns the output?
• Legal gray area (lawsuits in progress)

**Best Practice:**
• Use AI for inspiration, not final output
• Credit when using AI ("Hero image generated with Midjourney")
• Don't claim AI work as fully human-made

**3. Job Displacement**
• Will AI replace junior designers?
• Will clients expect faster turnarounds?

**Reality:**
• Junior roles may shift (less pixel-pushing, more strategy)
• Designers who use AI effectively will outperform those who don't
• Focus on skills AI can't replicate (empathy, collaboration, critique)

**4. Dark Patterns 2.0**
• AI can be used to manipulate users MORE effectively
• Example: AI-optimized addiction loops (TikTok's algorithm)
• Example: Dynamic pricing that exploits user desperation

**Your Ethics Checklist:**
✅ Does this design respect user privacy?
✅ Does this design empower users or manipulate them?
✅ Would I be comfortable using this myself?
✅ Does this design work for all users (accessibility)?

**5. Transparency**
• Should users know they're interacting with AI?
• Should chatbots identify as bots?

**General Consensus:**
Yes, disclose when it's AI. Users deserve to know.

**Framework:**
Ask: "Is this design making users' lives better, or just extracting value from them?"

**Recommended Reading:**
• "Ruined by Design" by Mike Monteiro
• "Technically Wrong" by Sara Wachter-Boettcher
• "Weapons of Math Destruction" by Cathy O'Neil`,
        image: "https://images.unsplash.com/photo-1509803874385-db7c23652552?w=800&q=80"
      }
    ]
  },

  "4-2": {
    title: "Design Ops & Process Design",
    emoji: "⚙️",
    sections: [
      {
        heading: "What is DesignOps?",
        content: `**DesignOps** = Systems and processes that help design teams work efficiently at scale.

**Think:**
DevOps for developers → DesignOps for designers

**DesignOps Responsibilities:**

**1. Tools & Infrastructure**
• What tools do we use? (Figma, Miro, Maze?)
• How do we manage licenses?
• File organization standards
• Plugin management

**2. Workflows & Processes**
• How do designs get from idea → production?
• Design review process
• Handoff process (design → dev)
• Feedback loops

**3. Team Operations**
• Hiring & onboarding
• Design critique format
• Team rituals (weekly studio, design reviews)
• Career development

**4. Design Systems**
• Maintain component libraries
• Documentation
• Governance (who can publish components?)

**5. Quality & Standards**
• Brand guidelines
• Accessibility standards
• Design principles
• File naming conventions

**When You Need DesignOps:**
• Team <5: Design lead handles it
• Team 5-15: Part-time DesignOps person
• Team 15+: Dedicated DesignOps team

**Goal:** Let designers focus on design, not admin tasks.

**Real Example:**
Airbnb's DesignOps team reduced design time by 60% by standardizing component libraries and handoff processes.`,
        image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80"
      },
      {
        heading: "⚙️ Building a Critique Culture",
        content: `**Design Critique** ≠ Personal attack. It's about improving the work.

**Ground Rules:**

**1. Critique the work, not the person**
❌ "You didn't think about mobile users"
✅ "How does this layout adapt to mobile?"

**2. Be specific**
❌ "This doesn't look good"
✅ "The hierarchy is unclear — the secondary CTA is too prominent"

**3. Explain WHY**
❌ "Make it bigger"
✅ "The headline should be larger to establish visual hierarchy and grab attention"

**4. Offer solutions (when possible)**
❌ "The colors are bad"
✅ "The blue-on-purple contrast is below WCAG AA (3.2:1). Try a darker blue or lighter purple."

**5. Assume positive intent**
Everyone's trying their best. We're all on the same team.

**Critique Formats:**

**Weekly Design Studio (1 hour)**
• 3 designers present (15 min each)
• Present context: problem, goals, constraints
• Show work: wireframes, mockups, prototypes
• Get feedback: open discussion
• Take notes: what to try next week

**Pair Design (30 min)**
• Two designers, one problem
• Real-time collaboration
• Fast iteration
• Great for complex problems

**Async Critique (Figma Comments)**
• Post design in Figma
• Tag teammates
• They leave comments with questions/suggestions
• Designer addresses in next iteration

**Executive Review (30 min)**
• Present polished work to leadership
• Focus on business impact, not pixels
• Get strategic alignment

**How to Receive Critique:**
✅ Listen fully before responding
✅ Ask clarifying questions
✅ Take notes (don't defend immediately)
✅ Say "I'll try that" (even if you disagree — test it!)
✅ Thank people for feedback

**How to Give Critique:**
✅ Ask permission: "Can I give feedback on the nav?"
✅ Start with positives: "The color palette is great, and..."
✅ Frame as questions: "Have you considered...?"
✅ Offer to help: "Want to pair on this tomorrow?"

**Creating Psychological Safety:**
• No bad ideas in early exploration (diverge before converging)
• Celebrate  failures (we learn from them)
• Lead by example (seniors should share messy work too)`,
        image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
      },
      {
        heading: "📋 Design Principles & Vision",
        content: `**Design Principles** = Rules that guide decision-making.

**Example: Airbnb's Design Principles**
1. **Cereal Box Design** — Focus on the first impression
2. **Unified Ecosystem** — Consistent across platforms
3. **Be a Maker** — Everyone should design

**Your Turn: Creating Design Principles**

**Bad Principles (Too Generic):**
❌ "User-friendly"
❌ "Beautiful design"
❌ "Easy to use"

Everyone says this. Not useful.

**Good Principles (Specific, Opinionated):**

**Example: Banking App**
1. **Clarity over cleverness** — Show account balance prominently, use plain language
2. **Trust through transparency** — Explain fees upfront, no hidden costs
3. **Empower, don't patronize** — Give users control, don't oversimplify

**Example: Social App**
1. **Conversations over broadcasting** — Encourage replies, not just likes
2. **Authenticity over perfection** — No filters by default
3. **Communities over individuals** — Group features prioritized

**How to Use Principles:**

**During Design:**
Designer: "Should we hide advanced settings?"
Principle: "Empower, don't patronize"
Decision: Show advanced settings, but collapsed by default

**During Critique:**
Reviewer: "This conflicts with 'Clarity over cleverness' — that animation is distracting"

**Design Vision:**
Bigger picture: Where is the product going?

**Example: Notion's Vision**
"Make toolmaking Ubiquitous" — Everyone should be able to build their own tools.

**Your Vision Should:**
• Be aspirational (5-10 years out)
• Be specific to your product
• Inspire the team
• Guide long-term strategy

**Format:**
"We believe [problem] can be solved by [solution], so we're building [product] to [impact]."

Example:
"We believe note-taking apps are too rigid, so we're building Notion to let everyone create their own perfect workspace."

**Principles vs Vision:**
• **Vision** = Where we're going
• **Principles** = How we'll get there`,
        image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&q=80"
      }
    ]
  },

  "4-3": {
    title: "Mentorship & Design Leadership",
    emoji: "🎓",
    sections: [
      {
        heading: "Levels of Design Leadership",
        content: `**Individual Contributor (IC) Track:**
• **Junior Designer** — Learning fundamentals
• **Mid Designer** — Independent on most tasks
• **Senior Designer** — Leads projects, mentors juniors
• **Staff Designer** — Defines standards, shapes product direction
• **Principal Designer** — Company-wide impact, thought leadership

**Manager Track:**
• **Design Lead** — Manages 2-4 designers + designs
• **Design Manager** — Manages 5-8 designers, less hands-on
• **Senior Design Manager** — Manages managers + strategy
• **Director of Design** — Owns design organization (15-50 people)
• **VP of Design / Chief Design Officer** — C-suite, company strategy

**Two Career Paths:**
You don't have to manage people to advance!

**IC Path:** Deep expertise, complex projects, mentorship
**Manager Path:** Team building, process, cross-functional leadership

**Transitioning to Leadership:**

**From Mid → Senior:**
• Lead end-to-end projects independently
• Mentor 1-2 junior designers
• Contribute to design system
• Present work to stakeholders
• Provide critique at team reviews

**From Senior → Staff/Lead:**
• Define product vision
• Influence roadmap
• Improve team processes
• Shape design culture
• Hire and onboard
• Resolve ambiguity

**Key Leadership Skills:**

**1. Influence without authority**
You don't control engineers, PMs, or executives. But you can influence them.

How:
• Build relationships (1-on-1s with cross-functional partners)
• Speak their language (ROI for business, feasibility for eng)
• Bring data (research, metrics)
• Tell stories (show user pain points)

**2. Strategic thinking**
Not just "what should this button look like?"
But: "Should we even build this feature?"

Questions seniors ask:
• What problem are we solving?
• Who is this for?
• What's the business impact?
• What are the trade-offs?
• Is this the simplest solution?

**3. Mentorship**
Covered in next section!`,
        image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&q=80"
      },
      {
        heading: "🎓 Effective Mentorship",
        content: `**Why Mentor?**
• Grow future designers
• Compounds your impact (your mentee's work = your legacy)
• Learn by teaching (explaining forces clarity)
• Build leadership skills

**Finding a Mentee:**
• Junior on your team
• Designer at another company (via ADPList, Design Buddies)
• Student/bootcamp grad

**Mentorship Structure:**

**1-on-1s (Biweekly, 30-45 min)**

**First Session:**
• Get to know them (background, goals, strengths, areas to grow)
• Set expectations (frequency, communication method)
• Define goals (3-month, 6-month, 1-year)

**Ongoing Sessions:**
• Review recent work (give critique)
• Discuss challenges ("I'm stuck on this design problem")
• Career guidance ("Should I learn code?")
• Answer questions
• Share resources (articles, courses, designers to follow)

**Mentorship Formats:**

**1. Design Review**
Mentee shares work → You critique
• Focus on process, not just output
• Ask "Why did you make this decision?"
• Teach frameworks ("Try using the F-pattern layout here")

**2. Live Design Session**
Share screen, design together
• Great for teaching Figma techniques
• Show your thought process out loud

**3. Portfolio Review**
Help them get a job
• Review case studies (clarity, storytelling)
• Practice interview questions
• Give harsh honest feedback (with kindness)

**4. Career Guidance**
• Should they specialize or generalize?
• When to negotiate salary?
• How to ask for promotion?
• How to handle difficult feedback?

**What Makes a Great Mentor:**

✅ **Patient** — They're learning, mistakes are normal
✅ **Honest** — Sugarcoating doesn't help
✅ **Available** — Respond to questions (within reason)
✅ **Supportive** — Celebrate wins, encourage during struggles
✅ **Resourceful** — Share articles, tools, opportunities

❌ **What NOT to do:**
• Design for them (they won't learn)
• Give up if progress is slow (learning takes time)
• Compare them to others (everyone's pace is different)

**Measuring Success:**
• Did they achieve their goals?
• Are they more confident?
• Are they improving their skills?
• Do they feel supported?

**When to End Mentorship:**
• They've achieved their goals
• They've outgrown your expertise (connect them with senior mentor)
• Natural end of engagement (they switched companies, etc.)

**Resources:**
• ADPList.org — Free mentorship platform
• "The Coaching Habit" by Michael Bungay Stanier (book)`,
        image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80"
      },
      {
        heading: "🗣 Running Effective Design Critiques",
        content: `**As a facilitator (lead), your job:** Keep critique productive, safe, and valuable.

**Before the Critique:**

**1. Set Expectations**
Share guidelines with team:
• Critique the work, not the person
• Be specific and constructive
• Explain reasoning
• Assume good intent

**2. Prepare the Presenter**
• Share designs 24 hours early (give people time to think)
• Ask presenter to frame the problem:
  - What's the goal?
  - What stage is this at? (exploration, refinement, final)
  - What type of feedback do you need? (strategy, visual, dev feasibility)

**During the Critique:**

**Structure (30-45 min for 2 designers):**

**1. Present (5 min per person):**
• Designer shows work
• Explains context, goals, constraints
• Asks specific questions

**2. Clarifying Questions (3 min):**
• Audience asks to understand
• "Who is the target user?"
• "What happens when...?"
• Designer answers

**3. Feedback (12 min):**
• Open floor for critique
• Facilitator ensures everyone speaks
• Take notes on whiteboard/FigJam

**4. Wrap-up (2 min):**
• Designer summarizes key takeaways
• Commits to next steps
• Thanks team

**Facilitator's Role:**

✅ **Timebox** — Keep it moving
✅ **Encourage quiet people** — "Sarah, thoughts?"
✅ **Redirect unhelpful critique:**
   - "Can you be more specific?"
   - "Do you have a suggestion?"
✅ **Defend presenter if needed** — "Let's focus on improving the work"
✅ **Summarize** — "Sounds like we have three themes: hierarchy, mobile layout, and color contrast"

**Red Flags to Intervene On:**
• Personal attacks ("You always do this")
• Vague feedback ("I don't like it")
• Scope creep ("Why aren't we rethinking the whole flow?")
• Dominating voices (one person talking 80% of time)

**Advanced: Silent Critique**
1. Share design in Figma
2. Everyone spends 5 min adding comment dots (no discussion)
3. Read all comments aloud
4. Group similar themes
5. Discuss

**Benefits:**
• Introverts contribute equally
• No groupthink (everyone forms independent opinion first)
• Focuses on patterns (if 5 people mention contrast, it's a pattern)

**After Critique:**
• Share notes with team
• Designer iterates
• Return next week with updates

**Culture Building:**
Leads should model vulnerability:
• Share your own messy work
• Accept critique gracefully
• Admit when you don't have answers

→ Team feels safe to do the same`,
        image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80"
      }
    ]
  },

  "4-4": {
    title: "Breaking the Rules",
    emoji: "🔥",
    sections: [
      {
        heading: "When to Break the Rules",
        content: `**You learned all the rules. Now forget them. (Sometimes.)**

**"Good artists copy, great artists steal. Masters know when to break the rules."**

**When Rules Matter:**
• **Utility apps** (banking, health, productivity) — Clarity > Creativity
• **Accessibility** — Never compromise (unless you want lawsuits)
• **Enterprise products** — Consistency, reliability, professionalism

**When You Can Break Rules:**
• **Brand-led experiences** (fashion, luxury, art)
• **Marketing sites** (landing pages, campaigns)
• **Experimental projects** (portfolio pieces, side projects)
• **Differentiation** (standing out in crowded market)

**Real Examples:**

**1. Breaking Hierarchy Rules**
**Apple's iPhone launch page:**
• Massive image, tiny text
• Breaks "content first" rule
• Works because: Product beauty IS the message

**2. Breaking Color Rules**
**90s/Y2K aesthetic revival:**
• Neon on neon (terrible contrast)
• Clashing colors (breaks harmony rules)
• Works because: Nostalgic, bold, attention-grabbing

**3. Breaking Grid Rules**
**Experimental portfolios:**
• Asymmetric layouts
• Overlapping elements
• Chaotic spacing
• Works because: Memorable, artistic, showcases creativity

**4. Breaking Loading Rules**
**Skeleton screens are standard. But:**
• Apple uses blank white screen (minimalist, fast perceived load)
• Some games use entertaining loading screens (tips, lore, mini-games)

**The Meta-Rule:**
**Know WHY the rule exists before you break it.**

Example:
• Rule: "Use sans-serif for body text (readability)"
• Why: Serifs can be hard to read on screens at small sizes
• When to break: Large text, artistic feel, print-inspired design
• How to break safely: Use readable serif (Georgia, Merriweather), test at various sizes

**Framework for Breaking Rules:**

**1. Understand the rule**
**2. Understand the context** (Is this a banking app or a skateboard brand?)
**3. Break intentionally** (not by accident/ignorance)
**4. Test with users** (Did it work? Or did it confuse?)
**5. Be ready to revert** (If it fails, that's okay!)`,
        image: "https://images.unsplash.com/photo-1618172193622-ae2d025f4032?w=800&q=80"
      },
      {
        heading: "🎨 Emotion-First Design",
        content: `**Most design is logical. Emotion-first design is... not.**

**Traditional Design:**
1. User needs this feature
2. Design the feature
3. Make it usable
4. Make it pretty

**Emotion-First Design:**
1. How should users FEEL?
2. What creates that feeling?
3. Design around that emotion
4. Add functionality

**Examples:**

**1. Stripe's Landing Page**
• Emotion: Trust, sophistication, "We're serious"
• Design choices:
  - Muted colors (not playful)
  - Minimal copy (confident, not desperate)
  - Smooth animations (premium feel)
  - Code snippets (transparent, developer-friendly)

**2. Duolingo**
• Emotion: Fun, playful, non-threatening
• Design choices:
  - Bright colors (cheerful)
  - Character mascot (friendly)
  - Streaks & XP (gamified, addictive)
  - Encouraging copy ("You're crushing it!")

**3. Dark Mode Everywhere**
• Emotion: Focus, calm, premium
• Not about usability (studies show light mode is more readable)
• About VIBE (serious, hacker aesthetic, battery-saving perception)

**Emotion-Driven Choices:**

**Typography:**
• **Serif** → Traditional, trustworthy, editorial
• **Sans-serif** → Modern, clean, friendly
• **Display/Script** → Artistic, unique, emotional
• **Mono** → Technical, code-focused, raw

**Color Psychology:**
• **Blue** → Trust (why every bank uses blue)
• **Red** → Urgency, passion, danger
• **Green** → Growth, health, money
• **Purple** → Luxury, creativity, spirituality
• **Black** → Premium, elegant, serious
• **Pastel** → Soft, approachable, Instagram aesthetic

**Animations:**
• **Bouncy** → Playful (Mailchimp)
• **Smooth, slow** → Premium (Apple)
• **Fast, snappy** → Efficient (Google)
• **None** → Serious, utilitarian (Craigslist)

**Brutalist Design:**
Breaking ALL the rules for emotion.

Characteristics:
• Raw, unpolished
• Intentional "ugliness"
• Exposed grids, visible code
• Harsh contrast
• No hand-holding

Emotion: Authenticity, rebellion, anti-corporate

Examples: Balenciaga, Gumroad (old design)

**When to Use Emotion-First:**
• Brand > function (luxury, art, fashion)
• Differentiation (saturated market, need to stand out)
• Community-driven products (vibe attracts right users)

**Process:**
1. Define target emotion (write it down: "empowering," "playful," "luxurious")
2. Moodboard (find 10 images that evoke that emotion)
3. Extract patterns (what do they have in common?)
4. Apply to your design (color, type, spacing, animation)
5. Test (do users feel what you intended?)`,
        image: "https://images.unsplash.com/photo-1551269901-5c5e14c25df7?w=800&q=80"
      },
      {
        heading: "🚀 Experimental UI Techniques",
        content: `**Push boundaries. Try weird stuff. Break things.**

**1. Glassmorphism**
Frosted glass effect (popular 2020-2024)

**How to create:**
• Background: Blur (20-40px)
• Fill: Semi-transparent white (20-40% opacity)
• Border: 1px solid rgba(255,255,255,0.18)
• Shadow: Soft drop shadow

Works great for: Cards, modals, overlays, dashboards
Trend status: Declining (getting overused)

**2. Neumorphism**
"Soft UI" — elements look like they're embossed/debossed

**How to create:**
• Same color as background
• Two shadows:
  - Light shadow (top-left, white)
  - Dark shadow (bottom-right, black)
• Subtle, low contrast

Problem: Accessibility nightmare (failed contrast ratios)
Use: Only for experimental/portfolio work

**3. 3D Elements**
Spline, Blender → Export to web

Examples:
• 3D product renders (rotate on scroll)
• Floating 3D illustrations
• Interactive 3D icons

Tools: Spline.design, Vectary, Three.js

**4. Scroll-Triggered Animations**
Elements animate as you scroll

Examples:
• Text fades in from sides
• Images scale up
• Parallax (background moves slower than foreground)
• Progress bars fill

Tools: Framer Motion, GSAP, ScrollMagic

**Warning:** Don't overdo it (slows down page, can be nauseating)

**5. Variable Fonts**
One font file, infinite variations (weight, width, slant)

Example: Inter Variable
• weights 100-900
• Change dynamically (on hover, scroll)

**6. Generative/Dynamic Design**
Design changes based on data, time, or user behavior

Examples:
• Spotify Wrapped (personalized graphics)
• Stripe's homepage gradient (changes based on scroll position)
• Clock app where UI morphs based on time of day

**7. Cursor Interactions**
Custom cursor that reacts to hover

Examples:
• Cursor becomes circle on hover (apple.com)
• Cursor changes to custom icon
• Trail effect (particles follow cursor)

Tools: CSS cursor, JavaScript, Framer Motion

**8. Text Effects**
• **Gradient text** (webkit-background-clip: text)
• **Animated gradient** (shifts colors)
• **Glitch effect** (scrambled text on hover)
• **Typewriter effect** (text types itself out)
• **Text morphing** (one word transforms into another)

**9. Bento Grid**
Apple-popularized layout: Uneven grid of different-sized cards

Why it works:
• Visual interest (not monotonous)
• Hierarchy (bigger cards = more important)
• Responsive (reflows nicely on mobile)

Use: Dashboards, feature showcases, portfolios

**10. De-saturated with Accent Colors**
Mostly grayscale + one vibrant color

Example:
• Background: #0a0a0f (dark navy)
• Text: #e0e0e0 (light gray)
• Accent: #0ff (cyan)

Result: Cyberpunk, futuristic, focus on accent

**When to Experiment:**
• Personal projects (no business constraints)
• Marketing sites (creativity expected)
• Portfolio (show your range)
• Pitching new ideas (prototypes, explorations)

**When NOT to:**
• Enterprise products (consistency needed)
• Accessibility-critical apps (health, finance)
• MVP launches (ship fast, experiment later)

**Learn by Copying:**
1. Find inspiring design (awwwards.com, Dribbble featured)
2. Recreate it in Figma/code
3. Break it down: "How did they do this effect?"
4. Apply techniques to your own work

**Your Style Emerges from Experimentation.**`,
        image: "https://images.unsplash.com/photo-1618172193622-ae2d025f4032?w=800&q=80"
      }
    ]
  },

  "4-5": {
    title: "Figma God-Tier Mastery",
    emoji: "🔷",
    sections: [
      {
        heading: "Figma Plugins Development",
        content: `**You can BUILD your own Figma plugins!**

**Use Cases:**
• Automate repetitive tasks (batch rename layers, organize files)
• Generate content (fake data, lorem ipsum, avatar images)
• Connect to external APIs (import Google Sheets data, Airtable content)
• Custom design tools (gradient generators, spacing checkers)

**Tech Stack:**
• **Language:** JavaScript/TypeScript
• **Framework:** None (vanilla JS) or React
• **API:** Figma Plugin API

**Plugin Architecture:**

**Two parts:**
1. **UI** (HTML/CSS/React) — What user sees (panel, modal)
2. **Code** (JavaScript) — What happens when user clicks buttons

**Communication:**
- UI → Code: \`figma.ui.postMessage()\`
- Code → UI: \`figma.ui.onmessage\`

**Simple Plugin Example: Change All Text Colors**

\`\`\`javascript
// code.ts
figma.showUI(__html__, { width: 300, height: 200 });

figma.ui.onmessage = (msg) => {
  if (msg.type === 'change-color') {
    const nodes = figma.currentPage.findAll(node => node.type === 'TEXT');
    nodes.forEach(node => {
      node.fills = [{ type: 'SOLID', color: { r: 1, g: 0, b: 0 } }]; // Red
    });
    figma.notify('Changed ' + nodes.length + ' text layers to red!');
  }
};
\`\`\`

\`\`\`html
<!-- ui.html -->
<button id="change">Change All Text to Red</button>
<script>
  document.getElementById('change').onclick = () => {
    parent.postMessage({ pluginMessage: { type: 'change-color' } }, '*');
  };
</script>
\`\`\`

**Figma API Concepts:**

**Selection:**
\`const selection = figma.currentPage.selection;\`

**Finding nodes:**
\`const allButtons = figma.currentPage.findAll(n => n.name === 'Button');\`

**Creating nodes:**
\`\`\`javascript
const rect = figma.createRectangle();
rect.resize(100, 100);
rect.fills = [{ type: 'SOLID', color: { r: 0, g: 0.5, b: 1 } }];
figma.currentPage.appendChild(rect);
\`\`\`

**Modifying properties:**
\`node.name = 'My Rectangle';\`
\`node.opacity = 0.5;\`

**Tools & Resources:**
• **Figma Plugin Template:** \`npx create-figma-plugin\`
• **Docs:** figma.com/plugin-docs
• **Examples:** github.com/figma/plugin-samples
• **Community:** Figma Plugin Discord

**Publishing:**
1. Build plugin
2. Figma → Plugins → Development → New Plugin
3. Add manifest (name, description, icon)
4. Publish (free or paid)

**Popular Plugin Ideas:**
• Content generator (names, emails, addresses)
• Accessibility checker (contrast, focus order)
• Design linter (check for unused styles, inconsistent spacing)
• Export optimizer (compress images, generate icons)
• Version control (save snapshots, compare versions)`,
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80"
      },
      {
        heading: "🏢 Multi-Team Libraries at Scale",
        content: `**Managing design systems for 50+ designers across multiple products.**

**Challenges:**

**1. Too Many Cooks**
Everyone wants to add components → Library bloats → Hard to find anything

**Solution: Governance**
• **Contributors:** Anyone can propose a component
• **Reviewers:** 3-5 senior designers approve/reject
• **Maintainers:** 1-2 people who actually publish updates

**Process:**
1. Designer proposes component (via Slack/Notion form)
2. Reviewers discuss (Is this needed? Does it fit system?)
3. Approved → Added to backlog
4. Maintainer builds it, documents it, publishes
5. Announcement in Slack (#design-system channel)

**2. Breaking Changes**
Update a button → Breaks 500 files

**Solution: Versioning**
• **Minor updates** (color tweak, padding change) → Auto-update safe
• **Major updates** (changing API, removing variants) → Manual opt-in

**Communication:**
- Changelog posted for every release
- Breaking changes announced 2 weeks in advance
- Office hours for migration help

**3. Multiple Products, Different Needs**
Product A needs dark mode, Product B doesn't care

**Solution: Layers**

**Base Layer (Foundation):**
• Colors (as variables with modes: light/dark)
• Typography
• Spacing tokens
• Icons

→ Shared by everyone

**Product Layer (Components):**
• Product A Library (uses Foundation)
• Product B Library (uses Foundation)
• Product C Library (uses Foundation)

Each product can customize components while using shared foundation.

**4. Keeping Documentation Updated**
Components evolve, docs don't

**Solution: Automation**
• **Figma → Zeroheight** (auto-syncs components)
• **Code → Storybook** (auto-generates docs from code)
• Assign docs ownership (each component has an owner)

**5. Adoption**
You built a design system. No one uses it.

**Solutions:**
• **Onboarding:** Mandatory for new designers
• **Office hours:** Weekly "ask anything" sessions
• **Workshops:** "How to use the button component" (30 min)
• **Champions:** Embed 1 design systems person in each product team
• **Metrics:** Track adoption (% of designs using library components)
• **Make it easy:** Pre-built templates, starter files, Figma plugins

**6. Performance**
File has 1000+ components → Slows down

**Solutions:**
• Split into multiple libraries (Foundations, Components, Patterns)
• Archive unused components (move to separate file)
• Optimize images (compress, remove unused assets)
• Use instances, not copies (less file bloat)

**Metrics to Track:**
• **Adoption rate** — % of designs using system components
• **Contribution rate** — How many new components added per month
• **Time saved** — Survey designers: "How much time does system save?"
• **Consistency score** — Automated audits (are all buttons using the component?)

**Real Example: Uber**
• 100+ designers
• 10+ products (Uber, Uber Eats, Freight, etc.)
• 1 foundation library (shared colors, spacing, typography)
• 10 product-specific libraries
• Dedicated team of 8 people maintaining system

Result: Designs ship 3x faster than before system existed.`,
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
      },
      {
        heading: "⚡ Power User Tips & Shortcuts",
        content: `**Master these, become a Figma god.**

**Essential Shortcuts:**

**Navigation:**
• **Spacebar + Drag** — Pan/move canvas
• **Cmd/Ctrl + Scroll** — Zoom in/out
• **Cmd/Ctrl + 0** — Zoom to fit
• **Cmd/Ctrl + 1** — Zoom to 100%
• **Z + Click** — Zoom to area
• **Shift + 1/2/3** — Grid view, file search, layers panel

**Selection:**
• **Cmd/Ctrl + Enter** — Select deep (selects nested layers)
• **Cmd/Ctrl + Click** — Select through (select layer below)
• **Shift + Click** — Add to selection
• **Cmd/Ctrl + A** — Select all siblings
• **Enter** — Select child (go inside group/frame)
• **Shift + Enter** — Select parent (go up one level)

**Editing:**
• **Cmd/Ctrl + D** — Duplicate
• **Option/Alt + Drag** — Duplicate and drag
• **Cmd/Ctrl + ]** — Bring forward
• **Cmd/Ctrl + [** — Send backward
• **Cmd/Ctrl + Option + G** — Remove from group/frame
• **Cmd/Ctrl + R** — Rename layer
• **Cmd/Ctrl + E** — Export

**Components:**
• **Cmd/Ctrl + Option + K** — Create component
• **Option/Alt + Click instance** — Swap instance
• **Cmd/Ctrl + Option + B** — Detach instance

**Text:**
• **Cmd/Ctrl + B** — Bold
• **Cmd/Ctrl + I** — Italic
• **Cmd/Ctrl + Shift + L/C/R** — Align left/center/right
• **Cmd/Ctrl + Shift + >/< ** — Increase/decrease font size

**Smart Tips:**

**1. Quick Actions (Cmd/Ctrl + /)**
Type what you want:
• "copy as png" → Copy image to clipboard
• "flatten" → Flatten selection
• "outline stroke" → Convert stroke to fill

**2. Number Scrubbing**
Hover over any number field → drag left/right to adjust
• Hold Shift while dragging → 10x speed
• Hold Option/Alt → 0.1x speed (precision)

**3. Math in Input Fields**
• Type "100 + 50" → 150
• Type "200 / 2" → 100
• Type "10 * 5" → 50

**4. Paste Over Selection**
• Copy layer (Cmd/Ctrl + C)
• Select other layer
• Cmd/Ctrl + Shift + V → Paste in place (same position)

**5. Batch Actions**
Select multiple layers → Properties update all at once
• Change color → All selected change
• Resize → All resize proportionally

**6. Style Organization**
Name styles with "/" for folders:
• color/primary/base
• color/primary/hover
• color/secondary/base

Result: Organized hierarchy in styles panel.

**7. Component Property Shortcuts**
• **Show/Hide layer:** Add boolean property "Show icon"
• **Swap content:** Add instance swap property
• **Text override:** Add text property

**8. Auto Layout Magic:**
• **Shift + A** — Add auto layout
• **Option/Alt + Drag padding handle** — Adjust spacing between items
• **Shift + Drag padding handle** — Adjust one side only

**9. Plugins to Install:**

**Must-Have** Plugins:
• **Unsplash** — Insert high-quality images
• **Iconify** — 100,000+ icons
• **Content Reel** — Fake user data (names, emails, avatars)
• **Stark** — Accessibility contrast checker
• **Remove BG** — Remove image backgrounds
• **Figmotion** — Export animations to Lottie/GIF
• **Autoflow** — Draw user flow arrows
• **Chart** — Generate charts and graphs

**Advanced:**
• **Scripter** — Write custom scripts
• **Design Lint** — Audit for errors
• **Super Tidy** — Organize messy files
• **Sorter** — Sort layers alphabetically/by position

**10. Secret Features:**

• **Arc Tool** — Hold Shift while using pen tool for perfect curves
• **Bend Tool** — Figma's hidden flex: plugins → "Figma Bend"
• **Detach instance but keep styles** — Right-click → Flatten
• **Copy CSS/iOS/Android Code** — Select layer → Dev Mode → Copy code

**The Real Secret:**
**Practice daily.** Speed comes from muscle memory, not memorizing shortcuts.

**Challenge:** Design a login screen in under 10 minutes using only keyboard shortcuts.`,
        image: "https://images.unsplash.com/photo-1618556468072-af0f57bc6e15?w=800&q=80"
      }
    ]
  }
};
