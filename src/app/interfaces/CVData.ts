
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
  address?: string;
  workStatus?:string;
  titleRecognition?: string
  arbeitsErlaubnis?:string
}

/**
 * Titles of the fixed CV blocks. They live in the mock data files so that the
 * language is driven solely by the `lang` query param, with no separate i18n build.
 */
export interface SectionTitles {
  aboutMe: string;
  skills: string;
  languages: string;
  links: string;
  courses: string;
  personalDetails: string;
  workAuthorization: string;
  visaStatus: string;
  titleRecognition?: string
}

export interface CvData {
  contact: Contact;
  occupation: { value: string; acronym?: string };
  sectionTitles: SectionTitles;
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
