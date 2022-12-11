import { render } from "solid-js/web";
import Counter from "./Counter";

import "./index.scss";

const App = () => (
  <div class="mt-10 text-3xl mx-auto flex justify-center items-center flex-col   max-w-6xl bg-blue-600">
    <p>Name: Remote</p>
    <Counter />
  </div>
);
render(App, document.getElementById("app"));
