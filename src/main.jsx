import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import routes from "./routes/Routes";
import { RouterProvider } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Provider } from "react-redux";
import { store } from "./redux/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <Provider store={store}>
        <div className="max-w-[1536px] mx-auto bg-primary-white text-primary-black text-sm sm:text-base">
          <RouterProvider router={routes} />
        </div>
      </Provider>
    </HelmetProvider>
  </React.StrictMode>
);
