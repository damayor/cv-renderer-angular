import { Contact, CvData } from "../../app/interfaces/CVData";
import { environment } from '../../environments/environment';

const contactDefault : Contact = {
  fullname: "David Mayorga",
  email: "dr.mayorga20@gmail.com",
  phone: "+49 1525 2198970",
  location: "Berlin, Deutschland",
  address:"Otto-Suhr-Allee 106C, 10585 Berlin",
  nationality: "Kolumbien",
  workStatus: "Vorhanden - Sofortiger Einstieg: 20h/Woche", // "Chancenkarte",
  visaStatus: 'Wechsel zur Vollzeit nach Vertragsschluss möglich (ca. 4 Wochen Bearbeitungszeit, abhängig von den Antwortzeiten der Ausländerbehörde).',
  titleRecongition: 'B.Sc. System- und Computertechnik (Anabin H+ / A4)',
  arbeitsErlaubnis: 'Im Rahmen von 20h/Woche vorhanden. Vollzeitanstellung nach Vertragsabschluss und Genehmigung durch die Ausländerbehörde möglich.'
}

const defaultSkills =  {
  "Frontend": ["React","Angular","Three.JS", "R3F", "Vue.js", "CSS", "SCSS","TailwindCSS" ],
  "Full-Stack": ["Node.js","Typescript", "Next.js", "bash", "Python", "JS"],
  "Graphics": ['C++',"Unity", 'C#',"Unreal","XR", "UI/UX", "Figma"],
  "CI/CD": ['Linux','Docker','Jenkins','K8',"YAML","Grafana","Elasticsearch"],
  "Tooling": ["Git","Vite","Storybook","ESLint", "Jest", "SDD"],
  "AI & LLMs": ["Claude", "Copilot","NotebookLM","Gemini","GPT",],
}

// Da ich innerhalb Deutschlands flexibel und umzugsbereit bin, 

const appendedAboutMe = `
    Wohnhaft in Berlin
    ${environment.cvScope === 'DE' ?
      `  mit Arbeitsgenehmigung und Umzugsbereitschaft. 
 
        `
      : `, da ich innerhalb Europas flexibel und umzugsbereit bin.`
    }
    Ich möchte meine internationale Erfahrung durch die hohen Qualitätstandards 
    bereichern und mich aktiv an die lokalen Arbeitsweisen anpassen.`
    //  //um gemeinsam mit dem Team zu wachsen.`
         // innerhalb Deutschlands. 

const languagesData =   [
    { name: "Englisch", level: 83 , cefrLevel: 'C1' },
    { name: "Deutsch", level: 67 , cefrLevel: 'B2' },
    { name: "Spanisch", level: 100 , cefrLevel: 'C2' },
  ]

const defaultCourses = [
    { "name": "Claude Code in Action", "institution": "Anthropic", "date": "Jun 2026" },
    { "name": "ANGULAR: VON NULL ZUM EXPERTEN - AUSGABE 2025", "institution": "{D/T} DevTalles", "date": "Jul 2025" },
    { "name": "C++ PROGRAMMIERUNG - VON ANFÄNGER BIS FORTGESCHRITTEN", "institution": "Udemy", "date": "Jul 2025" },
  ] 

const defaultEducation = 
  {title: "Ausbildung", 
      entries: [
        {
          company: "Universidad de los Andes",
          role: "M.Sc. System- und Computing Engineering",
          dates: " 2019",
          location: "Bogotá, Kolumbien",
          tasks: [
            'GPA: 4.5/5.0',
            "Design und Entwicklung eines <b>VR- und haptikbasierten</b> Trainingssimulators für orthopädische Traumatologie-Operationen",
            // "Akademische Vertiefung in <b>Visual und Computing Interaction</b>",
          ]
        },
        {
          company: "TUK",
          role: "Forschungspraktikum",
          dates: " 2018",
          location: "Kaiserslautern",
          tasks: [
            'Optimierung der Distanzerkennung in <b>AR</b> mittels <b>OpenCV</b> für Hololens innerhalb der Arbeitsgruppe HCI and Computer Graphics.'
          ]
        },
        {
          company: "Universidad de los Andes",
          role: "B.Sc. in System- und Computing Engineering",
          dates: "2017",
          location: "Bogotá, Kolumbien",
          "tasks": [
            'GPA: 4.1/5.0',
            "Offiziell anerkannter Hochschulabschluss (Anabin/ZAB <b>H+</b>) als <b>System- und Computertechnik</b> (Abschlussklasse <b>A4</b>).",
            // "Akademische Vertiefung in Visual und Computing Interaction.",
            // "Forschungsmonitor in der Gruppe IMAGINE.",
            // "Stipendium <b>„Quiero Estudiar“</b> für die besten nationalen ICFES-Ergebnisse."
          ]
        },
        {
          company: "COLEGIO ANDINO - DEUTSCHE SCHULE",
          role: "Gymnasium",
          dates: "2012",
          location: "Bogotá, Kolumbien",
          tasks: [
            "Sprachdiplom B2"          
          ]
        }
      ]
    }

const ohneMasterEducation = {title: "Ausbildung", 
      entries: [
        {
          company: "Universidad de los Andes",
          role: "B.Sc. in System- und Computing Engineering",
          dates: "2017",
          location: "Bogotá, Kolumbien",
          "tasks": [
            "Offiziell anerkannter Hochschulabschluss (Anabin/ZAB >H+) als >System- und Computertechnik (Abschlussklasse <b>A4).",
            "Akademische Vertiefung in Visual und Computing Interaction.",
            // "Stipendium <b>„Quiero Estudiar“ für die besten nationalen ICFES-Ergebnisse.",
           // "Forschungsmonitor in der Gruppe IMAGINE.",
            // "Forschungspraktikum in AG HCI und Computer Graphics an der <b>Technischen Universität Kaiserslautern", // im Jahr 2018.",

          ]
        },
        {
          company: "COLEGIO ANDINO - DEUTSCHE SCHULE",
          role: "Gymnasium",
          dates: "2012",
          location: "Bogotá, Kolumbien",
          tasks: [
            "Sprachdiplom  B2"          
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
          "Einführung in Spiele- und Immersive-Entwicklung für Schüler, mit Themen wie Materialien, Animationen und Script-Programmierung in C#. Organisiert von der Universidad Nacional de Colombia und SENA."          
        ]
      },
    ]
  }

const freelancerExperience = {
    company: 'Freelancer',
    location: 'Berlin',
    dates: 'Aug 2025 - present',
    role: 'Full-Stack Ingenieur & Automatisierungsspezialist',
    tasks: [
      // 'Rendering 3D-Masterpläne aus Unreal und 3ds Max in <b>R3F</b> unter Einbindung von <b>WebAssembly</b>, um Hochleistungs-Ergebnisse für mobile Geräte zu erreichen.',
      'Rendering 3D-Masterpläne aus 3ds Max und <b>Blender</b> in <b>R3F</b> um Hochleistungs-Ergebnisse für mobile Geräte zu erreichen.',
      "Multi-Sensor-Viewer für das nuScenes-Dataset unter Integration von <b>FastAPI</b> (Python) und R3F zur 3D-Visualisierung von <b>LiDAR-Punktwolken</b>.",
      'Nutzung von <b> LLMs</b> (Claude Code, Gemini, NotebookLM) und Vibe-Coding-Methoden zur schnellen Prototypisierung.',
    ]
      
  }

export const seniorfrontend: CvData = {
  contact: contactDefault,
  occupation: {
    value: "Senior Frontend Ingenieur  - Fokus auf Typescript und Node.js",
    acronym: 'SF'
  },
  colors: {
    primary: '#48011d',
  },
  aboutme: `
   Softwareingenieur mit 6+ Jahren Erfahrung
   in der Erstellung von großen Web-Plattformen und Anwendungen. 
   Ich bin spezialisiert auf NodeJS, TypeScript und interaktive Erfahrungen u.a. mit Three.js, und Unreal. 
   Solide Kenntnisse in C++, Linux Bash und SRE 
   in internationalen Umgebungen.
    Versiert im KI-gestützten Engineering mit Claude Code, LLMs und Spec-Driven Development.
   ${appendedAboutMe}`,
  skills: {
    "Frontend": ["React","Three.JS","TailwindCSS", "Next.js", "Angular"],
    // "Full-Stack": ["Angular","RxJs","Typescript","Node.js","REST" /*"GraphQL",*/],
    "Full-Stack": ["Node.js","Typescript","Java", "Spring", "Python"],
    "Graphics": ['C++',"Unity", 'C#',"Unreal","XR", "UI/UX", "Figma"],
    "CI/CD": ['Linux','Docker','Jenkins','Kubernetes',"YAML","Grafana"],
    "Tooling": ["Git","Vite","Storybook","Nest.js","ESLint", "Jest"],
    "AI & LLMs": ["Claude", "Copilot","NotebookLM","Gemini","GPT",],
  },
  languages: languagesData,
  links: [
    { label: "Arbeitsmappe", url: "https://mayinteractive.io/" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/davidmayorga-software/" },
    { label: "Github", url: "https://github.com/damayor" },
  ],
  courses: defaultCourses,
  experiences: [
    {title: "Berufserfahrung", entries: [ 
      freelancerExperience,
      {
        company: 'ADIDAS',
        location: 'Bogotá',
        dates: 'Mai 2021 - Jun 2025',
        role: 'Softwareingenieur ',
        tasks: [
            "Treiben der Entwicklung von <b>Anpassungsmodulen</b> (Frontend und 3D) für Sportbekleidung im PDP mit <b>Three.js</b> und <b>Unity</b>, Beitrag zu einer personalisierten User Experience in <b>20+ internationalen Märkten</b>.",
            // "Entwicklung und Pflege skalierbarer Frontend-Komponenten für die GTS Plattform, Beitrag zu einer personalisierten User Experience in <b>20+ internationalen Märkten</b>.",
            "Verbesserung der Zuverlässigkeit und Deployment-Geschwindigkeit des adidas Checkout-<b>Backends</b> durch CI/CD-Pipelines Unterstützung täglicher Transaktionen in <b>30+ Ländern</b>.",
            "Beitrag zur Frontend-Architektur des <b>Yeezy</b>, E-Commerce bekannt für minimalistisches Design und <b>funktionale Programmierung</b> mit schnelleren Ladezeiten."
          ]
      },
      {
        company: 'UMBRA 3D STUDIO - INTERACTIVE',
        location: 'Bogotá',
        dates: 'Jan 2020 - Sep 2020',
        role: 'Frontend Softwareentwickler',
        tasks: [
            "Entwicklung <b>immersiver 3D-Anwendungen</b> mit <b>React</b> und <b>Unreal/C++</b> sowie interaktiver Masterplan-Visualisierungen für die Immobilienbranche (<i>PropTech</i>).",
            "Programmierung von Hyper-Casual-Spielen in <b>Unity</b> und <b>Virtual Reality</b> zur Unterstützung von Marketingkampagnen in Einkaufszentren"
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
    value: "Frontend Ingenieur - Fokus auf Typescript und Node.js",
    acronym: 'FE'
  },
}

export const frontend3d: CvData = {
  ...seniorfrontend,
  occupation: {
    value: "Softwareingenieur - Fokus auf Typescript und Graphics",
    acronym: 'F3D',
    
  },
  skills: {
    "Frontend": ["React", "TypeScript", "Next.js", "SCSS", "TailwindCSS"],
    "Graphics": ["Three.js", "WebGL","XR", "Unity", "Unreal", "C++", "Shaders"],
    "Full-Stack": ["Node.js", "Nest.js", "REST", "PostgreSQL", "Microservices"],
    "CI/CD": ["Git", "Docker", "Jenkins", "Linux", "K8", "Grafana"],
    "Tooling": ["Blender","Vite", "Storybook", "Photoshop"],
    "AI & LLMs": ["Claude", "Copilot","NotebookLM","Gemini","GPT",],
  },
}


export const juniorfrontend: CvData = {
  ...seniorfrontend,
  occupation: {
    value: "Softwareingenieur - Fokus auf Typescript und Node.js",
    acronym: 'FJ'
  },
  contact: contactDefault,
  colors: {
    primary: '#48011d',
  },
  aboutme: `
   Softwareingenieur mit 4 Jahren Erfahrung in Kolumbien
   in der Erstellung von Web-Plattformen und Anwendungen 
   und suche gezielt nach einer Möglichkeit, meine Kenntnisse an deutsche Qualitätsstandards anzupassen.
   Ich bin spezialisiert auf NodeJS, TypeScript und UI/UX-Lösungen 
   mit TailwindCSS, SCSS sowie interaktive Erfahrungen u.a. mit Three.js. 
   Wohnhaft in Berlin mit Arbeitsgenehmigung und Umzugsbereitschaft innerhalb Deutschlands.`,
  skills: {
    "Frontend": ["React","TailwindCSS", "Three.js", "JS", "Next.js"],
    "Full-Stack": ["Node.js","Angular","Typescript","REST", "Python" /*"GraphQL",*/],
    // "Graphics": ['C++',"Unity", 'C#',"Unreal","XR", "UI/UX", "Figma"],
    // "CI/CD": [/*'Linux',*/'Docker','Jenkins','K8',"YAML","Grafana","Elasticsearch"],
    "Tooling": ["Git","Vite","Storybook","Docker","ESLint", "Jest"],
    "AI & LLMs": ["Claude", "Copilot","NotebookLM","Gemini","GPT",],
  },
  languages: languagesData,
  links: [
    { label: "Arbeitsmappe", url: "https://mayinteractive.io/" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/davidmayorga-software/" },
    { label: "Github", url: "https://github.com/damayor" },
  ],
  courses: defaultCourses,
  experiences: [
    {title: "Berufserfahrung", entries: [ 
      freelancerExperience,
      {
        company: 'ADIDAS',
        location: 'Bogotá',
        dates: 'Mai 2021 - Jun 2025',
        role: 'Softwareingenieur ',
        tasks: [
            "Treiben der Entwicklung von <b>Anpassungsmodulen</b> (Frontend und 3D) für Sportbekleidung im PDP mit <b>Three.js</b> und <b>Unity</b>, Steigerung der User-Interaktion und End-to-End-Tests mit <b>Jest</b> und <b>Cypress</b>.",
            "Entwicklung und Pflege skalierbarer Frontend-Komponenten mit <b>ReactJS</b> und <b>Next.js</b> für die GTS Plattform, Beitrag zu einer personalisierten User Experience in <b>20+ internationalen Märkten</b>.",
          ]
      },
      {
        company: 'UMBRA 3D STUDIO - INTERACTIVE',
        location: 'Bogotá',
        dates: 'Jan 2020 - Sep 2020',
        role: 'Frontend Softwareentwickler',
        tasks: [
            "Entwicklung <b>immersiver 3D-Anwendungen</b> mit <b>React</b> und <b>Unreal/C++</b> sowie interaktiver Masterplan-Visualisierungen für die Immobilienbranche (<i>PropTech</i>).",
            "Programmierung von Hyper-Casual-Spielen in <b>Unity</b> und <b>Virtual Reality</b> zur Unterstützung von Marketingkampagnen und Shopping-Mall-Aktivierungen"
          ]
      },
      // {
      //     company: "Universidad de los Andes",
      //     role: "Forschungsmonitor",
      //     dates: "2018 - 2019",
      //     location: "Bogotá, Kolumbien",
      //     tasks: [
      //       "Design und Entwicklung eines <b>VR- und haptikbasierten</b> Trainingssimulators für orthopädische Traumatologie-Operationen in Unity und Oculus, Verbesserung der Leistung von Trainees während Pilotversuchen.",
      //       "Forschungspraktikum in AG HCI und Computer Graphics an der Technischen Universität Kaiserslautern im Jahr 2018.",
      //     ]
      //   },
    ]},
    ohneMasterEducation
  ],
}


export const seniorSoftware: CvData = {
  contact: contactDefault,
  occupation: {
    value: "Senior Softwareingenieur ",
    acronym: 'SE'
  },
  colors: {
    primary: '#48011d',
  },
  aboutme: `Softwareingenieur mit 7 Jahren Erfahrung in 
  großskaligen Webplattformen bei einem multinationalen 
  Unternehmen, spezialisiert auf ReactJS, NodeJS und 
  interaktive 3D-Lösungen mit Unity, Three.js und Unreal. 
  Solide Kenntnisse in C++ und Site Reliability 
  Engineering (Monitoring, Performance, Skalierbarkeit).
  Versiert im KI-gestützten Engineering mit Claude Code, LLMs und Spec-Driven Development.
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
      freelancerExperience,
      {
        company: 'ADIDAS',
        location: 'Bogotá',
        dates: 'Mai 2021 - Jun 2025',
        role: 'Softwareingenieur',
        tasks: [
          "Treiben der Entwicklung von <b>Anpassungsmodulen</b> für Sportbekleidung im PDP mit <b>Three.js, C#</b> und <b>Unity</b>, Steigerung der User-Interaktion und End-to-End-Tests mit <b>Jest</b> und <b>Cypress</b>.",
          "Verbesserung der Zuverlässigkeit und Deployment-Geschwindigkeit des adidas Checkout durch CI/CD-Pipelines und Infrastrukturautomatisierung mit <b>Jenkins</b>, <b>Kubernetes</b> und <b>Grafana</b>, Unterstützung täglicher Transaktionen in <b>30+ Ländern</b>.",
          "Entwicklung und Pflege skalierbarer Frontend-Komponenten mit <b>ReactJS</b> und <b>Next.js</b> für die GTS Plattform, Beitrag zu einer personalisierten User Experience in <b>20+ internationalen Märkten</b>.",
          // "Beitrag zur Frontend-Architektur des <b>Yeezy E-Commerce Portals</b>, bekannt für minimalistisches Design und <b>funktionale Programmierung in Typescript</b>, mit schnelleren Ladezeiten.",
        ]
      },
      // {
      //   company: 'MADBRICKS',
      //   location: 'Remote',
      //   dates: 'Sep 2020 - Dec 2020',
      //   role: 'Game Entwickler',
      //   tasks: [
      //     "Entwickelte und pflegte Hyper-Casual-Mobile-Games mit <b>Unity/C#</b> und <b>Unreal/C++</b>, wodurch die Nutzerbindung und das UI/UX-Erlebnis verbessert wurden.",
      //   ]
      // },
      {
        company: 'UMBRA 3D STUDIO - INTERACTIVE',
        location: 'Bogotá',
        dates: 'Jan 2020 - Sep 2020',
        role: 'Frontend Softwareentwickler',
        tasks: [
          "Programmierung von Hyper-Casual-Spielen in <b>Unity, C#</b> und <b>Virtual Reality</b> zur Unterstützung von Marketingkampagnen und Shopping-Mall-Aktivierungen",
          "Entwicklung <b>immersiver 3D-Anwendungen</b> mit <b>React</b> und <b>Unreal/C++</b> sowie interaktiver Masterplan-Visualisierungen für die Immobilienbranche (<i>PropTech</i>).",
        ]
      }
    ]},
    defaultEducation,
    //  defaultExtraCurricular
  ],
};

export const fullStackIngenieur: CvData = { //kof kof, AI - Engineer
  ...seniorSoftware,
  occupation: {
    value: "Full-Stack und KI-Ingenieur",
    acronym: 'FSE'
  },
  aboutme: 
  `Softwareingenieur mit 6+ Jahren Erfahrung in 
  großskaligen Webplattformen bei einem multinationalen 
  Unternehmen, spezialisiert auf NodeJS, React und 
  interaktive 3D-Lösungen mit Unity, Three.js. 
  Versiert im KI-gestützten Engineering mit Claude Code, LLMs und Spec-Driven Development.
  Solide Kenntnisse in C++, Linux Bash und SRE (Monitoring, Performance, Skalierbarkeit).
  ${appendedAboutMe}`,
  skills: {
    "Full-Stack": ["Typescript","Node.js","C++", "Java", "Python" ],
    "AI & LLMs": ["Claude", "Copilot","NotebookLM","Gemini","GPT",],
    "Frontend": ["React","Three.JS","Angular", "SCSS","TailwindCSS", "Figma", "UI/UX" ],
    "CI/CD": ['Linux','Docker','Jenkins','K8',"YAML","Grafana"],
    "Tooling": ["Git","Vite","ESLint", "Jest", "Rest", "PostgreSQL"],
  },
}

export const graphicsEntwickler: CvData = {
  contact: contactDefault,
  occupation: {
    value: "Game Entwickler",
    acronym: 'VC',
  },
  colors: {
    primary: '#2c2e81',
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
          "Entwickelte und pflegte skalierbare Frontend-Komponenten mit <b>ReactJS</b> und <b>Next.js</b> für die GTS Plattform, was zu einer personalisierten Benutzererfahrung in <b>20+ internationalen Märkten</b> beitrug.",
          "Trug zur Frontend-Architektur des <b>Yeezy E-Commerce-Portals</b> bei, das für sein minimalistisches Design und die <b>funktionale</b> Programmierung in Typescript bekannt ist und kürzere Ladezeiten ermöglichte."
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
            "Programmierung von Hyper-Casual-Spielen in <b>Unity</b> und <b>Virtual Reality</b> zur Unterstützung von Marketingkampagnen und Shopping-Mall-Aktivierungen"
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
    value: "DevOps und Softwareingenieur",
    acronym: 'DO',
  },
  colors: {
    primary: '#286848',
  },
  aboutme: `Softwareingenieur mit 6+ Jahren Erfahrung 
    in großskaligen Plattformen bei einem multinationalen 
    Unternehmen. Verfügt über solide Kenntnisse in
    Linux Bash und Automatisierung.     
    Ich bringe Softwareentwicklung und SRE-Praktiken zusammen, 
    um zuverlässige Lösungen zu liefern 
    basierend auf Monitoring und Beobachtbarkeit.  
    Erfahren in CI/CD, Performance-Optimierung 
    und dem Aufbau skalierbarer, robuster Systeme.
     ${appendedAboutMe}`,
  skills: {
    "CI/CD": ['Docker','Jenkins','K8',"YAML","Helm", 'Groovy'],
    "Monitoring": ['Grafana','Instana','Elasticsearch','Prometheus','Opsgenie'],
    "Full-Stack": ["Node.js","Typescript", "bash", "C++","Python", "React","Angular","Next.js"],
    "Tooling": ['Linux','AWS',"Git","PostgreSQL","Terraform","Storybook","ESLint", "Jest"],
    "AI & LLMs": ["Claude", "Copilot","NotebookLM","Gemini","GPT",],
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
      freelancerExperience,
      {
        company: 'ADIDAS',
        location: 'Bogotá',
        dates: 'Mai 2021 - Jun 2025',
        role: 'Softwareingenieur ',
        tasks: [
          "Verbesserte die Zuverlässigkeit des Checkout-Backend-Mikroservice durch Observability mit <b>Grafana</b> und Alerting-Integrationen, um tägliche Transaktionen in <b>30+ Ländern</b> ohne Unterbrechung zu unterstützen.",
          "Beteiligte sich an On-Call-Rotationen zur Fehleranalyse und -behebung in der Produktion, um eine <b>99,99%</b>-Verfügbarkeit der Microservices sicherzustellen.",
          "Refaktorierte Jenkins-Pipelines und implementierte CI/CD-Best Practices für das Checkout-Service-Repository, wodurch die Deployment-Zeit von <b>15 Minuten auf unter 6 Minuten</b> reduziert wurde.",
          "Entwickelte und pflegte skalierbare Frontend-Komponenten mit <b>ReactJS</b> und <b>Next.js</b> für die GTS Plattform, was zu einer personalisierten Benutzererfahrung in <b>20+ internationalen Märkten</b> beitrug."
        ]
      },
      {
        company: 'UMBRA INTERACTIVE - 3D STUDIO',
        location: 'Bogotá',
        dates: 'Jan 2020 - Sep 2020',
        role: 'Frontend Softwareentwickler',
        tasks: [
          "Entwicklung <b>immersiver 3D-Anwendungen</b> mit <b>React</b> und <b>Unreal/C++</b> sowie interaktiver Masterplan-Visualisierungen für die Immobilienbranche (<i>PropTech</i>).",
          "Programmierung von Hyper-Casual-Spielen in <b>Unity</b> und <b>Virtual Reality</b> zur Unterstützung von Marketingkampagnen und Shopping-Mall-Aktivierungen"
        ]
      }
    ]},
    ohneMasterEducation,
    // defaultExtraCurricular
  ]
}

export const salesAssistant: CvData = { 
  contact: contactDefault,
  occupation: {
    value: "Verkäufer in Kreativmarkt & Kundenberatung",
    acronym: 'SA'
  },
  colors: {
    primary: '#286848',
  },
  aboutme: `
    Offene und kommunikative Persönlichkeit mit Erfahrung 
    im Einzelhandel, Kundenservice und kreativen Projekten.
    Bei Adidas unterstützte ich Retail-Prozesse während 
    umsatzstarker Kampagnen, von Kassentätigkeiten bis 
    zur Warenverräumung. Ich begeistere mich persönlich 
    für Kreativität, Gestaltung und DIY, und bringe diese 
    Leidenschaft gerne in die Beratung ein.
    Wohnhaft in Berlin-Charlottenburg, in der Nähe 
    der Filiale. Flexibel, zuverlässig und teamorientiert.`,
    // ${appendedAboutMe}
    // `,

  skills: {
    "Kundenservice": ["Kundenberatung", "Kassentätigkeiten", "Serviceorientierung", "Kommunikation"],
    "Lager & Waren": ["Warenverräumung", "Inventur", "Wareneingang"],
    "Soft Skills": ["Teamfähigkeit", "Zuverlässigkeit", "Flexibilität", "Eigeninitiative"],
    "Kreativität": ["Digitales Design", "UI/UX","Photoshop", "Figma"],
    "Digital": ["Social Media", "Content Creation", "Microsoft Office", "Linux"],
  },
  languages: languagesData,
  links: [
    { label: "Instagram", url: "https://www.instagram.com/davidmay___/" },
    { label: "May Interactive", url: "https://www.instagram.com/may.interactive/" },
  ],
  courses: [
    // { "name": "C++ PROGRAMMIERUNG - VON ANFÄNGER BIS FORTGESCHRITTEN", "institution": "Udemy", "date": "Mai 2025" }
  ],
 experiences: [
  {title: "Berufserfahrung", entries: [
    {
      company: 'ADIDAS',
      location: 'Bogotá',
      dates: 'Mai 2021 - Jun 2025',
      role: 'Mitarbeiter im Einzelhandel & Softwareentwicklung',
      tasks: [
        'Unterstützung des <b>Retail-Betriebs</b> an umsatzstarken Tagen wie Weihnachten und Black Friday – inklusive <b>Kundenberatung, Warenverräumung</b> und <b>Lagerverwaltung</b>.',
        'Enge Zusammenarbeit mit internationalen Teams zur Sicherstellung einer reibungslosen <b>Produktpräsentation</b> und positiven Kundenerfahrung in <b>20+ Märkten</b>.',
      ]
    },
    {
      company: 'UMBRA 3D STUDIO - INTERACTIVE',
      location: 'Bogotá',
      dates: 'Jan 2020 - Sep 2020',
      role: 'Projektmitarbeiter & Kundenbetreuung',
      tasks: [
        'Betreuung und Support von Kundenprojekten mit hoher Serviceorientierung und <b>24/7-Verfügbarkeit</b> für zwei Marken.',
        'Gestaltung kreativer <b>Markenerlebnisse</b> für Einkaufszentren und Marketingkampagnen – direkter Kontakt mit Endkunden und Partnern.',
      ]
    },
    {
      company: "COLIVRI Lab – Universidad de los Andes",
      role: "Wissenschaftlicher Monitor",
      dates: "Jun 2017 - Aug 2019",
      location: "Bogotá",
      tasks: [
        "<b>Inventarverwaltung</b> von Laborgeräten sowie Koordination und Unterstützung von Demonstrationen für Besucher und Studierende.",
        "Forschungspraktikum an der Technischen Universität <b>Kaiserslautern</b> (2018) – Arbeit in einem internationalen Umfeld.",
      ]
    },
  ]},

  {title: "Ausbildung", entries: [
    {
      company: "Universidad de los Andes",
      role: "Bachelor in System- und Computertechnik",
      dates: "2017",
      location: "Bogotá, Kolumbien",
      tasks: [
        "Offiziell anerkannter Hochschulabschluss (Anabin/ZAB <b>H+</b>) als <b>System- und Computertechnik</b> (Abschlussklasse <b>A4</b>).",
      ]
    },
    {
      company: "COLEGIO ANDINO – DEUTSCHE SCHULE",
      role: "Abitur / Hochschulreife",
      dates: "2012",
      location: "Bogotá, Kolumbien",
      tasks: [
        "Sprachdiplom Deutsch B2"
      ]
    }
  ]},

  {title: "Weitere Erfahrung", entries: [
    {
      company: "Castel Magazine Models",
      role: "Fashion Model & Content Creator",
      dates: "Jun 2024 - Jun 2025",
      location: "Bogotá",
      tasks: [
        "Erstellung von visuellem Content und UGC für <b>Social-Media-Kampagnen</b> mit Fokus auf Markenkommunikation und Eventmanagement.",
      ]
    },
    {
      company: "Universidad de los Andes",
      role: "Theatermitglied",
      dates: "Jan 2016 - Jun 2018",
      location: "Bogotá",
      tasks: [
        "Mitwirkung in Theaterproduktionen – Stärkung von <b>Teamarbeit, Improvisation und Kommunikationsfähigkeiten</b> im direkten Publikumskontakt.",
      ]
    },
  ]},
],
}