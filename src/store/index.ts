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
  certifications: [
    { name: "", issuer: "", date: "", credentialId: "" },
  ],
  oss: [{ projectName: "", description: "", languages: "" }],
});

const getDemoData = (): CVData => ({
  personalDetails: {
    fullName: "Leon Kennedy",
    designation: "Self-Taught Individual, Striving to become a professional hacker.",
    phone: "+852 12345678",
    emailAddress: "me [at] ummit.dev",
    githubUsername: "UmmItC",
    address: "Hong Kong, Wan Chai",
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
      position: "When possible, i contribute to some of my favorite project made a merge request.",
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
  ],
  certifications: [
    {
      name: "OffSec Certified Professional (OSCP)",
      issuer: "OffSec",
      date: "2025-03-19",
      credentialId: "OS-12345",
    },
    {
      name: "OffSec Wireless Professional (OSWP)",
      issuer: "OffSec",
      date: "2025-03-20",
      credentialId: "OS-12345",
    },
    {
      name: "HTB Certified Penetration Testing Specialist (HTB CPTS)",
      issuer: "HackTheBox",
      date: "2025-03-21",
      credentialId: "HTB-12345",
    },
    {
      name: "CompTIA PenTest+",
      issuer: "CompTIA",
      date: "2025-03-22",
      credentialId: "CPT-12345",
    }
  ],
  oss: [
    {
      projectName: "UmmItOS",
      description: "An Arch Linux-based distro for my own dotfiles.",
      languages: "Bash script, Makefile",
    },
    {
      projectName: "Links",
      description: "A Linktree-like website for my social links and web-related projects URLs.",
      languages: "HTML, CSS, Javascript, Tailwind CSS, Daisy UI, YAML",
    },
  ],
});

export const [store, setStore] = createStore<CVData>(getDefaultData());

export { getDefaultData, getDemoData }; 