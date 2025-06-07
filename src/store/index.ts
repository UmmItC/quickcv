import { createStore } from "solid-js/store";
import type { CVData } from "../types";

const getDefaultData = (): CVData => ({
  personalDetails: {
    fullName: "",
    designation: "",
    phone: "",
    address: "",
    emailAddress: "",
    githubUsername: "",
    website: "",
    gpgKey: "",
    profile: "",
  },
  education: [
    { institution: "", qualification: "", time: "" },
  ],
  workExperience: [
    { company: "", position: "", time: "" },
  ],
  skills: [""],
  interests: [""],
  oss: [{ projectName: "", description: "", languages: "" }],
});

const getDemoData = (): CVData => ({
  personalDetails: {
    fullName: "Leon Kennedy",
    designation: "Self-Taught Individual, Striving to become a professional hacker.",
    phone: "+852 12345678",
    emailAddress: "hi.job [at] ummit.dev",
    githubUsername: "UmmItC",
    address: "Hong Kong",
    profile: "With over 6 years of enjoying self-directed learning, I am a passionate developer focused on GNU/Linux and open-source projects, as well as a CTF player and cybersecurity enthusiast.",
    website: "https://links.ummit.dev",
    gpgKey: "https://links.ummit.dev/info/UmmIt.gpg",
  },
  education: [
    {
      institution: "City University of Hong Kong",
      qualification: "BSc Cybersecurity",
      time: "Sep 2024 - Present",
    },
  ],
  workExperience: [
    {
      company: "Free and Open Source Community",
      position: "Contributor some projects and maintain my own projects, See my github/gitlab/codeberg",
      time: "2020 - Present",
    },
  ],
  skills: [
    "GNU/Linux devicon:linux",
    "Bash script logos:bash-icon",
    "Python logos:python",
    "Lua catppuccin:lua",
    "HTML skill-icons:html",
    "CSS skill-icons:css",
    "Javascript skill-icons:javascript",
    "Tailwind CSS logos:tailwindcss-icon",
    "Daisy UI logos:daisyui-icon",
    "React logos:react",
    "Git devicon:git",
    "Neovim devicon:neovim",
    "Hugo devicon:hugo",
    "Markdown skill-icons:markdown-dark",
    "YAML devicon:yaml",
    "Cloudflare devicon:cloudflare",
    "DigitalOcean logos:digital-ocean-icon",
    "AWS Lightsail logos:aws-lightsail",
    "Github Action mdi:github",
  ],
  interests: [
    "Tweaking GNU/Linux, Kernel devicon:linux",
    "Capture The Flag noto-v1:black-flag",
    "Penetration Testing devicon:kalilinux",
    "Arch linux devicon:archlinux",
    "Blogging ph:article-medium-bold",
    "Self-hosting catppuccin:serverless",
  ],
  oss: [
    {
      projectName: "Dotfiles",
      description: "A collection of configuration files for my daily setup.",
      languages: "Bash script, CSS, Lua, Python",
    },
    {
      projectName: "Blog",
      description: "A blog used for sharing my notes. with hugo and tailwind css.",
      languages: "HTML, CSS, Javascript, Hugo, Tailwind CSS, Go, YAML",
    },
    {
      projectName: "GPU-Passthru",
      description: "A Docs page with guidelines for configuring GPU passthrough.",
      languages: "Typescript, Docusaurus, CSS, YAML",
    },
    {
      projectName: "Links",
      description: "A Linktree-like website for my social links and web-related projects URLs.",
      languages: "HTML, CSS, Javascript, Tailwind CSS, Daisy UI, YAML",
    },
    {
      projectName: "neo2ify",
      description: "A tool for converting formats into Droid-ify for ready use.",
      languages: "Python",
    },
    {
      projectName: "UmmItOS",
      description: "An Arch Linux-based distro for my own dotfiles.",
      languages: "Bash script, Makefile",
    }
  ],
});

export const [store, setStore] = createStore<CVData>(getDefaultData());

export { getDefaultData, getDemoData }; 