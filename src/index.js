import { createRoot } from "react-dom/client";
import App from "./App";

//variavel #root que esta no index do public
const root = createRoot(document.querySelector("#root"));
root.render(<App/>);