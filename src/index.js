import React from "react";
import ReactDOM from "react-dom/client";
import "./css/index.css";
import App from "./components/App";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "rsuite/dist/rsuite.min.css";
import { AuthProvider } from "./context/AuthProvider";
import { Toaster } from "react-hot-toast";
import { GoogleOAuthProvider } from "@react-oauth/google";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
    <React.StrictMode>
      <BrowserRouter>
        <AuthProvider>
          <Toaster position="bottom-center" reverseOrder={false}></Toaster>
          <Routes>
            <Route path="/*" element={<App />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </React.StrictMode>
  </GoogleOAuthProvider>
);
