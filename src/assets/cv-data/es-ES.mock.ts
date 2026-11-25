import { Contact, CvData, SectionTitles } from "../../app/interfaces/CVData";
import { environment } from '../../environments/environment';

const sectionTitles: SectionTitles = {
  aboutMe: "Perfil Profesional",
  skills: "Habilidades",
  languages: "Idiomas",
  links: "Links",
  courses: "Cursos",
  personalDetails: "Datos Personales",
  workAuthorization: "Autorización laboral",
  visaStatus: "Visado",
  titleRecognition:"Reconocimiento académico"
}

const isLatam = environment.cvScope == 'CO' || environment.cvScope == 'AM';

const contactDefault : Contact = {
  fullname: "David Mayorga",
  email: "dr.mayorga20@gmail.com",
  phone: isLatam ? "+57 3123344836": "+49 1525 2198970",
  location: "Bogotá, Colombia",
  nationality: "Colombiano",
  // workStatus: "Transición a España desde Julio de 2026.",
  // visaStatus: 'Transicion a España desde Agosto 2026.',
  titleRecognition: 'Equivalencia a Grado universitario (NARIC-España, RD 889/2022)',
  arbeitsErlaubnis: environment.cvScope == 'AM'
    ? 'Radicado en Bogotá. Disponible para trabajo remoto en América y abierto a reubicación.'
    : 'Disponible para trabajo 100% remoto desde Bogotá y abierto a reubicación. Se requiere patrocinio de visado.'
}

const defaultSkills = {
    "Frontend": ["React","Next.js","Three.JS","TailwindCSS",  "Vue.js",],
    "Full-Stack": ["Angular","Node.js","Typescript","REST", "Python"],
    "Graphics": ['C++','C#',"Unreal","WebAssembly","Unity", "UI/UX", "Figma"],
    "CI/CD": ['Linux','Docker','Jenkins','K8s',"YAML","Grafana","Elasticsearch"],
    "Tooling": ["Git","Storybook","Nest.js","ESLint","Jest"],
    "AI & LLMs": ["Claude Code","Gemini Notebook","Codex"],
  }

const appendedAboutMe = 
    `${environment.cvScope === 'CO'
      ? '' // El header ya dice Bogotá; abierto a presencial/híbrido/remoto (ver CLAUDE.md > Work-mode availability)
      : environment.cvScope === 'AM'
      ? 'Radicado en Bogotá, disponible para trabajo remoto en América y abierto a reubicación si es necesario.'
      : 'Radicado en Bogotá, disponible para trabajo 100% remoto y abierto a reubicación si es necesario.'
    }
    Caracterizando un rol de apoyo constante a equipos multiculturales, 
    bajo una comunicación empática y proactiva.` 
    //  facilitando mi contratación mediante el proceso de Profesional Altamente Cualificado (PAC)

const languagesData = [
    { name: "Español", level: 100 , cefrLevel: 'C2' },
    { name: "Inglés", level: 83, cefrLevel: 'C1' },
    { name: "Alemán", level: 67, cefrLevel: 'B2' },
  ]

const defaultCourses = [
    { "name": "Claude Code in Action", "institution": "Anthropic", "date": "Jun 2026" },
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
            // 'Reconocimiento por la entidad federal alemana Anabin (ZAB) como carrera equivalente a <b>System- und Computertechnik</b> (Abschlussklasse A4/H+)',
            isLatam
              ? 'Beca <b>"Quiero Estudiar"</b> otorgada a los mejores puntajes nacionales del ICFES.'
              : "Reconocido por el Ministerio de Ciencia, Innovación y Universidades (NARIC-España) como equivalente al nivel académico de <b>Grado universitario</b> (RD 889/2022).",
            
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
  title: "Contribuciones a la Industria",
  entries: [
    {
      company: "EMBAJADA DE COLOMBIA EN ALEMANIA",
      role: "Ponente",
      dates: "Jul 2026",
      location: "Berlín",
      tasks: [
        "\"Spec Driven Development: De prompts sin contexto a un verdadero método de Ingeniería de Software\" en la Primera Cumbre de IA de la Diáspora Colombiana en Alemania."
      ]
    },
    {
      company: "WE ARE DEVELOPERS",
      role: "Voluntario",
      dates: "Jul 2026",
      location: "Berlín",
      tasks: [
        "Atención a los asistentes durante los turnos asignados en el <b>World Congress</b> de We Are Developers."
      ]
    },
  ]
}

const freelancerExperience = {
    company: 'Freelancer',
    location: 'Berlin',
    dates: 'Ago 2025 - Oct 2026',
    role: 'Ingeniero Full-Stack & Especialista en Automatización',
    tasks: [
      'Desarrollo de un seguimiento de horas por tarea integrando <b>Google Sheets</b> mediante servidores <b>MCP</b> con Claude, que permite al equipo cumplir <b>38</b> horas semanales, ahorrando tiempo de gestión de proyectos.',
      'Arquitectura de visores multi-sensor para el dataset nuScenes, integrando Gemini Notebook, <b>FastAPI (Python)</b> y R3F para la visualización 3D de nubes de puntos <b>LiDAR</b>.',
      'Renderizado de maquetas 3D desde Unreal y 3Ds Max dentro de entornos <b>Three.js</b> para lograr resultados web de alto desempeño en móviles.',
      
      // 'Desarrollo full-stack de un generador de CVs en <b>Angular</b>, utilizando <b>RxJS</b> para la gestión de estado reactivo, renderizado dinámico y exportación a PDF.'
    ],
    achievements: [ ]
  }

export const seniorfrontend: CvData = {
  sectionTitles,
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
    "CI/CD": ['Linux','Docker','Jenkins','K8s',"YAML","Grafana","Elasticsearch"],
    "Tooling": ["Git","Storybook","Nest.js","ESLint","Jest"],
    "AI & LLMs": ["Claude Code","Gemini Notebook","Codex","MCPs"],
  },
  languages: languagesData,
  links: [
    { label: "Portafolio", url: "https://mayit.dev/" },
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
          // 'Desarrollo y mantenimiento de componentes frontend escalables usando <b>ReactJS</b> y <b>Next.js</b> para la plataforma Global Team Sports, contribuyendo a una experiencia de usuario personalizada para <b>20+</b> mercados internacionales.',
          'Liderzago del desarrollo de <b>módulos de personalización</b> (frontend y 3D) para PDP de ropa deportiva utilizando <b>Three.js</b> y <b>Unity</b>, sus pruebas con <b>Jest</b> y <b>Cypress</b>.',
          'Refactor del microservicio <b>backend de Checkout</b> de adidas mediante la implementación de pipelines de CI/CD y automatización de infraestructura con <b>Jenkins</b>, <b>Kubernetes</b> y <b>Grafana</b>, soportando transacciones diarias en <b>30+ países</b>.',
          // 'Contribución a la arquitectura frontend del portal web <b>Yeezy</b> mediante <b>programación funcional</b> en Typescript, logrando una mejora en el desempeño.',
        ],
        achievements: [
          'Formación y acompañamiento de <b>14</b> profesionales en transición de carrera en el Campus Program, desde fundamentos de programación hasta <b>TypeScript</b> y <b>ReactJS</b>.'
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
    value: "Ingeniero de Software - Enfoque en Computacion Visual",
    // value: "Ingeniero Frontend - Enfoque en Computacion Visual y C++",
    acronym: 'FV',
  },
  skills: {
    "Frontend": ["React","Three.JS", /*"R3F",*/"SCSS","TailwindCSS","Next.js" ],
    "Graphics": ['C++',"WebGL", "Unreal","XR","Unity", "UI/UX", "Figma"],
    "Full-Stack": ["Node.js","SQL","Typescript", "REST", "Python"],
    "CI/CD": ['Linux','Docker','Jenkins','K8s',"YAML","Grafana"],
    "Tooling": ["Git","Vite","Storybook","MongoDB", "Jest", "SDD"],
    "AI & LLMs": ["Claude Code", "Codex","Gemini Notebook","MCPs",],
  },

  //C++
  // aboutme: 
  //   `Ingeniero de Software con amplia trayectoria en proyectos web de gran escala, con bases solidas en C++, Linux bash y
  //     SRE, asegurando monitoreo, trazabilidad 
  //     y visualización. Tambien especializado en el ecosistema NodeJS, y React, y soluciones interactivas 
  //     con Three.JS y Unity. ${appendedAboutMe}`,
  //web graphics 
  aboutme: `Ingeniero de Software con amplia trayectoria en proyectos web de gran escala, especializado en el ecosistema NodeJS, y React, y soluciones interactivas 
    con Three.JS y Storybook. Bases sólidas en C++, Linux bash y
    SRE, asegurando monitoreo, trazabilidad 
    y visualización. ${appendedAboutMe} `,
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
    // "CI/CD": [/*'Linux',*/'Docker','Jenkins','K8s',"YAML","Grafana","Elasticsearch"],
    "Tooling": ["Git","Vite","Storybook","Nest.js","Docker", "Kubernetes"],
    "AI & LLMs": ["Claude Code", "Codex","Gemini Notebook","MCPs",],
  },
  languages: languagesData,
  links: [
    { label: "Arbeitsmappe", url: "https://mayit.dev/" },
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
          // 'Contributed to the front-end architecture of the <b>Yeezy e-commerce portal</b>, acclaimed for its minimalist design and <b>functional programming in Typescript</b>, resulting in a faster load time.'
        ],
        achievements: [
          'Formación y acompañamiento de 14 profesionales en transición de carrera en el Campus Program, desde fundamentos de programación hasta <b>TypeScript</b> y <b>ReactJS</b>.'
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

export const seniorSoftware: CvData = {
  sectionTitles,
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
      y visualización. ${appendedAboutMe}`,
  skills: defaultSkills,
  languages: languagesData,
  links: [
    { label: "Portafolio", url: "https://mayit.dev/" },
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
          'Liderzago del desarrollo de <b>módulos de personalización</b> (frontend y 3D) para PDP de ropa deportiva utilizando <b>Three.js</b> y <b>Unity</b>, contribuyendo a una experiencia de personalización para <b>20+</b> mercados internacionales.',
    
          'Mejora del despliegue del microservicio <b>backend de Checkout</b> de adidas mediante la implementación de pipelines de CI/CD y automatización de infraestructura con <b>Jenkins</b>, <b>Kubernetes</b> y <b>Grafana</b>, soportando transacciones diarias en <b>30+ países</b>.',
          
          // 'Desarrollo y mantenimiento de componentes frontend escalables usando <b>ReactJS</b> y <b>Next.js</b> para la plataforma Global Team Sports, contribuyendo a una experiencia de personalización para <b>20+</b> mercados internacionales.',
          
          // 'Contribución a la arquitectura frontend del <b>portal de e-commerce Yeezy</b>, reconocido por su diseño minimalista y el uso de <b>programación funcional en Typescript</b>, logrando una mejora en el desempeño y tiempo de carga.',

        ],
        achievements: [
          'Formación y acompañamiento de 14 profesionales en transición de carrera en el Campus Program, desde fundamentos de programación hasta <b>TypeScript</b> y <b>ReactJS</b>.'
        ]
      },
      // {
      //   company: 'MADBRICKS',
      //   location: 'Remote',
      //   dates: 'Sep 2020 - Dec 2020',
      //   role: 'Desarrollador de Videojuegos',
      //   tasks: [
      //     'Desarrollo y mantenimiento de videojuegos móviles hyper-casual utilizando <b>Unity</b> y <b>Unreal/C++</b>, mejorando el engagement del usuario y el desarrollo UI/UX.',
      //   ]
      // },
      {
        company: 'UMBRA 3D STUDIO - INTERACTIVE',
        location: 'Bogotá',
        dates: 'Ene 2020 - Sep 2020',
        role: 'Desarrollador Frontend',
        tasks: [
          'Creación de <b>aplicaciones 3D inmersivas</b> con <b>React</b> y <b>Unreal/C++</b>, así como visualizaciones interactivas de masterplans para el sector inmobiliario (PropTech).',  
          'Desarrollo de juegos casuales en <b>Unity</b> y <b>Realidad Virtual</b> para campañas de marketing en centros comerciales y concesionarios como <b>Volvo</b> o <b>Jeep.</b>',
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
    value: "Ingeniero de Software Full Stack",
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
  skills: {
    "Frontend": ["React","Next.js","Typescript","TailwindCSS","Storybook"],
    "Backend": ["Node.js","Nest.js","REST","GraphQL","Microservicios"],
    "Cloud & DevOps": ["GCP","Docker","K8s","Jenkins","CI/CD","Grafana"],
    "AI & LLMs": ["Claude Code","Codex","GitHub Copilot","Cursor","MCP"],
    "Tooling": ["Git","Jest","Cypress","ESLint"],
  },
}

export const ingenieroAI: CvData = {
  ...ingenieroFullStack,
  occupation: {
    value: "AI Full Stack Engineer",
    acronym: 'AIFS'
  },
  aboutme: `Ingeniero de Sistemas y Computación (M. Eng.)
      con 6 años de experiencia construyendo aplicaciones full stack
      con TypeScript, React, Angular y Node.js,
      y backends en Python y C#. Desarrollo diario asistido por IA
      (Claude Code, Codex) con metodologías de Spec Driven Development,
      MCPs, skills y context engineering. Bases sólidas en Docker, Kubernetes, CI/CD y
      observabilidad para llevar soluciones a producción. ${appendedAboutMe}`,
  skills: {
    "Frontend": ["React","Next.js","Angular","Typescript","TailwindCSS"],
    "Backend": ["Node.js","Nest.js","Python","FastAPI","REST"],
    "AI & LLMs": ["Claude Code","Codex","Gemini Notebook","MCP","Spec Driven Dev"],
    "DevOps & Cloud": ['Docker','K8s','Jenkins','CI/CD','Linux','Grafana','Elasticsearch'],
    "Testing": ["Jest","Cypress","Git","ESLint"],
  },
}

//ToDo
export const graphicsEngineer: CvData = {
  sectionTitles,
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
      ${appendedAboutMe}`,
  skills: defaultSkills,
  languages: languagesData,
  links: [
    { label: "Portafolio", url: "https://mayit.dev/" },
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
          // 'Contributed to the front-end architecture of the <b>Yeezy e-commerce portal</b>, acclaimed for its minimalist design and <b>functional programming in Typescript</b>, resulting in a faster load time.'
        ],
        achievements: [
          'Formación y acompañamiento de 14 profesionales en transición de carrera en el Campus Program, desde fundamentos de programación hasta <b>TypeScript</b> y <b>ReactJS</b>.'
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
          'Desarrollo de juegos casuales en <b>Unity</b> y <b>Realidad Virtual</b> para apoyar campañas de marketing en centros comerciales y concesionarios como Volvo o Jeep.',
        ]
      }
    ]},
    defaultEducation,
    defaultExtraCurricular
  ],
};

const sreFreelancerExperience = {
    ...freelancerExperience,
    role: 'Ingeniero Full-Stack, Automatización y DevOps',
    tasks: [
      'Automatización de un seguimiento de horas por tarea con <b>Google Sheets</b> y servidores <b>MCP</b>, eliminando procesos manuales y garantizando el cumplimiento de <b>38</b> horas semanales del equipo.',
      'Construcción y despliegue de servicios <b>FastAPI</b> (Python) para el visor multi-sensor de nuScenes con nubes de puntos <b>LiDAR</b>, contenerizados con <b>Docker</b>.',
      'Optimización del rendimiento y entrega de maquetas 3D en móviles, apoyada en <b>CI/CD</b> y monitoreo del comportamiento en producción.',
    ],
    achievements: [ ]
  }

export const sre: CvData = {
  sectionTitles,
  contact: contactDefault,
  occupation: {
    value: "Ingeniero de Software / SRE",
    acronym: 'DO',
  },
  colors: {
    primary: '#287848',
  },
  aboutme: `Ingeniero de Software con 6 años
    de experiencia, 3 de ellos dedicados
    a plataforma y SRE, en plataformas
    de gran escala en una multinacional,
    combinando bases sólidas en Linux Bash,
    Docker y automatización DevOps.
    Experiencia en CI/CD, observabilidad
    y monitoreo (Grafana, alertas),
    on-call, administración de servidores
    y despliegue de sistemas
    escalables y resilientes.
    Actualmente cursando AWS Cloud Practitioner Essentials.
    ${appendedAboutMe}`,
  skills: {
    "CI/CD": ['Docker','Jenkins','K8s',"YAML","Groovy","Helm"],
    "Observability": ['Grafana','Instana','Elasticsearch','Prometheus','Opsgenie'],
    "Cloud": ['AWS (en curso)','Linux','Terraform','FTP / WordPress'],
    "Full-Stack": ["Node.js","Typescript", "bash", "C++","Python", "React","Angular","Next.js"],
    "Tooling": ['Linux','AWS',"Git","PostgreSQL","Terraform","Storybook","ESLint", "Jest"],
    "AI & LLMs": ["Claude Code","Codex","Gemini Notebook","MCPs",],
  },
  languages: languagesData,
  links: [
    { label: "LinkedIn", url: "https://www.linkedin.com/in/davidmayorga-software/" },
    { label: "Stackshare", url: "https://stackshare.io/damayor/software-engineer" },
  ],
  courses: [
    { name: "AWS Cloud Practitioner Essentials (en curso, 7 de 13 módulos)", institution: "AWS", date: "Nov 2026" },
    { name: "C++ PROGRAMMING - FROM BEGINNER TO BEYOND", institution: "Udemy", date: "May 2025" },
  ],
  experiences: [
    {title: "Experiencia Laboral", entries: [
      sreFreelancerExperience,
      {
        company: 'ADIDAS',
        location: 'Bogotá',
        dates: 'May 2021 - Jun 2025',
        role: 'Software Engineer & SRE',
        tasks: [
          'Mejoré la confiabilidad del microservicio backend de Checkout mediante observabilidad con <b>Grafana</b> e integraciones de alertas, soportando transacciones diarias ininterrumpidas en <b>30+ países.</b>',
          `Participé en rotaciones on-call para diagnosticar y resolver
          problemas de producción, asegurando disponibilidad del microservicio del <b>99.99%</b>.`,
          `Refactoricé pipelines de Jenkins e implementé las mejores
          prácticas de CI/CD para el repositorio del servicio de Checkout, reduciendo
          el tiempo de despliegue de <b>15 minutos a menos de 6 minutos</b>`,        
          'Desarrollé y mantuve componentes frontend escalables usando <b>ReactJS</b> y <b>Next.js</b> para la plataforma Global Team Sports, contribuyendo a una experiencia de usuario personalizada para <b>20+</b> mercados internacionales.',
        ],
        achievements: [
          'Formación y acompañamiento de 14 profesionales en transición de carrera en el Campus Program, desde fundamentos de programación hasta <b>TypeScript</b> y <b>ReactJS</b>.'
        ]
      },
      {
        company: 'UMBRA 3D STUDIO - INTERACTIVE',
        location: 'Bogotá',
        dates: 'Ene 2020 - Sep 2020',
        role: 'Desarrollador de Software y Administrador de Servidores',
        tasks: [
          'Responsable de los <b>servidores</b> y del mantenimiento de la página web de la empresa y de los sitios de sus clientes, como <b>Volvo, Hyundai, Jeep, Centro Chía</b> y constructoras como <b>Amarilo</b>, con <b>soporte 24/7</b>.',
          'Actualizaciones y gestión de contenido vía <b>WordPress</b> y <b>FTP</b>, con monitoreo de disponibilidad, recuperación ante caídas y <b>re-despliegue</b> de los sitios.',
          'Creación de <b>aplicaciones 3D inmersivas</b> con <b>React</b> y <b>Unreal/C++</b> para el sector inmobiliario (PropTech).',
        ]
      }
    ]},
    defaultEducation,
  ],
};

export const contentcreator: CvData = {
  sectionTitles,
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
          // 'Contribuí a la arquitectura frontend del <b>portal de e-commerce Yeezy</b>, aclamado por su diseño minimalista y <b>programación funcional en Typescript</b>, resultando en un tiempo de carga más rápido.'
        ],
        achievements: [
          'Formación y acompañamiento de 14 profesionales en transición de carrera en el Campus Program, desde fundamentos de programación hasta <b>TypeScript</b> y <b>ReactJS</b>.'
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
  sectionTitles,
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
        "Windows","Microsoft Office", "SDD"
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
        ],
        achievements: [
          'Formación y acompañamiento de 14 profesionales en transición de carrera en el Campus Program, desde fundamentos de programación hasta <b>TypeScript</b> y <b>ReactJS</b>.'
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