import type { ReactNode } from "react";
import { motion } from "motion/react";
import {
  mediaUrl,
  projectImages,
  madelineGallery,
  gameReportGalleries,
} from "../media";
import { GAME_PROJECTS, UI_UX_PROJECTS } from "../data";

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

export function Projects({
  selectedProject,
  onSelectProject,
  onClearSelection,
}: {
  selectedProject: string | null;
  onSelectProject: (id: string) => void;
  onClearSelection: () => void;
}) {
  const allProjects = [...UI_UX_PROJECTS, ...GAME_PROJECTS];
  const activeProject =
    selectedProject !== null
      ? (allProjects.find((project) => project.id === selectedProject) ?? null)
      : null;

  if (activeProject) {
    return (
      <section
        id="projects"
        className="py-24 md:py-32 px-6 md:px-10 max-w-6xl mx-auto"
      >
        <div className="mb-8 flex items-center justify-between gap-4">
          <button
            onClick={onClearSelection}
            className="inline-flex items-center gap-2 text-[11px] tracking-[0.18em] uppercase text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
          >
            <span>←</span>
            <span>Back to projects</span>
          </button>
          {activeProject.badge && (
            <span className="text-[10px] tracking-[0.14em] uppercase px-2.5 py-1 border border-accent text-accent font-medium">
              {activeProject.badge}
            </span>
          )}
        </div>

        <div className="space-y-8">
          <FadeIn>
            <div className="border border-border p-6 md:p-8 bg-muted/30">
              <p className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground font-medium mb-3">
                {activeProject.subtitle}
              </p>
              <h3
                className="text-4xl md:text-5xl leading-tight tracking-tight mb-4"
                style={{ fontFamily: "var(--font-serif-stack)" }}
              >
                {activeProject.title}
              </h3>
              <p className="text-base text-muted-foreground leading-relaxed max-w-3xl">
                {activeProject.detail.intro}
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.06}>
            <div className="border border-border p-6 md:p-8">
              <h4 className="text-lg mb-4">Project overview</h4>
              <div className="space-y-5 text-[15px] leading-relaxed text-muted-foreground">
                <p>{activeProject.detail.problem}</p>
                <p>{activeProject.detail.solution}</p>
                {activeProject.detail.impact && (
                  <p>{activeProject.detail.impact}</p>
                )}
              </div>
            </div>
          </FadeIn>
          <ProjectGallery id={activeProject.id} title={activeProject.title} />

          <FadeIn delay={0.15}>
            <div className="border border-border p-6 md:p-8">
              <p className="text-[11px] tracking-[0.18em] uppercase text-muted-foreground font-medium mb-4">
                Key highlights
              </p>
              <div className="flex flex-wrap gap-2">
                {activeProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] px-3 py-1.5 bg-secondary text-muted-foreground font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    );
  }

  return (
    <section
      id="projects"
      className="py-24 md:py-32 px-6 md:px-10 max-w-6xl mx-auto"
    >
      <div className="space-y-10">
        <FadeIn>
          <div className="mb-8">
            <p className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground font-medium mb-4">
              UI / UX Highlights
            </p>
            <h3
              className="text-3xl md:text-4xl leading-tight tracking-tight"
              style={{ fontFamily: "var(--font-serif-stack)" }}
            >
              Product and campaign experiences I’ve shaped.
            </h3>
          </div>
        </FadeIn>

        <div className="space-y-12">
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-5">
            <FadeIn className="h-full">
              <article className="flex h-full flex-col border border-border bg-background p-6">
                <p className="text-[11px] tracking-[0.14em] uppercase text-muted-foreground mb-4">
                  Professional work
                </p>
                <h4
                  className="text-2xl mb-4"
                  style={{ fontFamily: "var(--font-serif-stack)" }}
                >
                  Design Work
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  Selected professional work is available on request. Get in
                  touch to discuss my experience and the work I can share.
                </p>
                <a
                  className="mt-auto inline-block text-sm underline underline-offset-4"
                  href="mailto:irosolonaki@gmail.com?subject=Professional%20work%20request"
                >
                  Request work samples ↗
                </a>
              </article>
            </FadeIn>
            {UI_UX_PROJECTS.map((project, i) => {
              return (
                <FadeIn key={project.id} delay={i * 0.06} className="h-full">
                  <div
                    role="button"
                    tabIndex={0}
                    onClick={() => {
                      onSelectProject(project.id);
                    }}
                    onKeyDown={(event) => {
                      if (event.key === "Enter" || event.key === " ") {
                        event.preventDefault();

                        onSelectProject(project.id);
                      }
                    }}
                    className="group relative flex h-full w-full flex-col border border-border bg-background text-left transition-transform duration-200 hover:-translate-y-0.5 cursor-pointer outline-none"
                  >
                    <div className={`bg-gradient-to-br ${project.palette}`}>
                      <div className="flex h-full flex-col bg-background/95">
                        <CardPreview id={project.id} title={project.title} />
                        <div className="flex-1 p-6">
                          <div className="mb-4 flex flex-col items-center gap-2 text-center">
                            <span className="text-[11px] tracking-[0.14em] uppercase text-muted-foreground font-medium">
                              {project.subtitle}
                            </span>
                            {project.badge && (
                              <span className="whitespace-normal border border-accent px-2 py-1 text-[9px] tracking-[0.12em] uppercase text-accent font-medium">
                                {project.badge}
                              </span>
                            )}
                          </div>

                          <h4
                            className="mb-4 text-2xl leading-tight tracking-tight"
                            style={{ fontFamily: "var(--font-serif-stack)" }}
                          >
                            {project.title}
                          </h4>

                          <p className="mb-5 text-[13px] text-muted-foreground leading-relaxed">
                            {project.description}
                          </p>

                          <ul className="mb-0 space-y-2.5 text-left">
                            {project.highlights.map((item) => (
                              <li
                                key={item}
                                className="flex gap-2.5 text-[13px] text-muted-foreground leading-relaxed"
                              >
                                <span className="mt-[7px] h-[4px] w-[4px] flex-shrink-0 bg-muted-foreground" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="px-6 pb-6 pt-2">
                          <div className="flex flex-wrap gap-1.5">
                            {project.tags.map((tag) => (
                              <span
                                key={tag}
                                className="bg-secondary px-2.5 py-1 text-[10px] font-medium text-muted-foreground"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>

          <div className="space-y-5">
            <FadeIn>
              <div>
                <p className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground font-medium mb-4">
                  Game Development
                </p>
                <h3
                  className="text-3xl md:text-4xl leading-tight tracking-tight"
                  style={{ fontFamily: "var(--font-serif-stack)" }}
                >
                  Narrative and gameplay experiences I've built.
                </h3>
              </div>
            </FadeIn>

            <div className="grid grid-cols-1 xl:grid-cols-3 gap-5">
              {GAME_PROJECTS.map((project, i) => (
                <FadeIn key={project.id} delay={i * 0.06} className="h-full">
                  <div
                    role="button"
                    tabIndex={0}
                    onClick={() => onSelectProject(project.id)}
                    onKeyDown={(event) => {
                      if (event.key === "Enter" || event.key === " ") {
                        event.preventDefault();
                        onSelectProject(project.id);
                      }
                    }}
                    className="group relative flex h-full w-full flex-col border border-border bg-background text-left transition-transform duration-200 hover:-translate-y-0.5 cursor-pointer outline-none"
                  >
                    <div className={`bg-gradient-to-br ${project.palette}`}>
                      <div className="flex h-full flex-col bg-background/95">
                        <CardPreview id={project.id} title={project.title} />
                        <div className="flex-1 p-6">
                          <div className="mb-4 flex flex-col items-center gap-2 text-center">
                            <span className="text-[11px] tracking-[0.14em] uppercase text-muted-foreground font-medium">
                              {project.subtitle}
                            </span>
                            {project.badge && (
                              <span className="whitespace-normal border border-accent px-2 py-1 text-[9px] tracking-[0.12em] uppercase text-accent font-medium">
                                {project.badge}
                              </span>
                            )}
                          </div>

                          <h4
                            className="mb-4 text-2xl leading-tight tracking-tight"
                            style={{ fontFamily: "var(--font-serif-stack)" }}
                          >
                            {project.title}
                          </h4>

                          <p className="mb-5 text-[13px] text-muted-foreground leading-relaxed">
                            {project.description}
                          </p>

                          <ul className="mb-0 space-y-2.5 text-left">
                            {project.highlights.map((item) => (
                              <li
                                key={item}
                                className="flex gap-2.5 text-[13px] text-muted-foreground leading-relaxed"
                              >
                                <span className="mt-[7px] h-[4px] w-[4px] flex-shrink-0 bg-muted-foreground" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="px-6 pb-6 pt-2">
                          <div className="flex flex-wrap gap-1.5">
                            {project.tags.map((tag) => (
                              <span
                                key={tag}
                                className="bg-secondary px-2.5 py-1 text-[10px] font-medium text-muted-foreground"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CardPreview({ id, title }: { id: string; title: string }) {
  const file = projectImages[id];
  if (!file) return null;
  return (
    <div className="relative border-b border-border bg-muted/30">
      <img
        src={mediaUrl(file)}
        alt={`${title} — ${id === "earthquake" ? "prototype recording preview" : "project preview"}`}
        loading="lazy"
        className="w-full aspect-video object-contain"
      />
      {id === "earthquake" && (
        <span className="absolute bottom-3 right-3 bg-background px-3 py-1 text-xs">
          ▶ View walkthrough
        </span>
      )}
    </div>
  );
}

function ProjectGallery({ id, title }: { id: string; title: string }) {
  if (gameReportGalleries[id])
    return (
      <section aria-label={`${title} gameplay gallery`}>
        <h4 className="text-2xl mb-5">Gameplay and story</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {gameReportGalleries[id].map((item) => (
            <MediaFigure
              key={item.src}
              file={item.src}
              caption={item.caption}
            />
          ))}
        </div>
      </section>
    );
  if (id === "madeline")
    return (
      <section aria-label="Madeline gameplay and interface gallery">
        <h4 className="text-2xl mb-5">Gameplay and interface</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {madelineGallery.map((item) => (
            <MediaFigure
              key={item.src}
              file={item.src}
              caption={item.caption}
            />
          ))}
        </div>
      </section>
    );
  if (id === "earthquake")
    return (
      <section
        aria-label="ResQLink prototype walkthrough"
        className="border border-border p-4 md:p-6"
      >
        <h4 className="text-xl mb-4">Prototype walkthrough</h4>
        <video
          controls
          playsInline
          preload="metadata"
          poster={mediaUrl("resqlink-poster.jpg")}
          className="w-full max-h-[75vh] bg-black"
          aria-label="ResQLink earthquake-reporting app prototype recording"
        >
          <source src={mediaUrl("resqlink.mp4")} type="video/mp4" />
          Your browser cannot play this video. Download the recording below.
        </video>
        <p className="text-sm text-muted-foreground mt-4">
          Screen recording of the ResQLink earthquake-reporting prototype.
        </p>
        <a
          href={mediaUrl("resqlink.mov")}
          download
          className="inline-block underline text-sm mt-3"
        >
          Download original MOV
        </a>
      </section>
    );
  const file = projectImages[id];
  return file ? (
    <MediaFigure
      file={file}
      caption={`${title} — ${id === "myiasis" ? "emergency assistance and ambulance-tracking interface mockups" : "gameplay capture"}`}
    />
  ) : null;
}

function MediaFigure({ file, caption }: { file: string; caption: string }) {
  return (
    <figure className="min-w-0 border border-border bg-muted/20 p-3 md:p-4">
      <a
        href={mediaUrl(file)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Open full-size image: ${caption}`}
        className="block focus-visible:outline-2 focus-visible:outline-accent"
      >
        <img
          src={mediaUrl(file)}
          alt={caption}
          loading="lazy"
          className="w-full h-auto max-h-[85vh] object-contain"
        />
      </a>
      <figcaption className="text-sm text-muted-foreground mt-3 leading-relaxed">
        {caption}{" "}
        <span className="block text-xs mt-1">
          Open image to view full size ↗
        </span>
      </figcaption>
    </figure>
  );
}
