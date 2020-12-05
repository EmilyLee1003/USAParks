import React, { useEffect } from "react";
import "./Home/logo.svg";
import "./Home/Home.css";
import { Link } from "react-router-dom";

function Signup() {
	return (
		<div>
		{/* <!-- Lasthead--> */}
	<header class="lasthead">
		<div class="container d-flex h-100 align-items-center">
			<div class="mx-auto text-center">
				<h1 class="mx-auto my-0 text-uppercase">Project Parks</h1>
				{/* <!-- <h2 class="text-white-50 mx-auto mt-2 mb-5">
					See the beauty that lies in their own backyard
                </h2> --> */}
				<br></br>
				<br></br>
				<br></br>
				{/* <!-- Name Input --> */}
				<div class="container">
					<form class="form-inline d-flex">
						<input
							class="form-control flex-fill mr-0 mr-sm-2 mb-3 mb-sm-0"
							id="name-input"
							type="text"
							placeholder="Name"
							aria-describedby="inputGroupPrepend"
							required
						/>
					</form>
					<br></br>

					{/* <!-- Email Input --> */}
					<form class="form-inline d-flex">
						<input
							class="form-control flex-fill mr-0 mr-sm-2 mb-3 mb-sm-0"
							id="email-input"
							type="email"
							placeholder="Email"
							aria-describedby="inputGroupPrepend"
							required
						/>
					</form>
					<br></br>

					{/* <!-- Password Input --> */}
					<form class="form-inline d-flex">
						<input
							class="form-control flex-fill mr-0 mr-sm-2 mb-3 mb-sm-0"
							id="inputPassword"
							type="password"
							placeholder="Password"
							aria-describedby="inputGroupPrepend"
							required
						/>
					</form>
					<br></br>

					{/* <!-- Password Input --> */}
					<form class="form-inline d-flex">
						<input
							class="form-control flex-fill mr-0 mr-sm-2 mb-3 mb-sm-0"
							id="inputVerify"
							type="password"
							placeholder="Verify Password"
							aria-describedby="inputGroupPrepend"
							required
						/>
					</form>
					<br></br>
					{/* <!-- Terms and Agreement --> */}
					<div class="form-group">
						<div class="form-check">
							<input
								class="form-check-input"
								type="checkbox"
								value="false"
								id="policyInput"
								required
							/>
							<label
								class="form-check-label"
								for="invalidCheck"
								id="termsConditions"
							>
								I agree to terms and conditions
							</label>
							<div class="invalid-feedback">
								You must agree before submitting.
							</div>
						</div>
					</div>
					<br></br>
					{/* <!-- Sign Up & Log In Buttons --> */}
					<a class="btn btn-primary js-scroll-trigger" href="#about">Log In</a>
					<div className="divider"></div>
					<a class="btn btn-primary js-scroll-trigger" href="#about">Sign Up</a>
					<br></br>
					<br></br>
					<p id="changer">Or log in <a href="./Login">here</a></p>
				</div>
			</div>
		</div>
		<br></br>
	</header>
		</div>
	);
}

export default Signup;
