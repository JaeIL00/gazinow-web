import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Wrapper } from "@googlemaps/react-wrapper";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <BrowserRouter>
            <Wrapper apiKey={import.meta.env.VITE_GOOGLE_API_KEY}>
                <App />
            </Wrapper>
        </BrowserRouter>
    </React.StrictMode>
);
