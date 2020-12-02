import React, { useEffect } from "react";
import "./Home/logo.svg";
import "./Home/Home.css";
import { Link } from "react-router-dom";

function LogIn() {
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
				<form class="form-inline d-flex">
					<input
						class="form-control flex-fill mr-0 mr-sm-2 mb-3 mb-sm-0"
						id="email-input"
						type="email"
                        placeholder="Email"
                        aria-describedby="inputGroupPrepend" required
					/>
				</form>
				<br></br>
				<form class="form-inline d-flex">
					<input
						class="form-control flex-fill mr-0 mr-sm-2 mb-3 mb-sm-0"
						id="inputEmail"
						type="password"
                        placeholder="Password"
                        aria-describedby="inputGroupPrepend" required
					/>
				</form>
				<br></br>
				<a class="btn btn-primary js-scroll-trigger" href="#about">Log In</a>
				<a class="btn btn-primary js-scroll-trigger" href="#about">Sign Up</a>
				<br></br>
				<br></br>
				<p id="changer">Or sign up <a href="./signup.html">here</a></p>
			</div>
		</div>
	</header>


		</div>
	);
}

export default LogIn;
