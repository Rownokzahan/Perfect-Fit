import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import routes from "./routes/Routes";
import { RouterProvider } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <div className="max-w-[1536px] mx-auto bg-primary-white text-primary-black text-sm sm:text-base">
        <RouterProvider router={routes} />
      </div>
    </HelmetProvider>
  </React.StrictMode>
);
