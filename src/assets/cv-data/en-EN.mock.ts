import { Contact, CvData } from "../../app/interfaces/CVData";

const contactDefault : Contact = {
  fullname: "David Mayorga",
  email: "dr.mayorga20@gmail.com",
  phone: "+49 1525 2198970",
  location: "Berlin, Germany",
  nationality: "Colombian",
  visaStatus: "Chancenkarte / Opportunity Card"
}

export const frontend: CvData = {
  contact: contactDefault,
  occupation: {
    value: "Senior Frontend Engineer",
    acronym: 'SF'
  },
  colors: {
    primary: '#48011d',
  },
  aboutme: `Frontend Engineer with
      experience in large scale web
      platforms at a multinational,
      specializing in ReactJS, NodeJS,
      and interactive 3D solutions with
      Three.js. Strong foundation in
      Site Reliability Engineering
      practices, ensuring monitoring,
      performance and scalability.
      Currently based in Germany and
      eager to contribute to innovative
      teams while continuing to grow
      my expertise`,
  skills: ["Javascript", "React", "NodeJs", "Angular", "TypeScript", "C#", "C++", "Java", "Three.JS", "CSS/SCSS", "SRE", "Unity", "CI/CD", "Jenkins", "Kubernetes", "Testing"],
  languages: [
    { name: "English", level: 75 },
    { name: "Spanish", level: 100 },
    { name: "German", level: 75 }
  ],
  links: [
    { label: "LinkedIn", url: "https://www.linkedin.com/in/demayorgaherrera/" },
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
          'Developed and maintained scalable frontend components using <b>ReactJS</b> and <b>Redux</b> for the Global Team Sports platform, contributing to a personalized user experience for <b>20+ international markets</b>.',
          'Improved reliability and deployment speed of the adidas Checkout <b>backend</b> microservice by implementing CI/CD pipelines and infrastructure automation via <b>Jenkins</b>, <b>Kubernetes</b>, and <b>Grafana</b>, supporting daily transactions across <b>30+ countries</b>.',
          'Led the development of <b>customization modules</b> (frontend and 3D) for sportswear’s PDP using <b>Three.js</b> and <b>Unity</b>, enhancing user engagement and its end-to-end testing with <b>Jest</b> and <b>Cypress</b>.',
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
          company: "COLEGIO ANDINO - DEUTSCHE SCHULE BOGOTA",
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

//C++, full stack
export const seniorSoftware: CvData = {
  contact: contactDefault,
  occupation: {
    value: "Senior Software Engineer",
    acronym: 'FE'
  },
  colors: {
    primary: '#48011d',
    secondary: '#808183'
  },
  aboutme: `Software Engineer with 7 years
    of experience in large-scale web
    platforms at a multinational,
    specialising in ReactJS, NodeJS,
    and interactive 3D solutions with
    Unity, Three.js and Unreal. Strong
    foundations in C++, Linux bash,
    managing Site Reliability
    Engineering practices, ensuring
    monitoring, performance and
    scalability. Currently based in
    Germany and eager to contribute
    to innovative teams while
    continuing to grow my expertise.`,
  skills: ["Javascript", "C++", "React", "NodeJs", "Angular", "TypeScript", "C#", "Java", "Three.JS", "SRE", "Linux", "Unity", "SCSS", "CI/CD", "Jenkins", "Kubernetes", "Testing", "Unreal", "UX/UI", "Figma"],
  languages: [
    { name: "English", level: 75 },
    { name: "Spanish", level: 100 },
    { name: "German", level: 75 }
  ],
  links: [
    { label: "LinkedIn", url: "https://www.linkedin.com/in/demayorgaherrera/" },
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
          'Led the development of <b>customization modules</b> (frontend and 3D) for sportswear’s PDP using <b>Three.js</b> and <b>Unity</b>, enhancing user engagement and its end-to-end testing with <b>Jest</b> and <b>Cypress</b>.',
          'Improved reliability and deployment speed of the adidas Checkout <b>backend</b> microservice by implementing CI/CD pipelines and infrastructure automation via <b>Jenkins</b>, <b>Kubernetes</b>, and <b>Grafana</b>, supporting daily transactions across <b>30+ countries</b>.',
          'Developed and maintained scalable frontend components using <b>ReactJS</b> and <b>Redux</b> for the Global Team Sports platform, contributing to a personalized user experience for <b>20+ international markets</b>.',
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
            "Research Internship in AG HCI and Computer Graphics at Technical University of <b>Kaiserslautern</b> during 2018",
            "Designed and developed a <b> VR & haptic-based</b>  training simulator for trauma orthopedic surgery in Unity and Oculus, improving trainee performance during pilot tests."
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
          company: "COLEGIO ANDINO - DEUTSCHE SCHULE BOGOTA",
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


export const gameDeveloper: CvData = {
  contact: contactDefault,
  occupation: {
    value: "GAME DEVELOPER",
    acronym: 'VC',
  },
  colors: {
    primary: '#2c2e81',
    secondary: '#808183',
  },
  aboutme: `Visual computing developer with
      experience in casual games and
      serious simulators, most of the
      time with Unity and VR/AR.
      Skilled in frontend technologies
      such as React and Three.js to
      create interactive 3D applications
      and engaging user interfaces.
      Focused on delivering immersive
      digital solutions that enhance
      user experience, particularly in
      industrial and web contexts.
      Currently based in Germany and
      eager to contribute to innovative
      teams while continuing to grow
      my expertise`,
  skills: ['C#', 'Unity', 'C++', 'Unreal', 'UI/UX', 'Javascript', 'React', 'WebGL', 'Three.Js', 'PixiJs', 'Python', 'VR', 'Figma', 'Blender', 'Sketchup', 'Godot', 'AR', '3dMax'],
  languages: [
    { name: "English", level: 75 },
    { name: "Spanish", level: 100 },
    { name: "German", level: 75 }
  ],
  links: [
    { label: "LinkedIn", url: "https://www.linkedin.com/in/demayorgaherrera/" },
    { label: "GitHub", url: "https://github.com/damayor" },
    { label: "Behance", url: "https://www.behance.net/dev3d_may" }
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
          'Developed and maintained scalable frontend components using <b>ReactJS</b> and <b>Redux</b> for the Global Team Sports platform, contributing to a personalized user experience for <b>20+ international markets</b>.',
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
          company: "COLEGIO ANDINO - DEUTSCHE SCHULE BOGOTA",
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
    value: "Senior Software Engineer",
    acronym: 'SR',
  },
  colors: {
    primary: '#287848',
  },
  aboutme: `Software Engineer with 5 years
    of experience in large-scale
    platforms at a multinational,
    combining strong foundations in
    Linux Bash, and automation.
    Skilled in Ci/CD, monitoring,
    performance optimization, and
    ensuring scalable, resilient
    systems. Experienced in bridging
    software engineering with SRE
    practices to deliver reliable
    solutions. Currently based in
    Germany and motivated to
    strengthen innovative teams with
    my expertise.`,
  skills: ['Linux', 'ci/cd','jenkins','groovy','SRE','DevOps','Kubernetes','Yaml','Observability','Grafana','Docker','Instana','Kibana','Prometheus','Aws','Opsgenie','NodeJs','C++','React','JS/TS','Angular','Java'],
  languages: [
    { name: "English", level: 75 },
    { name: "Spanish", level: 100 },
    { name: "German", level: 75 }
  ],
  links: [
    { label: "LinkedIn", url: "https://www.linkedin.com/in/demayorgaherrera/" },
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
        role: 'Frontend Software Engineer',
        tasks: [
          'Enhanced reliability of the Checkout backend microservice by observability with <b>Grafana</b> and alerting integrations, supporting uninterrupted daily transactions across <b>30+ countries.</b>',
          `Participated in on-call rotations to troubleshoot and resolve
          production issues, ensuring <b>99.99%</b> microservice availability.`,
          `Refactored Jenkins pipelines and implemented CI/CD best
          practices for the Checkout service repository, cutting
          deployment time from <b>15 minutes to under 6 minutes</b>`,        
          'Developed and maintained scalable frontend components using <b>ReactJS</b> and <b>Redux</b> for the Global Team Sports platform, contributing to a personalized user experience for <b>20+ international markets</b>.',
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
          company: "COLEGIO ANDINO - DEUTSCHE SCHULE BOGOTA",
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