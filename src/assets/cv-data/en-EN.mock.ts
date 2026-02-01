import { Contact, CvData } from "../../app/interfaces/CVData";

const contactDefault : Contact = {
  fullname: "David Mayorga",
  email: "dr.mayorga20@gmail.com",
  // email: "davidrmayo@hotmail.com",
  phone: "+49 1525 2198970",
  location: "Berlin, Germany",
  nationality: "Colombian",
  visaStatus: "Chancenkarte (Opportunity Card)"
}

export const seniorfrontend: CvData = {
  contact: contactDefault,
  occupation: {
    value: "Senior Frontend Engineer",
    acronym: 'SF'
  },
  colors: {
    primary: '#48011d',
  },
  aboutme: `Frontend engineer with 5+ years of experience
    building large-scale web platforms and applications
    specialized in Node.js, 
    TypeScript, and UI/UX solutions using 
    TailwindCSS, SCSS, and interactive experiences 
    with Three.js. I own a deep understanding of CI/CD practices 
    and SRE in international environments. 
    Recently relocated to Berlin with full work authorization,  
    I am looking for innovative engineering teams,
    not only through my technical expertise, 
    but by helping colleagues grow so the 
    entire group can advance together.`,
  // skills: ["Typescript", "NodeJs", 'Python',"Vue.js","Javascript","Next.js", "TailwindCSS", "AI", "LLMs","Java", "SRE", "Unity", "SCSS", "CI/CD", "Jenkins", "Kubernetes", "Testing", "Unreal", "XR", "UI/UX", "Figma"],
  skills: {
    "Frontend": [ "React","Angular","Storybook", "Three.JS", "R3F", "Vue.js", "SCSS","TailwindCSS" ],
    "Graphics": ["Unity", "Unreal", "XR", "UI/UX", "Figma"],
    "Full-Stack": ["Node.js","Typescript", "Next.js", "bash","C++", "C#", "Python"],
    "Tools": ["Git","Vite","Storybook", "ESLint", "Jest"],
    "CI/CD": ['Docker','Jenkins','Kubernetes', "Linux", "Docker",]
  },
  languages: [
    { name: "English", level: 83 },
    { name: "Spanish", level: 100 },
    { name: "German", level: 67 }
  ],
  links: [
    { label: "Portfolio", url: "https://mayinteractive.io/" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/davidmayorga-software/" },
    { label: "Github", url: "https://github.com/damayor" },
  ],
  courses: [
    { name: "ANGULAR: FROM ZERO TO EXPERT - EDITION 2025", institution: "{D/T} DEVTALLES", date: "Jul 2025" },
    { name: "C++ PROGRAMMING - FROM BEGINNER TO BEYOND", institution: "Udemy", date: "May 2025" },
  ],
  experiences: [
    {title: "Work Experience", entries: [ 
      {
        company: 'ADIDAS',
        location: 'Bogotá',
        dates: 'May 2021 - Jun 2025',
        role: 'Software Engineer',
        tasks: [
          'Led the development of <b>customization modules</b> (frontend and 3D) for sportswear’s PDP using <b>Three.js, react-three/fiber</b> and <b>Unity</b>, enhancing user engagement and its end-to-end testing with <b>Jest</b> and <b>Cypress</b>.',
          'Improved reliability and deployment speed of the adidas Checkout <b>backend</b> microservice by implementing CI/CD pipelines and infrastructure automation via <b>Jenkins</b>, <b>Kubernetes</b>, and <b>Grafana</b>, supporting daily transactions across <b>30+ countries</b>.',
          'Developed and maintained scalable frontend components using <b>ReactJS</b> and <b>Next.js</b> for the Global Team Sports platform, contributing to a personalized user experience for <b>20+ international markets</b>.',
          'Contributed to the front-end architecture of the <b>Yeezy e-commerce portal</b>, acclaimed for its minimalist design and <b>functional programming in Typescript</b>, resulting in a faster load time.'
        ]
      },
      {
        company: 'UMBRA 3D STUDIO - INTERACTIVE',
        location: 'Bogotá',
        dates: 'Jan 2020 - Sep 2020',
        role: 'Frontend Software Developer',
        tasks: [
          'Created <b>immersive 3D applications</b> with <b>React</b> and <b>Unreal/C++</b> and interactive masterplan visualisations for the real estate sector <i>PropTech</i>',
          'Developed hyper-casual games in <b>Unity</b> and <b>Virtual Reality</b> to support brand marketing campaigns and mall activations, engaging audiences through interactive gameplay.'
        ]
      }
    ]},
    {title: "Education", 
      entries: [
        {
          company: "Universidad de los Andes",
          role: "M.Sc. Systems and Computing Engineering",
          dates: " 2019",
          location: "Bogotá, Colombia",
          tasks: [
            "Research Internship in AG HCI and Computer Graphics at Technical University of Kaiserslautern during 2018",
            "Designed and developed a VR & haptic-based training simulator for trauma orthopedic surgery in Unity and Oculus, improving trainee performance during pilot tests."
          ]
        },
        {
          company: "Universidad de los Andes",
          role: "Bachelor on Systems and Computing Engineering",
          dates: "2017",
          location: "Bogotá, Colombia",
          tasks: [
            "Academic option in Visual and Computing Interaction",
            "Research Monitor in IMAGINE group",
            "Scholarship \"Quiero Estudiar\" given to the best national ICFES scores"
          ]
        },
        {
          company: "COLEGIO ANDINO - DEUTSCHE SCHULE",
          role: "High School Diploma",
          dates: "2012",
          location: "Bogotá, Colombia",
          tasks: [
            "Sprachdiplommen: \n Hören C1, Lesen C1, Schreiben B2, Sprechen B2"          
          ]
        }
      ]
    },
     {title: "Extra-Curricular Activities", 
      entries: [
        {
          company: "SCIENCE AND TECHNOLOGY CLUBS",
          role: "National Instructor in \"Virtual Reality in Unity\"",
          dates: "Jun 2019 - Jul 2019",
          location: "Bogotá",
          tasks: [
            "Introduction to games and immersive development for highschool students, touching topics about materials, humanoids, animations, and script programming. Led by Universidad Nacional de Colombia and SENA."          
          ]
        },
      ]
    }
  ],
};

export const frontend: CvData = {
  ...seniorfrontend,
  occupation: {
    value: "Frontend Engineer",
    acronym: 'FE',
    
  },
  // skills: ["Typescript", "NodeJs", "React", "Storybook", "Three.JS", "R3F", "Angular", "C++", "C#", 'Python',"Vue.js","Javascript","Next.js", "TailwindCSS", "AI", "LLMs","Java", "SRE", "Linux", "Docker", "Unity", "SCSS", "CI/CD", "Jenkins", "Kubernetes", "Testing", "Unreal", "XR", "UI/UX", "Figma"],
  skills: {
    "Frontend": [ "React","Angular","Storybook", "Three.JS", "R3F", "Vue.js", "SCSS","TailwindCSS" ],
    "Graphics": ["Unity", "Unreal", "XR", "UI/UX", "Figma"],
    "Full-Stack": ["Node.js","Typescript", "Next.js", "bash","C++", "C#", "Python"],
    "Tools": ["Git","Vite","Storybook", "ESLint", "Jest"],
    "CI/CD": ['Docker','Jenkins','Kubernetes', "Linux", "Docker",]
  },
}

export const frontend3d: CvData = {
  ...seniorfrontend,
  occupation: {
    value: "Frontend Engineer - Focused on Computer Graphics and 3D",
    acronym: 'F3D',
    
  },
  // skills: ["Typescript", "NodeJs", "React", "Storybook", "Three.JS", "R3F", "Angular", "C++", "C#", 'Python',"Vue.js","Javascript","Next.js", "TailwindCSS", "AI", "LLMs","Java", "SRE", "Linux", "Docker", "Unity", "SCSS", "CI/CD", "Jenkins", "Kubernetes", "Testing", "Unreal", "XR", "UI/UX", "Figma"],
  // aboutme: `Frontend engineer with 5+ experience
  skills: {
    "Frontend": ["Angular", "React",],
    "Backend": ["Node.js", "Python",],
    // "Full-Stack": [...],
    "CI/CD": ['K8']
  },
}

//C++, full stack
export const seniorSoftware: CvData = {
  contact: contactDefault,
  occupation: {
    value: "Senior Software Engineer",
    acronym: 'SE'
  },
  colors: {
    primary: '#48011d',
    secondary: '#808183'
  },
  aboutme: `Software Engineer with 7+ years of experience 
    in large-scale web platforms and applications
    specialized in Node.js, 
    TypeScript, 
    UI/UX solutions using TailwindCSS, SCSS, and
    interactive 3D experiences with
    Unity, Three.js and Unreal. Strong
    foundations in C++/C#, and Linux bash
    managing Site Reliability
    Engineering practices, ensuring
    monitoring, performance and
    security.  
    Recently relocated to Berlin with full work authorization,  
    I am looking for innovative engineering teams,
    not only through my technical expertise, 
    but by helping colleagues grow so the 
    entire group can advance together.`,
  // skills: ["Typescript", "NodeJs", "React", "Angular", "C++", "C#", 'Python',"Vue.js","Javascript","Next.js", "TailwindCSS", "AI", "LLMs","Java", "Three.JS", "SRE", "Linux", "Docker", "Unity", "SCSS", "CI/CD", "Jenkins", "Kubernetes", "Testing", "Unreal", "XR", "UI/UX", "Figma"],
  skills: {
    "Frontend": ["Angular", "React",],
    "Backend": ["Node.js", "Python",],
    // "Full-Stack": [...],
    "CI/CD": ['K8']
  },
  languages: [
    { name: "English", level: 83 },
    { name: "Spanish", level: 100 },
    { name: "German", level: 67 },
    // { name: "Portuguese", level: 33 }
  ],
  links: [
    { label: "Portfolio", url: "https://mayinteractive.io/" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/davidmayorga-software/" },
    { label: "Github", url: "https://github.com/damayor" },
  ],
  courses: [
    { name: "ANGULAR: FROM ZERO TO EXPERT - EDITION 2025", institution: "{D/T} DEVTALLES", date: "Jul 2025" },
    { name: "C++ PROGRAMMING - FROM BEGINNER TO BEYOND", institution: "Udemy", date: "May 2025" },
  ],
  experiences: [
    {title: "Work Experience", entries: [ 
      {
        company: 'ADIDAS',
        location: 'Bogotá',
        dates: 'May 2021 - Jun 2025',
        role: 'Software Engineer',
        tasks: [
          'Led the development of <b>customization modules</b> (frontend and 3D) for sportswear’s PDP using <b>Three.js</b> and <b>Unity/C#</b>, enhancing user engagement and its end-to-end testing with <b>Jest</b> and <b>Cypress</b>.',
          'Improved reliability and deployment speed of the adidas Checkout <b>backend</b> microservice by implementing CI/CD pipelines and infrastructure automation via <b>Jenkins</b>, <b>Kubernetes</b>, and <b>Grafana</b>, supporting daily transactions across <b>30+ countries</b>.',
          'Developed and maintained scalable frontend components using <b>ReactJS</b> and <b>Next.js</b> for the Global Team Sports platform, contributing to a personalized user experience for <b>20+ international markets</b>.',
          'Contributed to the front-end architecture of the <b>Yeezy e-commerce portal</b>, acclaimed for its minimalist design and <b>functional programming in Typescript</b>, resulting in a faster load time.'
        ]
      },
      {
        company: 'MADBRICKS',
        location: 'Remote',
        dates: 'Sep 2020 - Dec 2020',
        role: 'Game Developer',
        tasks: [
          'Developed and maintained hyper-casual mobile games using <b>Unity, C#</b> and <b>Unreal/C++</b>, enhancing user engagement and UI/UX experience.'
        ]
      },
      {
        company: 'UMBRA 3D STUDIO - INTERACTIVE',
        location: 'Bogotá',
        dates: 'Jan 2020 - Sep 2020',
        role: 'Frontend Software Developer',
        tasks: [
          'Created <b>immersive 3D applications</b> with <b>React, C#</b> and <b>Unreal/C++</b> and interactive masterplan visualisations for the real estate sector (PropTech)',
          'Developed hyper-casual games in <b>Unity</b> and <b>Virtual Reality</b> to support brand marketing campaigns and mall activations, engaging audiences through interactive gameplay.'
        ]
      }
    ]},
    {title: "Education", 
      entries: [
        {
          company: "Universidad de los Andes",
          role: "M.Sc. Systems and Computing Engineering",
          dates: " 2019",
          location: "Bogotá, Colombia",
          tasks: [
            "Internship in AG HCI and Computer Graphics at Technical University of <b>Kaiserslautern</b> during 2018",
            "Role as research monitor focused on designing and developing a <b> VR & haptic-based</b> training simulator for trauma orthopedic surgery in Unity and Oculus, improving trainee performance during pilot tests."
          ]
        },
        {
          company: "Universidad de los Andes",
          role: "Bachelor on Systems and Computing Engineering",
          dates: "2017",
          location: "Bogotá, Colombia",
          tasks: [
            "Academic option in Visual and Computing Interaction",
            "Research Monitor in IMAGINE group",
            "Scholarship \"Quiero Estudiar\" given to the best national ICFES scores"
          ]
        },
        {
          company: "COLEGIO ANDINO - DEUTSCHE SCHULE",
          role: "High School Diploma",
          dates: "2012",
          location: "Bogotá, Colombia",
          tasks: [
            "Sprachdiplommen: \n Hören C1, Lesen C1, Schreiben B2, Sprechen B2"          
          ]
        }
      ]
    },
     {title: "Extra-Curricular Activities", 
      entries: [
        {
          company: "SCIENCE AND TECHNOLOGY CLUBS",
          role: "National Instructor in \"Virtual Reality in Unity\"",
          dates: "Jun 2019 - Jul 2019",
          location: "Bogotá",
          tasks: [
            "Introduction to games and immersive development for highschool students, touching topics about materials, humanoids, animations, and script programming. Led by Universidad Nacional de Colombia and SENA."          
          ]
        },
      ]
    }
  ],
};

export const fullStackEngineer: CvData = {
  ...seniorSoftware,
  occupation: {
    value: "Full Stack Engineer",
    acronym: 'FSE'
  },
  // and my B2 German language skills to contribute 
  aboutme: `Software Engineer with 5+ years
    of experience, specializing in high-scale platforms
    and interactive solutions.
    Having worked for global brands like adidas, 
    I own a deep understanding of CI/CD practices 
    and SRE in international environments. 
    Recently relocated to Berlin with full work authorization,  
    I am looking for innovative engineering teams,
    not only through my technical expertise, 
    but by helping colleagues grow so the 
    entire group can advance together.`,
  // skills: ["Typescript", "C#","NodeJs", "React", "Angular", "Next.js", "TailwindCSS","Javascript","Vue.js", ".NET", 'Python',"AI", "LLMs", "C++",  "Three.JS", "SRE", "Linux", "Docker", "Unity", "SCSS", "CI/CD", "Jenkins", "Kubernetes", "Testing", "Unreal", "XR", "UI/UX", "Figma"],
  skills: {
    "Frontend": ["Angular", "React",],
    "Backend": ["Node.js", "Python",],
    // "Full-Stack": [...],
    "CI/CD": ['K8']
  }

}

export const graphicsEngineer: CvData = {
  contact: contactDefault,
  occupation: {
    value: "Graphics Software Engineer",
    acronym: 'VC',
  },
  colors: {
    primary: '#2c2e81',
    secondary: '#808183',
  },
  aboutme: `Visual computing engineer with
      experience in casual games and
      serious simulators, most of the
      time with Unity and VR/AR.
      Skilled in frontend technologies
      such as React and Three.js to
      create interactive 3D applications
      and engaging user interfaces, 
      mixed with REST endpoints using
      backend microservices. Strong
      foundations in C++/C#, and Linux bash
      focused on delivering immersive
      digital solutions that enhance
      user experience, particularly in
      industrial and web contexts.
      Recently relocated to Berlin with full work authorization,  
      I am looking for innovative engineering teams,
      not only through my technical expertise, 
      but by helping colleagues grow so the 
      entire group can advance together.`,
  // skills: ['C#', 'Unity', 'C++', 'Unreal', 'UI/UX', 'LLMs','React', 'WebGL', 'Three.Js','R3F', 'Typescript','REST','XR', 'Python', 'Figma', 'CI/CD', 'DevOps', 'Jenkins', 'K8', 'Blender', 'Sketchup', 'Godot', '3dMax'],
  skills: {
    "Frontend": ["Angular", "React",],
    "Backend": ["Node.js", "Python",],
    // "Full-Stack": [...],
    "CI/CD": ['K8']
  },
  languages: [
    { name: "English", level: 83 },
    { name: "Spanish", level: 100 },
    { name: "German", level: 67 }
  ],
  links: [
    { label: "Portfolio", url: "https://mayinteractive.io/" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/davidmayorga-software/" },
    { label: "GitHub", url: "https://github.com/damayor" },
    { label: "Behance", url: "https://www.behance.net/may_interactive" }
  ],
  courses: [
    { name: "Game Development with Unreal Engine 4", institution: "Udemy", date: "Jan 2020" },
    { name: "C++ PROGRAMMING - FROM BEGINNER TO BEYOND", institution: "Udemy", date: "May 2025" },
  ],
  experiences: [
    {title: "Work Experience", entries: [ 
      {
        company: 'ADIDAS',
        location: 'Bogotá',
        dates: 'May 2021 - Jun 2025',
        role: 'Frontend Software Engineer',
        tasks: [
          'Led the development of 3D customisation for sportswear using <b>Three.js</b> and <b>Unity</b>, enhancing web user engagement.',
          'Developed and maintained scalable frontend components using <b>ReactJS</b> and <b>Next.js</b> for the Global Team Sports platform, contributing to a personalized user experience for <b>20+ international markets</b>.',
          'Improved reliability and deployment speed of backend microservice by implementing <b>CI/CD</b> pipelines and infrastructure automation via <b>Jenkins</b>, <b>Kubernetes</b>',
          'Contributed to the front-end architecture of the <b>Yeezy e-commerce portal</b>, acclaimed for its minimalist design and <b>functional programming in Typescript</b>, resulting in a faster load time.'
        ]
      },
      {
        company: 'MADBRICKS',
        location: 'Remote',
        dates: 'Sep 2020 - Dec 2020',
        role: 'Game Developer',
        tasks: [
          'Developed and maintained hyper-casual mobile games using <b>Unity</b> and <b>Unreal/C++</b>, enhancing user engagement and UI/UX experience.'
        ]
      },
      {
        company: 'UMBRA INTERACTIVE - 3D STUDIO',
        location: 'Bogotá',
        dates: 'Jan 2020 - Sep 2020',
        role: 'Frontend Software Developer',
        tasks: [
          'Developed hyper-casual games in <b>Unity</b> with <b>Virtual Reality</b> to support brand marketing campaigns and mall activations, engaging audiences through interactive gameplay.',
          'Created <b>immersive 3D applications</b> with <b>Unreal</b> and <b>React</b> creating interactive masterplan visualisations for the real estate sector (PropTech)',
        ]
      }
    ]},
    {title: "Education", 
      entries: [
        {
          company: "Universidad de los Andes",
          role: "M.Sc. Systems and Computing Engineering",
          dates: " 2019",
          location: "Bogotá, Colombia",
          tasks: [
            "Research Internship in AG HCI and Computer Graphics at Technical University of Kaiserslautern during 2018",
            "Designed and developed a VR & haptic-based training simulator for trauma orthopedic surgery in <b>Unity</b> and <b>Oculus</b>, improving trainee performance during pilot tests."
          ]
        },
        {
          company: "Universidad de los Andes",
          role: "Bachelor on Systems and Computing Engineering",
          dates: "2017",
          location: "Bogotá, Colombia",
          tasks: [
            "Academic option in Visual and Computing Interaction",
            "Research Monitor in IMAGINE group",
            "Scholarship \"Quiero Estudiar\" given to the best national ICFES scores"
          ]
        },
        {
          company: "COLEGIO ANDINO - DEUTSCHE SCHULE",
          role: "High School Diploma",
          dates: "2012",
          location: "Bogotá, Colombia",
          tasks: [
            "Sprachdiplommen: \n Hören C1, Lesen C1, Schreiben B2, Sprechen B2"          
          ]
        }
      ]
    },
     {title: "Extra-Curricular Activities", 
      entries: [
        {
          company: "SCIENCE AND TECHNOLOGY CLUBS",
          role: "National Instructor in \"Virtual Reality in Unity\"",
          dates: "Jun 2019 - Jul 2019",
          location: "Bogotá",
          tasks: [
            "Introduction to games and immersive development for highschool students, touching topics about materials, humanoids, animations, and script programming. Led by Universidad Nacional de Colombia and SENA."          
          ]
        },
      ]
    }
  ],
};

export const sre: CvData = {
  contact: contactDefault,
  occupation: {
    value: "DevOps / Site Reliability Engineer",
    acronym: 'DO',
  },
  colors: {
    primary: '#287848',
  },
  aboutme: `Software Engineer with 5 years
    of experience in large-scale
    platforms at a multinational,
    combining strong foundations in
    Linux Bash, and DevOps automation.
    Experienced in bridging
    software engineering with SRE
    practices to deliver reliable
    solutions based on observability 
    and monitoring. Skilled in CI/CD, 
    performance optimization, and
    ensuring scalable, resilient
    systems. Recently relocated to Berlin with full work authorization, 
    and motivated to join teams where I can
    share knowledge, mentor others, and 
    help elevate the collective skills.`,
  // skills: ['Linux', 'SRE','ci/cd','jenkins','groovy','DevOps','Kubernetes','Yaml','LLMs','Observability','Grafana','Docker','Instana','Kibana','Prometheus','Aws','Opsgenie','NodeJs','C++','React','JS/TS','Angular','Java'],
  skills: {
    "Frontend": ["Angular", "React",],
    "Backend": ["Node.js", "Python",],
    // "Full-Stack": [...],
    "CI/CD": ['K8']
  },
  languages: [
    { name: "English", level: 83 },
    { name: "Spanish", level: 100 },
    { name: "German", level: 67 }
  ],
  links: [
    { label: "LinkedIn", url: "https://www.linkedin.com/in/davidmayorga-software/" },
    { label: "Stackshare", url: "https://stackshare.io/damayor/software-engineer" },
  ],
  courses: [
    { name: "C++ PROGRAMMING - FROM BEGINNER TO BEYOND", institution: "Udemy", date: "May 2025" },
  ],
  experiences: [
    {title: "Work Experience", entries: [ 
      {
        company: 'ADIDAS',
        location: 'Bogotá',
        dates: 'May 2021 - Jun 2025',
        role: 'Software Engineer',
        tasks: [
          'Enhanced reliability of the Checkout backend microservice by observability with <b>Grafana</b> and alerting integrations, supporting uninterrupted daily transactions across <b>30+ countries.</b>',
          `Participated in on-call rotations to troubleshoot and resolve
          production issues, ensuring <b>99.99%</b> microservice availability.`,
          `Refactored Jenkins pipelines and implemented CI/CD best
          practices for the Checkout service repository, cutting
          deployment time from <b>15 minutes to under 6 minutes</b>`,        
          'Developed and maintained scalable frontend components using <b>ReactJS</b> and <b>Next.js</b> for the Global Team Sports platform, contributing to a personalized user experience for <b>20+ international markets</b>.',
        ]
      },
      {
        company: 'UMBRA INTERACTIVE - 3D STUDIO',
        location: 'Bogotá',
        dates: 'Jan 2020 - Sep 2020',
        role: 'Frontend Software Developer',
        tasks: [
          'Created <b>immersive 3D applications</b> with <b>Unreal</b> and <b>React</b> creating interactive masterplan visualisations for the real estate sector (PropTech)',
          'Developed hyper-casual games in <b>Unity</b> with <b>Virtual Reality</b> to support brand marketing campaigns and mall activations, engaging audiences through interactive gameplay.',
        ]
      }
    ]},
    {title: "Education", 
      entries: [
        {
          company: "Universidad de los Andes",
          role: "M.Sc. Systems and Computing Engineering",
          dates: " 2019",
          location: "Bogotá, Colombia",
          tasks: [
            "Research Internship in AG HCI and Computer Graphics at Technical University of Kaiserslautern during 2018",
            "Designed and developed a VR & haptic-based training simulator for trauma orthopedic surgery in Unity and Oculus, improving trainee performance during pilot tests."
          ]
        },
        {
          company: "Universidad de los Andes",
          role: "Bachelor on Systems and Computing Engineering",
          dates: "2017",
          location: "Bogotá, Colombia",
          tasks: [
            "Academic option in Visual and Computing Interaction",
            "Research Monitor in IMAGINE group",
            "Scholarship \"Quiero Estudiar\" given to the best national ICFES scores"
          ]
        },
        {
          company: "COLEGIO ANDINO - DEUTSCHE SCHULE",
          role: "High School Diploma",
          dates: "2012",
          location: "Bogotá, Colombia",
          tasks: [
            "Sprachdiplommen: \n Hören C1, Lesen C1, Schreiben B2, Sprechen B2"          
          ]
        }
      ]
    },
     {title: "Extra-Curricular Activities", 
      entries: [
        {
          company: "SCIENCE AND TECHNOLOGY CLUBS",
          role: "National Instructor in \"Virtual Reality in Unity\"",
          dates: "Jun 2019 - Jul 2019",
          location: "Bogotá",
          tasks: [
            "Introduction to games and immersive development for highschool students, touching topics about materials, humanoids, animations, and script programming. Led by Universidad Nacional de Colombia and SENA."          
          ]
        },
      ]
    }
  ],
};

export const contentcreator: CvData = {
  contact: contactDefault,
  occupation: {
    value: "Senior Software Engineer",
    acronym: 'SE'
  },
  colors: {
    primary: '#48011d'
  },
  aboutme: `Software Engineer with 8 years
    of experience in large-scale web
    platforms at a multinational,
    specialising in ReactJS, NodeJS,
    and interactive solutions with
    Unity, Three.js and Unreal. Strong
    foundations in C++, Linux bash,
    managing Site Reliability
    Engineering practices, ensuring
    monitoring, performance and
    scalability. 
    Recently relocated to Berlin with full work authorization,  
    I am looking for innovative teams where I can
    share knowledge, mentor others, and 
    help elevate the collective skills.`,
  // skills: ["Javascript", "C++", "React", "NodeJs", "Angular", "TypeScript", "AI", "LLMs", "C#", "Java", "Three.JS", "SRE", "Linux", "Unity", "SCSS", "CI/CD", "Jenkins", "Kubernetes", "Testing", "Unreal", "UX/UI", "Figma"],
  skills: {
    "Frontend": ["Angular", "React",],
    "Backend": ["Node.js", "Python",],
    // "Full-Stack": [...],
    "CI/CD": ['K8']
  },
  languages: [
    { name: "English", level: 83 },
    { name: "Spanish", level: 100 },
    { name: "German", level: 67 }
  ],
  links: [
    { label: "LinkedIn", url: "https://www.linkedin.com/in/davidmayorga-software/" },
    { label: "Github", url: "https://github.com/damayor" },
    { label: "Instagram - Professional", url: "https://www.instagram.com/may.interactive/" },
    { label: "Instagram - Personal", url: "https://www.instagram.com/davidmay___/" },

  ],
  courses: [
    { name: "ANGULAR: FROM ZERO TO EXPERT - EDITION 2025", institution: "{D/T} DEVTALLES", date: "Jul 2025" },
    { name: "C++ PROGRAMMING - FROM BEGINNER TO BEYOND", institution: "Udemy", date: "May 2025" },
  ],
  experiences: [
    {title: "Work Experience", entries: [ 
      {
        company: 'ADIDAS',
        location: 'Bogotá',
        dates: 'May 2021 - Jun 2025',
        role: 'Software Engineer',
        tasks: [
          'Led the development of <b>customization modules</b> (frontend and 3D) for sportswear’s PDP using <b>Three.js</b> and <b>Unity</b>, enhancing user engagement and its end-to-end testing with <b>Jest</b> and <b>Cypress</b>.',
          'Improved reliability and deployment speed of the adidas Checkout <b>backend</b> microservice by implementing CI/CD pipelines and infrastructure automation via <b>Jenkins</b>, <b>Kubernetes</b>, and <b>Grafana</b>, supporting daily transactions across <b>30+ countries</b>.',
          'Developed and maintained scalable frontend components using <b>ReactJS</b> and <b>Next.js</b> for the Global Team Sports platform, contributing to a personalized user experience for <b>20+ international markets</b>.',
          'Contributed to the front-end architecture of the <b>Yeezy e-commerce portal</b>, acclaimed for its minimalist design and <b>functional programming in Typescript</b>, resulting in a faster load time.'
        ]
      },
      {
        company: 'MADBRICKS',
        location: 'Remote',
        dates: 'Sep 2020 - Dec 2020',
        role: 'Game Developer',
        tasks: [
          'Developed and maintained hyper-casual mobile games using <b>Unity</b> and <b>Unreal/C++</b>, enhancing user engagement and UI/UX experience.'
        ]
      },
      {
        company: 'UMBRA 3D STUDIO - INTERACTIVE',
        location: 'Bogotá',
        dates: 'Jan 2020 - Sep 2020',
        role: 'Frontend Software Developer',
        tasks: [
          'Created <b>immersive 3D applications</b> with <b>React</b> and <b>Unreal/C++</b> and interactive masterplan visualisations for the real estate sector (PropTech)',
          'Developed hyper-casual games in <b>Unity</b> and <b>Virtual Reality</b> to support brand marketing campaigns and mall activations, engaging audiences through interactive gameplay.'
        ]
      }
    ]},
    {title: "Education", 
      entries: [
        {
          company: "Universidad de los Andes",
          role: "M.Sc. Systems and Computing Engineering",
          dates: " 2019",
          location: "Bogotá, Colombia",
          tasks: [
            "Internship in AG HCI and Computer Graphics at Technical University of <b>Kaiserslautern</b> during 2018",
            "Role as research monitor focused on designing and developing a <b> VR & haptic-based</b> training simulator for trauma orthopedic surgery in Unity and Oculus, improving trainee performance during pilot tests."
          ]
        },
        {
          company: "Universidad de los Andes",
          role: "Bachelor on Systems and Computing Engineering",
          dates: "2017",
          location: "Bogotá, Colombia",
          tasks: [
            "Academic option in Visual and Computing Interaction",
            "Research Monitor in IMAGINE group",
            "Scholarship \"Quiero Estudiar\" given to the best national ICFES scores"
          ]
        },
        {
          company: "COLEGIO ANDINO - DEUTSCHE SCHULE",
          role: "High School Diploma",
          dates: "2012",
          location: "Bogotá, Colombia",
          tasks: [
            "Sprachdiplommen: \n Hören C1, Lesen C1, Schreiben B2, Sprechen B2"          
          ]
        }
      ]
    },
     {title: "Extra-Curricular Activities", 
      entries: [
        {
          company: "Castel Magazine Models",
          role: "Model",
          dates: "Jun 2024 - Jun 2025",
          location: "Bogotá",
          tasks: [
            "Fashion model focused on photography, performance and body expression.",
          ]
        },
        {
          company: "SCIENCE AND TECHNOLOGY CLUBS",
          role: "National Instructor in \"Virtual Reality in Unity\"",
          dates: "Jun 2019 - Jul 2019",
          location: "Bogotá",
          tasks: [
            "Teacher of games and immersive development for highschool students, touching topics about materials, humanoids, animations, and script programming. Led by Universidad Nacional de Colombia and SENA."          
          ]
        },
      ]
    }
  ],
};

export const supportAssistant: CvData = { //En ventas, en eventos, logistica
  contact: contactDefault,
  occupation: {
    value: "Retail & Event Support Assistant",
    acronym: 'SA'
  },
  colors: {
    primary: '#2c2e81'
  },
  aboutme: `Detail-oriented professional 
    with experience supporting store
    operations, logistics, and inventory 
    processes during high-demand seasons. 
    Background as a software engineer 
    and model. 
    Reliable and adaptable with learning agibility. 
    Recently relocated to Berlin with full work authorization,  
    I am looking for innovative teams,
    not only through my technical expertise, 
    but by helping colleagues grow so the 
    entire group can advance together.`,
  // skills: [
  //   "Store assistance",
  //   "Event support",
  //   "Team collaboration", 
  //   "Problem solving",
  //   "Inventory management",
  //   "Customer support",
  //   "Social Media", "Windows Office",
  //   "Javascript", "NodeJs", "C#/C++", "AI", "LLMs"],
  skills: {
    "Frontend": ["Angular", "React",],
    "Backend": ["Node.js", "Python",],
    // "Full-Stack": [...],
    "CI/CD": ['K8']
  },
  languages: [
    { name: "English", level: 83 },
    { name: "Spanish", level: 100 },
    { name: "German", level: 67 }
  ],
  links: [
    { label: "LinkedIn", url: "https://www.linkedin.com/in/davidmayorga-software/" },
    // { label: "May Interactive", url: "https://www.instagram.com/may.interactive/" },
    { label: "Instagram", url: "https://www.instagram.com/davidmay___/" },

  ],
  courses: [
  ],
  experiences: [
    {title: "Work Experience", entries: [ 
      {
        company: 'ADIDAS',
        location: 'Bogotá',
        dates: 'May 2021 - Jun 2025',
        role: 'Software Engineer',
        tasks: [
          'Supported retail operations during high-consumption days such as Christmas and Black Friday, assisting with <b>sales, inventory organization</b>, and <b>warehouse management</b>.',
          'Developed and maintained scalable frontend components using <b>ReactJS</b> and <b>Next.js</b> for the Global Team Sports platform, contributing to a personalized user experience for <b>20+ international markets</b>.',
        ]
      },
     
      {
        company: 'UMBRA 3D STUDIO - INTERACTIVE',
        location: 'Bogotá',
        dates: 'Jan 2020 - Sep 2020',
        role: 'Frontend Software Developer',
        tasks: [
          'Systems engineer responsible for the development, maintenance, and <b>24/7 support</b> of company websites for two brands: Umbra3D.Studio and Umbra Interactive.',
          'Created <b>immersive 3D applications</b> for the real estate sector (PropTech), brand marketing campaigns and mall activations, engaging audiences through interactive gameplay.',
        ]
      },
      {
        company: "COLIVRI Lab - Universidad de los Andes",
        role: "Research Monitor",
        dates: "Jun 2017 - Ago 2019",
        location: "Bogotá",
        tasks: [
          "Supporting demonstrations based on robotics & XR projects, <b>managing inventory</b> of the laboratory devices",
          "Internship in AG HCI and Computer Graphics at Technical University of <b>Kaiserslautern</b> during 2018",
        ]
      },

    ]},
    {title: "Education", 
      entries: [
        {
          company: "Universidad de los Andes",
          role: "Bachelor on Systems and Computing Engineering",
          dates: "2017",
          location: "Bogotá, Colombia",
          tasks: [
            "Scholarship \"Quiero Estudiar\" given to the best national ICFES scores"
          ]
        },
        {
          company: "COLEGIO ANDINO - DEUTSCHE SCHULE",
          role: "High School Diploma",
          dates: "2012",
          location: "Bogotá, Colombia",
          tasks: [
            "Sprachdiplommen: \n Hören C1, Lesen C1, Schreiben B2, Sprechen B2"          
          ]
        }
      ]
    },
     {title: "Extra-Curricular Activities", 
      entries: [
        {
          company: "Castel Magazine Models",
          role: "Model",
          dates: "Jun 2024 - Jun 2025",
          location: "Bogotá",
          tasks: [
            "Fashion model focused on photography, body expression, creation of content and events management.",
          ]
        },
        // {
        //   company: "SCIENCE AND TECHNOLOGY CLUBS",
        //   role: "National Instructor in \"Virtual Reality in Unity\"",
        //   dates: "Jun 2019 - Jul 2019",
        //   location: "Bogotá",
        //   tasks: [
        //     "Teacher of games and immersive development for highschool students. Led by Universidad Nacional de Colombia and SENA."          
        //   ]
        // },
        {
          company: "Universidad de los Andes",
          role: "Theatre Group Member",
          dates: "Ene 2016 - Jun 2018",
          location: "Bogotá",
          tasks: [
            "Participated in acting and theater plays, developing teamwork, improvisation, and communication skills."          
          ]
        },
      ]
    }
  ],
};

export const itSupport: CvData = { //En ventas, en eventos, logistica
  contact: contactDefault,
  occupation: {
    value: "IT Support Agent",
    acronym: 'ITS'
  },
  colors: {
    primary: '#2c2e81'
  },
  aboutme: `Reliable and detail-oriented professional with hands-on
    experience supporting IT equipment, inventory, and daily operations.
    Strong interest in IT Support and Helpdesk roles, with a background
    in software engineering and a customer-focused mindset. Quick learner
    with strong communication skills. Recently relocated to Berlin with
    full work authorization and motivated to support users and
     contribute to a collaborative IT team.`,
  // skills: [
  //   "Inventory management",
  //   "Customer service", "macOS", "Linux",
  //   "Windows",
  //   "Troubleshooting",
  //   "Teamwork", "Network",
  //   "Problem solving",
  //   "Hardware", "AI", "configuration",
  //   "LLMs"],
  skills: {
    "Frontend": ["Angular", "React",],
    "Backend": ["Node.js", "Python",],
    // "Full-Stack": [...],
    "CI/CD": ['K8']
  },
  languages: [
    { name: "English", level: 83 },
    { name: "Spanish", level: 100 },
    { name: "German", level: 67 }
  ],
  links: [
    { label: "LinkedIn", url: "https://www.linkedin.com/in/davidmayorga-software/" },
  ],
  courses: [
  ],
  experiences: [
    {title: "Work Experience", entries: [ 
      {
        company: 'ADIDAS',
        location: 'Bogotá',
        dates: 'May 2021 - Jun 2025',
        role: 'Software Developer',
        tasks: [
          'Developed and maintained scalable frontend components using <b>ReactJS</b> and <b>Next.js</b> for the Global Team Sports platform, contributing to a personalized user experience.',
          'Supported retail operations during high-consumption days such as Christmas and Black Friday, assisting with <b>sales, inventory organization</b>, and <b>warehouse management</b>.',
        ]
      },
     
      {
        company: 'UMBRA 3D STUDIO - INTERACTIVE',
        location: 'Bogotá',
        dates: 'Jan 2020 - Sep 2020',
        role: 'Software Developer',
        tasks: [
          'Systems engineer responsible for the development, maintenance, and <b>24/7 support</b> of company websites for two brands and their deployments mounted in FTP servers or Wordpress',
        ]
      },
      {
        company: "COLIVRI Lab - Universidad de los Andes",
        role: "Research Monitor",
        dates: "Jun 2017 - Ago 2019",
        location: "Bogotá",
        tasks: [
          "Supporting demonstrations based on robotics & XR projects, <b>managing inventory</b> of the laboratory devices",
          "Responsible in charge of computer labs, and providing laptops and other perfiferical devices to students."
        ]
      },
    ]},
    {title: "Education", 
      entries: [
        {
          company: "Universidad de los Andes",
          role: "Bachelor on Systems and Computing Engineering",
          dates: "2017",
          location: "Bogotá, Colombia",
          tasks: [
            "Scholarship \"Quiero Estudiar\" given to the best national ICFES scores"
          ]
        },
        {
          company: "COLEGIO ANDINO - DEUTSCHE SCHULE",
          role: "High School Diploma",
          dates: "2012",
          location: "Bogotá, Colombia",
          tasks: [
            "Sprachdiplommen: \n Hören C1, Lesen C1, Schreiben B2, Sprechen B2"          
          ]
        }
      ]
    },
     {title: "Extra-Curricular Activities", 
      entries: [
        {
          company: "Universidad de los Andes",
          role: "Theatre Group Member",
          dates: "Ene 2016 - Jun 2018",
          location: "Bogotá",
          tasks: [
            "Participated in acting and theater plays, developing teamwork, improvisation, and communication skills."          
          ]
        },
      ]
    }
  ],
};
