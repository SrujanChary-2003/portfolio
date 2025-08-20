export const myProjects = [
  {
    id: 1,
    title: "Horizon- Online Banking and Financial Management Dashboard",
    description:
      "Horizon is a full-stack online banking and finance dashboard built with Next.js, Appwrite, and TailwindCSS. It enables account management, money transfers, and transaction analytics.",
    subDescription: [
      "User authentication and account management powered by Appwrite.",
      "Plaid API to securely link user bank accounts and fetch financial data.",
      "Dwolla API integration for safe money transfer simulations.",
      "Real-time charts (Chart.js) for spending patterns, transactions, and account activity.",
      "Responsive design using Next.js + TailwindCSS for a smooth user experience.",
      "Hosted on Vercel for scalability and performance.",
    ],
    href: "https://banking-main-fawn.vercel.app/sign-in",
    logo: "",
    image: "/assets/projects/horizon.png",
    tags: [
      {
        id: 1,
        name: "React",
        path: "/assets/logos/react.svg",
      },
      {
        id: 2,
        name: "Appwrite",
        path: "/assets/logos/appwrite.svg",
      },
      {
        id: 3,
        name: "Plaid",
        path: "/assets/logos/plaid.png",
      },
      {
        id: 4,
        name: "TailwindCSS",
        path: "/assets/logos/tailwindcss.svg",
      },
      {
        id: 5,
        name: "Dwolla",
        path: "/assets/logos/dwolla.png",
      },
    ],
  },
  {
    id: 2,
    title: "NoteNest – Full-Stack Note-Taking App",
    description:
      "NoteNest is a full-stack, responsive note-taking web app built with React, Node.js, and MongoDB. It provides secure authentication and a smooth user dashboard for creating and managing personal notes.",
    subDescription: [
      "Authentication: Email + OTP and Google OAuth2 sign-in for secure access.",
      "Authorization: JWT-based protection for all note operations.",
      "Core Features: Create, view, and delete notes seamlessly.",
      "Security: HTTP-only cookies for session management.",
      "Tech Stack: ReactJS, Node.js, MongoDB, TailwindCSS, React Hook Form.",
    ],
    href: "https://note-taking-pearl.vercel.app/",
    logo: "",
    image: "/assets/projects/notetaking.png",
    tags: [
      {
        id: 1,
        name: "Nodejs",
        path: "/assets/logos/nodejs.svg",
      },
      {
        id: 2,
        name: "React",
        path: "/assets/logos/react.svg",
      },
      {
        id: 3,
        name: "MongoDb",
        path: "/assets/logos/mongodb.svg",
      },
      {
        id: 4,
        name: "TailwindCSS",
        path: "/assets/logos/tailwindcss.svg",
      },
    ],
  },
  {
    id: 3,
    title: "The Wild Oasis",
    description:
      "The Wild Oasis is a full-stack hotel management system built with React, Supabase, and TailwindCSS. It streamlines cabin bookings, guest management, and hotel analytics with secure role-based access.",
    subDescription: [
      "Secured login with role-based access for hotel staff.",
      "Full CRUD for cabins and bookings with photo uploads and status filters.",
      "Detailed guest information with IDs, avatars, and nationality flags.",
      "Booking stats, stay duration trends, and sales analytics visualized with Recharts.",
      "Integrated payment confirmation and add-ons (like breakfast) at check-in.",
    ],
    href: "https://thewildoasisprjct.netlify.app/",
    logo: "",
    image: "/assets/projects/the-wild-oasis.png",
    tags: [
      {
        id: 1,
        name: "ReactJS",
        path: "/assets/logos/react.svg",
      },
      {
        id: 2,
        name: "Supabase",
        path: "/assets/logos/supabase.png",
      },
      {
        id: 3,
        name: "TailwindCSS",
        path: "/assets/logos/tailwindcss.svg",
      },
    ],
  },
  {
    id: 4,
    title: "Wild Oasis",
    description:
      "A web application build using Next.Js,React,TailWindCSS,Supabase to maintain the frontend interactive interface for the users for managing the hotel bookings.",
    subDescription: [
      "Highly user interactive built using Next.Js on top of React",
      "Users can book their cabins based on their choice managed using State management.",
      "Authorization makes the app more secured way to manage users cabins operations.",
    ],
    href: "https://wild-oasis-pi-one.vercel.app/",
    logo: "",
    image: "/assets/projects/wild-oasis.png",
    tags: [
      {
        id: 1,
        name: "React",
        path: "/assets/logos/react.svg",
      },
      {
        id: 2,
        name: "TailWindCSS",
        path: "/assets/logos/tailwindcss.svg",
      },
      {
        id: 3,
        name: "Git",
        path: "/assets/logos/git.svg",
      },
      {
        id: 4,
        name: "NextJS",
        path: "/assets/logos/nextjs.png",
      },
      {
        id: 5,
        name: "Supabase",
        path: "/assets/logos/supabase.png",
      },
    ],
  },
];

export const mySocials = [
  {
    name: "Github",
    href: "https://github.com/SrujanChary-2003",
    icon: "/assets/logos/github.png",
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/3603ab262/",
    icon: "/assets/socials/linkedIn.svg",
  },
];

export const experiences = [
  {
    title: "Web Application Developer",
    job: "Soko-Ventures",
    date: "Feb - April 2025",
    contents: [
      "Developed web applications using ReactJS, HTML, CSS, Nodejs, Php",
      "Deployed and managed client web applications on Hostinger.",
      "Developed and maintained features tailored to client requirements.",
    ],
  },
  //   {
  //     title: "Back-End Developer",
  //     job: "Car Manufacture",
  //     date: "2023-2024",
  //     contents: [
  //       "Engineered systems for large-scale data ingestion and analysis, ensuring efficient data processing and storage.",
  //       "Developed back-end systems enabling vehicle-to-cloud communication for telemetry, diagnostics, and remote control:",
  //       "✅ Implemented secure APIs, following ISO 26262 automotive safety standards.",
  //       "✅ Ensured data privacy for customers and partners through industry-compliant protocols.",
  //       "✅ Delivered remote features like over-the-air updates, real-time tracking, and remote start capabilities.",
  //     ],
  //   },
  //   {
  //     title: "Freelance Developer",
  //     job: "Self-Employed",
  //     date: "2025-Present",
  //     contents: [
  //       "Created a personal portfolio using Three.js, React, Vite, and WebAPI to showcase technical expertise.",
  //       "Continuously enhancing technical skills and expanding expertise in modern web development and back-end technologies.",
  //     ],
  //   },
];
export const reviews = [
  {
    name: "Venkatesh Soleti",
    username: "Venkatesh@soleti",
    body: "Most well worked and impressed with the skills and efforts.",
    img: "https://robohash.org/jack",
  },
];
