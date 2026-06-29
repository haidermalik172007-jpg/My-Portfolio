import {
  About,
  Blog,
  Gallery,
  Home,
  Newsletter,
  Person,
  Social,
  Work,
} from "@/types";
import { Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Muhammad Ali",
  lastName: "Haider",
  name: "Muhammad Ali Haider",
  role: "Frontend Developer",
  avatar: "/images/avatar.jpg",
  email: "muhammadalihaider172007@gmail.com",
  location: "Asia/Karachi",
  languages: ["English", "Urdu"],
  locale: "en",
};

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      Weekly insights about web development, React, Next.js, JavaScript,
      freelancing, and modern frontend engineering.
    </>
  ),
};

const social: Social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/haidermalik172007-jpg",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://linkedin.com/in/Muhammad Ali Haider",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name} | Frontend Developer`,
  description:
    "Frontend Developer specializing in React, Next.js, Tailwind CSS and modern web technologies.",
  headline: <>Frontend Developer Building Modern Web Experiences</>,
  featured: {
    display: true,
    title: "View My Projects",
    href: "/work",
  },
  subline: (
    <>
      I'm {person.firstName}, a passionate frontend developer specializing in
      <Text as="span" size="xl" weight="strong">
        {" "}
        Next.js, React, JavaScript and Tailwind CSS
      </Text>
      . I build responsive, fast and user-friendly web applications with a
      focus on clean UI and great user experience.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About - ${person.name}`,
  description: `Learn more about ${person.name} and his development journey.`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I am Muhammad Ali Haider, a Frontend Developer based in Karachi,
        Pakistan. I enjoy building modern, responsive, and high-performance web
        applications using React, Next.js, Tailwind CSS, JavaScript, and modern
        frontend technologies.
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "Freelance",
        timeframe: "2024 - Present",
        role: "Frontend Developer",
        achievements: [
          <>Built responsive websites using React and Next.js.</>,
          <>Developed reusable UI components and scalable frontend architecture.</>,
          <>Integrated REST APIs and dynamic data rendering.</>,
          <>Optimized performance, SEO and accessibility.</>,
          <>Created eCommerce and portfolio web applications.</>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Education",
    institutions: [
      {
        name: "Self-Taught Web Developer",
        description: (
          <>
            Learned frontend development through documentation, online courses,
            real-world projects, and continuous practice.
          </>
        ),
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical Skills",
    skills: [
      {
        title: "Frontend Development",
        description: (
          <>
            Building modern web applications with React, Next.js, and
            JavaScript.
          </>
        ),
        tags: [
          { name: "HTML5", icon: "html" },
          { name: "CSS3", icon: "css" },
          { name: "JavaScript", icon: "javascript" },
          { name: "React", icon: "react" },
          { name: "Next.js", icon: "nextjs" },
        ],
        images: [],
      },
      {
        title: "UI & Styling",
        description: (
          <>
            Designing beautiful and responsive interfaces using modern CSS
            tools.
          </>
        ),
        tags: [
          { name: "Tailwind CSS", icon: "css" },
          { name: "Responsive Design", icon: "design" },
        ],
        images: [],
      },
      {
        title: "Backend Fundamentals",
        description: (
          <>
            Working with APIs, databases, and full-stack development concepts.
          </>
        ),
        tags: [
          { name: "REST API", icon: "network" },
          { name: "SQL", icon: "database" },
        ],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Blog",
  description:
    "Articles about React, Next.js, JavaScript, frontend development and programming.",
};

const work: Work = {
  path: "/work",
  label: "Projects",
  title: "My Work",
  description:
    "A collection of projects built using React, Next.js and modern web technologies.",
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: "Gallery",
  description: "Photos and moments from my development journey.",
  images: [
    {
      src: "/images/gallery/(1).jpg",
      alt: "Muhammad Ali Haider at event",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/(2).jpg",
      alt: "Muhammad Ali Haider at park",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/(3).jpg",
      alt: "Muhammad Ali Haider outdoors",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/(4).jpg",
      alt: "Muhammad Ali Haider by the river",
      orientation: "vertical",
    },
  ],
};

export {
  person,
  social,
  newsletter,
  home,
  about,
  blog,
  work,
  gallery,
};