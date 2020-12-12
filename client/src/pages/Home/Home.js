import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./Home.css";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
// import patagonia from "./public/assets/patagonia.jpeg";

function Home() {
	return (
		<div>
			{/* <!-- Navigation--> */}
			<nav
				className="navbar navbar-expand-lg navbar-light fixed-top"
				id="mainNav"
			>
				<div className="container">
					<a className="navbar-brand js-scroll-trigger" href="#page-top">
						Nomad
					</a>
					<button
						className="navbar-toggler navbar-toggler-right"
						type="button"
						data-toggle="collapse"
						data-target="#navbarResponsive"
						aria-controls="navbarResponsive"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						Menu
						<i className="fas fa-bars"></i>
					</button>
					<div className="collapse navbar-collapse" id="navbarResponsive">
						<ul className="navbar-nav ml-auto">
							<li className="nav-item">
								<Link className="nav-link js-scroll-trigger" to="/Home">
									About <span className="sr-only">(Home)</span>
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link js-scroll-trigger" to="/Parks">
									Parks <span className="sr-only">(Parks)</span>
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link js-scroll-trigger" to="/Profile">
									Profile <span className="sr-only">(Profile)</span>
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
			{/* <!-- Masthead--> */}
			<header className="masthead">
				<div className="container d-flex h-100 align-items-center">
					<div className="mx-auto text-center">
						<h1 className="mx-auto my-0 text-uppercase">Project Parks</h1>
						<h2 className="text-white-50 mx-auto mt-2 mb-5">
							See the beauty that lies in their own backyard
						</h2>
						{/* <!-- <a className="btn btn-primary js-scroll-trigger" href="#about">Get Started</a> --> */}
					</div>
				</div>
			</header>
			{/* <!-- About--> */}
			<section className="about-section text-center" id="about">
				<div className="">
					<div className="row">
						<div className="col-lg-8 mx-auto">
							<h2 className="text-white mb-4">Conservation of Wild Lands</h2>
							<p className="text-white-50">
								Wildlands provide benefits to our entire country and community.
								They are not parks, but but rather public lands held in trust
								for a specific purpose based on the mission of the program under
								which they are managed. Land for us all to explore and enjoy
								together.
								<a href="https://www.npca.org/articles/magazine" target="_blank">
									Learn more about resources here
								</a>
							</p>
						</div>
					</div>
					<img
						className="img-fluid"
						src="assets/img/bg-arches.jpg"
						alt="Arches National Park at night"
					/>
				</div>
			</section>

			<section className="projects-section bg-light" id="projects">
				<div className="container">
					<Carousel>
						<Carousel.Item>
							<img
								className="d-block w-100"
								src={"/assets/img/patagonia.jpeg"}
								alt="First slide"
							/>
							<Carousel.Caption>
								<a className="adSpace" href="https://www.patagonia.com/stories/" target="_blank">Visit Here</a>
							</Carousel.Caption>
						</Carousel.Item>
						<Carousel.Item>
							<img
								className="d-block w-100"
								src={"/assets/img/iowa.jpg"}
								alt="Third slide"
							/>

							<Carousel.Caption>
								<a className="adSpace" href="https://www.iowadnr.gov/places-to-go/parks-2020" target="_blank">Visit Here</a>
							</Carousel.Caption>
						</Carousel.Item>
						<Carousel.Item>
							<img
								className="d-block w-100"
								src={"/assets/img/yet.jpg"}
								alt="Third slide"
							/>

							<Carousel.Caption>
							<a className="adSpace" href="https://www.yeti.com/en_US/navy-color-collection.html/" target="_blank">Visit Here</a>
							</Carousel.Caption>
						</Carousel.Item>
					</Carousel>

					<section className="py-5">
						<div className="container">
							<h1 className="font-weight-light">Ad Space Here</h1>
							<p className="lead">
								An area on the website we we can partner with other companies,
								organizations, conservations, state governemnts etc. to
								advertise and promote wildlife and land preservation and
								attraction.
							</p>
						</div>
					</section>
					<br />
					<br />
					<br />

					{/* <!-- Advertisment #1 Row --> */}
					<div className="row justify-content-center no-gutters mb-5 mb-lg-0">
						<div className="col-lg-6">
							<img className="img-fluid" src="assets/img/native.jpeg" alt="" />
						</div>
						<div className="col-lg-6">
							<div className="bg-black text-center h-100 project">
								<div className="d-flex h-100">
									<div className="project-text w-100 my-auto text-center text-lg-left">
										<h4 className="text-white">Story #1</h4>
										<p className="mb-0 text-white-50">
											An example of where you can put an image of a news story
											alog with a discription and a link to the article.
										</p>
										<br />
										<a
											className="btn btn-primary js-scroll-trigger"
											href="https://www.nwf.org/Our-Work/Our-Lands/Tribal-Lands"
											target="_blank"
										>
											Read More
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/* <!-- Advertisment #2 Row --> */}
					<div className="row justify-content-center no-gutters">
						<div className="col-lg-6">
							<img className="img-fluid" src="assets/img/hill.jpeg" alt="" />
						</div>
						<div className="col-lg-6 order-lg-first">
							<div className="bg-black text-center h-100 project">
								<div className="d-flex h-100">
									<div className="project-text w-100 my-auto text-center text-lg-right">
										<h4 className="text-white">Story #2</h4>
										<p className="mb-0 text-white-50">
											Another example of a project with its respective
											description and a link to the article.
										</p>
										<br />
										<a
											className="btn btn-primary js-scroll-trigger"
											href="https://winterwildlands.org/"
											target="_blank"
										>
											Read More
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/* <!-- Advertisment #3 Row --> */}
					<div className="row justify-content-center no-gutters mb-5 mb-lg-0">
						<div className="col-lg-6">
							<img className="img-fluid" src="assets/img/trash.jpeg" alt="" />
						</div>
						<div className="col-lg-6">
							<div className="bg-black text-center h-100 project">
								<div className="d-flex h-100">
									<div className="project-text w-100 my-auto text-center text-lg-left">
										<h4 className="text-white">Story #3</h4>
										<p className="mb-0 text-white-50">
											Yet another example of where you can put an image of a
											news story alog with a discription and a link to the
											article.
										</p>
										<br />
										<a
											className="btn btn-primary js-scroll-trigger"
											href="https://www.epa.gov/clean-air-act-overview/air-pollution-current-and-future-challenges"
											target="_blank"
										>
											Read More
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* <!-- Email Signup--> */}
			<section className="signup-section" id="signup">
				<div className="container">
					<div className="row">
						<div className="col-md-10 col-lg-8 mx-auto text-center">
							<i className="far fa-paper-plane fa-2x mb-2 text-white"></i>
							<h2 className="text-white mb-5">Subscribe to receive updates!</h2>
							<form className="form-inline d-flex">
								<input
									className="form-control flex-fill mr-0 mr-sm-2 mb-3 mb-sm-0"
									id="inputEmail"
									type="email"
									placeholder="Enter email address..."
								/>
								<button className="btn btn-primary mx-auto" type="submit">
									Subscribe
								</button>
							</form>
						</div>
					</div>
				</div>
			</section>
			{/* <!-- Contact--> */}
			<section className="contact-section bg-black">
				<div className="container">
					<div className="row">
						<div className="col-md-4 mb-3 mb-md-0">
							<div className="card py-4 h-100">
								<div className="card-body text-center">
									<i className="fas fa-map-marked-alt text-primary mb-2"></i>
									<h4 className="text-uppercase m-0">Address</h4>
									<hr className="my-4" />
									<div className="small text-black-50">
										1234 New Street, San Diego CA
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-4 mb-3 mb-md-0">
							<div className="card py-4 h-100">
								<div className="card-body text-center">
									<i className="fas fa-envelope text-primary mb-2"></i>
									<h4 className="text-uppercase m-0">Email</h4>
									<hr className="my-4" />
									<div className="small text-black-50">
										<a href="#!">projectparks@domain.com</a>
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-4 mb-3 mb-md-0">
							<div className="card py-4 h-100">
								<div className="card-body text-center">
									<i className="fas fa-mobile-alt text-primary mb-2"></i>
									<h4 className="text-uppercase m-0">Phone</h4>
									<hr className="my-4" />
									<div className="small text-black-50">+1 (555) 777-1234</div>
								</div>
							</div>
						</div>
					</div>
					<div className="social d-flex justify-content-center">
						<a className="mx-2" href="https://twitter.com/Interior" target="_blank">
							<i className="fab fa-twitter" ></i>
						</a>
						<a
							className="mx-2"
							href="https://www.facebook.com/USInterior/?ref=py_c"
							target="_blank"
						>
							<i className="fab fa-facebook-f"></i>
						</a>
						<a
							className="mx-2"
							href="https://github.com/EmilyLee1003/nationalParks"
							target="_blank"
						>
							<i className="fab fa-github"></i>
						</a>
					</div>
				</div>
			</section>
			{/* <!-- Footer--> */}
			<footer className="footer bg-black small text-center text-white-50">
				<div className="container">Copyright © Nomad LLC 2020</div>
			</footer>
		</div>
	);
}

export default Home;
