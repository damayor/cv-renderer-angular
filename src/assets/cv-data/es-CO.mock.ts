import { Contact, CvData } from "../../app/interfaces/CVData";

const contactDefault : Contact = {
  fullname: "David Mayorga",
  email: "dr.mayorga20@gmail.com",
  phone: "+49 1525 2198970",
  location: "Berlin, Alemania",
  nationality: "Colombiano",
  visaStatus: "Chancenkarte / Opportunity Card"
}

const defaultSkills =  {
  "Frontend": ["React","Angular","Three.JS", "R3F", "Vue.js", "CSS", "SCSS","TailwindCSS" ],
  "Full-Stack": ["Node.js","Typescript", "Next.js", "bash", "Python", "JS"],
  "Graphics": ['C++',"Unity", 'C#',"Unreal","XR", "UI/UX", "Figma"],
  "CI/CD": ['Linux','Docker','Jenkins','K8',"YAML","Grafana","Elasticsearch"],
  "Tools": ["Git","Vite","Storybook","ESLint", "Jest", "Vibe coding"],
  "LLMs": ["Copilot","Claude","NotebookLM","Gemini","GPT",],
}

const languagesData = [
    { name: "Inglés", level: 83 },
    { name: "Español", level: 100 },
    { name: "Alemán", level: 67 }
  ]

const defaultCourses = [
    { name: "ANGULAR: DE CERO A EXPERTO - EDICION 2025", institution: "{D/T} DEVTALLES", date: "Jul 2025" },
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
            'Pasantía en el grupo AG HCI and Computer Graphics en la Universidad Técnica de <b>Kaiserslautern</b> durante 2018.',
            'Monitor de investigación enfocado en el diseño y desarrollo de un simulador de entrenamiento basado en <b>Realidad Virtual</b> e <b>interaccion háptica</b> para cirugía ortopédica de trauma en Unity y Oculus, mejorando el desempeño de los aprendices durante pruebas piloto.'
          ]
        },
        {
          company: "Universidad de los Andes",
          role: "Ingeniería de Sistemas y Computación",
          dates: "2017",
          location: "Bogotá, Colombia",
          tasks: [
            'Opción académica en Computación Visual e Interactiva.',
            'Monitor de investigación en el grupo IMAGINE.',
            'Beca "Quiero Estudiar" otorgada a los mejores puntajes nacionales del ICFES.',
          ]
        },
        {
          company: "COLEGIO ANDINO - DEUTSCHE SCHULE",
          role: "Bachillerato",
          dates: "2012",
          location: "Bogotá, Colombia",
          tasks: [
            "Sprachdiplommen B2"          
          ]
        }
      ]
}

const defaultExtraCurricular = {
    title: "Actividades Extra-Curriculares", 
      entries: [
        {
          company: "CLUBES DE CIENCIA Y TECNOLOGÍA",
          role: "Instructor Nacional en \"Realidad Virtual en Unity\"",
          dates: "Jun 2019 - Jul 2019",
          location: "Bogotá",
          tasks: [
          'Introducción al desarrollo de videojuegos y experiencias inmersivas para estudiantes de secundaria, abordando temas como materiales, humanoides, animaciones y programación de scripts. Liderado por la Universidad Nacional de Colombia y el SENA.'
          ]
        },
      ]
}

//CHK
export const seniorfrontend: CvData = {
  contact: contactDefault,
  occupation: {
    value: "Ingeniro Senior Frontend",
    acronym: 'SF'
  },
  colors: {
    primary: '#48011d',
  },
  aboutme: `Ingeniero Frontend con experiencia 
      en plataformas web de multinacionales 
      a gran escala, especializado en 
      NodeJS y soluciones visuales 
      con Three.JS y/o Unity. Bases solidas 
      en SRE/DevOps, asegurando monitoreo, trazabilidad 
      y visualizacion. Actualmente radicado 
      en Alemania para brindar la experiencia 
      de equipos Colombianos. Caracterizando 
      un rol de liderazgo brindando
      apoyo constante al equipo con comunicación 
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
      {
        company: 'ADIDAS',
        location: 'Bogotá',
        dates: 'May 2021 - Jun 2025',
        role: 'Software Engineer',
        tasks: [
          'Desarrollo y mantenimiento de componentes frontend escalables usando <b>ReactJS</b> y <b>Next.js</b> para la plataforma Global Team Sports, contribuyendo a una experiencia de usuario personalizada para <b>20+ mercados internacionales</b>.',
          'Liderzgo del desarrollo de <b>módulos de personalización</b> (frontend y 3D) para PDP de ropa deportiva utilizando <b>Three.js</b> y <b>Unity</b>, mejorando la interacción del usuario y sus pruebas end-to-end con <b>Jest</b> y <b>Cypress</b>.',
          'Mejora de la confiabilidad y la velocidad de despliegue del microservicio <b>backend de Checkout</b> de adidas mediante la implementación de pipelines de CI/CD y automatización de infraestructura con <b>Jenkins</b>, <b>Kubernetes</b> y <b>Grafana</b>, soportando transacciones diarias en <b>30+ países</b>.',
          'Contribución a la arquitectura frontend del <b>portal de e-commerce Yeezy</b>, reconocido por su diseño minimalista y el uso de <b>programación funcional en Typescript</b>, logrando una mejora en el desempeño y tiempo de carga.',
        ],
      },
      {
        company: 'UMBRA 3D STUDIO - INTERACTIVE',
        location: 'Bogotá',
        dates: 'Jan 2020 - Sep 2020',
        role: 'Desarrollador Frontend',
        tasks: [
          'Creación de <b>aplicaciones 3D inmersivas</b> con <b>React</b> y <b>Unreal/C++</b>, así como visualizaciones interactivas de masterplans para el sector inmobiliario (PropTech).',  
          'Desarrollo de juegos casuales en <b>Unity</b> y <b>Realidad Virtual</b> para apoyar campañas de marketing de marca y activaciones en centros comerciales, involucrando audiencias mediante gameplay interactivo.',
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
    value: "Ingeniero Frontend",
    acronym: 'FE'
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
  aboutme: 
    `Ingeniero de Sistemas y Computacion (M.Eng.) 
      con 8 años de experiencia especializado
      en plataformas web y responsive desplegadas en mas de 30 paises, 
      desarrolladas con Typescript,
      ReactJS, NodeJS, y soluciones interactivas 
      con Three.JS y Unity. Bases solidas en C++, Linux bash y
      SRE, asegurando monitoreo, trazabilidad 
      y visualización. Actualmente radicado 
      en Alemania, caracterizando 
      un rol de liderazgo brindando
      apoyo constante al equipo y a la vez, con comunicación 
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
      {
        company: 'ADIDAS',
        location: 'Bogotá',
        dates: 'May 2021 - Jun 2025',
        role: 'Software Engineer',
        tasks: [
          'Liderzgo del desarrollo de <b>módulos de personalización</b> (frontend y 3D) para PDP de ropa deportiva utilizando <b>Three.js</b> y <b>Unity</b>, mejorando la interacción del usuario y sus pruebas end-to-end con <b>Jest</b> y <b>Cypress</b>.',
    
          'Mejora de la confiabilidad y la velocidad de despliegue del microservicio <b>backend de Checkout</b> de adidas mediante la implementación de pipelines de CI/CD y automatización de infraestructura con <b>Jenkins</b>, <b>Kubernetes</b> y <b>Grafana</b>, soportando transacciones diarias en <b>30+ países</b>.',
          
          'Desarrollo y mantenimiento de componentes frontend escalables usando <b>ReactJS</b> y <b>Next.js</b> para la plataforma Global Team Sports, contribuyendo a una experiencia de usuario personalizada para <b>20+ mercados internacionales</b>.',
          
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
        dates: 'Jan 2020 - Sep 2020',
        role: 'Desarrollador Frontend',
        tasks: [
          'Creación de <b>aplicaciones 3D inmersivas</b> con <b>React</b> y <b>Unreal/C++</b>, así como visualizaciones interactivas de masterplans para el sector inmobiliario (PropTech).',  
          'Desarrollo de juegos casuales en <b>Unity</b> y <b>Realidad Virtual</b> para apoyar campañas de marketing de marca y activaciones en centros comerciales, involucrando audiencias mediante gameplay interactivo.',
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
    value: "Ingeniero Full Stack",
    acronym: 'FSE'
  },
  aboutme:  `Ingeniero de Sistemas y Computacion (M.Eng.) 
      con 6 años de experiencia especializado
      en plataformas responsive web, desplegadas en más de 30 paises y
      desarrolladas con Typescript,
      ReactJS, NodeJS, y soluciones visuales
      con Three.JS y Unity. Bases solidas en C++, Linux bash y
      SRE, asegurando monitoreo, trazabilidad 
      y visualizacion. Actualmente radicado 
      en Alemania, caracterizando 
      un rol de liderazgo brindando
      apoyo constante al equipo y a la vez, con comunicación 
      empática en las relaciones interpersonales. `,
  skills: defaultSkills,
}

//ToDo
export const graphicsEngineer: CvData = {
  contact: contactDefault,
  occupation: {
    value: "GAME DEVELOPER",
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
      and engaging user interfaces.
      Focused on delivering immersive
      digital solutions that enhance
      user experience, particularly in
      industrial and web contexts.
      Currently based in Germany and
      eager to contribute to innovative
      teams while continuing to grow
      my expertise`,
  skills: defaultSkills,
  languages: languagesData,
  links: [
    { label: "Portafolio", url: "https://mayinteractive.io/" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/davidmayorga-software/" },
    { label: "GitHub", url: "https://github.com/damayor" },
    { label: "Behance", url: "https://www.behance.net/may_interactive" }
  ],
  courses: [
    { name: "Game Development with Unreal Engine 4", institution: "Udemy", date: "Jan 2020" },
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
        company: 'UMBRA INTERACTIVE - 3D STUDIO',
        location: 'Bogotá',
        dates: 'Jan 2020 - Sep 2020',
        role: 'Desarrollador Frontend',
        tasks: [
          'Developed hyper-casual games in <b>Unity</b> with <b>Virtual Reality</b> to support brand marketing campaigns and mall activations, engaging audiences through interactive gameplay.',
          'Created <b>immersive 3D applications</b> with <b>Unreal</b> and <b>React</b> creating interactive masterplan visualisations for the real estate sector (PropTech)',
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
    value: "Senior Software Engineer",
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
    Skilled in CI/CD, monitoring,
    performance optimization, and
    ensuring scalable, resilient
    systems. Experienced in bridging
    software engineering with SRE
    practices to deliver reliable
    solutions. Currently based in
    Germany and motivated to
    strengthen innovative teams with
    my expertise.`,
  skills: defaultSkills,
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
        role: 'Desarrollador Frontend',
        tasks: [
          'Created <b>immersive 3D applications</b> with <b>Unreal</b> and <b>React</b> creating interactive masterplan visualisations for the real estate sector (PropTech)',
          'Developed hyper-casual games in <b>Unity</b> with <b>Virtual Reality</b> to support brand marketing campaigns and mall activations, engaging audiences through interactive gameplay.',
        ]
      }
    ]},
    defaultEducation,
    defaultExtraCurricular
  ],
};

