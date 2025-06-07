import type { FormFieldConfig } from '../types';

export const PERSONAL_DETAILS_FIELDS: FormFieldConfig[] = [
  { name: 'fullName', placeholder: 'Full Name', type: 'text' },
  { name: 'designation', placeholder: 'Designation (ex: Web Developer)', type: 'text' },
  { name: 'phone', placeholder: 'Phone Number', type: 'tel' },
  { name: 'address', placeholder: 'Address', type: 'text' },
  { name: 'emailAddress', placeholder: 'Email Address', type: 'email' },
  { name: 'githubUsername', placeholder: 'GitHub Username', type: 'text' },
  { name: 'website', placeholder: 'Website URL', type: 'url' },
  { name: 'gpgKey', placeholder: 'GPG Key URL', type: 'url' },
];

export const SECTION_ICONS = {
  about: 'mdi:target-arrow',
  education: 'mdi:education-outline',
  workExperience: 'uil:suitcase',
  personalDetails: 'mdi:user-circle',
  skills: 'mdi:cog',
  interests: 'mdi:heart',
  oss: 'tabler:brand-open-source',
} as const;

export const SECTION_COLORS = {
  about: 'bg-red-1 dark:bg-black-3 dark:text-red-3',
  education: 'bg-sky-1 dark:bg-black-3 dark:text-blue-3',
  workExperience: 'bg-purple-1 dark:bg-black-3 dark:text-purple-3',
  personalDetails: 'bg-indigo-1 dark:bg-black-3 dark:text-indigo-3',
  skills: 'bg-green-1 dark:bg-black-3 dark:text-green-3',
  interests: 'bg-yellow-1 dark:bg-black-3 dark:text-yellow-3',
  oss: 'bg-lime-2 dark:bg-black-3 dark:text-lime-3',
} as const;

export const CONTACT_ICONS = {
  address: 'mingcute:location-line',
  phone: 'fluent:call-12-regular',
  email: 'mdi:email-variant',
  github: 'mdi:github',
  website: 'logos:web-dev-icon',
  gpg: 'vscode-icons:file-type-gpg',
} as const; 