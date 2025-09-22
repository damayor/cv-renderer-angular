// import { CvData } from '../app/services/cv-data.service';

export interface Course {
  name: string;
  institution: string;
  date: string;
}

export interface CvData {
  contact: {
    name: string;
    email: string;
    phone: string;
  };
  skills: string[];
  languages: Language[];
  links: { label: string; url: string }[];
  courses: Course[];
  workExperiences: any[];
  educations: any[];
  extraCurriculars: any[];
}

export interface Language {
  name: string;
  level: number; // Level as a percentage (0-100)
} 

export const frontendMockData: CvData = {
  contact: {
    name: "Your Name",
    email: "email@example.com",
    phone: "+123456789"
  },
  skills: ["Angular", "TypeScript", "CSS", "Tailwind", "RxJS"],
  languages: [
    { name: "English", level: 75 },
    { name: "Spanish", level: 100 },
    { name: "German", level: 50 }
  ],
  links: [
    { label: "LinkedIn", url: "https://linkedin.com/in/yourprofile" },
    { label: "GitHub", url: "https://github.com/yourprofile" },
    { label: "Portfolio", url: "https://yourportfolio.com" }
  ],
  courses: [
    { name: "Angular Mastery", institution: "Udemy", date: "Jun 2023" },
    { name: "TypeScript Deep Dive", institution: "Coursera", date: "Jan 2022" },
    { name: "Advanced CSS", institution: "Pluralsight", date: "Aug 2021" },
    { name: "RxJS in Practice", institution: "Frontend Masters", date: "Nov 2020" }
  ],
  workExperiences: [
    {
      enterprise: "TechCorp",
      role: "Frontend Engineer",
      location: "Remote",
      start: "Jan 2020",
      end: "Present",
      skills: ["Angular", "TypeScript", "Leadership"]
    },
    {
      enterprise: "WebWorks",
      role: "UI Developer",
      location: "Berlin",
      start: "Feb 2018",
      end: "Dec 2019",
      skills: ["HTML", "CSS", "JavaScript"]
    }
  ],
  educations: [
    {
      enterprise: "University of Example",
      role: "Student",
      location: "Cityville",
      start: "Sep 2015",
      end: "Jun 2019",
      skills: ["Algorithms", "Data Structures", "Teamwork"]
    },
    {
      enterprise: "Online Academy",
      role: "Learner",
      location: "Online",
      start: "Jan 2020",
      skills: ["Machine Learning", "Python"]
    }
  ],
  extraCurriculars: [
    {
      enterprise: "Code4Good",
      role: "Mentor",
      location: "Online",
      start: "Mar 2021",
      skills: ["Mentoring", "Public Speaking", "Community"]
    },
    {
      enterprise: "Local Sports Club",
      role: "Coach",
      location: "Cityville",
      start: "May 2017",
      end: "Aug 2019",
      skills: ["Teamwork", "Leadership"]
    }
  ]
};
