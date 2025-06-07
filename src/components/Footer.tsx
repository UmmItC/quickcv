import { Icon } from "@iconify-icon/solid";

const Footer = () => {
  return (
    <footer class="mt-16 mb-8 flex justify-center">
      <a
        href="https://github.com/UmmItC/quickcv"
        target="_blank"
        rel="noopener noreferrer"
        class="group flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all duration-200 shadow-sm hover:shadow-md"
        aria-label="View source code on GitHub"
      >
        <Icon 
          icon="mdi:github" 
          width="20" 
          class="text-slate-600 dark:text-slate-400 group-hover:text-slate-800 dark:group-hover:text-slate-200 transition-colors duration-200" 
        />
        <span class="text-sm text-slate-600 dark:text-slate-400 group-hover:text-slate-800 dark:group-hover:text-slate-200 transition-colors duration-200 font-medium">
          View on GitHub - UmmItC/quickcv
        </span>
      </a>
    </footer>
  );
};

export default Footer; 