import {
  todo,
  ams,
  gav,
  sn,
  hms,
} from "../assets";

export const navLinks = [
  {
    id: "hero",
    title: "Home",
  },
  {
    id: "portfolio",
    title: "Portfolio",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const experiences = [
  {
    title: "Backend Development Intern",
    company_name: "Aeroglobe",
    date: "April 2024 - June 2024",
    details: [
      "Worked as a <span style='color: white;'>backend Developer Intern </span> and Gained expertise in RESTful APIs.",
      "Contributed to project development using <span style='color: white;'> Django and RestFul APIs</span>.",
      "Developed a <span style='color: white;'>To-Do-list</span> project for managers and project members to keep track of task assigned related to project.",
    ],
  },
  {
    title: "Head Automation Team",
    company_name: "DEVDAY’24(FASTNUCES,KHI)",
    date: "Feb 2024 - May 2024",
    details: [
      "Leading a team to automate manual work and developing an <span style='color: white;'>attendance management system and chatbot</span>.",
      "The attendance system utilized <span style='color: white;'>geolocation</span> to track the exact time and location, ensuring accurate attendance and preventing proxy entries.",
      "<span style='color: white;'>First-ever live attendance tracking</span> at DEVDAY, reducing the chaos of manual entries by <span style='color: white;'>70%</span>.",
      "<span style='color: white;'>Automated certificate distribution</span> for participants, cutting administrative work by <span style='color: white;'>80%</span>.",
    ],
  },
  {
    title: "Deputy Automation Team",
    company_name: "PROCOM’24(FASTNUCES,KHI)",
    date: "Jan 2024 - Mar 2024",
    details: [
      "Led a team of 8 to develop an <span style='color: white;'>Attendance Management System</span> using Django and SQLite.",
      "<span style='color: white;'>Automated QR code</span> sending and scanning to reduce manual work by <span style='color: white;'>75%</span>.",
    ],
  },
];

const portfolio = [
  {
    name: "To Do List",
    description:
      "Developed a full-stack to-do list application using Django and RESTful APIs, featuring admin and user panels for efficient task management. Users can dynamically update task priorities and statuses, while admins have full CRUD functionality for seamless data operations.",
    image: todo,
    githubLink: "https://github.com/samaha-rizvi-4578/ToDoList-Django", // Add GitHub link
  },
  {
    name: "Attendance Management System",
    description:
      "Developed a full-stack attendance management system using Django and SQLite, featuring automated attendance tracking via QR code scanning, reducing manual work by 75%.",
    image: ams,
    githubLink: "https://github.com/Procom-24/Attendance_Management_System_Procom24", // Add GitHub link
  },
  {
    name: "SufferNama | Tourism Management Platform",
    description:
      "Developed a scalable tourism management platform using PHP and MySQL during a 24-hour web development competition at Softec'24, FAST Lahore.",
    image: sn,
    githubLink: "https://github.com/samaha-rizvi-4578/WebDevFackCoders", // Add GitHub link
  },
  {
    name: "Geometric Algorithm Visualizer",
    description:
      "Developed a user-friendly Geometric Algorithm Visualizer with an attractive GUI that lets users input parameters and visualize outcomes.",
    image: gav,
    githubLink: "https://github.com/samaha-rizvi-4578/Geometric-Algorithm-Visualizer", // Add GitHub link
  },
  {
    name: "Housify | Housing Society Management System",
    description:
      "Developed a web-based Housing Society Management System using PHP, HTML, CSS, JavaScript, and MySQL, boosting operational efficiency by 40%.",
    image: hms,
    githubLink: "https://github.com/samaha-rizvi-4578/Housify", // Add GitHub link
  },
];

export { experiences, portfolio };
