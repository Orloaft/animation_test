import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./App";

import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const container = document.getElementById("root")!;
const root = createRoot(container);

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Provider store={store}>
        <App />
      </Provider>
    ),
  },
  {
    path: "/about",
    element: <div>The about</div>,
  },
  {
    path: "/signup",
    element: <div>The signup</div>,
  },
]);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
