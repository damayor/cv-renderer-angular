import { Contact, CvData } from "../../app/interfaces/CVData";
import { environment } from '../../environments/environment';

const contactDefault : Contact = {
  fullname: "David Mayorga",
  email: "dr.mayorga20@gmail.com",
  phone: "+49 1525 2198970",
  location: "Berlin, Deutschland",
  nationality: "Kolumbien",
  visaStatus: "Chancenkarte"
}

const defaultSkills =  {
  "Frontend": ["React","Angular","Three.JS", "R3F", "Vue.js", "CSS", "SCSS","TailwindCSS" ],
  "Full-Stack": ["Node.js","Typescript", "Next.js", "bash", "Python", "JS"],
  "Graphics": ['C++',"Unity", 'C#',"Unreal","XR", "UI/UX", "Figma"],
  "CI/CD": ['Linux','Docker','Jenkins','K8',"YAML","Grafana","Kibana"],
  "Tools": ["Git","Vite","Storybook","ESLint", "Jest", "Vibe coding"],
  "LLMs": ["Copilot","Claude","NotebookLM","Gemini","GPT",],
}

// Da ich innerhalb Deutschlands flexibel und umzugsbereit bin, 

const appendedAboutMe = `
    Ich bin vor Kurzem nach Berlin gezogen und
    ${environment.cvScope === 'DE' ?
      ` verfüge über eine Arbeitsgenehmigung. 
        `
      : `, da ich innerhalb Europas flexibel und umzugsbereit bin,`
    }
    Ich möchte meine internationale Erfahrung durch die hohen Qualitätstandards 
    bereichern und mich aktiv an die lokalen Arbeitsweisen anpassen, 
    um gemeinsam mit dem Team zu wachsen.`

const languagesData =   [
    { name: "Englisch", level: 83 },
    { name: "Spanisch", level: 100 },
    { name: "Deutsch", level: 67 }
  ]

const defaultCourses = [
    { "name": "ANGULAR: VON NULL ZUM EXPERTEN - AUSGABE 2025", "institution": "{D/T} DEVTALLES", "date": "Jul 2025" },
    { "name": "C++ PROGRAMMIERUNG - VON ANFÄNGER BIS FORTGESCHRITTEN", "institution": "Udemy", "date": "Mai 2025" }
  ] 

const defaultEducation = 
  {title: "Ausbildung", 
      entries: [
        {
          company: "Universidad de los Andes",
          role: "M.Sc. System- und Computertechnik",
          dates: " 2019",
          location: "Bogotá, Kolumbien",
          tasks: [
            "Forschungspraktikum in AG HCI und Computer Graphics an der Technischen Universität Kaiserslautern im Jahr 2018.",
            "Design und Entwicklung eines <b>VR- und haptikbasierten</b> Trainingssimulators für orthopädische Traumatologie-Operationen in Unity und Oculus, Verbesserung der Leistung von Trainees während Pilotversuchen."
          ]
        },
        {
          company: "Universidad de los Andes",
          role: "Bachelor on System- und Computertechnik",
          dates: "2017",
          location: "Bogotá, Kolumbien",
          "tasks": [
            "Akademische Vertiefung in Visual und Computing Interaction.",
            "Forschungsmonitor in der Gruppe IMAGINE.",
            "Stipendium „Quiero Estudiar“ für die besten nationalen ICFES-Ergebnisse."
          ]
        },
        {
          company: "COLEGIO ANDINO - DEUTSCHE SCHULE",
          role: "Gymnasium",
          dates: "2012",
          location: "Bogotá, Kolumbien",
          tasks: [
            "Sprachdiplome: \n Hören C1, Lesen C1, Schreiben B2, Sprechen B2"          
          ]
        }
      ]
    }

const defaultExtraCurricular = {
  title: "Außerunterrichtliche Aktivitäten", 
  entries: [
  {
        company: "SCIENCE und TECHNOLOGY CLUBS",
        role: "Nationaler Dozent für „Virtual Reality in Unity“",
        dates: "Jun 2019 - Jul 2019",
        location: "Bogotá",
        tasks: [
          "Einführung in Spiele- und Immersive-Entwicklung für Schüler, mit Themen wie Materialien, Humanoiden, Animationen und Script-Programmierung in C#. Organisiert von der Universidad Nacional de Colombia und SENA."          
        ]
      },
    ]
  }


export const seniorfrontend: CvData = {
  contact: contactDefault,
  occupation: {
    value: "Senior Frontend Ingenieur",
    acronym: 'SF'
  },
  colors: {
    primary: '#48011d',
  },
  aboutme: `
   Ich bin Softwareingenieur mit 6+ Jahren Erfahrung
   in der Erstellung von großen Web-Plattformen und Anwendungen. 
   Ich bin spezialisiert auf NodeJS, TypeScript und UI/UX-Lösungen 
   mit TailwindCSS, SCSS sowie interaktive Erfahrungen u.a. mit Three.js. 
   Ich besitze ein tiefes Verständnis von CI/CD-Praktiken und SRE 
   in internationalen Umgebungen.
   ${appendedAboutMe}`,
  skills: {
    "Frontend": [ "React","Angular","Storybook", "Three.JS", "R3F", "Vue.js", "SCSS","TailwindCSS" ],
    "Graphics": ["Unity", "Unreal", "XR", "UI/UX", "Figma"],
    "Full-Stack": ["Node.js","Typescript", "Next.js", "bash","C++", "C#", "Python"],
    "Tools": ["Git","Vite","Storybook", "ESLint", "Jest"],
    "CI/CD": ['Docker','Jenkins','Kubernetes', "Linux", "Docker",]
  },
  languages: [
    { name: "Deutsch", level: 67 },
    { name: "Englisch", level: 83 },
    { name: "Spanisch", level: 100 },
  ],
  links: [
    { label: "Arbeitsmappe", url: "https://mayinteractive.io/" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/davidmayorga-software/" },
    { label: "Github", url: "https://github.com/damayor" },
  ],
  courses: defaultCourses,
  experiences: [
    {title: "Berufserfahrung", entries: [ 
      {
        company: 'ADIDAS',
        location: 'Bogotá',
        dates: 'Mai 2021 - Jun 2025',
        role: 'Softwareingenieur ',
        tasks: [
            "Leitung der Entwicklung von <b>Anpassungsmodulen</b> (Frontend und 3D) für Sportbekleidung im PDP mit <b>Three.js</b> und <b>Unity</b>, Steigerung der User-Interaktion und End-to-End-Tests mit <b>Jest</b> und <b>Cypress</b>.",
            "Entwicklung und Pflege skalierbarer Frontend-Komponenten mit <b>ReactJS</b> und <b>Next.js</b> für die Global Team Sports Plattform, Beitrag zu einer personalisierten User Experience in <b>20+ internationalen Märkten</b>.",
            "Verbesserung der Zuverlässigkeit und Deployment-Geschwindigkeit des adidas Checkout-<b>Backends</b> durch CI/CD-Pipelines und Infrastrukturautomatisierung mit <b>Jenkins</b>, <b>Kubernetes</b> und <b>Grafana</b>, Unterstützung täglicher Transaktionen in <b>30+ Ländern</b>.",
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
    defaultEducation,
    defaultExtraCurricular
  ],
};

export const frontend: CvData = {
  ...seniorfrontend,
  occupation: {
    value: "Frontend Ingenieur",
    acronym: 'FE'
  },
}

export const frontend3d: CvData = {
  ...seniorfrontend,
  occupation: {
    value: "Softwareingenieur - Fokus auf Computer Graphics und 3D",
    acronym: 'F3D',
    
  },
  skills: {
    "Frontend": ["React","Angular","Three.JS", "R3F", "Vue.js", "CSS", "SCSS","TailwindCSS" ],
    "Full-Stack": ["Node.js","Typescript", "Next.js", "bash", "Python", "JS"],
    "Graphics": ['C++',"Unity", 'C#',"Unreal","XR", "UI/UX", "Figma"],
    "CI/CD": ['Linux','Docker','Jenkins','K8',"YAML","Grafana","Kibana"],
    "Tools": ["Git","Vite","Storybook","ESLint", "Jest", "Vibe coding"],
    "LLMs": ["Copilot","Claude","NotebookLM","Gemini","GPT",],
  },
  // aboutme: `Frontend engineer with 5+ experience
}

export const seniorSoftware: CvData = {
  contact: contactDefault,
  occupation: {
    value: "Senior Softwareingenieur ",
    acronym: 'SE'
  },
  colors: {
    primary: '#48011d',
    secondary: '#808183'
  },
  aboutme: `Softwareingenieur mit 7 Jahren Erfahrung in 
  großskaligen Webplattformen bei einem multinationalen 
  Unternehmen, spezialisiert auf ReactJS, NodeJS und 
  interaktive 3D-Lösungen mit Unity, Three.js und Unreal. 
  Solide Kenntnisse in C++, Linux Bash und Site Reliability 
  Engineering (Monitoring, Performance, Skalierbarkeit).
  ${appendedAboutMe}`,
  skills: defaultSkills,
  languages: languagesData,
  links: [
    { label: "Arbeitsmappe", url: "https://mayinteractive.io/" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/davidmayorga-software/" },
    { label: "Github", url: "https://github.com/damayor" },
  ],
  courses: defaultCourses,
  experiences: [
    {title: "Berufserfahrung", entries: [ 
      {
        company: 'ADIDAS',
        location: 'Bogotá',
        dates: 'Mai 2021 - Jun 2025',
        role: 'Softwareingenieur',
        tasks: [
          "Leitung der Entwicklung von <b>Anpassungsmodulen</b> für Sportbekleidung im PDP mit <b>Three.js, C#</b> und <b>Unity</b>, Steigerung der User-Interaktion und End-to-End-Tests mit <b>Jest</b> und <b>Cypress</b>.",
          "Verbesserung der Zuverlässigkeit und Deployment-Geschwindigkeit des adidas Checkout durch CI/CD-Pipelines und Infrastrukturautomatisierung mit <b>Jenkins</b>, <b>Kubernetes</b> und <b>Grafana</b>, Unterstützung täglicher Transaktionen in <b>30+ Ländern</b>.",
          "Entwicklung und Pflege skalierbarer Frontend-Komponenten mit <b>ReactJS</b> und <b>Next.js</b> für die Global Team Sports Plattform, Beitrag zu einer personalisierten User Experience in <b>20+ internationalen Märkten</b>.",
          // "Beitrag zur Frontend-Architektur des <b>Yeezy E-Commerce Portals</b>, bekannt für minimalistisches Design und <b>funktionale Programmierung in Typescript</b>, mit schnelleren Ladezeiten.",
        ]
      },
      {
        company: 'MADBRICKS',
        location: 'Remote',
        dates: 'Sep 2020 - Dec 2020',
        role: 'Game Entwickler',
        tasks: [
          "Entwickelte und pflegte Hyper-Casual-Mobile-Games mit <b>Unity/C#</b> und <b>Unreal/C++</b>, wodurch die Nutzerbindung und das UI/UX-Erlebnis verbessert wurden.",
        ]
      },
      {
        company: 'UMBRA 3D STUDIO - INTERACTIVE',
        location: 'Bogotá',
        dates: 'Jan 2020 - Sep 2020',
        role: 'Frontend Softwareentwickler',
        tasks: [
          "Entwicklung von Hyper-Casual-Spielen in <b>Unity, C#</b> und <b>Virtual Reality</b> zur Unterstützung von Marketingkampagnen und Shopping-Mall-Aktivierungen, mit spielerischer Interaktion zur Publikumsbindung.",
          "Entwicklung <b>immersiver 3D-Anwendungen</b> mit <b>React</b> und <b>Unreal/C++</b> sowie interaktiver Masterplan-Visualisierungen für die Immobilienbranche (<i>PropTech</i>).",
        ]
      }
    ]},
    {title: "Ausbildung", 
      entries: [
        {
          company: "Universidad de los Andes",
          role: "M.Sc. System- und Computertechnik",
          dates: " 2019",
          location: "Bogotá, Kolumbien",
          tasks: [
            "Forschungspraktikum in AG HCI und Computer Graphics an der Technischen Universität Kaiserslautern im Jahr 2018.",
            "Design und Entwicklung eines <b>VR- und haptikbasierten</b> Trainingssimulators für orthopädische Traumatologie-Operationen in Unity und Oculus, Verbesserung der Leistung von Trainees während Pilotversuchen."
          ]
        },
        {
          company: "Universidad de los Andes",
          role: "Bachelor on System- und Computertechnik",
          dates: "2017",
          location: "Bogotá, Kolumbien",
          "tasks": [
            "Akademische Vertiefung in Visual und Computing Interaction.",
            "Forschungsmonitor in der Gruppe IMAGINE.",
            "Stipendium „Quiero Estudiar“ für die besten nationalen ICFES-Ergebnisse."
          ]
        },
        {
          company: "COLEGIO ANDINO - DEUTSCHE SCHULE",
          role: "Gymnasium",
          dates: "2012",
          location: "Bogotá, Kolumbien",
          tasks: [
            "Sprachdiplome: \n Hören C1, Lesen C1, Schreiben B2, Sprechen B2"          
          ]
        }
      ]
    },
     defaultExtraCurricular
  ],
};

export const fullStackIngenieur: CvData = {
  ...seniorSoftware,
  occupation: {
    value: "Full-Stack-Ingenieur",
    acronym: 'FSE'
  },
  aboutme: 
  `Softwareingenieur mit 5 Jahren Erfahrung in 
  großskaligen Webplattformen bei einem multinationalen 
  Unternehmen, spezialisiert auf NodeJS, C# und 
  interaktive 3D-Lösungen mit Unity, Three.js. 
  Solide Kenntnisse in C++, Linux Bash und Site Reliability 
  Engineering (Monitoring, Performance, Skalierbarkeit).
  ${appendedAboutMe}`,
  skills: {
    "Full-Stack": ["Typescript","C#","Node.js",".Net", "C++", "Python" ],
    "Frontend": ["Angular", "React","Three.JS", "SCSS","TailwindCSS", "Figma", "UI/UX" ],
    "CI/CD": ['Linux','Docker','Jenkins','K8',"YAML","Grafana","Kibana"],
    "Tools": ["Git","Vite","ESLint", "Jest", "Vibe coding"],
    "LLMs": ["Copilot","Claude","NotebookLM","Gemini","GPT",],
  },
}

export const gameEntwickler: CvData = {
  contact: contactDefault,
  occupation: {
    value: "Game Entwickler",
    acronym: 'VC',
  },
  colors: {
    primary: '#2c2e81',
    secondary: '#808183',
  },
  aboutme: `Visual-Computing-Entwickler mit Erfahrung 
    in Casual Games und Serious Simulators,
     meist mit Unity und XR. Versiert in 
     Frontend-Technologien wie React und Three.js 
     zur Erstellung interaktiver 3D-Anwendungen 
     und ansprechender Benutzerober- flächen. 
     Fokussiert auf die Entwicklung immersiver 
     digitaler Lösungen, die das Nutzererlebnis 
     verbessern – besonders in industriellen 
     und webbasierten Umgebungen. 
    Derzeit in Deutschland ansässig und motiviert, Teams 
    beizutreten, in denen ich Wissen weitergeben, Kolleg*innen
    begleiten und die kollektiven Fähigkeiten stärken könnte.`,
  skills:{...defaultSkills,
    "Graphics": ['C++',"Unity",'C#',"Unreal","XR", "UI/UX", "Figma"],
    "Frontend": ["React","Angular","Three.JS", "SCSS","TailwindCSS" ],
  },
  languages: languagesData,
  links: [
    { label: "Arbeitsmappe", url: "https://mayinteractive.io/" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/davidmayorga-software/" },
    { label: "GitHub", url: "https://github.com/damayor" },
    { label: "Behance", url: "https://www.behance.net/may_interactive" }
  ],
  courses: [
    { name: "Game Development with Unreal Engine 4", institution: "Udemy", date: "Jan 2020" },
    { name: "C++ PROGRAMMIERUNG - VON ANFÄNGER BIS FORTGESCHRITTEN", "institution": "Udemy", "date": "Mai 2025" }
  ],
  experiences: [
    {title: "Berufserfahrung", entries: [ 
      {
        company: 'ADIDAS',
        location: 'Bogotá',
        dates: 'Mai 2021 - Jun 2025',
        role: 'Frontend Softwareingenieur',
        tasks: [
          "Leitete die Entwicklung der 3D-Anpassungsfunktionen für Sportbekleidung mit <b>Three.js</b> und <b>Unity</b>, um die Web-User-Interaktion zu steigern.",
          "Entwickelte und pflegte skalierbare Frontend-Komponenten mit <b>ReactJS</b> und <b>Next.js</b> für die Global Team Sports Plattform, was zu einer personalisierten Benutzererfahrung in <b>20+ internationalen Märkten</b> beitrug.",
          "Trug zur Frontend-Architektur des <b>Yeezy E-Commerce-Portals</b> bei, das für sein minimalistisches Design und die <b>funktionale Programmierung in Typescript</b> bekannt ist und kürzere Ladezeiten ermöglichte."
        ],
      },
      {
        company: 'MADBRICKS',
        location: 'Remote',
        dates: 'Sep 2020 - Dec 2020',
        role: 'Game Entwickler',
        tasks: [
          "Entwickelte und pflegte Hyper-Casual-Mobile-Games mit <b>Unity</b> und <b>Unreal/C++</b>, wodurch die Nutzerbindung und das UI/UX-Erlebnis verbessert wurden.",
        ]
      },
      {
        company: 'UMBRA INTERACTIVE - 3D STUDIO',
        location: 'Bogotá',
        dates: 'Jan 2020 - Sep 2020',
        role: 'Frontend Softwareentwickler',
        tasks: [
            "Entwicklung <b>immersiver 3D-Anwendungen</b> mit <b>React</b> und <b>Unreal/C++</b> sowie interaktiver Masterplan-Visualisierungen für die Immobilienbranche (<i>PropTech</i>).",
            "Entwicklung von Hyper-Casual-Spielen in <b>Unity</b> und <b>Virtual Reality</b> zur Unterstützung von Marketingkampagnen und Shopping-Mall-Aktivierungen, mit spielerischer Interaktion zur Publikumsbindung."
          ]
      }
    ]},
    defaultEducation,
     defaultExtraCurricular
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
  aboutme: `Softwareingenieur mit 5 Jahren Erfahrung 
    in großskaligen Plattformen bei einem multinationalen 
    Unternehmen. Verfügt über solide Kenntnisse in
    Linux Bash und Automatisierung.     
    Ich bringe Softwareentwicklung und SRE-Praktiken zusammen, 
    um zuverlässige Lösungen zu liefern 
    basierend auf Monitoring und Beobachtbarkeit.  
    Erfahren in CI/CD, Performance-Optimierung 
    und dem Aufbau skalierbarer, robuster Systeme.
    Derzeit in Deutschland ansässig und motiviert, Teams 
    beizutreten, in denen ich Wissen weitergeben, Kolleg*innen
    begleiten und die kollektiven Fähigkeiten stärken könnte.`,
  skills: {
    "Full-Stack": ["React","Angular","Node.js","Typescript", "Next.js", "bash", "Python", "JS"],
    "CI/CD": ['Docker','Jenkins','K8',"YAML","Grafana","YAML"],
    "Monitoring": ['AWS','Grafana','Instana','Kibana','Prometheus','Opsgenie'],
    "Tools": ['Linux','bash',"Git","Vite","Storybook","ESLint", "Jest", "Vibe coding"],
    "LLMs": ["Copilot","Claude","NotebookLM","Gemini","GPT",],
  },
  languages: languagesData,
  links: [
    { label: "LinkedIn", url: "https://www.linkedin.com/in/davidmayorga-software/" },
    { label: "Stackshare", url: "https://stackshare.io/damayor/software-engineer" },
    { label: "Arbeitsmappe", url: "https://mayinteractive.io/" },
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
        role: 'Softwareingenieur ',
        tasks: [
          "Verbesserte die Zuverlässigkeit des Checkout-Backend-Mikroservice durch Observability mit <b>Grafana</b> und Alerting-Integrationen, um tägliche Transaktionen in <b>30+ Ländern</b> ohne Unterbrechung zu unterstützen.",
          "Beteiligte sich an On-Call-Rotationen zur Fehleranalyse und -behebung in der Produktion, um eine <b>99,99%</b>-Verfügbarkeit der Microservices sicherzustellen.",
          "Refaktorierte Jenkins-Pipelines und implementierte CI/CD-Best Practices für das Checkout-Service-Repository, wodurch die Deployment-Zeit von <b>15 Minuten auf unter 6 Minuten</b> reduziert wurde.",
          "Entwickelte und pflegte skalierbare Frontend-Komponenten mit <b>ReactJS</b> und <b>Next.js</b> für die Global Team Sports Plattform, was zu einer personalisierten Benutzererfahrung in <b>20+ internationalen Märkten</b> beitrug."
        ]
      },
      {
        company: 'UMBRA INTERACTIVE - 3D STUDIO',
        location: 'Bogotá',
        dates: 'Jan 2020 - Sep 2020',
        role: 'Frontend Softwareentwickler',
        tasks: [
          "Entwicklung <b>immersiver 3D-Anwendungen</b> mit <b>React</b> und <b>Unreal/C++</b> sowie interaktiver Masterplan-Visualisierungen für die Immobilienbranche (<i>PropTech</i>).",
          "Entwicklung von Hyper-Casual-Spielen in <b>Unity</b> und <b>Virtual Reality</b> zur Unterstützung von Marketingkampagnen und Shopping-Mall-Aktivierungen, mit spielerischer Interaktion zur Publikumsbindung."
        ]
      }
    ]},
    defaultEducation,
    defaultExtraCurricular
  ]
}