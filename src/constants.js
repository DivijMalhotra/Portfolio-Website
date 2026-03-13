// Skills Section Logo's
import htmlLogo from './assets/skills/html.png';
import cssLogo from './assets/skills/css.png';
import javascriptLogo from './assets/skills/javascript.png';
import reactjsLogo from './assets/skills/reactjs.png';
import tailwindcssLogo from './assets/skills/tailwindcss.png';
import bootstrapLogo from './assets/skills/bootstrap.png';
import nodejsLogo from './assets/skills/nodejs.png';
import expressjsLogo from './assets/skills/express.png';
import mongodbLogo from './assets/skills/mongodb.png';
import cLogo from './assets/skills/c.png';
import cppLogo from './assets/skills/cpp.png';
import javaLogo from './assets/skills/java.png';
import pythonLogo from './assets/skills/python.png';
import gitLogo from './assets/skills/git.png';
import githubLogo from './assets/skills/github.png';
import vscodeLogo from './assets/skills/vscode.png';
import postmanLogo from './assets/skills/postman.png';
import mcLogo from './assets/skills/mc.png';
import netlifyLogo from './assets/skills/netlify.png';
import vercelLogo from './assets/skills/vercel.png';
import sqlLogo from './assets/skills/sql.png'


// Experience Section Logo's
// import webverseLogo from './assets/company_logo/webverse_logo.png';
// import agcLogo from './assets/company_logo/agc_logo.png';
// import newtonschoolLogo from './assets/company_logo/newtonschool_logo.png';

// // Education Section Logo's
import srmLogo from './assets/skills/srmLogo.png'
import brainLogo from './assets/skills/brainLogo.jpg'
import researchLogo from './assets/skills/researchLogo.jpg'
import simonLogo from './assets/skills/simon.png'
import snakeLogo from './assets/skills/snake.png'
import flightLogo from './assets/skills/flight.jpeg'
import surveyLogo from './assets/skills/survey.png'

// // Project Section Logo's
import resumeBuilderLogo from './assets/skills/image.png'

export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'SQL' , logo: sqlLogo}
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: reactjsLogo,
      role: "Full Stack Developer",
      company: "One Roadmap",
      date: "13 September 2025",
      desc: "Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "Tailwind CSS",
        "React JS",
        "Next JS",
        "Node JS",
        "Express JS",
        "MongoDB",
      ],
    },
    {
      id: 1,
      img: reactjsLogo,
      role: "Fullstack Engineer",
      company: "Agumentik Group of Companies",
      date: "July 2023 - March 2024",
      desc: "Contributed to innovative projects as a Fullstack Engineer, leading both frontend and backend development using technologies such as HTML, CSS, JavaScript, PHP, SQL, Bootstrap, and ReactJS. Worked closely with the team to deliver responsive, high-performance web applications and improve user experience through seamless integration of various technologies.",
      skills: [
        "ReactJS",
        "Redux",
        "JavaScript",
        "Tailwind CSS",
        "HTML",
        "CSS",
        "SQL",
      ],
    },
    {
      id: 2,
      img: reactjsLogo,
      role: "Frontend Intern",
      company: "Newton School",
      date: "September 2021 - August 2022",
      desc: "Worked as a Frontend Developer Intern, designing and implementing scalable UI components and responsive websites using HTML, CSS, JavaScript, Bootstrap, and Material UI. Collaborated with the design team to translate wireframes and prototypes from Figma into interactive, user-friendly web pages.",
      skills: [
        "HTML",
        "CSS",
        "Javascript",
        "Bootstrap",
        "Figma",
        "Material UI",
      ],
    },
  ];
  
  export const education = [
    {
      id: 0,
      img: srmLogo,
      school: "SRM Institute of Science and Technology",
      date: "2024 - 2028",
      grade: "9.62 CGPA",
      desc: "I am currently pursuing a B.Tech in Computer Science and Engineering with a specialization in Data Science at SRM University Delhi-NCR, and I am currently in 4th semester. During my academic journey, I have built a strong foundation in Web Development, Data Structures and Algorithms, Object-Oriented Programming, Database Management Systems and Artificial Intelligence fundamentals which have helped me understand both the theoretical and practical aspects of software development. Along with academics, I actively work on projects and hands-on implementations to strengthen my technical skills.",
      degree: "B.Tech in CSE (Data Science)",
    },
    {
      id: 1,
      img: brainLogo,
      school: "Brain International School",
      date: "2023 - 2024",
      grade: "88% (PCM - 92%)",
      desc: "I completed my class 12 education from Brain International School, Vikaspuri, West Delhi, under the CBSE board, where I studied Physics, Chemistry, and Mathematics (PCM) with Computer Science and English.",
      degree: "Class XII (CBSE) - PCM",
    },
    {
      id: 2,
      img: brainLogo,
      school: "Brain International School",
      date: "2022-2023",
      grade: "89%",
      desc: "I completed my class 10 education from Brain International School, Vikaspuri, West Delhi, under the CBSE board.",
      degree: "Class X (CBSE)",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "Resume Builder",
      description:
        "Developed a responsive, full-stack web application designed to streamline professional resume creation through customizable, ATS-friendly templates. By implementing secure REST API-based authentication and protected routing, I ensured robust user session management and data integrity. The platform features a seamless real-time editor with live previews, allowing users to instantly generate and export high-quality PDF resumes tailored for modern recruitment systems.",
      image: resumeBuilderLogo,
      tags: ["React JS", "TailwindCSS", "Node JS", "Express JS", "MongoDB"],
      github: "https://github.com/DivijMalhotra/Resume-Builder",
      webapp: "https://resume-builder-6iil.vercel.app/",
    },
    {
      id: 1,
      title: "Ticket Reservation System",
      description:
        "A full-stack web application that enables users to search trains, view real-time seat availability, and reserve seats through an interactive seat layout. The system ensures concurrency-safe booking using Redis-based seat locking, MongoDB transactions for consistent bookings, and Socket.io for real-time seat status updates across users. It also includes a smart boarding recommendation feature that suggests alternative boarding stations when seats are unavailable for the selected segment, demonstrating advanced concepts like segment-based seat allocation and real-time synchronization.",
      image: flightLogo,
      tags: ["React JS", "TailwindCSS", "Node JS", "Express", "MongoDB", "Socket.io", "Redis"],
      github: "https://github.com/codingmastr/CSPrep",
      webapp: "https://csprep.netlify.app/",
    },
    {
      id: 2,
      title: "AI Research and Project Collaboration Platform",
      description:
        "A web-based platform that helps researchers and students discover, organize, and collaborate on research using AI-powered tools. The system enables users to search and analyze academic content, generate insights with AI assistance, and collaborate with others through shared workspaces and discussions. By integrating AI for information retrieval and summarization with collaborative features, the platform streamlines the research workflow and improves knowledge sharing among users.",
      image: researchLogo,
      tags: ["HTML", "CSS", "JavaScript", "Node JS", "Express JS", "MongoDB"],
      github: "https://github.com/DivijMalhotra/AI-Driven-Research-and-Project-Collaboration-Platform",
      webapp: "",
    },
    {
      id: 3,
      title: "Interactive Survey Experience Form",
      description:
        "A full-stack survey application that provides a gamified survey experience where users answer questions using multiple-choice options, emoji ratings, and sliders while earning points. The application includes features such as a progress bar, real-time score calculation, completion screen, and MongoDB-based response storage with timestamps, along with an admin dashboard to view all survey responses in a structured table.",
      image: surveyLogo,
      tags: ["HTML", "CSS", "JavaScript", "Node JS", "Express JS", "MongoDB"],
      github: "https://github.com/DivijMalhotra/Interactive-Survey-Form",
      webapp: "",
    },
    {
      id: 4,
      title: "Snake Fruit Game",
      description:
        "Developed an Enhanced Snake Game using Java Swing and AWT, featuring a graphical UI, multiple difficulty levels, level-based themes, moving obstacles, portals, and power-ups (shield, speed, magnet, multiplier). The game includes particle effects, sound effects, background music, and a real-time HUD displaying score, level, combo, and timers. It demonstrates object-oriented design, event-driven programming, game loop logic, and interactive desktop game development in Java.",
      image: snakeLogo,
      tags: ["Java", "Java Swing", "Swing Timer", "Java AWT", "Java Sound API"],
      github: "https://github.com/codingmastr/cmtk-email-validator",
      webapp: "https://www.npmjs.com/package/cmtk-email-validator",
    },
    {
      id: 5,  
      title: "Simon Game",
      description:
        "A colorful and interactive memory-based game built using HTML, CSS, and JavaScript, inspired by the classic Simon pattern game. The game generates a random sequence of colored buttons that the player must repeat correctly to progress through increasing levels. It includes features such as random pattern generation, real-time user input validation, button animations for visual feedback, and score/high score tracking. The project demonstrates core web development concepts including DOM manipulation, event handling, and game state management, providing an engaging way to practice JavaScript logic and interactive UI design.",
      image: simonLogo,
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/DivijMalhotra/Simon-Game",
      webapp: "",
    },
  ];