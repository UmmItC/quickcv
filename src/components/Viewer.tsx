import { Icon } from "@iconify-icon/solid";
import { store } from "../store/index";

const Name = () => (
  <div flex gap-3 class="[&_h1]:text-5xl justify-center" font-raleway>
    <h1 class="!m-0">{store.personalDetails.fullName.split(" ")[0]}</h1>
    <h1 class="!m-0" font-normal text="dark:blue-4">
      {store.personalDetails.fullName.split(" ")[1]}
    </h1>
  </div>
);

const CareerObjective = () => (
  <div grid gap-7>
    {/*heading */}
    <div font-bold text-2xl class="vertCentered">
      <Icon
        icon="mdi:target-arrow"
        width="25"
        class="bg-red-1 rounded-full dark:bg-black-3 dark:text-red-3 p-[0.3rem]"
      />
      About :
    </div>

    <div>{store.personalDetails.profile}</div>
  </div>
);

const Education = () => (
  <div grid gap-7>
    {/*heading */}
    <div font-bold text-2xl class="vertCentered">
      <Icon
        icon="mdi:education-outline"
        width="25"
        class="bg-sky-1 rounded-full dark:bg-black-3 dark:bg-black-3 dark:text-blue-3 p-[0.3rem]"
      />
      Education :
    </div>

    <div grid gap-3>
      {store.education.map((x) => (
        <div grid gap-3>
          <div flex justify-between>
            <p class="pl-10 !m-0 capitalize underline">{x.institution}</p>
            <p class="!m-0 bg-slate-1 dark:bg-black-4 p-1 px-2 rounded-lg">
              {x.time}
            </p>
          </div>
          <li class="capitalize pl-15">{x.qualification}</li>
        </div>
      ))}
    </div>
  </div>
);

const WorkExp = () => (
  <div grid gap-7>
    {/*heading */}
    <div font-bold text-2xl class="vertCentered">
      <Icon
        icon="uil:suitcase"
        width="25"
        class="bg-purple-1 rounded-full dark:bg-black-3 dark:text-purple-3 p-[0.3rem]"
      />
      Work Experience :
    </div>

    <div grid gap-3>
      {store.workExperience.map((x) => (
        <div grid gap-3>
          <div flex justify-between>
            <p class="pl-10 !m-0 capitalize underline">{x.company}</p>
            <p class="!m-0 bg-slate-1 dark:bg-black-4 p-1 px-2 rounded-lg">
              {x.time}
            </p>
          </div>
          <li class="capitalize pl-15">{x.position}</li>
        </div>
      ))}
    </div>
  </div>
);

const PersonalDetails = () => (
  <div grid gap-7>
    {/*heading */}
    <div font-bold text-2xl class="vertCentered">
      <Icon
        icon="mdi:user-circle"
        width="25"
        class="bg-indigo-1 rounded-full dark:bg-black-3 dark:text-indigo-3 p-[0.3rem]"
      />
      Personal Details :
    </div>

    {/* icons with text */}
    <div class="pl-10 grid gap-3 [&_Icon]:dark:bg-transparent">
      {store.personalDetails.address &&
        (
          <div class="vertCentered">
            <span class="font-semibold vertCentered">
              <Icon icon="mingcute:location-line" width="20" />
              Address :
            </span>
            {store.personalDetails.address}
          </div>
        )}

      <div class="vertCentered">
        <span class="font-semibold vertCentered">
          <Icon icon="fluent:call-12-regular" width="20" />
          Phone :
        </span>
        {store.personalDetails.phone}
      </div>

      <div class="vertCentered">
        <span class="font-semibold vertCentered">
          <Icon icon="mdi:email-variant" width="20" />
          Email :
        </span>
        {store.personalDetails.emailAddress}
      </div>

      <div class="vertCentered">
        <span class="font-semibold vertCentered">
          <Icon icon="mdi:github" width="20" /> Github :
        </span>
        @{store.personalDetails.githubUsername}
      </div>

      <div class="vertCentered">
        <span class="font-semibold vertCentered">
          <Icon icon="logos:web-dev-icon" width="20" /> Website :
        </span>
        {store.personalDetails.website}
      </div>

      <div class="vertCentered">
        <span class="font-semibold vertCentered">
          <Icon icon="vscode-icons:file-type-gpg" width="20" /> GPG Key :
        </span>
        {store.personalDetails.gpgKey}
      </div>
    </div>
  </div>
);

const Skills_Interests = (
  props: {
    store_name: string;
    header: string;
    icon: string;
    iconColor: string;
  },
) => (
  <div grid gap-7 h-fit>
    {/*heading */}
    <div font-bold text-2xl class="vertCentered">
      <Icon
        icon={props.icon.toLowerCase()}
        width="25"
        class={`rounded-full dark:bg-black-3 p-[0.3rem] ${props.iconColor}`}
      >
      </Icon>
      {props.header}
    </div>

    <div flex flex-wrap gap-3>
      {(store[props.store_name as 'skills' | 'interests'] as string[]).map((x: string) => {
        const txttoArr = x.split(" ");
        const txt = txttoArr.slice(0, -1).join(" ");
        return (
          <span
            class="capitalize vertCentered p-1 px-2 rounded-lg bg-slate-1 dark:bg-black-3"
          >
            <Icon icon={txttoArr[txttoArr.length - 1].toLowerCase()}></Icon>
            {txt}
          </span>
        );
      })}
    </div>
  </div>
);

const OSS = () => (
  <div grid gap-7>
    {/*heading */}
    <div font-bold text-2xl class="vertCentered">
      <Icon
        icon="tabler:brand-open-source"
        width="25"
        class="bg-lime-2 rounded-full dark:bg-black-3 dark:text-lime-3 p-[0.3rem]"
      >
      </Icon>
      Open Source Projects :
    </div>

    {store.oss.map((x) => (
      <div grid>
        <div class="flex justify-between capitalize">
          <div
            class="bg-slate-6 dark:bg-black-4 text-white-1 dark:text-white-3 font-semibold p-1 px-5 rounded-t-lg"
          >
            {x.projectName}
          </div>
          ( {x.languages} )
        </div>
        <div
          class="flex !m-0 p-5 border-solid border-slate-6 dark:border-black-4 rounded-b-lg rounded-r-lg"
        >
          <Icon
            icon="material-symbols:line-end-arrow-rounded"
            width="20"
            class='mt-[0.1rem] mr-2 dark:!bg-transparent'
          >
          </Icon>
          {x.description}
        </div>
      </div>
    ))}
  </div>
);

const Viewer = () => {
  return (
    <div
      class="w-[8.27in] rounded-lg p-10 bg-white-1 dark:bg-black-2 text-slate-6 dark:text-white-3 h-fit overflow-visible animate_smooth"
      id="resumeResult"
    >
      {/* header */}
      <div class="border-solid border-1 border-slate-2 dark:border-slate-7 mb-10"></div>
      <Name />

      <h2
        class="capitalize text-center font-normal text-xl font-raleway border-slate-2 dark:border-slate-7"
      >
        {store.personalDetails.designation}
      </h2>
      <div class="border-solid border-1 border-slate-2 dark:border-slate-7 mt-10"></div>

      <div class="grid gap-10 mt-10 [&_Icon]:dark:bg-black-3">
        <CareerObjective />
        <Education />
        <WorkExp />
        <PersonalDetails />

        <div grid grid-cols-2 gap-10>
          <Skills_Interests
            store_name="skills"
            header="Technical Skills :"
            icon="ph-code-bold"
            iconColor="bg-orange-1 dark:text-orange-3"
          />
          <Skills_Interests
            store_name="interests"
            header="Interests & Hobbies :"
            icon="typcn:point-of-interest"
            iconColor="bg-slate-6 text-white-1 dark:text-blue-3"
          />
        </div>

        <OSS />
      </div>
    </div>
  );
};

export default Viewer;
