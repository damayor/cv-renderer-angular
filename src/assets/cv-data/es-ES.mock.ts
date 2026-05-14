import { Contact, CvData } from "../../app/interfaces/CVData";

const contactDefault : Contact = {
  fullname: "David Mayorga",
  email: "dr.mayorga20@gmail.com",
  phone: "+49 1525 2198970",
  location: "Berlin -> España (Julio 2026)",
  nationality: "Colombiano",
  // workStatus: "Transición a España desde Julio de 2026.",
  // visaStatus: 'Transicion a España desde Agosto 2026.',
  // titleRecongition: 'B.Sc. System- und Computertechnik (Anabin H+ / A4)'
}

const defaultSkills = {
    "Frontend": ["React","Next.js","Three.JS","TailwindCSS",  "Vue.js",],
    "Full-Stack": ["Angular","Node.js","Typescript","REST", "Python"],
    "Graphics": ['C++','C#',"Unreal","WebAssembly","Unity", "UI/UX", "Figma"],
    "CI/CD": ['Linux','Docker','Jenkins','K8',"YAML","Grafana","Elasticsearch"],
    "Tooling": ["Git","Storybook","Nest.js","ESLint","Photoshop","Jest"],
    "AI & LLMs": ["Claude","NotebookLM","Gemini","Copilot"],
  }

const appendedAboutMe = 
    `Actualmente radicado en Alemania y en proceso de
     relocalización a España. 
     Mi objetivo es aportar mi experiencia en equipos multinacionales 
     líderes como adidas, bajo una comunicación empática y proactiva.` 
    //  facilitando mi contratación mediante el proceso de Profesional Altamente Cualificado (PAC)

const languagesData = [
    { name: "Español", level: 100 , cefrLevel: 'C2' },
    { name: "Inglés", level: 83, cefrLevel: 'C1' },
    { name: "Alemán", level: 67, cefrLevel: 'B2' },
  ]

const defaultCourses = [
    { name: "ANGULAR: DE CERO A EXPERTO - EDICION 2025", institution: "{D/T} DevTalles", date: "Jul 2025" },
    { name: "C++ PROGRAMMING - FROM BEGINNER TO BEYOND", institution: "Udemy", date: "May 2025" },
]

const defaultEducation = {
    title: "Formacion", 
    entries: [
        {
          company: "Universidad de los Andes",
          role: "M.Sc. Ingeniería de Sistemas y Computación",
          dates: " 2019",
          location: "Bogotá, Colombia",
          tasks: [
            'GPA: 4.5/5.0',
            'Opción académica en Computación Visual e Interactiva.',
            // 'Monitor de investigación encargado del diseño y desarrollo del simulador de entrenamiento en <b>RV</b> e <b>interaccion háptica</b> para cirugías de trauma ortopédico.'
          ]
        },
        {
          company: "Teknische Universität KL",
          role: "Pasantia de Investigación",
          dates: " 2018",
          location: "Kaiserslautern",
          tasks: [
            'Optimización de reconocimiento distante en realidad aumentada con OpenCV para Hololens en el grupo AG HCI and Computer Graphics',
          ]
        },
        {
          company: "Universidad de los Andes",
          role: "Ingeniería de Sistemas y Computación",
          dates: "2017",
          location: "Bogotá, Colombia",
          tasks: [
            'GPA: 4.1/5.0',
            'Reconocimiento por la entidad federal alemana Anabin (ZAB) como carrera equivalente a <b>System- und Computertechnik</b> (Abschlussklasse A4/H+)',
            'Beca "Quiero Estudiar" otorgada a los mejores puntajes nacionales del ICFES.',
          ]
        },
        {
          company: "COLEGIO ANDINO",
          role: "Bachillerato Colegio Alemán",
          dates: "2012",
          location: "Bogotá, Colombia",
          tasks: [
            "Sprachdiplom: B2"          
          ]
        }
      ]
}

const defaultExtraCurricular = {
    title: "Actividades Extra-Curriculares", 
      entries: [
        {
          company: "Castel Magazine Models",
          role: "Modelaje",
          dates: "Jun 2024 - Jun 2025",
          location: " ",
          tasks: [
            "Modelo comercial especializado en expresión corporal, gestión de eventos y UGC.",
            // "Creador de contenido desarrollando contenido visual auténtico y UGC para marketing en redes sociales",
          ]
        },
        {
          company: "Universidad de los Andes",
          role: "Miembro del Grupo de Teatro",
          dates: "Ene 2016 - Jun 2018",
          location: " ",
          tasks: [
            "Participación en actuaciones, desarrollando habilidades de trabajo en equipo, improvisación y comunicación."
          ]
        },
      ]
}

const freelancerExperience = {
    company: 'Freelancer',
    location: 'Berlin',
    dates: 'Ago 2025 - present',
    role: 'Ingeniero Full-Stack & Especialista en Automatización',
    tasks: [
      'Renderizado de maquetas 3D desde Unreal y 3Ds Max dentro de entornos <b>Three.js</b> para lograr resultados web de alto desempeño en móviles.',
      'Uso de <b>LLMs</b> (Claude, Gemini, NotebookLM) y metodologías de Spec Driven Development para prototipar rápidamente.',
      'Arquitectura de visores multi-sensor para el dataset nuScenes, integrando <b>FastAPI (Python)</b> y R3F para la visualización 3D de nubes de puntos <b>LiDAR</b>.',
      // 'Desarrollo full-stack de un generador de CVs en <b>Angular</b>, utilizando <b>RxJS</b> para la gestión de estado reactivo, renderizado dinámico y exportación a PDF.'
    ],
    achievements: [
      'Consolidé el adidas Tech Hub como referente tecnológico en Colombia al encabezar el Programa Campus de adidas, liderando la mentoría técnica y capacitación de ingenieros de alto potencial'
    ]
  }

//CHK
export const seniorfrontend: CvData = {
  contact: contactDefault,
  occupation: {
    value: "Ingeniro Frontend Senior",
    acronym: 'SF'
  },
  colors: {
    primary: '#48011d',
  }, 
  aboutme: `Ingeniero de Software con 5+ años de trayectoria
  en proyectos web de gran escala, especializado en el ecosistema NodeJS y
  soluciones visuales de alto rendimiento con React, R3F y Angular. 
  Bases sólidas en C++, bash y SRE/DevOps, garantizando la observabilidad, trazabilidad 
  y escalabilidad de arquitecturas críticas. ${appendedAboutMe}`,
  skills: {
    "Frontend": ["React","Next.js","Three.JS",/*"Canvas",*/"TailwindCSS",  "Vue.js",],
    "Full-Stack": ["Angular","Node.js","Typescript","REST", "Python" /*"GraphQL",*/],
    "Graphics": ['C++','C#',"Unreal","WebAssembly","Unity", "UI/UX", "Figma"],
    "CI/CD": ['Linux','Docker','Jenkins','K8',"YAML","Grafana","Elasticsearch"],
    "Tooling": ["Git","Storybook","Nest.js","ESLint","Photoshop","Jest"],
    "AI & LLMs": ["Claude","NotebookLM","Gemini","Copilot",],
  },
  languages: languagesData,
  links: [
    { label: "Portafolio", url: "https://mayinteractive.io/" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/davidmayorga-software/" },
    { label: "Github", url: "https://github.com/damayor" },
  ],
  courses: defaultCourses,
  experiences: [
    {title: "Experiencia Laboral", entries: [ 
      freelancerExperience,
      {
        company: 'ADIDAS',
        location: 'Bogotá',
        dates: 'May 2021 - Jun 2025',
        role: 'Software Engineer',
        tasks: [
          'Desarrollo y mantenimiento de componentes frontend escalables usando <b>ReactJS</b> y <b>Next.js</b> para la plataforma Global Team Sports, contribuyendo a una experiencia de usuario personalizada para <b>20+</b> mercados internacionales.',
          'Liderzago del desarrollo de <b>módulos de personalización</b> (frontend y 3D) para PDP de ropa deportiva utilizando <b>Three.js</b> y <b>Unity</b>, sus pruebas con <b>Jest</b> y <b>Cypress</b>.',
          'Refactor del microservicio <b>backend de Checkout</b> de adidas mediante la implementación de pipelines de CI/CD y automatización de infraestructura con <b>Jenkins</b>, <b>Kubernetes</b> y <b>Grafana</b>, soportando transacciones diarias en <b>30+ países</b>.',
          'Contribución a la arquitectura frontend del portal web <b>Yeezy</b> mediante <b>programación funcional</b> en Typescript, logrando una mejora en el desempeño.',
        ],
      },
      {
        company: 'UMBRA 3D STUDIO - INTERACTIVE',
        location: 'Bogotá',
        dates: 'Ene 2020 - Sep 2020',
        role: 'Desarrollador Frontend',
        tasks: [
          'Creación de <b>aplicaciones 3D inmersivas</b> con <b>React</b> y <b>Unreal/C++</b>, así como visualizaciones interactivas de masterplans para el sector inmobiliario (PropTech).',  
          'Desarrollo de juegos casuales en <b>Unity</b> y <b>Realidad Virtual</b> para apoyar campañas de marketing en centros comerciales.',
        ]
      }
    ]},
    defaultEducation,
    // defaultExtraCurricular
  ],
};

export const frontend: CvData = {
  ...seniorfrontend,
  occupation: {
    value: "Ingeniero Frontend - Experiencia en Typescript y Node.js",
    acronym: 'FE'
  },
}

export const frontend3d: CvData = {
  ...seniorfrontend,
  occupation: {
    value: "Ingeniero de Software - Enfoque en C++",
    // value: "Ingeniero Frontend - Enfoque en Computacion Visual y C++",
    acronym: 'FV',
  },
  skills: {
    "Graphics": ['C++',"WebGL", "Unreal","XR","Unity", "UI/UX", "Figma"],
    "Frontend": ["React","Three.JS", /*"R3F",*/"SCSS","TailwindCSS","Next.js" ],
    "Full-Stack": ["Node.js","SQL","Typescript", "Nest.js", "REST", "Python", "SQL"],
    "CI/CD": ['Linux','Docker','Jenkins','K8',"YAML","Grafana"],
    "Tooling": ["Git","Vite","Storybook","MongoDB", "Jest", "Vibe coding"],
    "AI & LLMs": ["Copilot","Claude","NotebookLM","Gemini","GPT",],
  },

  //C++
  aboutme: 
    `Ingeniero de Software con amplia trayectoria en proyectos web de gran escala, con bases solidas en C++, Linux bash y
      SRE, asegurando monitoreo, trazabilidad 
      y visualización. Tambien especializado en el ecosistema NodeJS, y React, y soluciones interactivas 
      con Three.JS y Unity. Actualmente radicado 
      en Alemania, caracterizando 
      un rol de apoyo constante al equipo y a la vez, con comunicación 
      empática en las relaciones interpersonales. `,
  //web graphics 
  // aboutme: 
  // `Ingeniero de Software con amplia trayectoria en proyectos web de gran escala, especializado en el ecosistema NodeJS, y React, y soluciones interactivas 
  //   con Three.JS y Unity. 
  //   Tambien con bases solidas en C++, Linux bash y
  //   SRE, asegurando monitoreo, trazabilidad 
  //   y visualización. Tambien 
  //   Actualmente radicado 
  //   en Alemania, caracterizando 
  //   un rol de apoyo constante al equipo y a la vez, con comunicación 
  //   empática en las relaciones interpersonales. `,
}

//todo
export const juniorfrontend: CvData = {
  ...seniorfrontend,
  occupation: {
    value: "Ingeniero Frontend - Enfoque en Typescript y Node.js",
    acronym: 'FJ'
  },
  contact: contactDefault,
  colors: {
    primary: '#48011d',
  },
  aboutme: `
    Ingeniero Frontend con más de 4 años de experiencia
    construyendo plataformas web y aplicaciones
    especializados en Node.js,
    TypeScript, y soluciones UI/UX usando
    TailwindCSS, SCSS, y experiencias interactivas
    con Three.js. Tengo un profundo entendimiento de prácticas CI/CD
    y entornos SRE. ${appendedAboutMe}`,
  skills: {
    "Frontend": ["React","Node.JS","TailwindCSS", "Three.js", "JS", "TS"],
    // "Full-Stack": ["Angular","RxJs","Typescript","Node.js","REST" /*"GraphQL",*/],
    "Graphics": ['C++',"Unity", 'C#',"Unreal","XR", "UI/UX", "Figma"],
    // "CI/CD": [/*'Linux',*/'Docker','Jenkins','K8',"YAML","Grafana","Elasticsearch"],
    "Tooling": ["Git","Vite","Storybook","Nest.js","Docker", "Kubernetes"],
    "AI & LLMs": ["Copilot","Claude","NotebookLM","Gemini","GPT",],
  },
  languages: languagesData,
  links: [
    { label: "Arbeitsmappe", url: "https://mayinteractive.io/" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/davidmayorga-software/" },
    { label: "Github", url: "https://github.com/damayor" },
  ],
  courses: defaultCourses,
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
        role: 'Desarrollador de Videojuegos',
        tasks: [
          'Desarrollo y mantenimiento de videojuegos móviles hyper-casual utilizando <b>Unity</b> y <b>Unreal/C++</b>, mejorando el engagement del usuario y la experiencia UI/UX.',
        ]
      },
      {
        company: 'UMBRA 3D STUDIO - INTERACTIVE',
        location: 'Bogotá',
        dates: 'Ene 2020 - Sep 2020',
        role: 'Desarrollador Frontend',
        tasks: [
          'Creación de <b>aplicaciones 3D inmersivas</b> con <b>React</b> y <b>Unreal/C++</b>, así como visualizaciones interactivas de masterplans para el sector inmobiliario (PropTech).',  
          'Desarrollo de juegos casuales en <b>Unity</b> y <b>Realidad Virtual</b> para apoyar campañas de marketing en centros comerciales.',
        ]
      }
    ]},
    //ToDo
    {title: "Education", 
      entries: [
        {
          company: "Universidad de los Andes",
          role: "Bachelor on Systems and Computing Engineering",
          dates: "2017",
          location: "Bogotá, Colombia",
          tasks: [
            "Recognized by Anabin (ZAB) as equivalent to the German <b>System- und Computertechnik</b> (Abschlussklasse A4/H+).",
            "Academic option in Visual and Computing Interaction",
            "Scholarship <b>\"Quiero Estudiar\"</b> given to the best national ICFES scores",
            "Role as research monitor focused on the <b>VR & haptic-based</b> training simulator for trauma orthopedic surgery in <b>Unity</b> and <b>Oculus</b>"
          ]
        },
        {
          company: "COLEGIO ANDINO",
          role: "Bachillerato",
          dates: "2012",
          location: "Bogotá, Colombia",
          tasks: [
            "Colegio Aleman en Bogota",
            "Sprachdiplom B2"          
          ]
        }
      ]
    }
  ],
}


//C++, full stack
export const seniorSoftware: CvData = {
  contact: contactDefault,
  occupation: {
    value: "Ingeniero Software Senior",
    acronym: 'SE'
  },
  colors: {
    primary: '#48011d',
  },
  aboutme: 
    `Ingeniero de Sistemas y Computacion 
      con 8 años de experiencia especializado
      en plataformas web responsive desplegadas en mas de 30 paises, 
      desarrolladas con Typescript,
      ReactJS, NodeJS, y soluciones interactivas 
      con Three.JS y Unity. Bases solidas en C++, Linux bash y
      SRE, asegurando monitoreo, trazabilidad 
      y visualización. Actualmente radicado 
      en Alemania, caracterizando 
      un rol de apoyo constante al equipo y a la vez, con comunicación 
      empática en las relaciones interpersonales. `,
  skills: defaultSkills,
  languages: languagesData,
  links: [
    { label: "Portafolio", url: "https://mayinteractive.io/" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/davidmayorga-software/" },
    { label: "Github", url: "https://github.com/damayor" },
  ],
  courses: defaultCourses,
  experiences: [
    {title: "Experiencia Laboral", entries: [ 
      freelancerExperience,
      {
        company: 'ADIDAS',
        location: 'Bogotá',
        dates: 'May 2021 - Jun 2025',
        role: 'Software Engineer',
        tasks: [
          'Liderzago del desarrollo de <b>módulos de personalización</b> (frontend y 3D) para PDP de ropa deportiva utilizando <b>Three.js</b> y <b>Unity</b>, mejorando la interacción del usuario y sus pruebas end-to-end con <b>Jest</b> y <b>Cypress</b>.',
    
          'Mejora de la confiabilidad y la velocidad de despliegue del microservicio <b>backend de Checkout</b> de adidas mediante la implementación de pipelines de CI/CD y automatización de infraestructura con <b>Jenkins</b>, <b>Kubernetes</b> y <b>Grafana</b>, soportando transacciones diarias en <b>30+ países</b>.',
          
          'Desarrollo y mantenimiento de componentes frontend escalables usando <b>ReactJS</b> y <b>Next.js</b> para la plataforma Global Team Sports, contribuyendo a una experiencia de usuario personalizada para <b>20+</b> mercados internacionales.',
          
          'Contribución a la arquitectura frontend del <b>portal de e-commerce Yeezy</b>, reconocido por su diseño minimalista y el uso de <b>programación funcional en Typescript</b>, logrando una mejora en el desempeño y tiempo de carga.',

        ]
      },
      {
        company: 'MADBRICKS',
        location: 'Remote',
        dates: 'Sep 2020 - Dec 2020',
        role: 'Desarrollador de Videojuegos',
        tasks: [
          'Desarrollo y mantenimiento de videojuegos móviles hyper-casual utilizando <b>Unity</b> y <b>Unreal/C++</b>, mejorando el engagement del usuario y el desarrollo UI/UX.',
        ]
      },
      {
        company: 'UMBRA 3D STUDIO - INTERACTIVE',
        location: 'Bogotá',
        dates: 'Ene 2020 - Sep 2020',
        role: 'Desarrollador Frontend',
        tasks: [
          'Creación de <b>aplicaciones 3D inmersivas</b> con <b>React</b> y <b>Unreal/C++</b>, así como visualizaciones interactivas de masterplans para el sector inmobiliario (PropTech).',  
          'Desarrollo de juegos casuales en <b>Unity</b> y <b>Realidad Virtual</b> para apoyar campañas de marketing en centros comerciales.',
        ]
      }
    ]},
    defaultEducation,
    defaultExtraCurricular
  ],
};

export const ingenieroFullStack: CvData = {
  ...seniorSoftware,
  occupation: {
    value: "Ingeniero de Software",
    acronym: 'FSE'
  },
  aboutme: `Ingeniero de Sistemas y Computacion (M. Eng.) 
      con 6 años de experiencia especializado
      en plataformas web responsive desplegadas en mas de 30 paises, 
      desarrolladas con Typescript,
      ReactJS, NodeJS, y soluciones interactivas 
      con Three.JS y Unity. Bases solidas en C++, Linux bash, LLMs y
      SRE asegurando monitoreo, trazabilidad 
      y visualizacion. ${appendedAboutMe}`,
  skills: defaultSkills,
}

//ToDo
export const graphicsEngineer: CvData = {
  contact: contactDefault,
  occupation: {
    value: "Desarrollado de Vieojuegos",
    acronym: 'VC',
  },
  colors: {
    primary: '#2c2e81',
  },
  aboutme: `Ingeniero de Computación Visual con
      experiencia en juegos casuales y
      simuladores serios, la mayoría del
      tiempo con Unity y VR/AR.
      Competente en tecnologías frontend
      como React y Three.js para
      crear aplicaciones 3D interactivas
      e interfaces de usuario atractivas.
      Enfocado en entregar
      soluciones digitales inmersivas que mejoren
      la experiencia del usuario, particularmente en
      contextos industriales y web.
      Actualmente radicado en Alemania y
      ansioso por contribuir a equipos
      innovadores mientras continúo creciendo
      en mi experiencia`,
  skills: defaultSkills,
  languages: languagesData,
  links: [
    { label: "Portafolio", url: "https://mayinteractive.io/" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/davidmayorga-software/" },
    { label: "GitHub", url: "https://github.com/damayor" },
    { label: "Behance", url: "https://www.behance.net/may_interactive" }
  ],
  courses: [
    { name: "Game Development with Unreal Engine 4", institution: "Udemy", date: "Ene 2020" },
    { name: "C++ PROGRAMMING - FROM BEGINNER TO BEYOND", institution: "Udemy", date: "May 2025" },
  ],
  experiences: [
    {title: "Experiencia Laboral", entries: [ 
      {
        company: 'ADIDAS',
        location: 'Bogotá',
        dates: 'May 2021 - Jun 2025',
        role: 'Frontend Software Engineer',
        tasks: [
          'Led the development of 3D customisation for sportswear using <b>Three.js</b> and <b>Unity</b>, enhancing web user engagement.',
          'Developed and maintained scalable frontend components using <b>ReactJS</b> and <b>Next.js</b> for the Global Team Sports platform, contributing to a personalized user experience for <b>20+ international markets</b>.',
          'Contributed to the front-end architecture of the <b>Yeezy e-commerce portal</b>, acclaimed for its minimalist design and <b>functional programming in Typescript</b>, resulting in a faster load time.'
        ]
      },
      {
        company: 'MADBRICKS',
        location: 'Remote',
        dates: 'Sep 2020 - Dec 2020',
        role: 'Desarrollador de Videojuegos',
        tasks: [
          'Desarrollo y mantenimiento de videojuegos móviles hyper-casual utilizando <b>Unity</b> y <b>Unreal/C++</b>, mejorando el engagement del usuario y la experiencia UI/UX.',
        ]
      },
      {
        company: 'UMBRA 3D STUDIO - INTERACTIVE',
        location: 'Bogotá',
        dates: 'Ene 2020 - Sep 2020',
        role: 'Desarrollador Frontend',
        tasks: [
          'Creación de <b>aplicaciones 3D inmersivas</b> con <b>React</b> y <b>Unreal/C++</b>, así como visualizaciones interactivas de masterplans para el sector inmobiliario (PropTech).',  
          'Desarrollo de juegos casuales en <b>Unity</b> y <b>Realidad Virtual</b> para apoyar campañas de marketing en centros comerciales.',
        ]
      }
    ]},
    defaultEducation,
    defaultExtraCurricular
  ],
};

//ToDo
export const sre: CvData = {
  contact: contactDefault,
  occupation: {
    value: "Ingeniero de Software / SRE",
    acronym: 'DO',
  },
  colors: {
    primary: '#287848',
  },
  aboutme: `Ingeniero de Software con 5 años
    de experiencia en plataformas
    de gran escala en una multinacional,
    combinando bases sólidas en LLMs,
    Linux Bash y automatización DevOps.
    Competente en CI/CD, monitoreo,
    optimización de rendimiento y
    aseguramiento de sistemas
    escalables y resilientes. Experimentado en vincular
    ingeniería de software con prácticas
    de SRE para entregar soluciones
    confiables. ${appendedAboutMe}`,
  skills: {
    "CI/CD": ['Docker','Jenkins','K8',"YAML","Grafana","YAML"],
    "Full-Stack": ["React","Angular","Node.js","Typescript", "Next.js", "bash", "Python"],
    "Observabilidad": ['Grafana','Instana','Elasticsearch','Prometheus','Opsgenie'],
    "Tooling": ['Linux','AWS',"Git","Vite","Storybook","ESLint", "Jest", 'SQL'],
    "AI & LLMs": ["Copilot","Claude","NotebookLM","Gemini","GPT",],
  },
  languages: languagesData,
  links: [
    { label: "LinkedIn", url: "https://www.linkedin.com/in/davidmayorga-software/" },
    { label: "Stackshare", url: "https://stackshare.io/damayor/software-engineer" },
  ],
  courses: [
    { name: "C++ PROGRAMMING - FROM BEGINNER TO BEYOND", institution: "Udemy", date: "May 2025" },
  ],
  experiences: [
    {title: "Experiencia Laboral", entries: [ 
      freelancerExperience,
      {
        company: 'ADIDAS',
        location: 'Bogotá',
        dates: 'May 2021 - Jun 2025',
        role: 'Software Engineer',
        tasks: [
          'Mejoré la confiabilidad del microservicio backend de Checkout mediante observabilidad con <b>Grafana</b> e integraciones de alertas, soportando transacciones diarias ininterrumpidas en <b>30+ países.</b>',
          `Participé en rotaciones on-call para diagnosticar y resolver
          problemas de producción, asegurando disponibilidad del microservicio del <b>99.99%</b>.`,
          `Refactoricé pipelines de Jenkins e implementé las mejores
          prácticas de CI/CD para el repositorio del servicio de Checkout, reduciendo
          el tiempo de despliegue de <b>15 minutos a menos de 6 minutos</b>`,        
          'Desarrollé y mantuve componentes frontend escalables usando <b>ReactJS</b> y <b>Next.js</b> para la plataforma Global Team Sports, contribuyendo a una experiencia de usuario personalizada para <b>20+</b> mercados internacionales.',
        ]
      },
      {
        company: 'UMBRA 3D STUDIO - INTERACTIVE',
        location: 'Bogotá',
        dates: 'Ene 2020 - Sep 2020',
        role: 'Desarrollador Frontend',
        tasks: [
          'Creación de <b>aplicaciones 3D inmersivas</b> con <b>React</b> y <b>Unreal/C++</b>, así como visualizaciones interactivas de masterplans para el sector inmobiliario (PropTech).',  
          'Desarrollo de juegos casuales en <b>Unity</b> y <b>Realidad Virtual</b> para apoyar campañas de marketing en centros comerciales.',
        ]
      }
    ]},
    defaultEducation,
  ],
};

export const contentcreator: CvData = {
  contact: contactDefault,
  occupation: {
    value: "Ingeniero de Software Senior",
    acronym: 'CC'
  },
  colors: {
    primary: '#48011d'
  },
  aboutme: `Ingeniero de Software con 8 años
    de experiencia en plataformas web
    de gran escala en una multinacional,
    especializado en ReactJS, NodeJS,
    y soluciones interactivas con
    Unity, Three.js y Unreal. Bases
    sólidas en C++, Linux bash, LLMs 
    gestionando prácticas de Ingeniería
    de Confiabilidad del Sitio, asegurando
    monitoreo, rendimiento y
    escalabilidad. ${appendedAboutMe}`,
  skills: {
    "Servicio": ["Servicio al cliente","Gestión de inventario", "Red","Resolución de problemas",],
    "Social": [ "Instagram", "TikTok", "LinkedIn", "Facebook" ],
    "Habilidades Blandas":["Trabajo en equipo", "Solución de problemas"]
  },
  languages: languagesData,
  links: [
    { label: "LinkedIn", url: "https://www.linkedin.com/in/davidmayorga-software/" },
    { label: "Github", url: "https://github.com/damayor" },
    { label: "Instagram - Professional", url: "https://www.instagram.com/may.interactive/" },
    { label: "Instagram - Personal", url: "https://www.instagram.com/davidmay___/" },

  ],
  courses: defaultCourses,
  experiences: [
    {title: "Experiencia Laboral", entries: [
      {
        company: 'ADIDAS',
        location: 'Bogotá',
        dates: 'May 2021 - Jun 2025',
        role: 'Software Engineer',
        tasks: [
          'Lideré el desarrollo de <b>módulos de personalización</b> (frontend y 3D) para PDP de ropa deportiva utilizando <b>Three.js</b> y <b>Unity</b>, mejorando la interacción del usuario y sus pruebas end-to-end con <b>Jest</b> y <b>Cypress</b>.',
          'Mejoré la confiabilidad y velocidad de despliegue del microservicio <b>backend de Checkout</b> de adidas implementando pipelines de CI/CD y automatización de infraestructura mediante <b>Jenkins</b>, <b>Kubernetes</b> y <b>Grafana</b>, soportando transacciones diarias en <b>30+ países</b>.',
          'Desarrollé y mantuve componentes frontend escalables usando <b>ReactJS</b> y <b>Next.js</b> para la plataforma Global Team Sports, contribuyendo a una experiencia de usuario personalizada para <b>20+</b> mercados internacionales.',
          'Contribuí a la arquitectura frontend del <b>portal de e-commerce Yeezy</b>, aclamado por su diseño minimalista y <b>programación funcional en Typescript</b>, resultando en un tiempo de carga más rápido.'
        ]
      },
      {
        company: 'MADBRICKS',
        location: 'Remote',
        dates: 'Sep 2020 - Dec 2020',
        role: 'Desarrollador de Videojuegos',
        tasks: [
          'Desarrollo y mantenimiento de videojuegos móviles hyper-casual utilizando <b>Unity</b> y <b>Unreal/C++</b>, mejorando el engagement del usuario y la experiencia UI/UX.',
        ]
      },
      {
        company: 'UMBRA 3D STUDIO - INTERACTIVE',
        location: 'Bogotá',
        dates: 'Ene 2020 - Sep 2020',
        role: 'Desarrollador Frontend',
        tasks: [
          'Creación de <b>aplicaciones 3D inmersivas</b> con <b>React</b> y <b>Unreal/C++</b>, así como visualizaciones interactivas de masterplans para el sector inmobiliario (PropTech).',  
          'Desarrollo de juegos casuales en <b>Unity</b> y <b>Realidad Virtual</b> para apoyar campañas de marketing en centros comerciales.',
        ]
      }
    ]},
    defaultEducation,
     {
      title: "Experiencia Adicional",
      entries: [
        {
          company: "Castel Magazine Models",
          role: "Modelo de Moda",
          dates: "Jun 2024 - Jun 2025",
          location: "Bogotá",
          tasks: [
            "Creador de contenido desarrollando contenido visual auténtico y UGC para marketing en redes sociales",
            "Modelo comercial especializado en fotografía de posado, expresión corporal y gestión de eventos.",
          ]
        }
      ]
    }
  ],
};


export const itSupport: CvData = {
  contact: contactDefault,
  occupation: {
    value: "Agente de Soporte TI",
    acronym: 'ITS'
  },
  colors: {
    primary: '#2c2e81'
  },
  aboutme: `Profesional confiable y orientado a los detalles con experiencia práctica
    en soporte de equipos de TI, inventario y operaciones diarias.
    Interés fuerte en roles de Soporte TI y Mesa de Ayuda, con trasfondo
    en ingeniería de software y mentalidad enfocada en el cliente. Aprendiz rápido
    con fuertes habilidades de comunicación. ${appendedAboutMe}`,
  skills: {
    "Servicio": ["Servicio al cliente","Gestión de inventario", "Red","Resolución de problemas",],
    "Tech": [
        "macOS", "Linux",
        "Windows","Microsoft Office", "Vibe coding"
    ],
    "Habilidades Blandas":["Trabajo en equipo", "Solución de problemas"]
  },
  languages: languagesData,
  links: [
    { label: "LinkedIn", url: "https://www.linkedin.com/in/davidmayorga-software/" },
  ],
  courses: [
  ],
  experiences: [
    {title: "Experiencia Laboral", entries: [
      {
        company: 'ADIDAS',
        location: 'Bogotá',
        dates: 'May 2021 - Jun 2025',
        role: 'Software Developer',
        tasks: [
          'Desarrollé y mantuve componentes frontend escalables usando <b>ReactJS</b> y <b>Next.js</b> para la plataforma Global Team Sports, contribuyendo a una experiencia de usuario personalizada.',
          'Apoyé operaciones de retail durante días de alto consumo como Navidad y Black Friday, asistiendo con <b>ventas, organización de inventario</b> y <b>gestión de almacén</b>.',
        ]
      },

      {
        company: 'UMBRA 3D STUDIO - INTERACTIVE',
        location: 'Bogotá',
        dates: 'Ene 2020 - Sep 2020',
        role: 'Software Developer',
        tasks: [
          'Ingeniero de sistemas responsable del desarrollo, mantenimiento y <b>soporte 24/7</b> de sitios web de la empresa para dos marcas y sus despliegues montados en servidores FTP o Wordpress',
        ]
      },
      {
        company: "COLIVRI Lab - Universidad de los Andes",
        role: "Monitor de Investigacion",
        dates: "Jun 2017 - Ago 2019",
        location: "Bogotá",
        tasks: [
          "Responsable a cargo de laboratorios de computación, proporcionando laptops y otros dispositivos periféricos a estudiantes.",
          "Apoyando demostraciones basadas en proyectos de robótica y XR, <b>gestionando inventario</b> de dispositivos del laboratorio",
        ]
      },
    ]},
    defaultEducation,
     {title: "Experiencia Adicional", 
      entries: [
        {
          company: "Universidad de los Andes",
          role: "Miembro del Grupo de Teatro",
          dates: "Ene 2016 - Jun 2018",
          location: "Bogotá",
          tasks: [
            "Participación en actuaciones y obras de teatro, desarrollando habilidades de trabajo en equipo, improvisación y comunicación."
          ]
        },
      ]
    }
  ],
};