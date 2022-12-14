import React from "react";
import ReactDOM from "react-dom/client";

//CSS
import "./index.css";

//Bootstrap css
import "bootstrap/dist/css/bootstrap.min.css";

//Component
import App from "../src/App";

import axios from "axios";
 
axios.defaults.withCredentials = true;
 
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
