import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
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
    shopify,
    ieee,
    edc,
    carrent,
    jobit,
    tripguide,
    threejs,
    ptf,
    amz,
    nwz,
  } from "../assets";
  
 const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Software Development",
      icon: web,
    },
    {
      title: "Database Development",
      icon: mobile,
    },
    {
      title: "Web Development",
      icon: backend,
    },
    {
      title: "Videography",
      icon: creator,
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
      name: "JavaScript",
      icon: javascript,
    },
    // {
    //   name: "TypeScript",
    //   icon: typescript,
    // },
    {
      name: "React JS",
      icon: reactjs,
    },
    // {
    //   name: "Redux Toolkit",
    //   icon: redux,
    // },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    // {
    //   name: "Node JS",
    //   icon: nodejs,
    // },
    // {
    //   name: "MongoDB",
    //   icon: mongodb,
    // },
    {
      name: "Three JS",
      icon: threejs,
    },
    // {
    //   name: "git",
    //   icon: git,
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
      title: "Public Realtions",
      company_name: "IEEE UIET Student Branch",
      icon: ieee,
      iconBg: "#383E56",
      date: "Dec 2020 - Dec 2021",
      points: [
        "Organised and brought guests for various technical & non-technical events.",
        "Learned about getting sponsorships for the events.",
        "Collaborated with my fellow mates and sponsors which gave a major boost to my communication skills.",
      ],
    },
    {
      title: "Member",
      company_name: "Entrepreneurship and Development Cell UIET",
      icon: edc,
      iconBg: "#E6DEDD",
      date: "Mar 2023 - Present",
      points: [
        "Organised events related to Entrepreneurship & startups.",
        "Collaborating and marketing with the team for the events which gave me exposure to public speaking.",
        "Soon organising an InternFair with the team in an effort to connect students with exceptional internship opportunities tailored to their skills & interests.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Sawan proved me wrong.",
      name: "Monika Sadawarti",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
  ];
  
  const projects = [
    {
      name: "3D Portfolio",
      description:
        "I made a 3D portfolio showcasing my journey so far using Three.js which was incredibly fun to work with.",
      tags: [
        {
          name: "ReactJS",
          color: "blue-text-gradient",
        },
        {
          name: "Three.js",
          color: "green-text-gradient",
        },
        {
          name: "TailwindCSS",
          color: "pink-text-gradient",
        },
      ],
      image: ptf,
      source_code_link: "https://github.com/sawankj/Portfolio-2",
    },
    {
      name: "Amazon Clone",
      description:
        "I built a RESPONSIVE front-end Amazon.com home-page clone using HTML & CSS",
      tags: [
        {
          name: "HTML",
          color: "green-text-gradient",
        },
        {
          name: "CSS",
          color: "blue-text-gradient",
        },
      ],
      image: amz,
      source_code_link: "https://github.com/sawankj/amazon-clone",
    },
    {
      name: "News App using API",
      description:
        "I built a News App which retreives latest news articles from all over the web using NewsAPI service",
      tags: [
        {
          name: "HTML",
          color: "green-text-gradient",
        },
        {
          name: "CSS",
          color: "blue-text-gradient",
        },
        {
          name: "JavaScript",
          color: "pink-text-gradient",
        },
      ],
      image: nwz,
      source_code_link: "https://github.com/sawankj/news-API",
    },
  ];
  
  export { navLinks, services, technologies, experiences, testimonials, projects };
