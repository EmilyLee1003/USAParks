import React, { useEffect, useState } from "react";
import "./Home/logo.svg";
import "./Home/Home.css";
import { Link } from "react-router-dom";
import axios from "axios";

function Signup() {
	const [formData, setFormData] = useState({name:"", email:"", password:""})
	const handleInputChange = (inputName, inputValue) => setFormData({...formData, [inputName]: inputValue})
	const handleSignUpSubmit = () => {
		axios.post("/api/createuser", formData).then((response) => {
			console.log(response)
		})
	}
	return (
		<div>
			{console.log(formData)}
		{/* <!-- Lasthead--> */}
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
				{/* <!-- Name Input --> */}
				<div className="container">
					<form className="d-flex">
						<input
							onChange = {(event)=>handleInputChange(event.target.name, event.target.value)}
							name = 'name'
							className="form-control flex-fill mr-0 mr-sm-2 mb-3 mb-sm-0"
							id="name-input"
							type="text"
							placeholder="Name"
							aria-describedby="inputGroupPrepend"
							required
						/>
					<br></br>
					{/* <!-- Email Input --> */}
						<input
							onChange = {(event)=>handleInputChange(event.target.name, event.target.value)}
							name = 'email'
							className="form-control flex-fill mr-0 mr-sm-2 mb-3 mb-sm-0"
							id="email-input"
							type="email"
							placeholder="Email"
							aria-describedby="inputGroupPrepend"
							required
						/>
					<br></br>
					{/* <!-- Password Input --> */}
						<input
							onChange = {(event)=>handleInputChange(event.target.name, event.target.value)}
							name = 'password'
							className="form-control flex-fill mr-0 mr-sm-2 mb-3 mb-sm-0"
							id="inputPassword"
							type="password"
							placeholder="Password"
							aria-describedby="inputGroupPrepend"
							required
						/>
					</form>
					<br></br>
					{/* <!-- Password Input --> */}
					{/* <form className="form-inline d-flex">
						<input
							className="form-control flex-fill mr-0 mr-sm-2 mb-3 mb-sm-0"
							id="inputVerify"
							type="password"
							placeholder="Verify Password"
							aria-describedby="inputGroupPrepend"
							required
						/>
					</form> */}
					<br></br>
					{/* <!-- Terms and Agreement --> */}
					<div className="form-group">
						<div className="form-check">
							<input
								className="form-check-input"
								type="checkbox"
								value="false"
								id="policyInput"
								required
							/>
							<label
								className="form-check-label"
								for="invalidCheck"
								id="termsConditions"
							>
								I agree to terms and conditions
							</label>
							<div className="invalid-feedback">
								You must agree before submitting.
							</div>
						</div>
					</div>
					<br></br>
					{/* <!-- Sign Up & Log In Buttons -->
					<button className="btn btn-primary js-scroll-trigger" href="#about">Log In</button>
					<br></br> */}
					<br></br>
					<button onClick={handleSignUpSubmit}  className="btn btn-primary js-scroll-trigger" href="#about">Sign Up</button>
					<br></br>
					<br></br>
					<p id="changer">Or log in <a href="./">here</a></p>
				</div>
			</div>
		</div>
		<br></br>
	</header>
		</div>
	);
}

export default Signup;
