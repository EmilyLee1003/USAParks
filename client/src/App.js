import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home/Home";
import Parks from "./pages/Parks";
import Profile from "./pages/Profile";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
	return (
		<Router>
			<div>
				<Switch>
					<Route exact path="/Home"  component={Home} />
					<Route exact path="/Parks" component={Parks} />
          <Route exact path="/Profile" component={Profile} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
