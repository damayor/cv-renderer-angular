
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

export interface Contact {
  fullname: string;
  email: string;
  phone: string;
  location: string;
  nationality: string;
  visaStatus?: string;
}

export interface CvData {
  contact: Contact;
  occupation: { value: string; acronym?: string };
  aboutme: string;
  colors: Record<string, string>;
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
