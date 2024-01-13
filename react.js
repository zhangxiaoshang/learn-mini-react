import ReactDOM from "./core/ReactDOM.js";
import React from "./core/React.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
const app = React.createElement("div", { id: "app" }, "hello-", "app");
root.render(app);
