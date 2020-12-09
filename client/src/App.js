import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Home from "./pages/Home/Home";
import Parks from "./pages/Parks";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./pages/Home/Home.css";

function App() {
	return (
		<Router>
			<div>
				<Switch>
					<Route exact path="/Login"  component={Login} />
					<Route exact path="/Signup"  component={Signup} />
					<Route exact path="/"  component={Home} />
					<Route exact path="/Parks" component={Parks} />
        			<Route exact path="/Profile" component={Profile} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
