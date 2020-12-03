import React from "react";
import About from "./components/About/About";
import Masthead from "./components/Masthead/Masthead";
import SignUp from "./components/SignUp/SignUp";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Discover from "./pages/discover";
import Search from "./pages/search";
import Navbar from "./components/navBar";
import Footer from "./components/footer";
import Wrapper from "./components/wrapper";

function App() {
  return (
    <div>
      <Navbar />
      <Masthead />
      <About />
      <SignUp/>
      
    </div>
  );
}

export default App;
