import React, { Component, useEffect, useState } from "react";
import "./Home/logo.svg";
import "./Home/Home.css";
import Mapcontainer from "../components/MapContainer/Mapcontainer";
import Searchcard from "../components/Searchcard/Searchcard";
import { Link } from "react-router-dom";
import SearchResults from "../components/searchResults";
import nationalParksAPI from "../utils/nationalparks";
import API from "../utils/API"

function Parks() {
	const [currentValue, setCurrentValue] = useState("");
	// const[states, setState] =useState("");
	const [results, setResults] = useState([]);
	const [error, setError] = useState("");
	// const [parks, setParks] =useState([]);

	// const handleAddProfile = (e) => {
	// 	e.preventDefault();
	// 	console.log(e.target.id);
	// 	let parkFavs = JSON.parse(localStorage.getItem("parkFavs")) || [];
	// 	let favObj = {
	// 		parkCode: e.target.id
			
	// 	};
	// 	console.log(favObj);
	// 	parkFavs.push(favObj);
	// 	localStorage.setItem("parkFavs", JSON.stringify(parkFavs))
	// };

	const handleFormSubmit = (e) => {
		e.preventDefault();
		if (!currentValue) {
			return;
		}
		console.log(".........................." + currentValue);
		nationalParksAPI
			.searchParks(currentValue)
			.then((res) => {
				console.log(res);
				if (res.data.length === 0) {
					throw new Error("No results found. Enter a valid state code.");
				}
				if (res.data.status === "error") {
					throw new Error(res.data.data);
				}
				setResults(res.data.data);
				console.log(res.data.data);
			})
			.catch((err) => setError(err));
			
	};

	const handleInputChange = (event) => {
		setCurrentValue(event.target.value);
		console.log(event.target.value);
	};



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
			{/* <!-- Fasthead--> */}
			<header className="fasthead">
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
				<div className="container">
					<div className="row">
						<div className="col-lg-8 mx-auto">
							<h2 className="text-white mb-4">
								Plan your next adevnture here!
							</h2>
							<p className="text-white-50">
								We are committed to help young adults connect with our national
								parks and nature more broadly. Whether that means planning a
								road trip to get a full hands on experience or simply learning
								more about the surrounding parks. These experiences help young
								people have an immersive outdoor experiences in nature. Which we
								hope they can share and teach with to the generations to come.
								<a
									href="https://www.nationalgeographic.com/travel/travel-interests/tips-and-advice/9-tips-to-remember--traveling-national-parks/"
									target="_blank"
								>
									Learn more about resources here
								</a>
							</p>
						</div>
					</div>
					{/* <!-- Map  --> */}

					<Mapcontainer results={results}></Mapcontainer>

					<br></br>
					<br></br>
					<br></br>
					<form className="form-inline d-flex">
						<input
							className="form-control flex-fill mr-0 mr-sm-2 mb-3 mb-sm-0"
							id="searchInput"
							type="text"
							placeholder="Search State..."
							onChange={handleInputChange}
						/>

						<br></br>
						<br></br>

						<br></br>
						{/* <a className="btn btn-primary js-scroll-trigger" href="#about">Search</a> */}
						<button
							type="submit"
							onClick={(e) => handleFormSubmit(e)}
							className="btn btn-primary js-scroll-trigger"
						>
							Search
						</button>
					</form>
				</div>

				<br></br>
				<br></br>
				<br></br>
			</section>

			{/* <!-- Trail Content --> */}
			<div className="container">
				{/* <!-- Page Heading --> */}
				<h1 className="my-4">
					Park Trails:
					<small>
						Be sure to select trails within your ability and comfort.
					</small>
				</h1>

				{/* Trails */}
				<SearchResults
					// handleAddProfile={handleAddProfile}
					results={results}
				></SearchResults>

				{/* <!-- Page Display --> */}
			
			</div>
			<footer className="footer bg-black small text-center text-white-50">
				<div className="container">Copyright © Nomad LLC 2020</div>
			</footer>
		</div>
	);
}

export default Parks;
