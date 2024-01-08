import { Route, Routes } from "react-router-dom";
import Home from "./home-components/Home";
import Layout from "./pagewrappers/Layout";
import Contact from "./contact-components/Contact";
import Missing from "./Missing";
import RequireAuth from "./login-components/RequireAuth";
import LogIn from "./login-components/Login";
import Register from "./login-components/Register";
import { useEffect, useState } from "react";
import Loader from "./loaders/Loader";
import Gallery from "./gallery-components/Gallery";

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* Public routes */}
        <Route
          path="/"
          element={<Home loading={loading} onLoad={() => setLoading(false)} />}
        />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="/gallery" element={<Gallery />} />

        {/* Want to protect these routes */}
        <Route element={<RequireAuth />}></Route>

        {/* Catch all (pages that doesnt exists) */}
        <Route path="*" element={<Missing />} />
      </Route>
    </Routes>
  );
}

export default App;
