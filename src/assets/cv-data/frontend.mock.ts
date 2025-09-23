// import { CvData } from '../app/services/cv-data.service';

export interface Course {
  name: string;
  institution: string;
  date: string;
}

export interface TimelineExperience {
  company: string;
  location: string;
  dates: string;
  role: string;
  tasks: string[];
}

export interface CvData {
  contact: {
    name: string;
    email: string;
    phone: string;
    occupation: string;
    location: string;
  };
  aboutme: string;
  skills: string[];
  languages: Language[];
  links: { label: string; url: string }[];
  courses: Course[];
  experiences: {title: string, entries: TimelineExperience[]}[];
}

export interface Language {
  name: string;
  level: number; // Level as a percentage (0-100)
} 

export const frontendMockData: CvData = {
  contact: {
    name: "David Mayorga",
    email: "dr.mayorga20@gmail.com",
    phone: "+49 1525 2198970",
    location: "Berlin, Germany",
    occupation: "Senior Frontend Engineer"
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
  skills: ["Javascript", "React", "NodeJs", "Angular", "TypeScript", "C#", "C++", "Java", "Three.JS", "CSS/SCSS","CSS", "SRE", "Unity", "CI/CD", "Jenkins", "Kubernetes", "Testing"],
  languages: [
    { name: "English", level: 75 },
    { name: "Spanish", level: 100 },
    { name: "German", level: 75 }
  ],
  links: [
    { label: "LinkedIn", url: "https://www.linkedin.com/in/demayorgaherrera/" },
    { label: "Portfolio", url: "https://davidmayorgah.wixsite.com/visualcv?lang=en" },
    { label: "Behance", url: "https://www.behance.net/dev3d_may" }
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
        company: 'UMBRA INTERACTIVE - 3D STUDIO',
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
