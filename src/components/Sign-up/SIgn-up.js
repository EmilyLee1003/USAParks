import React from "react";
import "./App.css"

function SignUp() {
	return (
		<div>
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
				<br />
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
				<br />
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
				<br />
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
				<br />
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
				<br />
				<a class="btn btn-primary js-scroll-trigger" href="#about">Log In</a>
				<a class="btn btn-primary js-scroll-trigger" href="#about">Sign Up</a>
				<br />
				<br />
				<p id="changer">Or log in <a href="./login.html">here</a></p>
			</div> 
	</div> )}

	export default SignUp;