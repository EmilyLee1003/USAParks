import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Parks from "./pages/Parks";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./pages/Home/Home.css";
import Search from "./pages/search";
import Information from "./pages/information";
import Wrapper from "./components/wrapper";



function App() {

	const[value,setValue] = useState("");


	return (
		<Router>
			<div>
			<Wrapper>
					<Route exact path="/"  component={Login} />
					<Route exact path="/Signup"  component={Signup} />
					<Route exact path="/Home"  component={Home} />
					<Route exact path="/Parks" component={Parks} />
        			<Route exact path="/Profile" component={Profile} />

					<Route path='/search'component={() => <Search setSearch={setValue}/>}
        
/>
          <Route path='/information'component={() => <Information search={value}/>}
/>
			</Wrapper>
			</div>
		</Router>
	);
}

export default App;
