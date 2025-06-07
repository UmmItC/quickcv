import { Icon } from "@iconify-icon/solid";
import { createSignal } from "solid-js";
import { store } from "../store/index";
import type { Theme } from "../types";

const [theme] = createSignal<Theme>(
  (localStorage.theme as Theme) || "dark"
);

const isDarkTheme = () => theme() === "dark";
const getCurrentTheme = () => theme();

const Name = () => (
  <div class="text-center mb-6">

    <div class="border-slate-3 border-solid border-1 border-slate-2 dark:border-slate-7 mb-10"></div>
    
    <div class="flex gap-3 justify-center items-baseline mb-2">
      <h1 class="text-4xl font-light !m-0 text-white dark:text-white">
        {store.personalDetails.fullName.split(" ")[0]}
      </h1>
      <h1 class="text-4xl font-light !m-0 text-blue-600 dark:text-blue-400">
        {store.personalDetails.fullName.split(" ")[1]}
      </h1>
    </div>
    
    <p class="text-lg text-slate-600 dark:text-slate-400 !m-0 font-light">
      {store.personalDetails.designation}
    </p>
    
    <div class="border-slate-3 border-solid border-1 border-slate-2 dark:border-slate-7 mt-10"></div>
    
    <p class="text-xs text-slate-500 mt-2">
      {/* Current theme: {getCurrentTheme()} | Is dark: {isDarkTheme() ? "Yes" : "No"} */}
    </p>
  </div>
);

const Section = ({ title, icon, iconColor, children }: {
  title: string;
  icon: string;
  iconColor: string;
  children: any;
}) => (
  <div class="mb-8">
    <div class="flex items-center gap-3 mb-4 pb-2 border-b border-slate-300 dark:border-slate-700">
      <Icon
        icon={icon}
        width="20"
        class={`${iconColor} p-1 rounded`}
      />
      <h2 class="text-lg font-medium text-white !m-0">{title}</h2>
    </div>
    <div class="ml-2">
      {children}
    </div>
  </div>
);

const About = () => (
  <Section 
    title="About" 
    icon="mdi:target-arrow" 
    iconColor="text-red-500 dark:text-red-400"
  >
    <p class="text-slate-600 dark:text-slate-300 leading-relaxed">
      {store.personalDetails.profile}
    </p>
  </Section>
);

const Education = () => (
  <Section 
    title="Education" 
    icon="mdi:education-outline" 
    iconColor="text-blue-500 dark:text-blue-400"
  >
    <div class="space-y-3">
      {store.education.map((x) => (
        <div class="flex justify-between items-start">
          <div>
            <p class="text-white font-medium !m-0">{x.institution}</p>
            <p class="text-slate-600 dark:text-slate-400 text-sm !m-0">{x.qualification}</p>
          </div>
          <span class="text-xs bg-slate-300 dark:bg-slate-700 text-slate-700 dark:text-slate-300 px-2 py-1 rounded">
            {x.time}
          </span>
        </div>
      ))}
    </div>
  </Section>
);

const WorkExp = () => (
  <Section 
    title="Work Experience" 
    icon="uil:suitcase" 
    iconColor="text-purple-500 dark:text-purple-400"
  >
    <div class="space-y-3">
      {store.workExperience.map((x) => (
        <div class="flex justify-between items-start">
          <div>
            <p class="text-white font-medium !m-0">{x.company}</p>
            <p class="text-slate-600 dark:text-slate-400 text-sm !m-0">{x.position}</p>
          </div>
          <span class="text-xs bg-slate-300 dark:bg-slate-700 text-slate-700 dark:text-slate-300 px-2 py-1 rounded">
            {x.time}
          </span>
        </div>
      ))}
    </div>
  </Section>
);

const PersonalDetails = () => (
  <Section 
    title="Personal Details" 
    icon="mdi:user-circle" 
    iconColor="text-indigo-500 dark:text-indigo-400"
  >
    <div class="grid grid-cols-1 gap-3 text-sm">
      {store.personalDetails.address && (
        <div class="flex items-center gap-3">
          <Icon icon="mingcute:location-line" width="16" class="text-slate-500 dark:text-slate-400" />
          <span class="text-slate-600 dark:text-slate-300">
            <span class="text-slate-500 dark:text-slate-400">Address:</span> {store.personalDetails.address}
          </span>
        </div>
      )}
      
      <div class="flex items-center gap-3">
        <Icon icon="fluent:call-12-regular" width="16" class="text-slate-500 dark:text-slate-400" />
        <span class="text-slate-600 dark:text-slate-300">
          <span class="text-slate-500 dark:text-slate-400">Phone:</span> {store.personalDetails.phone}
        </span>
      </div>

      <div class="flex items-center gap-3">
        <Icon icon="mdi:email-variant" width="16" class="text-slate-500 dark:text-slate-400" />
        <span class="text-slate-600 dark:text-slate-300">
          <span class="text-slate-500 dark:text-slate-400">Email:</span> {store.personalDetails.emailAddress}
        </span>
      </div>

      <div class="flex items-center gap-3">
        <Icon icon="mdi:github" width="16" class="text-slate-500 dark:text-slate-400" />
        <span class="text-slate-600 dark:text-slate-300">
          <span class="text-slate-500 dark:text-slate-400">Github:</span> @{store.personalDetails.githubUsername}
        </span>
      </div>

      <div class="flex items-center gap-3">
        <Icon icon="logos:web-dev-icon" width="16" class="text-slate-500 dark:text-slate-400" />
        <span class="text-slate-600 dark:text-slate-300">
          <span class="text-slate-500 dark:text-slate-400">Website:</span> {store.personalDetails.website}
        </span>
      </div>

      <div class="flex items-center gap-3">
        <Icon icon="vscode-icons:file-type-gpg" width="16" class="text-slate-500 dark:text-slate-400" />
        <span class="text-slate-600 dark:text-slate-300">
          <span class="text-slate-500 dark:text-slate-400">GPG Key:</span> {store.personalDetails.gpgKey}
        </span>
      </div>
    </div>
  </Section>
);

const Skills = () => (
  <Section 
    title="Skills" 
    icon="ph-code-bold" 
    iconColor="text-orange-500 dark:text-orange-400"
  >
    <div class="flex flex-wrap gap-2">
      {store.skills.map((skill) => {
        const parts = skill.split(" ");
        const iconName = parts[parts.length - 1];
        const skillName = parts.slice(0, -1).join(" ");
        
        return (
          <span
            class="inline-flex items-center gap-1 px-3 py-1 bg-blue-100 dark:bg-slate-800 text-blue-800 dark:text-slate-200 rounded-full text-sm"
          >
            <Icon icon={iconName.toLowerCase()} width="14" />
            {skillName}
          </span>
        );
      })}
    </div>
  </Section>
);

const Interests = () => (
  <Section 
    title="Interests" 
    icon="typcn:point-of-interest" 
    iconColor="text-cyan-500 dark:text-cyan-400"
  >
    <div class="flex flex-wrap gap-2">
      {store.interests.map((interest) => {
        const parts = interest.split(" ");
        const iconName = parts[parts.length - 1];
        const interestName = parts.slice(0, -1).join(" ");
        
        return (
          <span
            class="inline-flex items-center gap-1 px-3 py-1 bg-green-100 dark:bg-slate-800 text-green-800 dark:text-slate-200 rounded-full text-sm"
          >
            <Icon icon={iconName.toLowerCase()} width="14" />
            {interestName}
          </span>
        );
      })}
    </div>
  </Section>
);

const OSS = () => (
  <Section 
    title="Open Source Projects" 
    icon="tabler:brand-open-source" 
    iconColor="text-green-500 dark:text-green-400"
  >
    <div class="space-y-4">
      {store.oss.map((project) => (
        <div class="border border-slate-300 dark:border-slate-700 rounded-lg p-4 bg-slate-50 dark:bg-slate-800/50">
          <div class="flex justify-between items-start mb-2">
            <h3 class="text-white font-medium !m-0">{project.projectName}</h3>
            <span class="text-xs text-slate-500 dark:text-slate-400">({project.languages})</span>
          </div>
          <p class="text-slate-600 dark:text-slate-300 text-sm !m-0 leading-relaxed">
            {project.description}
          </p>
        </div>
      ))}
    </div>
  </Section>
);

const Viewer = () => {
  return (
    <div
      class="max-w-4xl mx-auto bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 p-8 rounded-lg shadow-2xl"
      id="resumeResult"
    >
      <Name />
      
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
        <div class="space-y-6">
          <About />
          <Education />
          <WorkExp />
          <OSS />
        </div>
        
        <div class="space-y-6">
          <PersonalDetails />
          <Skills />
          <Interests />
        </div>
      </div>
    </div>
  );
};

export default Viewer;
