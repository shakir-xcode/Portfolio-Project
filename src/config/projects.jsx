import movies_homePage_img from "../assets/projects/movies_homePage_small.png";
import tesla_img from "../assets/projects/tesla_small.png";
import editor_img from "../assets/projects/editor_small.png";
import landing_page_img from "../assets/projects/landing_page_dark_small.png";

export const projects = [
  {
    id: 1,
    previewImage: movies_homePage_img,
    title: "MoviesHub",
    description:
      "MoviesHub is an application that can be used to browse and discover movies from various genres. it provides detailed information about each movie including plot summaries, release date, rating etc",
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
    ],
    live: "https://movieshub08.netlify.app/",
    source: "https://github.com/shakir-xcode/movies-app",
    slideImages: [
      "https://drive.google.com/uc?export=download&id=1SBD178HqhUV4b6Ph5sWMtJyoZO_V4HT9",
      "https://drive.google.com/uc?export=download&id=1m0rgBV2Bjz3xqNordE4BvwnSCkxO4DpA",
      "https://drive.google.com/uc?export=download&id=1cdrXVvE78tZcXDwcHtjvzSdYh5-hnI-j",
    ],
  },

  {
    id: 2,
    previewImage: tesla_img,
    title: "Tesla Clone",
    description:
      "I created Tesla clone app to recreate the visually attractive and user-friendly homepage of Tesla's official website",
    features: [
      "Responsive design",
      "Navigation menu",
      "Simple and intuitive interface",
    ],
    technologies: ["HTML", "CSS", "Javascript", "React", "Tailwind CSS"],
    live: "https://tesla-clone08.netlify.app/",
    source: "https://github.com/shakir-xcode/tesla-clone",
    slideImages: [
      "https://drive.google.com/uc?export=download&id=1nJctFo-ciQh5tazl6Wjlrtu44JMY5eIh",
      "https://drive.google.com/uc?export=download&id=1ENyBVmUvM8rn_lkWCm22DuDXSH3RlNml",
    ],
  },

  {
    id: 3,
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
      "React",
      "Tailwind CSS",
      "Codemirror",
    ],
    live: "https://code-editor08.netlify.app/",
    source: "https://github.com/shakir-xcode/code-editor",
    slideImages: [
      "https://drive.google.com/uc?export=download&id=1Cy-gGVgJ0ji6NpjmNfS_5K1srYvlWA9I",
      "https://drive.google.com/uc?export=download&id=1LUF5DIUnU2PyA4zg4Hgv8rzoc-dhpSU4",
      "https://drive.google.com/uc?export=download&id=1Yp7VWvueE7DpaZuN40W4m98DNG7pT7to",
      "https://drive.google.com/uc?export=download&id=1c4-sUPvb0iWYgSD2Fyr3vWzN-2osblVk",
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
      "React",
      "Styled components",
      "Gatsby",
    ],
    live: "https://fylo08.netlify.app/",
    source: "https://github.com/shakir-xcode/gatsby-landing-page",
    slideImages: [
      "https://drive.google.com/uc?export=download&id=180gdjYDoNT0I3zzLcKvZ04peP4evwqbU",
      "https://drive.google.com/uc?export=download&id=168eHzsOBMRNesS3_5j54psefPoOMxk8Q",
    ],
  },
];
