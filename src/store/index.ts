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
    "C++ skill-icons:cpp",
    "PHP skill-icons:php-dark",
    "Lua catppuccin:lua",
    "HTML skill-icons:html",
    "CSS skill-icons:css",
    "Javascript skill-icons:javascript",
    "tailwind CSS logos:tailwindcss-icon",
    "Daisy UI logos:daisyui-icon",
    "react logos:react",
    "Git devicon:git",
    "Vim devicon:vim",
    "Neovim devicon:neovim",
    "Hugo devicon:hugo",
    "Markdown skill-icons:markdown-dark",
    "YAML devicon:yaml",
    "Telegram Bot logos:telegram",
    "Discord Bot skill-icons:discord",
    "Cloudflare devicon:cloudflare",
    "DigitalOcean logos:digital-ocean-icon",
    "AWS Lightsail logos:aws-lightsail",
    "Nginx skill-icons:nginx",
    "Vite logos:vitejs",
    "Github Action mdi:github",
    "Gitlab CI/CD vscode-icons:file-type-gitlab",
    "Codeberg CI/CD simple-icons:codeberg",
  ],
  interests: [
    "Tweaking GNU/Linux, Kernel devicon:linux",
    "Manage GNU/Linux Servers devicon:linux",
    "Capture The Flag noto-v1:black-flag",
    "Penetration Testing devicon:kalilinux",
    "Arch linux devicon:archlinux",
    "Gentoo devicon:gentoo",
    "Debian devicon:debian",
    "Raspberry Pi devicon:raspberrypi",
    "NixOS catppuccin:nix",
    "Web Development icon-park:add-web",
    "Write Technical Articles ph:article-medium-bold",
    "Rust programming skill-icons:rust",
    "Self-hosting server catppuccin:serverless",
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
      projectName: "Idoit Linux",
      description: "An Arch Linux-based distro for my own dotfiles.",
      languages: "Bash script, Makefile",
    }
  ],
});

export const [store, setStore] = createStore<CVData>(getDefaultData());

export { getDefaultData, getDemoData }; 