import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Discover from "./pages/discover";
import Search from "./pages/search";
import Navbar from "./components/navBar";
import Footer from "./components/footer";
import Wrapper from "./components/wrapper";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path="/" component={About} />
          <Route exact path="/about" component={About} />
          <Route exact path="/discover" component={Discover} />
          <Route exact path="/search" component={Search} />
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
