export interface PersonalDetails {
  fullName: string;
  designation: string;
  phone: string;
  address: string;
  emailAddress: string;
  githubUsername: string;
  website: string;
  gpgKey: string;
  profile: string;
}

export interface EducationItem {
  institution: string;
  qualification: string;
  time: string;
}

export interface WorkExperienceItem {
  company: string;
  position: string;
  time: string;
}

export interface OSSProject {
  projectName: string;
  description: string;
  languages: string;
}

export interface CVData {
  personalDetails: PersonalDetails;
  education: EducationItem[];
  workExperience: WorkExperienceItem[];
  skills: string[];
  interests: string[];
  oss: OSSProject[];
}

export type Theme = 'light' | 'dark';
export type ExportFormat = 'PNG' | 'PDF';

export interface FormFieldConfig {
  name: keyof PersonalDetails;
  placeholder?: string;
  type?: 'text' | 'email' | 'tel' | 'url';
} 