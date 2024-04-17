import React from "react";
import ReactDOM from "react-dom/client";
import "./app.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.jsx";
import AboutMe from "./pages/aboutMe.jsx";
import Portfolio from "./pages/portfolio.jsx";
import Resume from "./pages/resume.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <app />,
        children: [
            {
                index: true,
                element: <AboutMe />,
            },
            {
                path: "portfolio",
                element: <Portfolio />,
            },
            {
                path: "about",
                element: <aboutMe />,
            },
            {
                path: "resume",
                element: <Resume />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
);