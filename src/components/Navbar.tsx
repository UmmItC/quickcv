import { createSignal, Show } from "solid-js";
import { Icon } from "@iconify-icon/solid";
import { generatePDF } from "../utils/index";
import type { Theme, ExportFormat } from "../types";

export const [selectedFormat, setSelectedFormat] = createSignal<ExportFormat>("PNG");
export const [isLoading, setIsLoading] = createSignal(false);

const Navbar = () => {
  const [theme, setTheme] = createSignal<Theme>(
    (localStorage.theme as Theme) || "dark"
  );

  const toggleTheme = () => {
    const newTheme: Theme = theme() === "light" ? "dark" : "light";
    setTheme(newTheme);
    const htmlElement = document.querySelector("html")!;
    htmlElement.className = localStorage.theme = newTheme;
  };

  const handleDownload = async () => {
    setIsLoading(true);
    try {
      await generatePDF();
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      class="vertCentered justify-between [&_iconify-icon]:text-xl [&_button]:rounded-full"
      p="y-2 b-5 md:y-5 md:t-2"
    >
      {/* Brand Logo */}
      <h3 class="vertCentered text-blue-6 dark:text-blue-5 text-2xl my-0">
        <img class="w-6" src="/logo.svg" alt="QuickCV Logo" />
        Quick
        <span class="text-2xl text-slate-7 dark:text-white-3">
          CV
        </span>
      </h3>

      {/* Action Buttons */}
      <div class="vertCentered">
        <button
          aria-label="Toggle theme"
          class="bg-white-1 text-black-2"
          onclick={toggleTheme}
        >
          <Show
            when={theme() === "light"}
            fallback={<Icon icon="ph:moon-stars-bold" />}
          >
            <Icon icon="ph:sun-bold" />
          </Show>
        </button>

        <button class="p-2" onclick={handleDownload} disabled={isLoading()}>
          <Show
            when={isLoading()}
            fallback={
              <Icon
                icon="material-symbols:download"
                class="bg-blue-5 text-white-1 p-1 rounded-full"
              />
            }
          >
            <Icon icon="eos-icons:loading" class="animate-spin" />
          </Show>
          Download
        </button>
      </div>
    </div>
  );
};

export default Navbar; 