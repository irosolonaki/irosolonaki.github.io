export const NAV_LINKS = [
  { label: "About", id: "about" },
  { label: "Experience", id: "experience" },
  { label: "Projects", id: "projects" },
  { label: "Skills", id: "skills" },
  { label: "Contact", id: "contact" },
];

export const EXPERIENCES = [
  {
    id: 1,
    company: "Vodafone",
    role: "Front-end Developer",
    type: "Graduate Trainee",
    period: ["March 2026", "Present"],
    badge: "Current",
    responsibilities: [
      "Work across UX and front-end for Vodafone's Maps platform, translating product needs into interfaces and implementing them with modern web technologies.",
      "Maintain and optimize Vodafone's eShop experience at enterprise scale",
      "Develop and ship production-ready front-end features within the E-commerce team",
      "Collaborate closely with designers, developers, and product stakeholders",
      "Ensure design consistency while implementing scalable, maintainable solutions",
    ],
  },
  {
    id: 2,
    company: "Vodafone",
    role: "UI/UX Designer",
    type: "Graduate Trainee",
    period: ["March 2025", "March 2026"],
    badge: null,
    responsibilities: [
      "Designed high-fidelity prototypes and reusable component libraries in Figma",
      "Built scalable design components using Variables and Design Tokens",
      "Supported and evolved Vodafone's Design System across product teams",
      "Conducted user testing sessions and translated feedback into product improvements",
      "Designed responsive, accessible experiences across web and mobile platforms",
      "Collaborated with product owners, engineering leads, and cross-functional teams",
    ],
  },
  {
    id: 3,
    company: "Vodafone",
    role: "UI/UX Intern",
    type: "Intern",
    period: ["September 2024", "March 2025"],
    badge: null,
    responsibilities: [
      "Supported UI/UX design projects across the product design organization",
      "Produced wireframes and high-fidelity mockups under senior guidance",
      "Learned enterprise-scale design workflows and collaboration processes",
      "Contributed ideas to internal product concepts and design sprints",
    ],
  },
];

export const PROJECTS = [
  {
    id: 1,
    title: "Echoes of Time",
    subtitle: "3D Narrative Game",
    tags: ["Unity3D", "C#"],
    badge: "Bachelor Thesis",
    description:
      "An atmospheric, narrative-driven 3D video game that combines exploration, puzzle-solving, and storytelling through environmental elements.",
    type: "game",
  },
  {
    id: 2,
    title: "FLUX",
    subtitle: "2D Story Side-Scroller",
    tags: ["Unity", "C#"],
    badge: null,
    description:
      "A 2D side-scrolling game developed in Unity (C#) featuring dark pixel-art visuals, puzzle-solving, and symbolic combat.",
    type: "game",
  },
  {
    id: 3,
    title: "Madeline",
    subtitle: "2D Platformer",
    tags: ["Unity", "C#"],
    badge: null,
    description:
      "A single-player pixel-art platformer inspired by Greek mythology. Guide Madeline through the underworld in search of three books and a way to reunite with her lost parents.",
    type: "game",
  },
  {
    id: 6,
    title: "Study Tracker",
    subtitle: "Productivity Web App",
    tags: ["React", ".NET Core"],
    badge: null,
    description:
      "Web application for tracking study progress, managing learning goals, and visualizing progress over time.",
    type: "dev",
  },
  {
    id: 7,
    title: "Learning Platform for Java",
    subtitle: "Educational Platform",
    tags: ["React", ".NET Core"],
    badge: null,
    description:
      "Interactive educational platform designed to improve programming education through structured, engaging learning paths.",
    type: "dev",
  },
];

export const GAME_PROJECTS = [
  {
    id: "echoes-of-time",
    title: "Echoes of Time",
    subtitle: "First-Person Horror Adventure",
    badge: "Bachelor Dissertation",
    tags: [
      "Unity3D",
      "C#",
      "Narrative Design",
      "Spirit Vision",
      "Environmental Puzzles",
    ],
    description:
      "Explore a world between the living and the dead, using Spirit Vision to uncover hidden clues and collect memories that reveal an unresolved past.",
    highlights: [
      "Reveal hidden spirit-world objects with a cooldown-based ability",
      "Collect audio memories and corresponding polaroids",
      "Explore a forest cabin and solve environmental puzzles",
    ],
    palette: "from-violet-500/18 via-fuchsia-500/10 to-rose-500/12",
    preview: ["World", "Puzzles", "Story"],
    detail: {
      intro:
        "Echoes of Time: In the Acheron Shadows is a first-person horror narrative adventure about grief, forgiveness, and personal growth. Exploration and light environmental puzzles gradually reveal the protagonist’s fragmented past.",
      problem:
        "The story opens in an old house after a nightmare about searching for lost parents in the afterlife. A mysterious book begins a journey through a world between the living and the dead, where spectral encounters and scattered memories expose unresolved parts of the past.",
      solution:
        "A spirit camera enables Spirit Vision, revealing hidden objects and memory points. The ability has a cooldown shown in the interface. Players examine and use objects to solve puzzles, then activate memories that play audio sequences and unlock polaroids in a collection menu. Together, these fragments build the story.",
      impact:
        "MemoryPointScript manages one-time memory interactions and audio playback. SpiritWorldVision controls spirit-object visibility and its cooldown, while GameManager tracks collected memories and progression. PlayerInventory records key items, including the camera required for Spirit Vision. The report describes a 15–20 minute experience.",
    },
  },
  {
    id: "flux",
    title: "FLUX",
    subtitle: "Narrative 2D Side-Scroller",
    badge: "Minor Final Project",
    tags: ["Unity", "C#", "Narrative Design", "Turn-Based Combat", "Pixel Art"],
    description:
      "Guide Lyra through a dream world shaped by self-doubt and fear of change, exploring memories and confronting hidden worries in turn-based battles.",
    highlights: [
      "Explore a forest market, childhood bedroom, and sci-fi world",
      "Choose Attack, Defend, Flux, or Flee in symbolic battles",
      "Face a final worry drawn from the player’s opening response",
    ],
    palette: "from-slate-500/18 via-zinc-500/10 to-red-500/12",
    preview: ["Gameplay", "Combat", "Level"],
    detail: {
      intro:
        "FLUX: Accepting the Uncertain is a short narrative-driven 2D side-scroller about fear of change, self-reflection, and emotional growth. Lyra explores a dream-like world that reflects her subconscious worries.",
      problem:
        "The story moves from an unfamiliar forest market to Lyra’s childhood bedroom and into a science-fiction game on her computer. Dialogue choices, internal monologues, and environmental puzzles reveal her memories as she works toward confronting her deepest worry.",
      solution:
        "Exploration alternates with turn-based battles against symbolic enemies. Players can attack, defend, flee, or use the Flux ability, whose unpredictable outcomes can heal, damage, or backfire. An inventory tracks acquired items, defeated worries, and currency. The final encounter uses the worry the player entered at the beginning of the game.",
      impact:
        "The implementation connects dialogue, inventory, combat, and progression across scenes. GameManager tracks shared state, WorryManager records discovered and defeated worries, and NPCDialogueController handles conversations and interactions such as purchasing items. The report describes approximately 15 minutes of gameplay.",
    },
  },
  {
    id: "madeline",
    title: "Madeline",
    subtitle: "2D Mythological Platformer",
    badge: "Game Development Course Project",
    tags: ["Unity", "C#", "Pixel Art", "Puzzles", "Narrative Design"],
    description:
      "A single-player pixel-art platformer inspired by Greek mythology. Guide Madeline through the underworld in search of three books and a way to reunite with her lost parents.",
    highlights: [
      "Explore the Necromanteion of Acheron and collect three books",
      "Solve puzzles using hidden items and environmental clues",
      "Fight enemies and choose dialogue responses with Alisha",
    ],
    palette: "from-cyan-500/18 via-blue-500/10 to-indigo-500/12",
    preview: ["Movement", "Levels", "Controls"],
    detail: {
      intro:
        "Madeline: A Story at the Necromanteion of Acheron is a single-player 2D platformer with pixel-art visuals, inspired by ancient Greek mythology.",
      problem:
        "After losing her parents, Madeline hears stories of villagers communicating with their departed loved ones at the Necromanteion of Acheron. Hoping to bring her parents back, she risks a journey into the afterlife. Her central objective is to find three books while exploring the underworld.",
      solution:
        "Players search the temple’s rooms and chambers for clues and hidden objects, then solve puzzles to reach new areas. One puzzle involves finding a fish for Lilly, a magical cat, in exchange for a key that opens the next area. Conversations with Alisha offer selectable dialogue responses.",
      impact:
        "The gameplay combines platforming with combat and item-based puzzles. Players can move, jump, crouch, dash, and use normal or special attacks. The start menu provides Start, Options, and Exit actions, while the pause screen displays the controls alongside Back and Exit buttons.",
    },
  },
];

export const UI_UX_PROJECTS = [
  {
    id: "myiasis",
    title: "myIasis",
    subtitle: "Ambulance tracker application",
    badge: "Winner — Vodafone Campus Lab",
    tags: ["Figma", "UI/UX", "Prototyping"],
    description:
      "An emergency assistance app concept with an emergency call flow, ambulance tracking, and access to health resources.",
    highlights: [
      "Emergency assistance entry screen",
      "Ambulance route and arrival-status concept",
      "Medical records, health points, and first-aid navigation",
    ],
    palette: "from-emerald-500/20 via-green-500/10 to-cyan-500/14",
    preview: ["Map", "Dispatch", "Alert"],
    detail: {
      intro:
        "myIasis is an emergency response application concept and winner of the Vodafone Campus Lab contest.",
      problem:
        "The concept focuses on a person seeking emergency assistance and wanting to understand where help is and when it may arrive.",
      solution:
        "The supplied mockup brings together an emergency call action, an ambulance map with an arrival estimate, and navigation to medical records, health points, and first aid.",
      impact:
        "The three-screen presentation connects the emergency entry point, an ambulance-tracking view, and an introduction to the app.",
    },
  },
  {
    id: "earthquake",
    title: "ResQLink",
    subtitle: "Earthquake-reporting app",
    badge: "3rd Place — Greece–Turkey Hackathon",
    tags: ["Figma", "Rapid Prototyping", "UX", "Crisis Design"],
    description:
      "An earthquake-reporting application concept focused on communicating information during a crisis.",
    highlights: [
      "Earthquake-reporting concept",
      "Mobile interface walkthrough",
      "Greece–Turkey Hackathon project",
    ],
    palette: "from-green-500/20 via-emerald-500/10 to-teal-500/14",
    preview: ["Alert", "Status", "Map"],
    detail: {
      intro:
        "ResQLink is an earthquake-reporting app concept created for the Greece–Turkey Hackathon, where the project placed third.",
      problem:
        "The project concerns reporting earthquake-related information through a mobile interface.",
      solution:
        "The screen recording below demonstrates the prototype and its reporting flow.",
      impact:
        "The prototype presents earthquake information, a prominent SOS action, and a nearby-responder concept in a mobile interface.",
    },
  },
];

export const SKILL_GROUPS = [
  {
    label: "Design",
    skills: [
      "Figma",
      "Design Systems",
      "UI Design",
      "UX Design",
      "User Testing",
      "Wireframing",
      "High Fidelity Prototyping",
      "Components",
      "Variables",
      "Photoshop",
      "Illustrator",
    ],
  },
  {
    label: "Development",
    skills: [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "HTML",
      "CSS",
      "C#",
      "GitHub",
    ],
  },
  {
    label: "Game Development",
    skills: ["Unity", "C#", "Narrative Design"],
  },
];

export const EDUCATION = [
  {
    school: "University of Piraeus",
    degree: "BSc in Computer Science",
    period: "2020 – 2024",
    grade: "CGPA: 8.62 / 10",
  },
  {
    school: "Deree – The American College of Greece",
    degree: "Minor in Gaming Technologies",
    period: "2022 – 2024",
    grade: "GPA: 4.0",
  },
];
