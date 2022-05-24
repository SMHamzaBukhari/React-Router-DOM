import React from "react";
import Login from "./components/login";
import Signup from "./components/signup";
import Dashboard from "./components/dashboard";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

export default function Routing() {
  return (
    <Router>
  
        <Routes>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/" element={<Login/>}/>
        </Routes>
    </Router>
  );
}

