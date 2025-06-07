import { Show } from "solid-js";
import Navbar from "./Navbar";
import ModeSwitcher, { isEditorMode } from "./ModeSwitcher";
import Editor from "./Editor";
import Viewer from "./Viewer";
import Footer from "./Footer";

const App = () => {
  return (
    <div class="font-sans mx-2 md:mx-5 xl:mx-auto xl:px-5 max-w-[1820px]">
      <Navbar />
      <ModeSwitcher />

      <div id="svgWrapper" class="rounded-none md:grid justify-center">
        <Show when={isEditorMode()} fallback={<Viewer />}>
          <Editor />
        </Show>
      </div>

      <Footer />
    </div>
  );
};

export default App;
