import { useState, useEffect, useRef } from "react";
import type { ReactNode } from "react";
import { motion } from "motion/react";
import {
  MapPin,
  Mail,
  Linkedin,
  ArrowDown,
  Menu,
  X,
  Gamepad2,
  ChevronRight,
  Sun,
  Moon,
} from "lucide-react";

// ─── Constants ────────────────────────────────────────────────────────────────

const KONAMI_SEQUENCE = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
];

const NAV_LINKS = [
  { label: "About", id: "about" },
  { label: "Experience", id: "experience" },
  { label: "Projects", id: "projects" },
  { label: "Skills", id: "skills" },
  { label: "Contact", id: "contact" },
];

const EXPERIENCES = [
  {
    id: 1,
    company: "Vodafone",
    role: "Front-end Developer",
    type: "Graduate Trainee",
    period: ["March 2026", "Present"],
    badge: "Current",
    responsibilities: [
      "Maintain and optimize Vodafone's eShop experience at enterprise scale",
      "Develop and ship production-ready front-end features within the E-commerce team",
      "Improve performance and user experience for millions of users",
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
    period: ["September 2024", "December 2024"],
    badge: null,
    responsibilities: [
      "Supported UI/UX design projects across the product design organization",
      "Produced wireframes and high-fidelity mockups under senior guidance",
      "Learned enterprise-scale design workflows and collaboration processes",
      "Contributed ideas to internal product concepts and design sprints",
    ],
  },
];

const PROJECTS = [
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
      "A 2D polished platformer built to explore precise movement mechanics, responsive controls, and player interaction design.",
    type: "game",
  },
  {
    id: 4,
    title: "Ambulance Response App",
    subtitle: "UI/UX Case Study & Prototype",
    tags: ["Figma", "UX Research", "Prototyping"],
    badge: "Winner — Vodafone Campus Lab",
    description:
      "Designed a complete emergency response application with user-centered workflows, accessibility considerations, and high-fidelity prototypes.",
    type: "design",
  },
  {
    id: 5,
    title: "Earthquake Crisis App",
    subtitle: "High Fidelity Prototype",
    tags: ["Figma", "UX", "Rapid Prototyping"],
    badge: "3rd Place — GR/TR Hackathon",
    description:
      "Collaborative crisis management application prototype, focused on usability, built in a 48-hour hackathon.",
    type: "design",
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

const SKILL_GROUPS = [
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

const EDUCATION = [
  {
    school: "University of Piraeus",
    degree: "BSc in Computer Science",
    period: "2020 – 2024",
    grade: "CGPA: 8.53 / 10",
  },
  {
    school: "Deree – The American College of Greece",
    degree: "Minor in Gaming Technologies",
    period: "2022 – 2024",
    grade: "GPA: 4.0",
  },
];

// ─── Utilities ────────────────────────────────────────────────────────────────

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

// ─── Small components ─────────────────────────────────────────────────────────

function FadeIn({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Space Invader pixel sprite — subtle gaming nod
function PixelInvader({ className = "" }: { className?: string }) {
  const rows = [
    [0, 0, 1, 0, 0, 1, 0, 0],
    [0, 0, 0, 1, 1, 0, 0, 0],
    [0, 1, 1, 1, 1, 1, 1, 0],
    [1, 1, 0, 1, 1, 0, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1],
    [0, 1, 0, 0, 0, 0, 1, 0],
    [1, 0, 1, 0, 0, 1, 0, 1],
    [0, 1, 0, 0, 0, 0, 1, 0],
  ];
  return (
    <div className={`inline-flex flex-col gap-[2px] ${className}`}>
      {rows.map((row, ri) => (
        <div key={ri} className="flex gap-[2px]">
          {row.map((cell, ci) => (
            <div
              key={ci}
              className={`w-[4px] h-[4px] ${cell ? "bg-accent" : "bg-transparent"}`}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

// Square pixel cursor (shown on CTA hover)
function PixelCursor({
  x,
  y,
  visible,
}: {
  x: number;
  y: number;
  visible: boolean;
}) {
  return (
    <div
      className="pointer-events-none fixed z-[9999] transition-opacity duration-150"
      style={{ left: x - 10, top: y - 10, opacity: visible ? 1 : 0 }}
    >
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect
          x="0.75"
          y="0.75"
          width="18.5"
          height="18.5"
          stroke="var(--accent)"
          strokeWidth="1.5"
        />
        <rect x="9" y="4" width="2" height="12" fill="var(--accent)" />
        <rect x="4" y="9" width="12" height="2" fill="var(--accent)" />
      </svg>
    </div>
  );
}

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center gap-4 mb-14">
      <span className="text-[11px] font-medium tracking-[0.22em] uppercase text-muted-foreground">
        {children}
      </span>
      <div className="flex-1 h-px bg-border" />
    </div>
  );
}

// ─── Nav ──────────────────────────────────────────────────────────────────────

function Nav({
  scrollProgress,
  activeSection,
  mobileOpen,
  setMobileOpen,
  darkMode,
  setDarkMode,
}: {
  scrollProgress: number;
  activeSection: string;
  mobileOpen: boolean;
  setMobileOpen: (v: boolean) => void;
  darkMode: boolean;
  setDarkMode: (v: boolean) => void;
}) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <>
      {/* Scroll progress bar */}
      <div
        className="fixed top-0 left-0 z-[100] h-[2px] bg-accent transition-all duration-75"
        style={{ width: `${scrollProgress * 100}%` }}
      />

      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-background/95 backdrop-blur-md border-b border-border"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2 group cursor-pointer"
          >
            <span
              style={{ fontFamily: "var(--font-serif-stack)" }}
              className="text-lg tracking-tight"
            >
              irosolonaki
            </span>
            {/* Pixel dot accent */}
            <div className="w-[5px] h-[5px] bg-accent group-hover:scale-110 transition-transform" />
          </button>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`text-sm transition-colors duration-200 cursor-pointer ${
                  activeSection === link.id
                    ? "text-foreground font-medium"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => setDarkMode(!darkMode)}
              aria-label="Toggle dark mode"
              className="p-1.5 rounded-full hover:bg-secondary transition-colors cursor-pointer"
            >
              {darkMode ? <Sun size={16} /> : <Moon size={16} />}
            </button>
          </div>

          {/* Mobile toggle */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={() => setDarkMode(!darkMode)}
              aria-label="Toggle dark mode"
              className="p-1.5 rounded-full hover:bg-secondary transition-colors cursor-pointer"
            >
              {darkMode ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            <button
              className="p-1 cursor-pointer"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-background pt-16 flex flex-col">
          <div className="flex flex-col px-6 py-4">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  scrollTo(link.id);
                  setMobileOpen(false);
                }}
                className="py-5 text-left text-2xl border-b border-border hover:text-accent transition-colors cursor-pointer"
                style={{ fontFamily: "var(--font-serif-stack)" }}
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

function Hero({
  onCursorEnter,
  onCursorLeave,
}: {
  onCursorEnter: () => void;
  onCursorLeave: () => void;
}) {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center pt-20 pb-16 px-6 md:px-10 max-w-6xl mx-auto"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-end">
        <div className="lg:col-span-8">
          {/* Eyebrow */}
          <FadeIn>
            <div className="flex items-center gap-3 mb-10">
              <div className="w-6 h-px bg-accent" />
              <span className="text-[11px] tracking-[0.22em] uppercase text-muted-foreground font-medium">
                Athens, Greece · Available for opportunities
              </span>
            </div>
          </FadeIn>

          {/* Heading */}
          <FadeIn delay={0.08}>
            <h1
              className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[1.04] tracking-tight mb-8"
              style={{ fontFamily: "var(--font-serif-stack)" }}
            >
              Designing thoughtful{" "}
              <span className="italic text-accent">experiences.</span>
            </h1>
          </FadeIn>

          {/* Role tags */}
          <FadeIn delay={0.16}>
            <div className="flex flex-wrap gap-2 mb-8">
              {["UI/UX Designer", "Front-end Developer"].map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] px-3 py-1.5 border border-border text-muted-foreground font-medium tracking-wide"
                >
                  {tag}
                </span>
              ))}
            </div>
          </FadeIn>

          {/* Intro */}
          <FadeIn delay={0.24}>
            <p className="text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed mb-10">
              {
                "I'm Iro, a UI/UX Designer turned Front-end Developer. I enjoy turning ideas into digital experiences that are simple, thoughtful, and enjoyable to use. I'm also passionate about video games and love exploring how game design can inspire better UI/UX and front-end experiences."
              }
            </p>
          </FadeIn>

          {/* CTAs */}
          <FadeIn delay={0.32}>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => scrollTo("projects")}
                onMouseEnter={onCursorEnter}
                onMouseLeave={onCursorLeave}
                className="px-7 py-3 bg-foreground text-background text-sm font-medium hover:bg-accent transition-colors duration-200 cursor-pointer"
              >
                View Work
              </button>
              <button
                onClick={() => scrollTo("contact")}
                onMouseEnter={onCursorEnter}
                onMouseLeave={onCursorLeave}
                className="px-7 py-3 border border-border text-sm font-medium hover:border-foreground transition-colors duration-200 cursor-pointer"
              >
                Contact
              </button>
              <button
                onClick={() => scrollTo("about")}
                onMouseEnter={onCursorEnter}
                onMouseLeave={onCursorLeave}
                className="px-7 py-3 border border-border text-sm font-medium hover:border-foreground transition-colors duration-200 cursor-pointer"
              >
                About
              </button>
            </div>
          </FadeIn>
        </div>

        {/* Decorative column */}
        <div className="hidden lg:flex lg:col-span-4 flex-col items-end justify-end gap-8 pb-2">
          <FadeIn delay={0.4}>
            <PixelInvader className="opacity-25" />
          </FadeIn>
          <FadeIn delay={0.48}>
            <div className="text-right space-y-1">
              <div className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground">
                Currently at
              </div>
              <div className="font-medium text-sm">Vodafone Greece</div>
              <div className="text-sm text-muted-foreground">
                Front-end Developer
              </div>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Scroll nudge */}
      <FadeIn delay={0.6}>
        <button
          onClick={() => scrollTo("about")}
          className="mt-20 flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group cursor-pointer"
        >
          <span className="text-[11px] tracking-[0.2em] uppercase">Scroll</span>
          <ArrowDown
            size={13}
            className="group-hover:translate-y-1 transition-transform duration-200"
          />
        </button>
      </FadeIn>
    </section>
  );
}

// ─── About ────────────────────────────────────────────────────────────────────

function About() {
  const interests = [
    "Video Games",
    "Digital Design",
    "Programming",
    "UX",
    "Ice Skating",
    "Music",
    "Travel",
  ];

  return (
    <section
      id="about"
      className="py-24 md:py-32 px-6 md:px-10 max-w-6xl mx-auto"
    >
      <SectionLabel>About</SectionLabel>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
        {/* Main narrative */}
        <div className="lg:col-span-7 space-y-6">
          <FadeIn>
            <p
              className="text-2xl md:text-3xl leading-[1.4] tracking-tight"
              style={{ fontFamily: "var(--font-serif-stack)" }}
            >
              {
                "I started in Computer Science, discovered a love for how things look and feel, and haven't stopped bridging both worlds since."
              }
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="space-y-4 text-muted-foreground leading-relaxed text-[15px]">
              <p>
                My journey began with a BSc in Computer Science at the
                University of Piraeus and a Minor in Gaming Technologies at
                Deree.
              </p>
              <p>
                I started professionally as a UI/UX Designer at Vodafone, where
                I built reusable components, evolved their design system, and
                shaped responsive product journeys. Then I made the deliberate
                leap to Front-end Developer, bridging my passion for design with
                the want to bring prototypes to life.
              </p>
              <p>
                {
                  "Whether I'm shaping a component library or implementing an accessible user journey, the goal is the same: products that work beautifully for real people with real needs."
                }
              </p>
            </div>
          </FadeIn>
        </div>

        {/* Side panel */}
        <div className="lg:col-span-5">
          <FadeIn delay={0.15}>
            <div className="space-y-8">
              {/* Interests */}
              <div>
                <p className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground font-medium mb-3">
                  Interests
                </p>
                <div className="flex flex-wrap gap-2">
                  {interests.map((item) => (
                    <span
                      key={item}
                      className="text-[13px] px-3 py-1.5 bg-muted text-muted-foreground"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="h-px bg-border" />

              {/* Quick facts */}
              <div className="space-y-5">
                <div>
                  <p className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground font-medium mb-1.5">
                    Location
                  </p>
                  <p className="text-sm font-medium">Athens, Greece</p>
                </div>
                <div>
                  <p className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground font-medium mb-2">
                    Languages
                  </p>
                  <div className="space-y-1.5">
                    {[
                      ["Greek", "Native"],
                      ["English", "Professional"],
                      ["French", "Basic"],
                    ].map(([lang, level]) => (
                      <div key={lang} className="flex justify-between text-sm">
                        <span>{lang}</span>
                        <span className="text-muted-foreground">{level}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Pixel decoration */}
              <div className="flex justify-end">
                <PixelInvader className="opacity-15" />
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

// ─── Experience ───────────────────────────────────────────────────────────────

function Experience() {
  return (
    <section
      id="experience"
      className="py-24 md:py-32 px-6 md:px-10 max-w-6xl mx-auto"
    >
      <SectionLabel>Experience</SectionLabel>

      <div className="space-y-14">
        {EXPERIENCES.map((exp, i) => (
          <FadeIn key={exp.id} delay={i * 0.08}>
            <div className="grid grid-cols-1 md:grid-cols-[160px_1fr] gap-6 md:gap-10">
              {/* Period column */}
              <div className="md:pt-1 flex md:flex-col gap-1.5 md:gap-1">
                {exp.period.map((p, pi) => (
                  <span
                    key={pi}
                    className="text-xs text-muted-foreground leading-snug"
                  >
                    {pi > 0 ? `– ${p}` : p}
                  </span>
                ))}
              </div>

              {/* Content column */}
              <div className="relative pl-6 md:pl-8 border-l border-border">
                {/* Square pixel dot on timeline */}
                <div className="absolute -left-[5px] top-[5px] w-[9px] h-[9px] border-2 border-accent bg-background" />

                {exp.badge && (
                  <span className="inline-block text-[10px] tracking-[0.18em] uppercase px-2.5 py-1 bg-accent text-accent-foreground font-medium mb-3">
                    {exp.badge}
                  </span>
                )}

                <p className="text-[11px] tracking-[0.14em] uppercase text-muted-foreground mb-1 font-medium">
                  {exp.company} · {exp.type}
                </p>
                <h3
                  className="text-xl md:text-2xl mb-5 tracking-tight"
                  style={{ fontFamily: "var(--font-serif-stack)" }}
                >
                  {exp.role}
                </h3>

                <ul className="space-y-2.5">
                  {exp.responsibilities.map((r, ri) => (
                    <li
                      key={ri}
                      className="flex gap-3 text-[14px] text-muted-foreground leading-relaxed"
                    >
                      {/* Pixel bullet */}
                      <span className="mt-[7px] w-[4px] h-[4px] bg-muted-foreground flex-shrink-0" />
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

// ─── Projects ─────────────────────────────────────────────────────────────────

function Projects() {
  return (
    <section
      id="projects"
      className="py-24 md:py-32 px-6 md:px-10 max-w-6xl mx-auto"
    >
      <SectionLabel>Projects</SectionLabel>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {PROJECTS.map((project, i) => (
          <FadeIn key={project.id} delay={i * 0.04} className="h-full">
            <div className="p-7 h-full flex flex-col border border-border hover:bg-muted transition-colors duration-200 group">
              <p className="text-[11px] tracking-[0.14em] uppercase text-muted-foreground mb-2 font-medium">
                {project.subtitle}
              </p>
              <h3
                className="text-2xl mb-3 leading-tight tracking-tight min-h-[4rem]"
                style={{ fontFamily: "var(--font-serif-stack)" }}
              >
                {project.title}
              </h3>
              <p className="text-[13px] text-muted-foreground leading-relaxed flex-1 mb-5">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1.5 mt-auto">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] px-2.5 py-1 bg-secondary text-muted-foreground font-medium"
                  >
                    {tag}
                  </span>
                ))}
                {project.badge && (
                  <span className="text-[10px] tracking-[0.14em] uppercase px-2.5 py-1 border border-accent text-accent font-medium">
                    {project.badge}
                  </span>
                )}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

// ─── Skills ───────────────────────────────────────────────────────────────────

function Skills() {
  return (
    <section
      id="skills"
      className="py-24 md:py-32 px-6 md:px-10 max-w-6xl mx-auto"
    >
      <SectionLabel>Skills</SectionLabel>

      <div className="space-y-10">
        {SKILL_GROUPS.map((group, i) => (
          <FadeIn key={group.label} delay={i * 0.1}>
            <div className="grid grid-cols-1 md:grid-cols-[140px_1fr] gap-4 items-start">
              <p className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground font-medium pt-2">
                {group.label}
              </p>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-[13px] px-4 py-2 border border-border hover:border-accent hover:text-accent transition-colors duration-200 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

// ─── Education ────────────────────────────────────────────────────────────────

function Education() {
  return (
    <section
      id="education"
      className="py-24 md:py-32 px-6 md:px-10 max-w-6xl mx-auto"
    >
      <SectionLabel>Education</SectionLabel>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
        {EDUCATION.map((edu, i) => (
          <FadeIn key={edu.school} delay={i * 0.08} className="bg-background">
            <div className="p-8 md:p-10">
              <p className="text-[11px] tracking-[0.18em] uppercase text-muted-foreground mb-3 font-medium">
                {edu.period}
              </p>
              <h3
                className="text-2xl md:text-3xl mb-2 leading-tight tracking-tight"
                style={{ fontFamily: "var(--font-serif-stack)" }}
              >
                {edu.school}
              </h3>
              <p className="font-medium text-sm mb-3">{edu.degree}</p>
              <p className="text-sm text-accent font-medium">{edu.grade}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

// ─── Contact ──────────────────────────────────────────────────────────────────

function Contact() {
  return (
    <section
      id="contact"
      className="py-24 md:py-32 px-6 md:px-10 max-w-6xl mx-auto"
    >
      <SectionLabel>Contact</SectionLabel>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-start">
        {/* Closing statement */}
        <div className="lg:col-span-7">
          <FadeIn>
            <h2
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[1.08] tracking-tight"
              style={{ fontFamily: "var(--font-serif-stack)" }}
            >
              {"Contact me: "}
            </h2>
          </FadeIn>
        </div>

        {/* Contact details */}
        <div className="lg:col-span-5">
          <FadeIn delay={0.15}>
            <div className="space-y-0">
              <a
                href="mailto:irosolonaki@gmail.com"
                className="flex items-center gap-4 py-5 border-b border-border hover:border-foreground group transition-colors duration-200"
              >
                <Mail
                  size={15}
                  className="text-muted-foreground group-hover:text-accent transition-colors duration-200 flex-shrink-0"
                />
                <span className="text-sm font-medium">
                  irosolonaki@gmail.com
                </span>
                <ChevronRight
                  size={13}
                  className="ml-auto text-muted-foreground group-hover:text-foreground group-hover:translate-x-0.5 transition-all duration-200"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/iro-solonaki-248953254/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 py-5 border-b border-border hover:border-foreground group transition-colors duration-200"
              >
                <Linkedin
                  size={15}
                  className="text-muted-foreground group-hover:text-accent transition-colors duration-200 flex-shrink-0"
                />
                <span className="text-sm font-medium">
                  linkedin.com/in/irosolonaki
                </span>
                <ChevronRight
                  size={13}
                  className="ml-auto text-muted-foreground group-hover:text-foreground group-hover:translate-x-0.5 transition-all duration-200"
                />
              </a>
              <div className="flex items-center gap-4 py-5 border-b border-border">
                <MapPin
                  size={15}
                  className="text-muted-foreground flex-shrink-0"
                />
                <span className="text-sm font-medium">Athens, Greece</span>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="text-sm text-muted-foreground">
          © 2026 Iro Solonaki
        </span>
        <div className="flex items-center gap-3 text-xs text-muted-foreground">
          <span>Designed & built with care</span>
          <PixelInvader className="opacity-30" />
        </div>
      </div>
    </footer>
  );
}

// ─── App ──────────────────────────────────────────────────────────────────────

export default function App() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [cursorVisible, setCursorVisible] = useState(false);
  const [konamiShown, setKonamiShown] = useState(false);
  const konamiRef = useRef<string[]>([]);
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window === "undefined") return false;
    const stored = localStorage.getItem("theme");
    if (stored) return stored === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  useEffect(() => {
    // Scroll progress
    const onScroll = () => {
      const el = document.documentElement;
      const max = el.scrollHeight - el.clientHeight;
      setScrollProgress(max > 0 ? Math.min(1, el.scrollTop / max) : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    // Active section via IntersectionObserver
    const sectionIds = [
      "hero",
      "about",
      "experience",
      "projects",
      "skills",
      "education",
      "contact",
    ];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-35% 0px -35% 0px" },
    );
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    // Mouse tracking for pixel cursor
    const onMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", onMouseMove);

    // Konami code easter egg
    const onKeyDown = (e: KeyboardEvent) => {
      const next = [...konamiRef.current, e.key].slice(-10);
      konamiRef.current = next;
      if (next.join(",") === KONAMI_SEQUENCE.join(",")) {
        setKonamiShown(true);
        setTimeout(() => setKonamiShown(false), 5000);
      }
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("keydown", onKeyDown);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* MARKER-MAKE-KIT-INVOKED */}
      {/* MARKER-MAKE-KIT-DISCOVERY-READ */}
      {/* MARKER-MAKE-KIT-TOKENS-READ */}
      {/* MARKER-MAKE-KIT-FINAL-CHECK-READ */}
      <PixelCursor x={cursorPos.x} y={cursorPos.y} visible={cursorVisible} />

      {/* Konami code easter egg */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: konamiShown ? 1 : 0, y: konamiShown ? 0 : 12 }}
        transition={{ duration: 0.3 }}
        className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[200] px-6 py-3.5 bg-foreground text-background text-sm font-medium flex items-center gap-3 pointer-events-none whitespace-nowrap"
      >
        <Gamepad2 size={15} />
        <span>↑↑↓↓←→←→BA — Achievement unlocked: gamer detected</span>
      </motion.div>

      <Nav
        scrollProgress={scrollProgress}
        activeSection={activeSection}
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <main>
        <Hero
          onCursorEnter={() => setCursorVisible(true)}
          onCursorLeave={() => setCursorVisible(false)}
        />
        <div className="border-t border-border" />
        <About />
        <div className="border-t border-border" />
        <Experience />
        <div className="border-t border-border" />
        <Projects />
        <div className="border-t border-border" />
        <Skills />
        <div className="border-t border-border" />
        <Education />
        <div className="border-t border-border" />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
