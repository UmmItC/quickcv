import { For } from "solid-js";
import { Icon } from "@iconify-icon/solid";
import { store, setStore } from "../store/index";
import type { OSSProject } from "../types";

const PersonalDetailsSection = () => {
  const placeholders = [
    { name: "fullName", placeholder: "Full Name" },
    { name: "designation", placeholder: "Designation (ex: Web Developer)" },
    { name: "phone", placeholder: "Phone Number" },
    { name: "address", placeholder: "Address" },
    { name: "emailAddress", placeholder: "Email Address" },
    { name: "githubUsername", placeholder: "GitHub Username" },
    { name: "website", placeholder: "Website URL" },
    { name: "gpgKey", placeholder: "GPG Key URL" },
  ];

  return (
    <div>
      <h3>Personal Details</h3>
      <div class="grid gap-3 md:grid-cols-2">
        {placeholders.map((field) => (
          <input
            placeholder={field.placeholder}
            onChange={(e) => setStore("personalDetails", field.name as keyof typeof store.personalDetails, e.target.value)}
            value={store.personalDetails[field.name as keyof typeof store.personalDetails] || ""}
          />
        ))}
      </div>
    </div>
  );
};

const AboutSection = () => {
  return (
    <div>
      <h3>About</h3>
      <div class="grid gap-3">
        <input
          placeholder="Write a short self introduction & goals"
          onChange={(e) => setStore("personalDetails", "profile", e.target.value)}
          value={store.personalDetails.profile || ""}
        />
      </div>
    </div>
  );
};

const EducationSection = () => {
  const handleAdd = () => {
    setStore("education", [...store.education, { institution: "", qualification: "", time: "" }]);
  };

  const handleRemove = (index: number) => {
    setStore("education", store.education.filter((_, i) => i !== index));
  };

  const handleUpdate = (index: number, key: string, value: string) => {
    setStore("education", index, key as any, value);
  };

  return (
    <div>
      <h3 class="capitalize">Education</h3>

      <div class="grid gap-4">
        <For each={store.education}>
          {(obj, index) => (
            <div class="flex flex-col gap-3 md:flex-row md:items-end">
              <div class="flex flex-col gap-3 flex-1 md:flex-row">
                {Object.entries(obj).map(([key, value]) => (
                  <input
                    class="flex-1"
                    placeholder={key.charAt(0).toUpperCase() + key.slice(1)}
                    value={value as string}
                    onchange={(e) => handleUpdate(index(), key, e.target.value)}
                  />
                ))}
              </div>

              <button
                aria-label="delete input"
                class="!bg-red-5 hover:!bg-red-6 !text-white-1 !p-2 !rounded-full flex-shrink-0"
                onclick={() => handleRemove(index())}
              >
                <Icon icon="ion:close-circle" class="text-lg" />
              </button>
            </div>
          )}
        </For>
      </div>

      <button
        class="!bg-blue-6 hover:!bg-blue-7 mt-4 mx-auto !text-white-1 flex items-center gap-2 px-4 py-2"
        onclick={handleAdd}
      >
        <Icon icon="ic:round-add-circle" class="text-lg" />
        Add Education
      </button>
    </div>
  );
};

const WorkExperienceSection = () => {
  const handleAdd = () => {
    setStore("workExperience", [...store.workExperience, { company: "", position: "", time: "" }]);
  };

  const handleRemove = (index: number) => {
    setStore("workExperience", store.workExperience.filter((_, i) => i !== index));
  };

  const handleUpdate = (index: number, key: string, value: string) => {
    setStore("workExperience", index, key as any, value);
  };

  return (
    <div>
      <h3 class="capitalize">Work Experience</h3>

      <div class="grid gap-4">
        <For each={store.workExperience}>
          {(obj, index) => (
            <div class="flex flex-col gap-3 md:flex-row md:items-end">
              <div class="flex flex-col gap-3 flex-1 md:flex-row">
                {Object.entries(obj).map(([key, value]) => (
                  <input
                    class="flex-1"
                    placeholder={key.charAt(0).toUpperCase() + key.slice(1)}
                    value={value as string}
                    onchange={(e) => handleUpdate(index(), key, e.target.value)}
                  />
                ))}
              </div>

              <button
                aria-label="delete input"
                class="!bg-red-5 hover:!bg-red-6 !text-white-1 !p-2 !rounded-full flex-shrink-0"
                onclick={() => handleRemove(index())}
              >
                <Icon icon="ion:close-circle" class="text-lg" />
              </button>
            </div>
          )}
        </For>
      </div>

      <button
        class="!bg-blue-6 hover:!bg-blue-7 mt-4 mx-auto !text-white-1 flex items-center gap-2 px-4 py-2"
        onclick={handleAdd}
      >
        <Icon icon="ic:round-add-circle" class="text-lg" />
        Add Experience
      </button>
    </div>
  );
};

const SkillsInterestsSection = (props: { sectionType: 'skills' | 'interests'; title: string }) => {
  const { sectionType, title } = props;

  const handleAdd = () => {
    setStore(sectionType, [...store[sectionType], ""]);
  };

  const handleRemove = (index: number) => {
    setStore(sectionType, store[sectionType].filter((_, i) => i !== index));
  };

  const handleUpdate = (index: number, value: string) => {
    setStore(sectionType, index, value);
  };

  return (
    <div>
      <h3 class="capitalize">{title}</h3>

      <div class="flex flex-wrap gap-3">
        <For each={store[sectionType]}>
          {(val, index) => (
            <div
              class="bg-slate-1 dark:bg-black-3 flex items-center gap-2 p-2 px-3 rounded-lg border border-transparent focus-within:border-blue-5 min-w-[120px] max-w-[300px]"
            >
              <input
                class="bg-transparent border-none outline-none flex-1 min-w-0 text-sm capitalize"
                placeholder={sectionType === "skills" ? "skill" : "interest / hobby"}
                value={val}
                onchange={(e) => handleUpdate(index(), e.target.value)}
              />

              <button
                aria-label="delete input"
                class="!bg-transparent !shadow-none !p-1 text-lg hover:!bg-red-1 dark:hover:!bg-red-9 rounded-full flex-shrink-0"
                onclick={() => handleRemove(index())}
              >
                <Icon
                  icon="ion:close-circle"
                  class="text-red-5 dark:text-red-4 hover:text-red-6 dark:hover:text-red-3"
                />
              </button>
            </div>
          )}
        </For>

        <button
          class="!bg-blue-6 !text-white-1 flex items-center gap-2 px-4 py-2"
          onclick={handleAdd}
        >
          <Icon icon="ic:round-add-circle" class="text-lg" />
          Add
        </button>
      </div>
    </div>
  );
};

const OSSSection = () => {
  const handleAdd = () => {
    setStore("oss", [...store.oss, {
      projectName: "",
      description: "",
      languages: "",
    }]);
  };

  const handleRemove = (index: number) => {
    setStore("oss", store.oss.filter((_, i) => i !== index));
  };

  const handleUpdate = (index: number, key: string, value: string) => {
    setStore("oss", index, key as keyof OSSProject, value);
  };

  return (
    <div>
      <h3 class="capitalize">Open source projects</h3>

      <div class="grid gap-4">
        <For each={store.oss}>
          {(obj, index) => (
            <div class="flex flex-col gap-3 md:flex-row md:items-end">
              <div class="flex flex-col gap-3 flex-1 md:flex-row">
                {Object.entries(obj).map(([key, value]) => (
                  <input
                    class="flex-1"
                    placeholder={key === "projectName" ? "Project Name" : key.charAt(0).toUpperCase() + key.slice(1)}
                    value={value}
                    onchange={(e) => handleUpdate(index(), key, e.target.value)}
                  />
                ))}
              </div>

              <button
                aria-label="delete input"
                class="!bg-red-5 hover:!bg-red-6 !text-white-1 !p-2 !rounded-full flex-shrink-0"
                onclick={() => handleRemove(index())}
              >
                <Icon icon="ion:close-circle" class="text-lg" />
              </button>
            </div>
          )}
        </For>
      </div>

      <button
        class="!bg-blue-6 hover:!bg-blue-7 mt-4 mx-auto !text-white-1 flex items-center gap-2 px-4 py-2"
        onclick={handleAdd}
      >
        <Icon icon="ic:round-add-circle" class="text-lg" />
        Add Project
      </button>
    </div>
  );
};

const Editor = () => {
  return (
    <div
      class="bg-white-1 dark:bg-black-2 p-5 md:p-10 pt-0 md:pt-5 max-w-5xl center shadow-sm rounded-xl grid gap-5 animate_smooth"
    >
      <PersonalDetailsSection />
      <AboutSection />
      <EducationSection />
      <WorkExperienceSection />
      <SkillsInterestsSection sectionType="skills" title="Skills" />
      <SkillsInterestsSection sectionType="interests" title="Interests" />
      <OSSSection />
    </div>
  );
};

export default Editor;
