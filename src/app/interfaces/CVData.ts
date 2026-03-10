
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
  achievements?: string[];
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
  skills: Record<string, string[]>;
  languages: Language[];
  links: { label: string; url: string }[];
  courses: Course[];
  experiences: {title: string, entries: TimelineExperience[]}[];
}

export interface Language {
  name: string;
  level: number;
  cefrLevel?: string;
} 
