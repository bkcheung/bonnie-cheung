type Project = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  codeUrl: string;
  liveUrl: string;
};

const projects: Project[] = [
  {
    title: 'Bean & Brew',
    description:
      'A dynamic store with responsive design, server-side rendering, & parallax effects',
    image: '/projects/bean-and-brew.png',
    tags: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'API', 'Jest'],
    codeUrl: 'https://github.com/bkcheung/bean-and-brew',
    liveUrl: 'https://bean-and-brew-pi.vercel.app',
  },
  {
    title: 'Memory Card Game',
    description:
      'An interactive game featuring dynamic card generation using an external API',
    image: '/projects/memory-card-game.png',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'API', 'Vitest'],
    codeUrl: 'https://github.com/bkcheung/Memory-Card-Game',
    liveUrl: 'https://ac-memo-game.vercel.app',
  },
  {
    title: 'CV Builder',
    description:
      'Features real-time updates with user-input and PDF export capability',
    image: '/projects/cv-builder.png',
    tags: ['React', 'TypeScript', 'Tailwind CSS'],
    codeUrl: 'https://github.com/bkcheung/CV-Builder',
    liveUrl: 'https://bkcheung.github.io/CV-Builder',
  },
];

export type { Project };
export default projects;
