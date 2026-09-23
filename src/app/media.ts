/// <reference types="vite/client" />

export const projectImages: Record<string, string> = {
  "echoes-of-time": "echoes-of-time-memory.png",
  flux: "flux-market.png",
  myiasis: "myiasis.jpeg",
  earthquake: "resqlink-poster.jpg",
  madeline: "madeline-exploration.png",
};
export const mediaUrl = (file: string) =>
  `${import.meta.env.BASE_URL}media/${file}`;

export const madelineGallery = [
  {
    src: "madeline-exploration.png",
    caption: "Exploration at the Necromanteion of Acheron",
  },
  {
    src: "madeline-dialogue.png",
    caption: "Dialogue choices with Alisha",
  },
  {
    src: "madeline-combat.png",
    caption: "An enemy encounter in the underworld",
  },
  {
    src: "madeline-necromancer.png",
    caption: "The Necromancer encounter",
  },
  {
    src: "madeline-start-menu.png",
    caption: "Start menu",
  },
  {
    src: "madeline-pause-menu.png",
    caption: "Pause menu and keyboard controls",
  },
];

export const gameReportGalleries: Record<
  string,
  { src: string; caption: string }[]
> = {
  flux: [
    {
      src: "flux-market.png",
      caption: "Forest marketplace and dialogue choices",
    },
    {
      src: "flux-bedroom.png",
      caption: "Childhood bedroom and computer interaction",
    },
    {
      src: "flux-scifi.png",
      caption: "Dialogue in the science-fiction level",
    },
    {
      src: "flux-final.png",
      caption: "Meeting a familiar face in the final scene",
    },
    {
      src: "flux.jpeg",
      caption: "Original gameplay preview",
    },
  ],
  "echoes-of-time": [
    {
      src: "echoes-of-time-prologue.png",
      caption: "Waking from the afterlife nightmare",
    },
    {
      src: "echoes-of-time-book.png",
      caption: "The book that begins the story",
    },
    {
      src: "echoes-of-time-dialogue.png",
      caption: "A spectral encounter with dialogue choices",
    },
    {
      src: "echoes-of-time-memory.png",
      caption: "A glowing memory point inside the cabin",
    },
    {
      src: "echoes-of-time.jpeg",
      caption: "Gameplay overview: exploration, dialogue, and memories",
    },
  ],
};
