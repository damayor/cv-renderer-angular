// import { Contact, CvData } from "../../app/interfaces/CVData";

// const contactDefault : Contact = {
//   fullname: "David Mayorga",
//   email: "dr.mayorga20@gmail.com",
//   phone: "+49 1525 2198970",
//   location: "Berlin, Deutschland",
//   nationality: "Kolumbien",
//   visaStatus: "Chancenkarte"
// }

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
   in internationalen Umgebungen. Da ich vor kurzem nach Berlin 
   gezogen bin und über eine volle Arbeits-genehmigung verfüge, 
   suche ich nach innovativen Engineering-Teams. Mein Ziel ist es, 
   nicht nur meine technischen Kenntnisse einzubringen, sondern 
   auch meine Kollegen zu fördern, damit die gesamte Gruppe gemeinsam wachsen kann.`,
  skills: ["Typescript", "React", "NodeJs","Angular", "RxJs", "Next.js","Tailwind" ,"Javascript", "C#", "C++", "Java", "AI", "LLMs", "Three.JS", "SCSS", "SRE", "Unity", "UI/UX", "Figma", "Jenkins", "Kubernetes", "Testing"],
  languages: [
    { name: "Englisch", level: 83 },
    { name: "Spanisch", level: 100 },
    { name: "Deutsch", level: 67 }
  ],
  links: [
    { label: "Arbeitsmappe", url: "https://mayinteractive.io/" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/davidmayorga-software/" },
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
            "Entwicklung und Pflege skalierbarer Frontend-Komponenten mit <b>ReactJS</b> und <b>Next.js</b> für die Global Team Sports Plattform, Beitrag zu einer personalisierten User Experience in <b>20+ internationalen Märkten</b>.",
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
          role: "M.Sc. System- und Computertechnik",
          dates: " 2019",
          location: "Bogotá, Kolumbien",
          tasks: [
            "Forschungspraktikum in AG HCI und Computer Graphics an der <b>Technischen Universität Kaiserslautern</b> im Jahr 2018, um AR Anwendungen für Hololens zu entwickeln.",
            "Design und Entwicklung eines <b>VR- und haptikbasierten</b> Trainingssimulators für orthopädische Traumatologie-Operationen in Unity und Oculus, Verbesserung der Leistung von Trainees während Pilotversuchen."
          ]
        },
        {
          company: "Universidad de los Andes",
          role: "Bachelor on System- und Computertechnik",
          dates: "2017",
          location: "Bogotá, Kolumbien",
          "tasks": [
            "Akademische Vertiefung in Visuelle und Interaktive Informatik.",
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

// export const frontend: CvData = {
//   ...seniorfrontend,
//   occupation: {
//     value: "Frontend Ingenieur",
//     acronym: 'FE'
//   },
// }

export const frontend3d: CvData = {
  ...seniorfrontend,
  occupation: {
    value: "Softwareingenieur - Fokus auf Computer Graphics und 3D",
    acronym: 'F3D',
    
  },
  skills: ["Typescript", "NodeJs", "React", "Storybook", "Three.JS", "R3F", "Angular", "C++", "C#", 'Python',"Vue.js","Javascript","Next.js", "TailwindCSS", "AI", "LLMs","Java", "SRE", "Linux", "Docker", "Unity", "SCSS", "CI/CD", "Jenkins", "Kubernetes", "Testing", "Unreal", "XR", "UI/UX", "Figma"],
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
    // secondary: '#808183'
  },
  aboutme: `Softwareingenieur mit 7 Jahren Erfahrung in 
  großskaligen Webplattformen bei einem multinationalen 
  Unternehmen, spezialisiert auf ReactJS, NodeJS und 
  interaktive 3D-Lösungen mit Unity, Three.js und Unreal. 
  Solide Kenntnisse in C++, Linux Bash und Site Reliability 
  Engineering (Monitoring, Performance, Skalierbarkeit).
  Derzeit in Deutschland ansässig und motiviert, Teams 
  beizutreten, in denen ich Wissen weitergeben, Kolleg*innen
   begleiten und die kollektiven Fähigkeiten stärken könnte.`,
  skills: ["Typescript", "NodeJs", "React", "Angular", "C++", "Javascript","Next.js", "TailwindCSS","Vue.js", "AI", "LLMs", "C#", "Java", 'Python', "Three.JS", "SRE", "Linux", "Docker", "Unity", "SCSS", "CI/CD", "Jenkins", "Kubernetes", "Testing", "Unreal", "XR", "UI/UX", "Figma"],
  languages: [
    { name: "Englisch", level: 83 },
    { name: "Spanisch", level: 100 },
    { name: "Deutsch", level: 67 }
  ],
  links: [
    { label: "Arbeitsmappe", url: "https://mayinteractive.io/" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/davidmayorga-software/" },
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
        role: 'Softwareingenieur',
        tasks: [
          "Verbesserung der Zuverlässigkeit und Deployment-Geschwindigkeit des adidas Checkout durch CI/CD-Pipelines und Infrastrukturautomatisierung mit <b>Jenkins</b>, <b>Kubernetes</b> und <b>Grafana</b>, Unterstützung täglicher Transaktionen in <b>30+ Ländern</b>.",
          "Entwicklung und Pflege skalierbarer Frontend-Komponenten mit <b>ReactJS</b> und <b>Next.js</b> für die Global Team Sports Plattform, Beitrag zu einer personalisierten User Experience in <b>20+ internationalen Märkten</b>.",
          "Leitung der Entwicklung von <b>Anpassungsmodulen</b> für Sportbekleidung im PDP mit <b>Three.js</b> und <b>Unity</b>, Steigerung der User-Interaktion und End-to-End-Tests mit <b>Jest</b> und <b>Cypress</b>.",
          "Beitrag zur Frontend-Architektur des <b>Yeezy E-Commerce Portals</b>, bekannt für minimalistisches Design und <b>funktionale Programmierung in Typescript</b>, mit schnelleren Ladezeiten.",
        ]
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

// export const fullStackIngenieur: CvData = {
//   ...seniorSoftware,
//   occupation: {
//     value: "Full Stack Ingenieur",
//     acronym: 'FSE'
//   },
//   aboutme: 
//   `Softwareingenieur mit 5 Jahren Erfahrung in 
//   großskaligen Webplattformen bei einem multinationalen 
//   Unternehmen, spezialisiert auf NodeJS, TailwindCSS und 
//   interaktive 3D-Lösungen mit Unity, Three.js und Unreal. 
//   Solide Kenntnisse in C++, Linux Bash und Site Reliability 
//   Engineering (Monitoring, Performance, Skalierbarkeit).
//   Derzeit in Deutschland ansässig und motiviert, Teams 
//   beizutreten, in denen ich Wissen weitergeben, Kolleg*innen
//    begleiten und die kollektiven Fähigkeiten stärken könnte.`,
//   skills: ["Typescript", "NodeJs", "React", "Angular", "Next.js", "TailwindCSS","Javascript","Vue.js","C++", "Java","AI", "LLMs", "C#",  "Three.JS", "SRE", "Linux", "Docker", "Unity", "SCSS", "CI/CD", "Jenkins", "Kubernetes", "Testing", "Unreal", "XR", "UI/UX", "Figma"],

// }

// export const gameEntwickler: CvData = {
//   contact: contactDefault,
//   occupation: {
//     value: "Game Entwickler",
//     acronym: 'VC',
//   },
//   colors: {
//     primary: '#2c2e81',
//     secondary: '#808183',
//   },
//   aboutme: `Visual-Computing-Entwickler mit Erfahrung 
//     in Casual Games und Serious Simulators,
//      meist mit Unity und XR. Versiert in 
//      Frontend-Technologien wie React und Three.js 
//      zur Erstellung interaktiver 3D-Anwendungen 
//      und ansprechender Benutzerober- flächen. 
//      Fokussiert auf die Entwicklung immersiver 
//      digitaler Lösungen, die das Nutzererlebnis 
//      verbessern – besonders in industriellen 
//      und webbasierten Umgebungen. 
//     Derzeit in Deutschland ansässig und motiviert, Teams 
//     beizutreten, in denen ich Wissen weitergeben, Kolleg*innen
//     begleiten und die kollektiven Fähigkeiten stärken könnte.`,
//   skills: ['C#', 'Unity', 'C++', 'Unreal', 'UI/UX', 'Javascript', 'React', 'WebGL', 'Three.Js', 'PixiJs', 'Python', 'VR', 'Figma', 'Blender', 'Sketchup', 'Godot', 'AR', '3dMax'],
//   languages: [
//     { name: "Englisch", level: 83 },
//     { name: "Spanisch", level: 100 },
//     { name: "Deutsch", level: 67 }
//   ],
//   links: [
//     { label: "Arbeitsmappe", url: "https://mayinteractive.io/" },
//     { label: "LinkedIn", url: "https://www.linkedin.com/in/davidmayorga-software/" },
//     { label: "GitHub", url: "https://github.com/damayor" },
//     { label: "Behance", url: "https://www.behance.net/may_interactive" }
//   ],
//   courses: [
//     { name: "Game Development with Unreal Engine 4", institution: "Udemy", date: "Jan 2020" },
//     { "name": "C++ PROGRAMMIERUNG - VON ANFÄNGER BIS FORTGESCHRITTEN", "institution": "Udemy", "date": "Mai 2025" }
//   ],
//   experiences: [
//     {title: "Berufserfahrung", entries: [ 
//       {
//         company: 'ADIDAS',
//         location: 'Bogotá',
//         dates: 'Mai 2021 - Jun 2025',
//         role: 'Frontend Softwareingenieur',
//         tasks: [
//           "Leitete die Entwicklung der 3D-Anpassungsfunktionen für Sportbekleidung mit <b>Three.js</b> und <b>Unity</b>, um die Web-User-Interaktion zu steigern.",
//           "Entwickelte und pflegte skalierbare Frontend-Komponenten mit <b>ReactJS</b> und <b>Next.js</b> für die Global Team Sports Plattform, was zu einer personalisierten Benutzererfahrung in <b>20+ internationalen Märkten</b> beitrug.",
//           "Trug zur Frontend-Architektur des <b>Yeezy E-Commerce-Portals</b> bei, das für sein minimalistisches Design und die <b>funktionale Programmierung in Typescript</b> bekannt ist und kürzere Ladezeiten ermöglichte."
//         ],
//       },
//       {
//         company: 'MADBRICKS',
//         location: 'Remote',
//         dates: 'Sep 2020 - Dec 2020',
//         role: 'Game Entwickler',
//         tasks: [
//           "Entwickelte und pflegte Hyper-Casual-Mobile-Games mit <b>Unity</b> und <b>Unreal/C++</b>, wodurch die Nutzerbindung und das UI/UX-Erlebnis verbessert wurden.",
//         ]
//       },
//       {
//         company: 'UMBRA INTERACTIVE - 3D STUDIO',
//         location: 'Bogotá',
//         dates: 'Jan 2020 - Sep 2020',
//         role: 'Frontend Softwareentwickler',
//         tasks: [
//             "Entwicklung <b>immersiver 3D-Anwendungen</b> mit <b>React</b> und <b>Unreal/C++</b> sowie interaktiver Masterplan-Visualisierungen für die Immobilienbranche (<i>PropTech</i>).",
//             "Entwicklung von Hyper-Casual-Spielen in <b>Unity</b> und <b>Virtual Reality</b> zur Unterstützung von Marketingkampagnen und Shopping-Mall-Aktivierungen, mit spielerischer Interaktion zur Publikumsbindung."
//           ]
//       }
//     ]},
//     {title: "Ausbildung", 
//       entries: [
//         {
//           company: "Universidad de los Andes",
//           role: "M.Sc. System- und Computertechnik",
//           dates: " 2019",
//           location: "Bogotá, Kolumbien",
//           "tasks": [
//             "Forschungspraktikum in AG HCI und Computer Graphics an der Technischen Universität Kaiserslautern im Jahr 2018.",
//             "Design und Entwicklung eines <b>VR- und haptikbasierten</b> Trainingssimulators für orthopädische Traumatologie-Operationen in Unity und Oculus, Verbesserung der Leistung von Trainees während Pilotversuchen."
//           ]
//         },
//         {
//           company: "Universidad de los Andes",
//           role: "Bachelor on System- und Computertechnik",
//           dates: "2017",
//           location: "Bogotá, Kolumbien",
//           "tasks": [
//             "Akademische Vertiefung in Visual und Computing Interaction.",
//             "Forschungsmonitor in der Gruppe IMAGINE.",
//             "Stipendium „Quiero Estudiar“ für die besten nationalen ICFES-Ergebnisse."
//           ]
//         },
//         {
//           company: "COLEGIO ANDINO - DEUTSCHE SCHULE",
//           role: "Gymnasium",
//           dates: "2012",
//           location: "Bogotá, Kolumbien",
//           tasks: [
//             "Sprachdiplome: \n Hören C1, Lesen C1, Schreiben B2, Sprechen B2"          
//           ]
//         }
//       ]
//     },
//      {title: "Außerunterrichtliche Aktivitäten", 
//       entries: [
//         {
//           company: "SCIENCE und TECHNOLOGY CLUBS",
//           role: "Nationaler Dozent für „Virtual Reality in Unity“",
//           dates: "Jun 2019 - Jul 2019",
//           location: "Bogotá",
//           tasks: [
//            "Einführung in Spiele- und Immersive-Entwicklung für Schüler, mit Themen wie Materialien, Humanoiden, Animationen und Script-Programmierung. Organisiert von der Universidad Nacional de Colombia und SENA."          
//           ]
//         },
//       ]
//     }
//   ],
// };

// export const sre: CvData = {
//   contact: contactDefault,
//   occupation: {
//     value: "DevOps / Site Reliability Engineer",
//     acronym: 'DO',
//   },
//   colors: {
//     primary: '#287848',
//   },
//   aboutme: `Softwareingenieur mit 5 Jahren Erfahrung 
//     in großskaligen Plattformen bei einem multinationalen 
//     Unternehmen. Verfügt über solide Kenntnisse in
//     Linux Bash und Automatisierung.     
//     Ich bringe Softwareentwicklung und SRE-Praktiken zusammen, 
//     um zuverlässige Lösungen zu liefern 
//     basierend auf Monitoring und Beobachtbarkeit.  
//     Erfahren in CI/CD, Performance-Optimierung 
//     und dem Aufbau skalierbarer, robuster Systeme.
//     Derzeit in Deutschland ansässig und motiviert, Teams 
//     beizutreten, in denen ich Wissen weitergeben, Kolleg*innen
//     begleiten und die kollektiven Fähigkeiten stärken könnte.`,
//   skills: ['Linux', 'ci/cd','jenkins','groovy',"AI", "LLMs",'SRE','DevOps','Kubernetes','Yaml','Observability','Grafana','Docker','Instana','Kibana','Prometheus','Aws','Opsgenie','NodeJs','C++','React','JS/TS','Angular','Java'],
//   languages: [
//     { name: "Englisch", level: 83 },
//     { name: "Spanisch", level: 100 },
//     { name: "Deutsch", level: 67 }
//   ],
//   links: [
//     { label: "LinkedIn", url: "https://www.linkedin.com/in/davidmayorga-software/" },
//     { label: "Stackshare", url: "https://stackshare.io/damayor/software-engineer" },
//     { label: "Arbeitsmappe", url: "https://mayinteractive.io/" },
//   ],
//   courses: [
//     { "name": "C++ PROGRAMMIERUNG - VON ANFÄNGER BIS FORTGESCHRITTEN", "institution": "Udemy", "date": "Mai 2025" }
//   ],
//   experiences: [
//     {title: "Berufserfahrung", entries: [ 
//       {
//         company: 'ADIDAS',
//         location: 'Bogotá',
//         dates: 'Mai 2021 - Jun 2025',
//         role: 'Softwareingenieur ',
//         tasks: [
//           "Verbesserte die Zuverlässigkeit des Checkout-Backend-Mikroservice durch Observability mit <b>Grafana</b> und Alerting-Integrationen, um tägliche Transaktionen in <b>30+ Ländern</b> ohne Unterbrechung zu unterstützen.",
//           "Beteiligte sich an On-Call-Rotationen zur Fehleranalyse und -behebung in der Produktion, um eine <b>99,99%</b>-Verfügbarkeit der Microservices sicherzustellen.",
//           "Refaktorierte Jenkins-Pipelines und implementierte CI/CD-Best Practices für das Checkout-Service-Repository, wodurch die Deployment-Zeit von <b>15 Minuten auf unter 6 Minuten</b> reduziert wurde.",
//           "Entwickelte und pflegte skalierbare Frontend-Komponenten mit <b>ReactJS</b> und <b>Next.js</b> für die Global Team Sports Plattform, was zu einer personalisierten Benutzererfahrung in <b>20+ internationalen Märkten</b> beitrug."
//         ]
//       },
//       {
//         company: 'UMBRA INTERACTIVE - 3D STUDIO',
//         location: 'Bogotá',
//         dates: 'Jan 2020 - Sep 2020',
//         role: 'Frontend Softwareentwickler',
//         tasks: [
//           "Entwicklung <b>immersiver 3D-Anwendungen</b> mit <b>React</b> und <b>Unreal/C++</b> sowie interaktiver Masterplan-Visualisierungen für die Immobilienbranche (<i>PropTech</i>).",
//           "Entwicklung von Hyper-Casual-Spielen in <b>Unity</b> und <b>Virtual Reality</b> zur Unterstützung von Marketingkampagnen und Shopping-Mall-Aktivierungen, mit spielerischer Interaktion zur Publikumsbindung."
//         ]
//       }
//     ]},
//     {title: "Ausbildung", 
//       entries: [
//         {
//           company: "Universidad de los Andes",
//           role: "M.Sc. System- und Computertechnik",
//           dates: " 2019",
//           location: "Bogotá, Kolumbien",
//           "tasks": [
//             "Forschungspraktikum in AG HCI und Computer Graphics an der Technischen Universität Kaiserslautern im Jahr 2018.",
//             "Design und Entwicklung eines <b>VR- und haptikbasierten</b> Trainingssimulators für orthopädische Traumatologie-Operationen in Unity und Oculus, Verbesserung der Leistung von Trainees während Pilotversuchen."
//           ]
//         },
//         {
//           company: "Universidad de los Andes",
//           role: "Bachelor on System- und Computertechnik",
//           dates: "2017",
//           location: "Bogotá, Kolumbien",
//           "tasks": [
//             "Akademische Vertiefung in Visual und Computing Interaction.",
//             "Forschungsmonitor in der Gruppe IMAGINE.",
//             "Stipendium „Quiero Estudiar“ für die besten nationalen ICFES-Ergebnisse."
//           ]
//         },
//         {
//           company: "COLEGIO ANDINO - DEUTSCHE SCHULE",
//           role: "Gymnasium",
//           dates: "2012",
//           location: "Bogotá, Kolumbien",
//           tasks: [
//             "Sprachdiplome: \n Hören C1, Lesen C1, Schreiben B2, Sprechen B2"          
//           ]
//         }
//       ]
//     },
//      {title: "Außerunterrichtliche Aktivitäten", 
//       entries: [
//         {
//           company: "SCIENCE und TECHNOLOGY CLUBS",
//           role: "Nationaler Dozent für „Virtual Reality in Unity“",
//           dates: "Jun 2019 - Jul 2019",
//           location: "Bogotá",
//           tasks: [
//            "Einführung in Spiele- und Immersive-Entwicklung für Schüler, mit Themen wie Materialien, Humanoiden, Animationen und Script-Programmierung. Organisiert von der Universidad Nacional de Colombia und SENA."          
//           ]
//         },
//       ]
//     }
//   ],
// };