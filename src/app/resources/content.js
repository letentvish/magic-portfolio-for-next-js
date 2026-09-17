import { Logo } from "@/once-ui/components";

const person = {
  firstName: "Vishal",
  lastName: "Singh",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "AI Product Builder & Systems Architect",
  avatar: "/images/avatar.jpg",
  email: "vvishal5297@gmail.com",
  location: "Asia/Kolkata", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Hindi"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Dispatches</>,
  description: (
    <>
      Deep dives on local-first AI architectures, RAG 2.0 pipelines, multi-agent systems,
      and cognitive UX design.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/letentvish",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/visualux",
  },
  {
    name: "WhatsApp",
    icon: "whatsapp",
    link: "https://wa.me/919511444357",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name} – ${person.role}`,
  description: `Portfolio and systems architecture work by ${person.name}, ${person.role}`,
  headline: <>Architecting Sovereign AI & Agentic Systems</>,
  featured: {
    display: true,
    title: <>Flagship Project: <strong className="ml-4">AstroDash</strong></>,
    href: "/work/astrodash",
  },
  subline: (
    <>
      I'm Vishal, an AI systems architect and product builder. I invert the traditional SaaS model with
      local-first, privacy-respecting intelligence platforms—bridging RAG 2.0 pipelines, multi-agent architectures, and intuitive human UX.
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "The Sovereign AI Philosophy",
    description: (
      <>
        You are the platform. The traditional cloud SaaS model forces users to rent their digital brains
        and host intimate data on distant servers. I build local-first AI architectures where intelligence
        lives on your hardware, data never leaves your device, and you own the model, the memory, and the insights.
        With expertise spanning multi-agent orchestration, RAG 2.0 pipelines, and glassmorphic UI systems,
        I engineer AI-native experiences that are both technically rigorous and genuinely human-usable.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Independent AI Systems Architect",
        timeframe: "2023 - Present",
        role: "AI Product Builder & Architect",
        achievements: [
          <>
            Architected and shipped AstroDash, an AI-native life navigation platform combining 8-stage hybrid retrieval, Swiss Ephemeris mathematical calculation, and Model Context Protocol (MCP) integrations.
          </>,
          <>
            Engineered a 5-stage defense-in-depth JSON self-healing pipeline for zero runtime crashes during LLM inference, toggling seamlessly between cloud (Gemini) and local (Ollama) engines.
          </>,
          <>
            Designed and built ShaktiVibe (holistic wellness intelligence with Ayurvedic RAG) and WatchMatch (agentic natural-language movie discovery platform with multidimensional vibe filters).
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "AstroDash AI Platform",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Fensso & MultipliersKraft",
        timeframe: "2022 - 2024",
        role: "Senior UX & Product Designer",
        achievements: [
          <>
            Led end-to-end UX/UI architecture for enterprise learning management (LXP) and ERP systems, unifying brand identity and components across web and mobile.
          </>,
          <>
            Reduced design-to-development handoff time by ~30% using Figma Dev Mode, custom design systems, and tokenized component libraries.
          </>,
        ],
        images: [],
      },
      {
        company: "Freelance UX Specialist",
        timeframe: "2020 - 2022",
        role: "UI/UX & Frontend Specialist",
        achievements: [
          <>
            Designed and delivered high-converting digital products, responsive web apps, and interactive prototypes for SaaS and e-commerce clients.
          </>,
          <>
            Conducted user journey mapping, design audits, and iterative usability testing to improve conversion and task completion rates.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Architecture & Research",
    institutions: [
      {
        name: "The 6-Layer Intelligence Stack",
        description: <>Pioneered architecture pattern spanning FastAPI entry points, hybrid router (Gemini/Ollama), prompt schemas, RAG 2.0 (FAISS + BM25 + Cross-Encoder), session memory, and cross-view narrative consistency.</>,
      },
      {
        name: "Cognitive Psychometrics & Vedic Epistemology",
        description: <>Synthesized classical knowledge frameworks, astronomical mathematics, and modern machine learning into coherent diagnostic systems.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical Skills",
    skills: [
      {
        title: "AI Systems & RAG 2.0",
        description: <>RAG 2.0 pipelines, Multi-Agent Systems, FAISS vector search, BM25 hybrid retrieval, Cross-Encoder re-ranking, Ollama local inference, Gemini API, Model Context Protocol (MCP).</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "AI Architecture",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Full-Stack Development",
        description: <>Next.js 14, React, TypeScript, FastAPI (Python), uvicorn, Docker, SQLite, PostgreSQL, REST APIs, JSON pipelines.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Full-Stack Development",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Product Design & Agent UX",
        description: <>Agent control interfaces, conversational UI, Figma design systems, glassmorphism UI, Framer Motion, psychometric assessment UX.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Product Design",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
