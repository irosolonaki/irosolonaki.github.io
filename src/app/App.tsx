import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import { motion } from "motion/react";

import { EDUCATION, EXPERIENCES, NAV_LINKS, SKILL_GROUPS } from "./data";
import {
  ChevronRightIcon,
  CloseIcon,
  GamepadIcon,
  LinkedinIcon,
  MailIcon,
  MapPinIcon,
  MenuIcon,
  MoonIcon,
  SunIcon,
} from "./components/Icons";
import { Projects } from "./components/Projects";

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

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

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
      initial={{ opacity: 0, y: 18, scale: 0.985 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2, margin: "-40px" }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

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

function Nav({
  activeSection,
  mobileOpen,
  setMobileOpen,
  darkMode,
  setDarkMode,
}: {
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
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-background/95 backdrop-blur-md border-b border-border"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
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
            <div className="w-[5px] h-[5px] bg-accent group-hover:scale-110 transition-transform" />
          </button>

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
              {darkMode ? (
                <SunIcon className="w-4 h-4" />
              ) : (
                <MoonIcon className="w-4 h-4" />
              )}
            </button>
          </div>

          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={() => setDarkMode(!darkMode)}
              aria-label="Toggle dark mode"
              className="p-1.5 rounded-full hover:bg-secondary transition-colors cursor-pointer"
            >
              {darkMode ? (
                <SunIcon className="w-4 h-4" />
              ) : (
                <MoonIcon className="w-4 h-4" />
              )}
            </button>
            <button
              className="p-1 cursor-pointer"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? (
                <CloseIcon className="w-[18px] h-[18px]" />
              ) : (
                <MenuIcon className="w-[18px] h-[18px]" />
              )}
            </button>
          </div>
        </div>
      </nav>

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
          <FadeIn>
            <div className="flex items-center gap-3 mb-10">
              <div className="w-6 h-px bg-accent" />
              <span className="text-[11px] tracking-[0.22em] uppercase text-muted-foreground font-medium">
                Athens, Greece · Available for opportunities
              </span>
            </div>
          </FadeIn>

          <FadeIn delay={0.08}>
            <h1
              className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[1.04] tracking-tight mb-8"
              style={{ fontFamily: "var(--font-serif-stack)" }}
            >
              Designing thoughtful{" "}
              <span className="text-accent">experiences.</span>
            </h1>
          </FadeIn>

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

          <FadeIn delay={0.24}>
            <p className="text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed mb-10">
              I&apos;m Iro, a UI/UX Designer turned Front-end Developer. I enjoy
              turning ideas into digital experiences that are simple,
              thoughtful, and enjoyable to use. I&apos;m also passionate about
              video games and love exploring how game design can inspire better
              UI/UX and front-end experiences.
            </p>
          </FadeIn>

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
    </section>
  );
}

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
        <div className="lg:col-span-7 space-y-6">
          <FadeIn>
            <p
              className="text-2xl md:text-3xl leading-[1.4] tracking-tight"
              style={{ fontFamily: "var(--font-serif-stack)" }}
            >
              I started in Computer Science, discovered a love for how things
              look and feel, and haven&apos;t stopped bridging both worlds
              since.
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
                Whether I&apos;m shaping a component library or implementing an
                accessible user journey, the goal is the same: products that
                work beautifully for real people with real needs.
              </p>
            </div>
          </FadeIn>
        </div>

        <div className="lg:col-span-5">
          <FadeIn delay={0.15}>
            <div className="space-y-8">
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

              <div className="relative pl-6 md:pl-8 border-l border-border">
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

function Contact() {
  return (
    <section
      id="contact"
      className="py-24 md:py-32 px-6 md:px-10 max-w-6xl mx-auto"
    >
      <SectionLabel>Contact</SectionLabel>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-start">
        <div className="lg:col-span-7">
          <FadeIn>
            <h2
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[1.08] tracking-tight"
              style={{ fontFamily: "var(--font-serif-stack)" }}
            >
              Contact me:
            </h2>
          </FadeIn>
        </div>

        <div className="lg:col-span-5">
          <FadeIn delay={0.15}>
            <div className="space-y-0">
              <a
                href="mailto:irosolonaki@gmail.com"
                className="flex items-center gap-4 py-5 border-b border-border hover:border-foreground group transition-colors duration-200"
              >
                <MailIcon className="w-[15px] h-[15px] text-muted-foreground group-hover:text-accent transition-colors duration-200 flex-shrink-0" />
                <span className="text-sm font-medium">
                  irosolonaki@gmail.com
                </span>
                <ChevronRightIcon className="ml-auto w-[13px] h-[13px] text-muted-foreground group-hover:text-foreground group-hover:translate-x-0.5 transition-all duration-200" />
              </a>
              <a
                href="https://www.linkedin.com/in/iro-solonaki-248953254/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 py-5 border-b border-border hover:border-foreground group transition-colors duration-200"
              >
                <LinkedinIcon className="w-[15px] h-[15px] text-muted-foreground group-hover:text-accent transition-colors duration-200 flex-shrink-0" />
                <span className="text-sm font-medium">
                  linkedin.com/in/irosolonaki
                </span>
                <ChevronRightIcon className="ml-auto w-[13px] h-[13px] text-muted-foreground group-hover:text-foreground group-hover:translate-x-0.5 transition-all duration-200" />
              </a>
              <div className="flex items-center gap-4 py-5 border-b border-border">
                <MapPinIcon className="w-[15px] h-[15px] text-muted-foreground flex-shrink-0" />
                <span className="text-sm font-medium">Athens, Greece</span>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

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

export default function App() {
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
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

  const handleProjectSelect = (projectId: string) =>
    setSelectedProject(projectId);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  useEffect(() => {
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

    const onMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", onMouseMove);

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
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("keydown", onKeyDown);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <PixelCursor x={cursorPos.x} y={cursorPos.y} visible={cursorVisible} />

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: konamiShown ? 1 : 0, y: konamiShown ? 0 : 12 }}
        transition={{ duration: 0.3 }}
        className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[200] px-6 py-3.5 bg-foreground text-background text-sm font-medium flex items-center gap-3 pointer-events-none whitespace-nowrap"
      >
        <GamepadIcon className="w-[15px] h-[15px]" />
        <span>↑↑↓↓←→←→BA — Achievement unlocked: gamer detected</span>
      </motion.div>

      <Nav
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
        <Projects
          selectedProject={selectedProject}
          onSelectProject={handleProjectSelect}
          onClearSelection={() => setSelectedProject(null)}
        />
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
