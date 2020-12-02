import React from "react";
import About from "./components/About/About";
import Masthead from "./components/Masthead/Masthead";
import SignUp from "./components/SignUp/SignUp";

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
