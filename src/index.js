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
import { CartProvider } from "./context/CartProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <GoogleOAuthProvider clientId="206771482349-nqtdnm3spfpb7f1itmh0gjefsbmemnje.apps.googleusercontent.com">
    <React.StrictMode>
      <BrowserRouter>
        <AuthProvider>
          <CartProvider>
            <Toaster position="bottom-center" reverseOrder={false}></Toaster>
            <Routes>
              <Route path="/*" element={<App />} />
            </Routes>
          </CartProvider>
        </AuthProvider>
      </BrowserRouter>
    </React.StrictMode>
  </GoogleOAuthProvider>
);
