import GithubIcon from "./../public/assets/icons/github.svg";
import LinkedInIcon from "./../public/assets/icons/linkedin.svg";
import XIcon from "./../public/assets/icons/x.svg";
import InstagramIcon from "./../public/assets/icons/instagram.svg";
import FrontendIcon from "./../public/assets/icons/frontend.svg";
import ProblemSolvingIcon from "./../public/assets/icons/problem-solving.svg";
import FreelancerIcon from "./../public/assets/icons/freelance.svg";
import FullStackIcon from "./../public/assets/icons/full-stack.svg";

const navLinks = [
  { id: "about", title: "About" },
  { id: "education", title: "Education" },
  { id: "work", title: "Work" },
  { id: "achievements", title: "Achievements" },
  { id: "skills", title: "Skills" },
  { id: "projects", title: "Projects" },
  { id: "contact", title: "Contact" },
];

const services = [
  {
    title: "Software Engineer",
    icon: <FullStackIcon />,
  },
  {
    title: "Full-Stack Developer",
    icon: <FrontendIcon />,
  },
  {
    title: "AI/ML Enthusiast",
    icon: <ProblemSolvingIcon />,
  },
  {
    title: "Problem Solver",
    icon: <FreelancerIcon />,
  },
];

const technologies = {
  languages: [
    {
      name: "C++",
      icon: "/assets/tech/c.svg",
      link: "https://en.cppreference.com/w/cpp",
    },
    {
      name: "Java",
      icon: "/assets/tech/java.svg",
      link: "https://www.java.com/en/",
    },
    {
      name: "Python",
      icon: "/assets/tech/python.svg",
      link: "https://www.python.org/",
    },
  ],
  frameworks: [
    {
      name: "Node.js",
      icon: "/assets/tech/nodejs.svg",
      link: "https://nodejs.org/en",
    },
    {
      name: "Express.js",
      icon: "/assets/tech/expressjs.png",
      link: "https://expressjs.com/",
    },
    {
      name: "Flask",
      icon: "https://go-skill-icons.vercel.app/api/icons?i=flask",
      link: "https://flask.palletsprojects.com/",
    },
    {
      name: "React.js",
      icon: "/assets/tech/react.svg",
      link: "https://react.dev/",
    },
    {
      name: "Angular",
      icon: "/assets/tech/angular.png",
      link: "https://angular.dev/",
    },
  ],
  libraries: [
    {
      name: "PyTorch",
      icon: "https://go-skill-icons.vercel.app/api/icons?i=pytorch",
      link: "https://pytorch.org/",
    },
    {
      name: "TensorFlow",
      icon: "https://go-skill-icons.vercel.app/api/icons?i=tensorflow",
      link: "https://www.tensorflow.org/",
    },
    {
      name: "OpenCV",
      icon: "https://go-skill-icons.vercel.app/api/icons?i=opencv",
      link: "https://opencv.org/",
    },
    {
      name: "Pandas",
      icon: "https://go-skill-icons.vercel.app/api/icons?i=pandas",
      link: "https://pandas.pydata.org/",
    },
    {
      name: "NumPy",
      icon: "https://go-skill-icons.vercel.app/api/icons?i=numpy",
      link: "https://numpy.org/",
    },
  ],
  databases: [
    {
      name: "MySQL",
      icon: "/assets/tech/my-sql.png",
      link: "https://www.mysql.com/",
    },
    {
      name: "PostgreSQL",
      icon: "/assets/tech/postgresql.png",
      link: "https://www.postgresql.org",
    },
    {
      name: "MongoDB",
      icon: "/assets/tech/mongodb.svg",
      link: "https://www.mongodb.com/",
    },
  ],
  tools: [
    {
      name: "Git",
      icon: "/assets/tech/git.svg",
      link: "https://git-scm.com/",
    },
    {
      name: "Postman",
      icon: "/assets/tech/postman.svg",
      link: "https://www.postman.com/",
    },
    {
      name: "WordPress",
      icon: "https://go-skill-icons.vercel.app/api/icons?i=wordpress",
      link: "https://wordpress.org/",
    },
    {
      name: "Power BI",
      icon: "https://go-skill-icons.vercel.app/api/icons?i=powerbi",
      link: "https://powerbi.microsoft.com/",
    },
    {
      name: "Godot",
      icon: "https://go-skill-icons.vercel.app/api/icons?i=godot",
      link: "https://godotengine.org/",
    },
  ],
  frontend: [
    {
      name: "TypeScript",
      icon: "/assets/tech/typescript.svg",
      link: "https://www.typescriptlang.org/",
    },
    {
      name: "JavaScript",
      icon: "/assets/tech/javascript.svg",
      link: "https://262.ecma-international.org/",
    },
    {
      name: "HTML5",
      icon: "/assets/tech/html5.svg",
      link: "https://html.spec.whatwg.org/multipage/",
    },
    {
      name: "CSS3",
      icon: "/assets/tech/css3.svg",
      link: "https://www.w3.org/Style/CSS/Overview.en.html",
    },
  ],
};

const experiences = [
  {
    title: "Software Development Intern - Website",
    company_name: "iDream Advisory Pvt. Ltd., Mumbai",
    icon: "/assets/company/curowell-logo.svg",
    iconBg: "#E6DEDD",
    date: "Jan 2025 - Apr 2025",
    points: [
      "Built and deployed Vibe-Score, an employee engagement tool using the MERN stack, cutting survey processing time by 50%.",
      "Optimized website SEO and overall performance, boosting organic traffic by 38% and reducing page load by 45%.",
      "Developed an automated dashboard converting Excel uploads into charts and actionable insights, reducing data analysis time.",
      "Collaborated closely with design and development teams to enhance UX, increasing Google search engagement by 35%.",
    ],
  },
  {
    title: "Web Development Intern - Website",
    company_name: "Clikkin Softwares, Chennai",
    icon: "/assets/company/vivada_tech_logo.png",
    iconBg: "#E6DEDD",
    date: "May 2024 - Sep 2024",
    points: [
      "Developed responsive, mobile-friendly, user-centric web applications with clean UI, optimized performance, and scalable architecture using Angular and TypeScript, achieving 95% cross-browser compatibility across modern browsers.",
      "Built modular and reusable Angular components, improving development speed and ensuring scalable, maintainable code.",
      "Integrated REST APIs with backend teams, improving data flow and enhancing overall user experience.",
      "Collaborated with designers and backend developers to refine UX and application flow, increasing user engagement.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "AI-Based Underwater Image Enhancement System for Increased Maritime Security",
    description:
      "Trained, fine-tuned, and deployed deep learning models on UIEB and EUVP datasets, leveraging physics-based methods, optimization, and preprocessing for underwater image enhancement. Integrated live video streaming and real-time YOLOv8 threat detection with an analytics dashboard for monitoring. Built a fully offline-capable application using Electron.js and Docker for deployment on AUUVs/drones, supporting real-time processing and video analytics.",
    tags: [
      { name: "pytorch", color: "blue-text-gradient" },
      { name: "yolov8", color: "green-text-gradient" },
      { name: "tensorflow", color: "pink-text-gradient" },
      { name: "keras", color: "orange-text-gradient" },
      { name: "opencv", color: "yellow-text-gradient" },
      { name: "flask", color: "blue-text-gradient" },
      { name: "postgresql", color: "green-text-gradient" },
      { name: "docker", color: "pink-text-gradient" },
    ],
    image: "/assets/ai_music.jpg",
    source_code_link: "https://github.com/Kunalrpawar",
    deployed_link: "https://github.com/Kunalrpawar",
  },
  {
    name: "AI-Driven Personalized Career Guidance and Education Platform",
    description:
      "Developed a MERN-based AI career guidance platform offering personalized career paths and career mapping. Integrated AI mentor chat, multilingual support, and dynamic content generation for highly personalized guidance. Built interactive analytics dashboards and a smart college finder with live analytics and maps using Leaflet.js.",
    tags: [
      { name: "mongodb", color: "blue-text-gradient" },
      { name: "express", color: "green-text-gradient" },
      { name: "react", color: "pink-text-gradient" },
      { name: "nodejs", color: "orange-text-gradient" },
      { name: "google-cloud", color: "yellow-text-gradient" },
      { name: "leaflet", color: "blue-text-gradient" },
      { name: "d3", color: "green-text-gradient" },
    ],
    image: "/assets/projects/gdsc-website.png",
    source_code_link: "https://github.com/Kunalrpawar",
    deployed_link: "https://github.com/Kunalrpawar",
  },
  {
    name: "GameVoid Engine - AI-Powered 2D/3D C++ Game Engine",
    description:
      "Built a prompt-driven game engine to generate worlds, spawn objects, and create gameplay via natural-language prompts. Engineered architecture with ECS, PBR, real-time physics, skeletal animation, terrain, particles, and frustum culling. Developed editor toolchain with GUI, CLI editor, scripting, visual nodes, prefab support, undo/redo, and orbit camera.",
    tags: [
      { name: "c++20", color: "blue-text-gradient" },
      { name: "opengl", color: "green-text-gradient" },
      { name: "glfw", color: "pink-text-gradient" },
      { name: "imgui", color: "orange-text-gradient" },
      { name: "glsl", color: "yellow-text-gradient" },
      { name: "cmake", color: "blue-text-gradient" },
      { name: "llm", color: "green-text-gradient" },
    ],
    image: "/assets/projects/fig-pro.png",
    source_code_link: "https://github.com/Kunalrpawar",
    deployed_link: "https://github.com/Kunalrpawar",
  },
];

const socials = [
  {
    id: "github",
    icon: <GithubIcon />,
    link: "https://github.com/Kunalrpawar",
  },
  {
    id: "linkedin",
    icon: <LinkedInIcon />,
    link: "https://www.linkedin.com/in/kunal-pawar-715546258/",
  },
  {
    id: "x",
    icon: <XIcon />,
    link: "https://x.com/Kunal_pawar12",
  },
  {
    id: "instagram",
    icon: <InstagramIcon />,
    link: "https://www.instagram.com/kunalpawar.02/?hl=en",
  },
];

const heroTexts = [
  "Software Engineer",
  500,
  "Information Technology Student",
  500,
  "Full-Stack Developer",
  500,
  "AI/ML Enthusiast",
  500,
  "Problem Solver",
  500,
  "600+ LeetCode Problems Solved",
  500,
];

const achievements = [
  {
    id: "sih-2025",
    title: "Winner - Smart India Hackathon 2025",
    description: "Won under a problem statement issued by the Ministry of Defence.",
    icon: "🏆",
  },
  {
    id: "udaan-quiz",
    title: "2nd Place - Udaan Quiz Competition",
    description: "Secured 2nd place and won a cash prize of ₹25,000.",
    icon: "🥈",
  },
  {
    id: "leetcode-600",
    title: "600+ LeetCode Problems Solved",
    description: "Achieved a LeetCode Contest Rating of 1,493.",
    icon: "💻",
  },
  {
    id: "codeforces-1100",
    title: "Codeforces Rating: 1100",
    description: "Active competitive programmer with consistent performance.",
    icon: "⚡",
  },
];

export {
  navLinks,
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  socials,
  heroTexts,
  achievements,
};
