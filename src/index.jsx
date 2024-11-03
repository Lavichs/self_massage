import React from "react";
import {createRoot} from "react-dom/client";
import App from "./App";
import {BrowserRouter, createBrowserRouter, RouterProvider} from "react-router-dom";

createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </React.StrictMode>
)
