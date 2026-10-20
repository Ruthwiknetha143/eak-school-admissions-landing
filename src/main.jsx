import React from "react";
import ReactDOM from "react-dom/client";

// Fonts (installed locally via npm, so no external requests at runtime)
import "@fontsource-variable/fraunces";
import "@fontsource-variable/dm-sans";

// Bootstrap CSS and icons first, then our own styles so we can override them
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./AIComponents/styles/theme.css";

import AI from './AIComponents/components/AI';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AI/>
  </React.StrictMode>
);
