import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home/Home";
import Error from "./pages/Error/Error";
import Footer from "./components/Footer";
import { ContactUs } from "./pages/Contact/ContactUs"

import "./css/common.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(

  // <React.StrictMode>
  <Router>

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<ContactUs />} />

      <Route path="*" element={<Error />} />

    </Routes>
    <Footer />
  </Router>
  // </React.StrictMode>
);