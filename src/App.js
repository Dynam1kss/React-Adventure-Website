import React from "react";
import Navbar from "./components/Navbar";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import "./App.css";
import Home from "./components/pages/Home";
import Services from "./components/pages/Services";
import Products from "./components/pages/Products";
import SignUp from "./components/pages/SignUp";

function App() {
  return (
    <>
      <Router basename={process.env.PUBLIC_URL}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" exact element={<Home />} />
          <Route path="/services" exact element={<Services />} />
          <Route path="/products" exact element={<Products />} />
          <Route path="/sign-up" exact element={<SignUp />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
