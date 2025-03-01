import { createStore } from "solid-js/store";

export const get_default_data = () => {
  return {
    "full name": "",
    designation: "",
    phone: "",
    address: "",
    "email address": "",
    "github username": "",
    "website": "",
    "gpg key": "",
    profile: "",

    education: [
      { institution: "", qualification: "", time: "" },
    ],

    "work experience": [
      { company: "", position: "", time: "" },
    ],

    skills: [""],
    interests: [""],
    oss: [{ "project name": "", description: "", languages: "" }],
  };
};

export const get_demo_data = () => {
  return {
    "full name": "UmmItC Leon",
    designation: "Self-Taught Individual, Striving To Become A Professional Hacker. Also, A Technical Blogger.",
    phone: "+852 12345678",
    "email address": "hi.job [at] ummit.dev",
    "github username": "UmmItC",
    address: "Hong Kong",
    profile:
      "With over 6 years of enjoying self-directed learning, I am a passionate developer focused on GNU/Linux and open-source projects, as well as a CTF player and cybersecurity enthusiast.",
    "website": "https://links.ummit.dev",
    "gpg key": "https://links.ummit.dev/info/UmmIt.gpg",

    education: [
      {
        institution: "College Student in Hong Kong",
        qualification: "I'm Cyber Security Major",
        time: "Sep 2024 - Present",
      },
    ],

    "work experience": [
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
        "project name": "Dotfiles",
        description:
          "A collection of configuration files for my daily setup.",
        languages: "Bash script, CSS, Lua, Python",
      },
      {
        "project name": "Blog",
        description:
          "A blog used for sharing my notes. with hugo and tailwind css.",
        languages: "HTML, CSS, Javascript, Hugo, Tailwind CSS, Go, YAML",
      },
      {
        "project name": "GPU-Passthru",
        description:
          "A Docs page with guidelines for configuring GPU passthrough.",
        languages: "Typescript, Docusaurus, CSS, YAML",
      },

      {
        "project name": "Links",
        description:
          "A Linktree-like website for my social links and web-related projects URLs.",
        languages: "HTML, CSS, Javascript, Tailwind CSS, Daisy UI, YAML",
      },

      {
        "project name": "neo2ify",
        description:
          "A tool for converting formats into Droid-ify for ready use.",
        languages: "Python",
      },

      {
        "project name": "Idoit Linux",
        description:
          "An Arch Linux-based distro for my own dotfiles.",
        languages: "Bash script, Makefile",
      }
    ],
  };
};

export const [store, setStore] = createStore(get_default_data());
