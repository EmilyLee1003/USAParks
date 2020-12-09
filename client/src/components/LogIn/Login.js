import React from "react";

function Login() {
    return (
        <div>
            <form class="form-inline d-flex">
                <input
                    class="form-control flex-fill mr-0 mr-sm-2 mb-3 mb-sm-0"
                    id="email-input"
                    type="email"
                    placeholder="Email"
                    aria-describedby="inputGroupPrepend" required
                />
			</form>
			<br />
            <form class="form-inline d-flex">
                <input
                    class="form-control flex-fill mr-0 mr-sm-2 mb-3 mb-sm-0"
                    id="inputPassword"
                    type="password"
                    placeholder="Password"
                    aria-describedby="inputGroupPrepend" required
                />
            </form>
            <br />
            <a class="btn btn-primary js-scroll-trigger" href="#about">Log In</a>
            <a class="btn btn-primary js-scroll-trigger" href="#about">Sign Up</a>
            <br />
            <br />
            <p id="changer">Or sign up <a href="./signup.html">here</a></p>
        </div>
    )
};

export default Login;