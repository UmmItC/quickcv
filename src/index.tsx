/* @refresh reload */
import { render } from "solid-js/web";
import "./css/style.css";
import "virtual:uno.css";

import App from "./components/App";

// Set theme
const el = document.querySelector("html")!;
el.className = localStorage.theme || "dark";

const root = document.getElementById("app");

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    "Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?",
  );
}

if (root) {
  render(() => <App />, root);
}
