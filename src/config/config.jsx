//projects
import global_talk from "../assets/projects/global_talk.png";
import movies_homePage_img from "../assets/projects/movies_homePage_small.png";
import tesla_img from "../assets/projects/tesla_small.png";
import editor_img from "../assets/projects/editor_small.png";
import landing_page_img from "../assets/projects/landing_page_dark_small.png";
// skills
import html from "../assets/skillIcons/html-5.svg";
import css from "../assets/skillIcons/css-3.svg";
import js from "../assets/skillIcons/javascript.svg";
import tailwindcss from "../assets/skillIcons/tailwindcss.svg";
import react from "../assets/skillIcons/react.svg";
import redux from "../assets/skillIcons/redux.svg";
import gatsby from "../assets/skillIcons/gatsby.svg";
import nodejs from "../assets/skillIcons/nodejs.svg";
import nextjs from "../assets/skillIcons/nextjs_icon.svg";
import expressjs from "../assets/skillIcons/expressjs.svg";
import mongodb from "../assets/skillIcons/mongodb.svg";
import sql from "../assets/skillIcons/sql.png";
import git from "../assets/skillIcons/git.svg";
import java from "../assets/skillIcons/java_icon.svg";
import python from "../assets/skillIcons/python_icon.svg";
import cpp from "../assets/skillIcons/c++_icon.svg";

import sass from "../assets/skillIcons/sass.svg";

export const WEB_FORMS_ACCESS_KEY = "3e4b0bbd-e2e9-4ae5-bf5d-4cc133d68e2d";
export const STATIC_BASE_URL = "http://shakir-xcode.github.io/Static-Images/";

export const skills = [
  {
    id: 1,
    tech: "HTML",
    icon: html,
  },
  {
    id: 2,
    tech: "CSS",
    icon: css,
  },
  {
    id: 3,
    tech: "Javascript",
    icon: js,
  },
  {
    id: 4,
    tech: "React.js",
    icon: react,
  },
  {
    id: 40,
    tech: "Redux",
    icon: redux,
  },
  {
    id: 5,
    tech: "Tailwindcss",
    icon: tailwindcss,
  },
  {
    id: 15,
    tech: "Next.js",
    icon: nextjs,
  },
  {
    id: 6,
    tech: "Node.js",
    icon: nodejs,
  },
  {
    id: 7,
    tech: "Express.js",
    icon: expressjs,
  },
  {
    id: 8,
    tech: "Mongodb",
    icon: mongodb,
  },
  {
    id: 9,
    tech: "SQL",
    icon: sql,
  },
  {
    id: 10,
    tech: "Git",
    icon: git,
  },
  {
    id: 11,
    tech: "Gatsby",
    icon: gatsby,
  },
  {
    id: 12,
    tech: "java",
    icon: java,
  },
  {
    id: 13,
    tech: "python",
    icon: python,
  },
  {
    id: 14,
    tech: "c++",
    icon: cpp,
  },
];

export const projects = [
  {
    id: 0,
    previewImage: global_talk,
    title: "GlobalTalk",
    description: `An instant messaging application that lets people from across the world communicate in their native language.
    The app lets people who don't share a common language communicate fluently in their native languages.`,
    features: [
      "The app uses Google Translation API for real-time message translation",
      "The app supports over 130 languages",
      "Socket.io for real-time communication",
      "Screen sharing, Video and Voice calling implemented using webRTC",
      "JWT Authentication",
      "ExpressJS APIs and mongoDB as database",
      "Includes a Chabot  using openAI API integration",
    ],
    technologies: [
      "HTML",
      "CSS",
      "Javascript",
      "React.js",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDb",
    ],
    live: "https://global-talk.netlify.app/",
    source: "https://github.com/shakir-xcode/GlobalTalk-client",
    slideImages: [
      "1login.png",
      "2welcome screen.png",
      "3chats.png",
      "3chats0.png",
      "4chatbot1.png",
      "6users.png",
      "7create group screen.png",
      "8group screen.png",
    ],
  },
  ,
  {
    id: 1,
    previewImage: movies_homePage_img,
    title: "MoviesHub",
    description:
      "MoviesHub is a platform that allows us to browse and discover movies from various genres. it provides detailed information about each movie including plot summaries, release date, rating etc",
    features: [
      "Search functionality",
      "Favorite movies using local storage",
      "Detailed movie information",
      "Easy to use and intuitive interface",
      "Utilizes OMDb api",
      "Powered by redux",
    ],
    technologies: [
      "HTML",
      "CSS",
      "Javascript",
      "React",
      "Redux",
      "Tailwind CSS",
      "Axios",
      "React-router",
      "Node.js",
      "Express.js",
    ],
    live: "https://movieshub08.netlify.app/",
    source: "https://github.com/shakir-xcode/movies-app",
    slideImages: ["homePage.png", "favorites.png", "searchResults.png"],
  },

  {
    id: 2,
    previewImage: editor_img,
    title: "Code Editor",
    description:
      "A minimalist code editor that can be used to run, test and visualize html, css and javascript code",
    features: [
      "Powered by React",
      "Fast and light weight",
      "Uses localStorage to save code",
      "Supports HTML, CSS and Javascript",
    ],
    technologies: [
      "HTML",
      "CSS",
      "Javascript",
      "React.js",
      "Tailwind CSS",
      "Codemirror",
    ],
    live: "https://code-editor08.netlify.app/",
    source: "https://github.com/shakir-xcode/code-editor",
    slideImages: [
      "editor_large.png",
      "editor_html_large.png",
      "editor_css_large.png",
      "editor_js_large.png",
    ],
  },

  {
    id: 3,
    previewImage: tesla_img,
    title: "Tesla Clone",
    description:
      "I created Tesla clone app to recreate the visually attractive and user-friendly homepage of Tesla's official website",
    features: [
      "Responsive design",
      "Navigation menu",
      "Simple and intuitive interface",
    ],
    technologies: ["HTML", "CSS", "Javascript", "React.js", "Tailwind CSS"],
    live: "https://tesla-clone08.netlify.app/",
    source: "https://github.com/shakir-xcode/tesla-clone",
    slideImages: [
      "tesla desktop 1.png",
      "tesla desktop 2.png",
      "tesla desktop 3.png",
      "tesla_mobile1.png",
    ],
  },

  {
    id: 4,
    previewImage: landing_page_img,
    title: "Fylo",
    description:
      "I created this landing page as a challenge at frontendmentor.io. The page is responsive, animates on scroll and supports light and dark theme",
    features: [
      "Responsive and visually appealing interface",
      "Scroll animations",
      "Designed with mobile-first approach",
      "Supports light and dark theme",
    ],
    technologies: [
      "HTML",
      "CSS",
      "Javascript",
      "React.js",
      "Styled components",
      "Gatsby",
    ],
    live: "https://fylo08.netlify.app/",
    source: "https://github.com/shakir-xcode/gatsby-landing-page",
    slideImages: [
      "landing_page_dark_large.png",
      "landing_page_light_large.png",
    ],
  },
];

// tech borders
export const borderColors = [
  "rgb(220 38 38)",
  "rgb(202 198 4)",
  "rgb(147 51 234)",
  "rgb(234 88 12)",
  "rgb(22 163 74)",
  "rgb(79 70 229)",
];

// Links
export const links = {
  github_link: "https://github.com/shakir-xcode",
  linkedIn_link: "https://www.linkedin.com/in/shakir-f-77a352152/",
};
