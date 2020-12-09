import React, { useEffect, useState } from "react";
import "./Home/logo.svg";
import "./Home/Home.css";
import { Link } from "react-router-dom";
import axios from "axios";


function LogIn() {
	const [formData, setFormData] = useState({email:"", password:""})
	const handleInputChange = (inputName, inputValue) => setFormData({...formData, [inputName]: inputValue})
	const handleLogInSubmit = () => {
		axios.get("/api/users", formData).then((response) => {
			console.log(response)
		})
	};
	return (
		<div>
			<header className="lasthead">
			<div className="container d-flex h-100 align-items-center">
			<div className="mx-auto text-center">
				<h1 className="mx-auto my-0 text-uppercase">Project Parks</h1>
				{/* <!-- <h2 className="text-white-50 mx-auto mt-2 mb-5">
					See the beauty that lies in their own backyard
                </h2> --> */}
				<br></br>
				<br></br>
				<br></br>
				<form className="form-inline d-flex">
					<input
						onChange = {(event)=>handleInputChange(event.target.name, event.target.value)}
						name = 'email'
						className="form-control flex-fill mr-0 mr-sm-2 mb-3 mb-sm-0"
						id="email-input"
						type="email"
                        placeholder="Email"
                        aria-describedby="inputGroupPrepend" required
					/>
				<br></br>
					<input
						// onChange = {(event)=>handleInputChange(event.target.name, event.target.value)}
						name = 'password'
						className="form-control flex-fill mr-0 mr-sm-2 mb-3 mb-sm-0"
						id="inputEmail"
						type="password"
                        placeholder="Password"
                        aria-describedby="inputGroupPrepend" required
					/>
				</form>
				<br></br>
				<button onClick={handleLogInSubmit}  className="btn btn-primary js-scroll-trigger" href="#about">Log In</button>
				<br></br>
				<br></br>
				{/* <button className="btn btn-primary js-scroll-trigger" href="#about">Sign Up</button> */}
				<p id="changer">Or sign up <a href="./Signup">here</a></p>
			</div>
			</div>
			</header>
		</div>
	);
}

export default LogIn;
