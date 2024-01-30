import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    bootstrap,
    java,
    python,
    mysql,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    cdac,
    cisco,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    certificateDesigner,
    flyaway,
    foodboxapp,
    newsApp,
    Shoes,
    textutils,
    quizapp,

  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Java FullStack Developer",
      icon: mobile,
    },
    {
      title: "Python Developer",
      icon: backend,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Bootstrap",
      icon: bootstrap,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "java",
      icon: java,
    },
    {
      name: "python",
      icon: python,
    },
    {
      name: "mysql",
      icon: mysql,
    },
    {
      name: "git",
      icon: git,
    },

    // {
    //   name: "TypeScript",
    //   icon: typescript,
    // },
    
    // {
    //   name: "Redux Toolkit",
    //   icon: redux,
    // },
    
    // {
    //   name: "Node JS",
    //   icon: nodejs,
    // },
    // {
    //   name: "MongoDB",
    //   icon: mongodb,
    // },
    // // {
    //   name: "Three JS",
    //   icon: threejs,
    // },
    
    // {
    //   name: "figma",
    //   icon: figma,
    // },
    // {
    //   name: "docker",
    //   icon: docker,
    // },
  ];
  
  const experiences = [
    {
      title: "React.js Developer / Servlet JSP",
      company_name: "CDAC - INDIA (Hyderabad)",
      icon: cdac,
      iconBg: "#383E56",
      date: "December 2022 - December 2023",
      points: [
        "Worked with ELearning Team As a web developer",
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility."
      ],
    },
    {
      title: "Java Full Stack Developement / Python Development",
      company_name: "Cisco Systems INDIA Pvt. Ltd. (Bangalore))",
      icon: cisco,
      iconBg: "#E6DEDD",
      date: "August 2021 - August 2022",
      points: [
        "Worked with Email Security Team As a software developer",
        "->Java Project",
        "*Phase 1 [Virtual key for repository](Implement OOPS using JAVA with Data Structures and Beyond)",
        "*Phase 2 [Fly Away {An Airline Booking Portal](Become a back-end expert)",
        "*Phase 3 [Make an E-Commerce Website for Sporty shoes](Implement Frameworks the DevOps way) ",
        "*Phase 4 [Quiz Test Application](Develop a Web Application using frontend stack)",
        "*Phase 5 [CI/CD Deployment for Spring Boot Application](Testing in a DevOps Lifecycle)",
        "*Phase 6 [Foodbox {An online food delivery Application}](Full Stack Java Developer Capstone Project)",
        
        "->Python Projects",
        " *DevSearch {Search other developers [django Project]}",
        
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Nitish proved me wrong..",
      name: "Pragya",
      designation: "Software Developer",
      company: "TCS",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
    {
      testimonial:
        "I've never met a web developer like Nick.",
      name: "Amit",
      designation: "Software Developer",
      company: "Infosys",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Certificate Designer",
      description:
        "In this various Landscape and Portrait templates can be made and also Blank Certificates are available users can design certificates using drag and drop functionality .",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "bootstrap",
          color: "pink-text-gradient",
        },
        {
          name: "nodejs",
          color: "orange-text-gradient",
        },
      ],
      image: certificateDesigner,
      source_code_link: "https://github.com/NITISHPWR/certificategen/",
    },
    {
      name: " News Application",
      description:
        " To get latest news based on categories such as Business, Entertainment , Sports,Technology, Science, Health, General",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "bootstrap",
          color: "pink-text-gradient",
        },
      ],
      image: newsApp,
      source_code_link: "https://github.com/NITISHPWR/newsapp.git",
    },
    {
      name: "Text Editor",
      description:
        "An Application to edit textbox",
      tags: [
        {
          name: "reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "bootstrap",
          color: "pink-text-gradient",
        },
      ],
      image: textutils,
      source_code_link: "https://github.com/NITISHPWR/textutils.git",
    },
    {
      name: "Fly Away",
      description:
        " An Airline Booking Portal",
      tags: [
        {
          name: "JSP",
          color: "blue-text-gradient",
        },
        {
          name: "MySQL",
          color: "green-text-gradient",
        },
        {
          name: "Servlet",
          color: "orange-text-gradient",
        },
      ],
      image: flyaway,
      source_code_link: "https://github.com/NITISHPWR/phase2.git",
    },{
      name: "E-Commerce Website",
      description:
        " an E-Commerce Website for Sporty shoes",
      tags: [
        {
          name: "Angular",
          color: "blue-text-gradient",
        },
        {
          name: "bootstrap",
          color: "pink-text-gradient",
        },       {
          name: "MySQL",
          color: "green-text-gradient",
        },        {
          name: "Springboot",
          color: "orange-text-gradient",
        }, 
      ],
      image: Shoes,
      source_code_link: "https://github.com/NITISHPWR/phase03.git",
    },{
      name: "Quiz Application",
      description:
        " Quiz Test Application for students",
      tags: [
        {
          name: "Angular",
          color: "blue-text-gradient",
        },
        {
          name: "bootstrap",
          color: "pink-text-gradient",
        },
        {
          name: "MySQL",
          color: "green-text-gradient",
        },
        {
          name: "Springboot",
          color: "orange-text-gradient",
        },
      ],
      image: quizapp,
      source_code_link: "https://github.com/NITISHPWR/phase04.git",
    },{
      name: "Foodbox Application",
      description:
        "An online food delivery Application",
      tags: [
        {
          name: "Angular",
          color: "blue-text-gradient",
        },
        {
          name: "bootstrap",
          color: "pink-text-gradient",
        },       {
          name: "MySQL",
          color: "green-text-gradient",
        },        {
          name: "Springboot",
          color: "orange-text-gradient",
        }, 
      ],
      image: foodboxapp,
      source_code_link: "https://github.com/NITISHPWR/phase6.git",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };