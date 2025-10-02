import { Contact, CvData } from "../../app/interfaces/CVData";

const contactDefault : Contact = {
  fullname: "David Mayorga",
  email: "dr.mayorga20@gmail.com",
  phone: "+49 1525 2198970",
  location: "Berlin, Deutschland",
  nationality: "Kolumbien",
  visaStatus: "Chancenkarte"
}

export const frontend: CvData = {
  contact: contactDefault,
  occupation: {
    value: "Senior Frontend Ingeneuer",
    acronym: 'SF_DE'
  },
  colors: {
    primary: '#48011d',
  },
  aboutme: `Frontend Engineer mit Erfahrung in großskaligen Webplattformen bei
     einem multinationalen Unternehmen, spezialisiert auf ReactJS, NodeJS 
    und interaktive 3D-Lösungen mit Three.js. Solide Kenntnisse 
    in Site Reliability Engineering, mit Fokus auf Monitoring, 
    Performance und Skalierbarkeit. Derzeit in Deutschland 
    ansässig und motiviert, zu innovativen Teams beizutragen 
    und meine Expertise weiter auszubauen.`,
  skills: ["Javascript", "React", "NodeJs", "Angular", "TypeScript", "C#", "C++", "Java", "Three.JS", "CSS/SCSS", "SRE", "Unity", "Linux", "CI/CD", "Jenkins", "Kubernetes", "Testing"],
  languages: [
    { name: "Englisch", level: 75 },
    { name: "Spanisch", level: 100 },
    { name: "Deutsch", level: 75 }
  ],
  links: [
    { label: "LinkedIn", url: "https://www.linkedin.com/in/demayorgaherrera/" },
    { label: "Github", url: "https://github.com/damayor" },
  ],
  courses: [
    { name: "ANGULAR: VON NULL ZUM EXPERTEN - AUSGABE 2025", "institution": "{D/T} DEVTALLES", "date": "Jul 2025" },
    { name: "C++ PROGRAMMIERUNG - VON ANFÄNGER BIS FORTGESCHRITTEN", "institution": "Udemy", "date": "Mai 2025" }
  ],
  experiences: [
    {title: "Berufserfahrung", entries: [ 
      {
        company: 'ADIDAS',
        location: 'Bogotá',
        dates: 'Mai 2021 - Jun 2025',
        role: 'Softwareingenieur ',
        tasks: [
            "Entwicklung und Pflege skalierbarer Frontend-Komponenten mit <b>ReactJS</b> und <b>Redux</b> für die Global Team Sports Plattform, Beitrag zu einer personalisierten User Experience in <b>20+ internationalen Märkten</b>.",
            "Verbesserung der Zuverlässigkeit und Deployment-Geschwindigkeit des adidas Checkout-<b>Backends</b> durch CI/CD-Pipelines und Infrastrukturautomatisierung mit <b>Jenkins</b>, <b>Kubernetes</b> und <b>Grafana</b>, Unterstützung täglicher Transaktionen in <b>30+ Ländern</b>.",
            "Leitung der Entwicklung von <b>Anpassungsmodulen</b> (Frontend und 3D) für Sportbekleidung im PDP mit <b>Three.js</b> und <b>Unity</b>, Steigerung der User-Interaktion und End-to-End-Tests mit <b>Jest</b> und <b>Cypress</b>.",
            "Beitrag zur Frontend-Architektur des <b>Yeezy E-Commerce Portals</b>, bekannt für minimalistisches Design und <b>funktionale Programmierung in Typescript</b>, mit schnelleren Ladezeiten."
          ]
      },
      {
        company: 'UMBRA 3D STUDIO - INTERACTIVE',
        location: 'Bogotá',
        dates: 'Jan 2020 - Sep 2020',
        role: 'Frontend Softwareentwickler',
        tasks: [
            "Entwicklung <b>immersiver 3D-Anwendungen</b> mit <b>React</b> und <b>Unreal/C++</b> sowie interaktiver Masterplan-Visualisierungen für die Immobilienbranche (<i>PropTech</i>).",
            "Entwicklung von Hyper-Casual-Spielen in <b>Unity</b> und <b>Virtual Reality</b> zur Unterstützung von Marketingkampagnen und Shopping-Mall-Aktivierungen, mit spielerischer Interaktion zur Publikumsbindung."
          ]
      }
    ]},
    {title: "Ausbildung", 
      entries: [
        {
          company: "Universidad de los Andes",
          role: "M.Sc. Systems und Computing Engineering",
          dates: " 2019",
          location: "Bogotá, Kolumbien",
          "tasks": [
            "Forschungspraktikum in AG HCI und Computer Graphics an der Technischen Universität Kaiserslautern im Jahr 2018.",
            "Design und Entwicklung eines <b>VR- und haptikbasierten</b> Trainingssimulators für orthopädische Traumatologie-Operationen in Unity und Oculus, Verbesserung der Leistung von Trainees während Pilotversuchen."
          ]
        },
        {
          company: "Universidad de los Andes",
          role: "Bachelor on Systems und Computing Engineering",
          dates: "2017",
          location: "Bogotá, Kolumbien",
          "tasks": [
            "Akademische Vertiefung in Visuelle und Interaktive Informatik.",
            "Forschungsmonitor in der Gruppe IMAGINE.",
            "Stipendium „Quiero Estudiar“ für die besten nationalen ICFES-Ergebnisse."
          ]
        },
        {
          company: "COLEGIO ANDINO - DEUTSCHE SCHULE BOGOTA",
          role: "Gymnasium",
          dates: "2012",
          location: "Bogotá, Kolumbien",
          tasks: [
            "Sprachdiplome: \n Hören C1, Lesen C1, Schreiben B2, Sprechen B2"          
          ]
        }
      ]
    },
     {title: "Außerunterrichtliche Aktivitäten", 
      entries: [
        {
          company: "Clubes de Ciencia y Tecnologia",
          role: "Nationaler Dozent für „Virtual Reality in Unity“",
          dates: "Jun 2019 - Jul 2019",
          location: "Bogotá",
          tasks: [
           "Einführung in Spiele- und Immersive-Entwicklung für Schüler, mit Themen wie Materialien, Humanoiden, Animationen und Script-Programmierung. Organisiert von der Universidad Nacional de Colombia und SENA."          
          ]
        },
      ]
    }
  ],
};

//ToDo translate el DEU de aqui pa bajo
export const seniorSoftware: CvData = {
  contact: contactDefault,
  occupation: {
    value: "Senior Softwareingenieur ",
    acronym: 'FE'
  },
  colors: {
    primary: '#48011d',
    secondary: '#808183'
  },
  aboutme: `Softwareingenieur  mit 7 Jahren Erfahrung in 
  großskaligen Webplattformen bei einem multinationalen 
  Unternehmen, spezialisiert auf ReactJS, NodeJS und 
  interaktive 3D-Lösungen mit Unity, Three.js und Unreal. 
  Solide Kenntnisse in C++, Linux Bash und Site Reliability 
  Engineering (Monitoring, Performance, Skalierbarkeit).
   Derzeit in Deutschland ansässig und motiviert, 
   zu innovativen Teams beizutragen und meine 
   Fachkenntnisse weiterzuentwickeln.`,
  skills: ["Javascript", "C++", "React", "NodeJs", "Angular", "TypeScript", "C#", "Java", "Three.JS", "SRE", "Linux", "Unity", "SCSS", "CI/CD", "Jenkins", "Kubernetes", "Testing", "Unreal", "UX/UI", "Figma"],
  languages: [
    { name: "Englisch", level: 75 },
    { name: "Spanisch", level: 100 },
    { name: "Deutsch", level: 75 }
  ],
  links: [
    { label: "LinkedIn", url: "https://www.linkedin.com/in/demayorgaherrera/" },
    { label: "Github", url: "https://github.com/damayor" },
  ],
  courses: [
    { "name": "ANGULAR: VON NULL ZUM EXPERTEN - AUSGABE 2025", "institution": "{D/T} DEVTALLES", "date": "Jul 2025" },
    { "name": "C++ PROGRAMMIERUNG - VON ANFÄNGER BIS FORTGESCHRITTEN", "institution": "Udemy", "date": "Mai 2025" }
  ],
  experiences: [
    {title: "Berufserfahrung", entries: [ 
      {
        company: 'ADIDAS',
        location: 'Bogotá',
        dates: 'Mai 2021 - Jun 2025',
        role: 'Softwareingenieur ',
        tasks: [
          'Led the development of <b>customization modules</b> (frontend und 3D) for sportswear’s PDP using <b>Three.js</b> und <b>Unity</b>, enhancing user engagement und its end-to-end testing with <b>Jest</b> und <b>Cypress</b>.',
          'Improved reliability und deployment speed of the adidas Checkout <b>backend</b> microservice by implementing CI/CD pipelines und infrastructure automation via <b>Jenkins</b>, <b>Kubernetes</b>, und <b>Grafana</b>, supporting daily transactions across <b>30+ countries</b>.',
          'Developed und maintained scalable frontend components using <b>ReactJS</b> und <b>Redux</b> for the Global Team Sports platform, contributing to a personalized user experience for <b>20+ international markets</b>.',
          'Contributed to the front-end architecture of the <b>Yeezy e-commerce portal</b>, acclaimed for its minimalist design und <b>functional programming in Typescript</b>, resulting in a faster load time.'
        ]
      },
      {
        company: 'MADBRICKS',
        location: 'Remote',
        dates: 'Sep 2020 - Dec 2020',
        role: 'Game Entwickler',
        tasks: [
          'Developed und maintained hyper-casual mobile games using <b>Unity</b> und <b>Unreal/C++</b>, enhancing user engagement und UI/UX experience.'
        ]
      },
      {
        company: 'UMBRA 3D STUDIO - INTERACTIVE',
        location: 'Bogotá',
        dates: 'Jan 2020 - Sep 2020',
        role: 'Frontend Softwareentwickler',
        tasks: [
          'Created <b>immersive 3D applications</b> with <b>React</b> und <b>Unreal/C++</b> und interactive masterplan visualisations for the real estate sector (PropTech)',
          'Developed hyper-casual games in <b>Unity</b> und <b>Virtual Reality</b> to support brand marketing campaigns und mall activations, engaging audiences through interactive gameplay.'
        ]
      }
    ]},
    {title: "Ausbildung", 
      entries: [
        {
          company: "Universidad de los Andes",
          role: "M.Sc. Systems und Computing Engineering",
          dates: " 2019",
          location: "Bogotá, Kolumbien",
          tasks: [
            "Research Internship in AG HCI und Computer Graphics at Technical University of <b>Kaiserslautern</b> during 2018",
            "Designed und developed a <b> VR & haptic-based</b>  training simulator for trauma orthopedic surgery in Unity und Oculus, improving trainee performance during pilot tests."
          ]
        },
        {
          company: "Universidad de los Andes",
          role: "Bachelor on Systems und Computing Engineering",
          dates: "2017",
          location: "Bogotá, Kolumbien",
          "tasks": [
            "Akademische Vertiefung in Visual und Computing Interaction.",
            "Forschungsmonitor in der Gruppe IMAGINE.",
            "Stipendium „Quiero Estudiar“ für die besten nationalen ICFES-Ergebnisse."
          ]
        },
        {
          company: "COLEGIO ANDINO - DEUTSCHE SCHULE BOGOTA",
          role: "Gymnasium",
          dates: "2012",
          location: "Bogotá, Kolumbien",
          tasks: [
            "Sprachdiplome: \n Hören C1, Lesen C1, Schreiben B2, Sprechen B2"          
          ]
        }
      ]
    },
     {title: "Außerunterrichtliche Aktivitäten", 
      entries: [
        {
          company: "SCIENCE und TECHNOLOGY CLUBS",
          role: "Nationaler Dozent für „Virtual Reality in Unity“",
          dates: "Jun 2019 - Jul 2019",
          location: "Bogotá",
          tasks: [
           "Einführung in Spiele- und Immersive-Entwicklung für Schüler, mit Themen wie Materialien, Humanoiden, Animationen und Script-Programmierung. Organisiert von der Universidad Nacional de Colombia und SENA."          
          ]
        },
      ]
    }
  ],
};


export const gameEntwickler: CvData = {
  contact: contactDefault,
  occupation: {
    value: "GAME Entwickler",
    acronym: 'VC',
  },
  colors: {
    primary: '#2c2e81',
    secondary: '#808183',
  },
  aboutme: `Visual computing Entwickler with
      experience in casual games and
      serious simulators, most of the
      time with Unity und VR/AR.
      Skilled in frontend technologies
      such as React und Three.js to
      create interactive 3D applications
      und engaging user interfaces.
      Focused on delivering immersive
      digital solutions that enhance
      user experience, particularly in
      industrial und web contexts.
      Currently based in Deutschy and
      eager to contribute to innovative
      teams while continuing to grow
      my expertise`,
  skills: ['C#', 'Unity', 'C++', 'Unreal', 'UI/UX', 'Javascript', 'React', 'WebGL', 'Three.Js', 'PixiJs', 'Python', 'VR', 'Figma', 'Blender', 'Sketchup', 'Godot', 'AR', '3dMax'],
  languages: [
    { name: "Englisch", level: 75 },
    { name: "Spanisch", level: 100 },
    { name: "Deutsch", level: 75 }
  ],
  links: [
    { label: "LinkedIn", url: "https://www.linkedin.com/in/demayorgaherrera/" },
    { label: "GitHub", url: "https://github.com/damayor" },
    { label: "Behance", url: "https://www.behance.net/dev3d_may" }
  ],
  courses: [
    { name: "Game Development with Unreal Engine 4", institution: "Udemy", date: "Jan 2020" },
    { "name": "C++ PROGRAMMIERUNG - VON ANFÄNGER BIS FORTGESCHRITTEN", "institution": "Udemy", "date": "Mai 2025" }
  ],
  experiences: [
    {title: "Berufserfahrung", entries: [ 
      {
        company: 'ADIDAS',
        location: 'Bogotá',
        dates: 'Mai 2021 - Jun 2025',
        role: 'Frontend Softwareingenieur',
        tasks: [
          'Led the development of 3D customisation for sportswear using <b>Three.js</b> und <b>Unity</b>, enhancing web user engagement.',
          'Developed und maintained scalable frontend components using <b>ReactJS</b> und <b>Redux</b> for the Global Team Sports platform, contributing to a personalized user experience for <b>20+ international markets</b>.',
          'Contributed to the front-end architecture of the <b>Yeezy e-commerce portal</b>, acclaimed for its minimalist design und <b>functional programming in Typescript</b>, resulting in a faster load time.'
        ]
      },
      {
        company: 'MADBRICKS',
        location: 'Remote',
        dates: 'Sep 2020 - Dec 2020',
        role: 'Game Entwickler',
        tasks: [
          'Developed und maintained hyper-casual mobile games using <b>Unity</b> und <b>Unreal/C++</b>, enhancing user engagement und UI/UX experience.'
        ]
      },
      {
        company: 'UMBRA INTERACTIVE - 3D STUDIO',
        location: 'Bogotá',
        dates: 'Jan 2020 - Sep 2020',
        role: 'Frontend Softwareentwickler',
        tasks: [
          'Developed hyper-casual games in <b>Unity</b> with <b>Virtual Reality</b> to support brand marketing campaigns und mall activations, engaging audiences through interactive gameplay.',
          'Created <b>immersive 3D applications</b> with <b>Unreal</b> und <b>React</b> creating interactive masterplan visualisations for the real estate sector (PropTech)',
        ]
      }
    ]},
    {title: "Ausbildung", 
      entries: [
        {
          company: "Universidad de los Andes",
          role: "M.Sc. Systems und Computing Engineering",
          dates: " 2019",
          location: "Bogotá, Kolumbien",
          "tasks": [
            "Forschungspraktikum in AG HCI und Computer Graphics an der Technischen Universität Kaiserslautern im Jahr 2018.",
            "Design und Entwicklung eines <b>VR- und haptikbasierten</b> Trainingssimulators für orthopädische Traumatologie-Operationen in Unity und Oculus, Verbesserung der Leistung von Trainees während Pilotversuchen."
          ]
        },
        {
          company: "Universidad de los Andes",
          role: "Bachelor on Systems und Computing Engineering",
          dates: "2017",
          location: "Bogotá, Kolumbien",
          "tasks": [
            "Akademische Vertiefung in Visual und Computing Interaction.",
            "Forschungsmonitor in der Gruppe IMAGINE.",
            "Stipendium „Quiero Estudiar“ für die besten nationalen ICFES-Ergebnisse."
          ]
        },
        {
          company: "COLEGIO ANDINO - DEUTSCHE SCHULE BOGOTA",
          role: "Gymnasium",
          dates: "2012",
          location: "Bogotá, Kolumbien",
          tasks: [
            "Sprachdiplome: \n Hören C1, Lesen C1, Schreiben B2, Sprechen B2"          
          ]
        }
      ]
    },
     {title: "Außerunterrichtliche Aktivitäten", 
      entries: [
        {
          company: "SCIENCE und TECHNOLOGY CLUBS",
          role: "Nationaler Dozent für „Virtual Reality in Unity“",
          dates: "Jun 2019 - Jul 2019",
          location: "Bogotá",
          tasks: [
           "Einführung in Spiele- und Immersive-Entwicklung für Schüler, mit Themen wie Materialien, Humanoiden, Animationen und Script-Programmierung. Organisiert von der Universidad Nacional de Colombia und SENA."          
          ]
        },
      ]
    }
  ],
};


export const sre: CvData = {
  contact: contactDefault,
  occupation: {
    value: "Senior Softwareingenieur ",
    acronym: 'SR',
  },
  colors: {
    primary: '#287848',
  },
  aboutme: `Softwareingenieur  with 5 years
    of experience in large-scale
    platforms at a multinational,
    combining strong foundations in
    Linux Bash, und automation.
    Skilled in Ci/CD, monitoring,
    performance optimization, and
    ensuring scalable, resilient
    systems. Experienced in bridging
    Softwareingenieur ing with SRE
    practices to deliver reliable
    solutions. Currently based in
    Deutschy und motivated to
    strengthen innovative teams with
    my expertise.`,
  skills: ['Linux', 'ci/cd','jenkins','groovy','SRE','DevOps','Kubernetes','Yaml','Observability','Grafana','Docker','Instana','Kibana','Prometheus','Aws','Opsgenie','NodeJs','C++','React','JS/TS','Angular','Java'],
  languages: [
    { name: "Englisch", level: 75 },
    { name: "Spanisch", level: 100 },
    { name: "Deutsch", level: 75 }
  ],
  links: [
    { label: "LinkedIn", url: "https://www.linkedin.com/in/demayorgaherrera/" },
    { label: "Stackshare", url: "https://stackshare.io/damayor/software-engineer" },
  ],
  courses: [
    { "name": "C++ PROGRAMMIERUNG - VON ANFÄNGER BIS FORTGESCHRITTEN", "institution": "Udemy", "date": "Mai 2025" }
  ],
  experiences: [
    {title: "Berufserfahrung", entries: [ 
      {
        company: 'ADIDAS',
        location: 'Bogotá',
        dates: 'Mai 2021 - Jun 2025',
        role: 'Frontend Softwareingenieur ',
        tasks: [
          'Enhanced reliability of the Checkout backend microservice by observability with <b>Grafana</b> und alerting integrations, supporting uninterrupted daily transactions across <b>30+ countries.</b>',
          `Participated in on-call rotations to troubleshoot und resolve
          production issues, ensuring <b>99.99%</b> microservice availability.`,
          `Refactored Jenkins pipelines und implemented CI/CD best
          practices for the Checkout service repository, cutting
          deployment time from <b>15 minutes to under 6 minutes</b>`,        
          'Developed und maintained scalable frontend components using <b>ReactJS</b> und <b>Redux</b> for the Global Team Sports platform, contributing to a personalized user experience for <b>20+ international markets</b>.',
        ]
      },
      {
        company: 'UMBRA INTERACTIVE - 3D STUDIO',
        location: 'Bogotá',
        dates: 'Jan 2020 - Sep 2020',
        role: 'Frontend Softwareentwickler',
        tasks: [
          'Created <b>immersive 3D applications</b> with <b>Unreal</b> und <b>React</b> creating interactive masterplan visualisations for the real estate sector (PropTech)',
          'Developed hyper-casual games in <b>Unity</b> with <b>Virtual Reality</b> to support brand marketing campaigns und mall activations, engaging audiences through interactive gameplay.',
        ]
      }
    ]},
    {title: "Ausbildung", 
      entries: [
        {
          company: "Universidad de los Andes",
          role: "M.Sc. Systems und Computing Engineering",
          dates: " 2019",
          location: "Bogotá, Kolumbien",
          "tasks": [
            "Forschungspraktikum in AG HCI und Computer Graphics an der Technischen Universität Kaiserslautern im Jahr 2018.",
            "Design und Entwicklung eines <b>VR- und haptikbasierten</b> Trainingssimulators für orthopädische Traumatologie-Operationen in Unity und Oculus, Verbesserung der Leistung von Trainees während Pilotversuchen."
          ]
        },
        {
          company: "Universidad de los Andes",
          role: "Bachelor on Systems und Computing Engineering",
          dates: "2017",
          location: "Bogotá, Kolumbien",
          "tasks": [
            "Akademische Vertiefung in Visual und Computing Interaction.",
            "Forschungsmonitor in der Gruppe IMAGINE.",
            "Stipendium „Quiero Estudiar“ für die besten nationalen ICFES-Ergebnisse."
          ]
        },
        {
          company: "COLEGIO ANDINO - DEUTSCHE SCHULE BOGOTA",
          role: "Gymnasium",
          dates: "2012",
          location: "Bogotá, Kolumbien",
          tasks: [
            "Sprachdiplome: \n Hören C1, Lesen C1, Schreiben B2, Sprechen B2"          
          ]
        }
      ]
    },
     {title: "Außerunterrichtliche Aktivitäten", 
      entries: [
        {
          company: "SCIENCE und TECHNOLOGY CLUBS",
          role: "Nationaler Dozent für „Virtual Reality in Unity“",
          dates: "Jun 2019 - Jul 2019",
          location: "Bogotá",
          tasks: [
           "Einführung in Spiele- und Immersive-Entwicklung für Schüler, mit Themen wie Materialien, Humanoiden, Animationen und Script-Programmierung. Organisiert von der Universidad Nacional de Colombia und SENA."          
          ]
        },
      ]
    }
  ],
};