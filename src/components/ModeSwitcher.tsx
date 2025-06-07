import { createSignal } from "solid-js";
import { Icon } from "@iconify-icon/solid";
import { setStore, getDefaultData, getDemoData } from "../store/index";

export const [isEditorMode, setIsEditorMode] = createSignal(true);
const [isDemoActive, setIsDemoActive] = createSignal(false);

const ModeSwitcher = () => {
  const handleModeSwitch = (mode: 'editor' | 'viewer') => {
    setIsEditorMode(mode === 'editor');
  };

  const toggleDemo = () => {
    const newDemoState = !isDemoActive();
    setIsDemoActive(newDemoState);
    setStore(newDemoState ? getDemoData() : getDefaultData());
  };

  return (
    <div class="mb-5 md:mb-10 vertCentered !gap-3 mx-auto w-fit">
      <div class="[&_button]:rounded-full vertCentered bg-slate-7 dark:bg-black-2 w-fit p-2 rounded-full !gap-1">
        <button
          class={`p-[0.6rem] ${
            isEditorMode() 
              ? "bg-slate-6 dark:bg-black-3 text-white-1 dark:text-white-2 shadow-lg" 
              : "dark:bg-black-2"
          }`}
          onclick={() => handleModeSwitch('editor')}
        >
          <Icon icon="ph:pencil-simple-fill" />
          Editor
        </button>

        <button
          class={`p-[0.6rem] ${
            !isEditorMode() 
              ? "bg-slate-6 dark:bg-black-3 text-white-1 dark:text-white-2 shadow-lg" 
              : "dark:bg-black-2"
          }`}
          onclick={() => handleModeSwitch('viewer')}
        >
          <Icon icon="ic:round-grid-view" />
          Viewer
        </button>
      </div>

      <button
        class="p-4 rounded-full"
        onclick={toggleDemo}
      >
        <div class="text-xl w-5 flex">
          {isDemoActive() ? (
            <Icon icon="ph:check-circle-fill" />
          ) : (
            <Icon icon="ph-circle-bold" />
          )}
        </div>
        Demo
      </button>
    </div>
  );
};

export default ModeSwitcher; 