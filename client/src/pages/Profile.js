import React, { useEffect } from "react";
import "./Home/logo.svg";
import "./Home/Home.css";
import { Link } from "react-router-dom";

function Profile() {
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
							<Link className="nav-link js-scroll-trigger" to="/Home">About <span className="sr-only">(Home)</span></Link>
							</li>
							<li className="nav-item">
							<Link className="nav-link js-scroll-trigger" to="/Parks">Parks <span className="sr-only">(Parks)</span></Link>
							</li>
							<li className="nav-item">
							<Link className="nav-link js-scroll-trigger" to="/Profile">Profile <span className="sr-only">(Profile)</span></Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
            {/* <!-- Basthead--> */}
    <header class="basthead">
        <div class="container d-flex h-100 align-items-center">
            <div class="mx-auto text-center">
                <h1 class="mx-auto my-0 text-uppercase">Project Parks</h1>
                <h2 class="text-white-50 mx-auto mt-2 mb-5">
                    See the beauty that lies in their own backyard
                </h2>
                {/* <!-- <a class="btn btn-primary js-scroll-trigger" href="#about">Get Started</a> --> */}
            </div>
        </div>
    </header>
    {/* <!-- About--> */}
    <section class="about-section text-center" id="about">
        <div class="container">
            <div class="row">
                <div class="col-lg-8 mx-auto">
                    <h2 class="text-white mb-4">Welsome Username!</h2>
                    <p class="text-white-50">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                        of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                        but also the leap into electronic typesetting, remaining essentially unchanged.
                    </p>
                </div>
                {/* <!-- Map & Search Div --> */}
            </div>
            {/* <!-- Map  --> */}
            <div class="container">
                <div id="content" class="content p-0">
                    <div class="profile-header">
                        <div class="profile-header-cover"></div>

                        <div class="profile-header-content">
                            <div class="profile-header-img">
                                <img src="./assets/img/profilePic.jpg" alt="profilePic" id="profilePic" />
                            </div>
                            <br></br>

                            <a class="btn btn-primary js-scroll-trigger" href="#about">Edit Picture</a>
                        </div>
                    </div>
                    <br></br>
                    <br></br>
                    <br></br>
                </div>
            </div>
        </div>

			{/* <!-- Trail Content --> */}
			<div className="container">
				{/* <!-- Page Heading --> */}
				<h1 className="my-4">
					My Trails:

				</h1>
				{/* <!-- Trail 1 --> */}
				<div className="row">
					<div className="col-lg-4 col-sm-6 mb-4">
						<div className="card h-100">
							{/* <a href="#"><img className="card-img-top" src="./assets/img/lostCoast.jpg" alt=""></a> */}
							<div className="card-body">
								<h4 className="card-title">
									<a href="#">The Lost Coast</a>
								</h4>
								<p className="card-text">
									Description: Stretching between Shelter Cove to the south and
									the Mattole River to the north, the Lost Coast is a wild land
									of forests, fog, waves, and sand.
								</p>
								<p className="card-text">Location: Humboldt, CA</p>
								<p className="card-text">Difficulty: Hard</p>
								<p className="card-text">Distance: 25 Mi</p>
								<br></br>
								<a className="btn btn-primary js-scroll-trigger" href="#about">
									Add Trail
								</a>
							</div>
						</div>
					</div>
					{/* <!-- Trail 2 --> */}
					<div className="col-lg-4 col-sm-6 mb-4">
						<div className="card h-100">
							{/* <a href="#"><img className="card-img-top" src="./assets/img/yosemiteFalls.jpg" alt=""></a> */}
							<div className="card-body">
								<h4 className="card-title">
									<a href="#">Yosemite Falls Trail</a>
								</h4>
								<p className="card-text">
									Description: One of the best hikes in Yosemite National Park,
									this trail provides close-up views of Yosemite's most
									spectacular waterfall, as well as panoramic vistas of the
									valley floor
								</p>
								<p className="card-text">Location: Yosemite, CA</p>
								<p className="card-text">Difficulty: Easy</p>
								<p className="card-text">Distance: 5 Mi</p>
								<br></br>
								<a className="btn btn-primary js-scroll-trigger" href="#about">
									Add Trail
								</a>
							</div>
						</div>
					</div>
					{/* <!-- Trail 3 --> */}
					<div className="col-lg-4 col-sm-6 mb-4">
						<div className="card h-100">
							{/* <a href="#"><img className="card-img-top" src="./assets/img/jamesIrvine.jpg" alt=""></a> */}
							<div className="card-body">
								<h4 className="card-title">
									<a href="#">James Irvine Trail</a>
								</h4>
								<p className="card-text">
									Description: his grove of old-growth coastal redwood trees
									descends from a primeval forest that existed when dinosaurs
									roamed the Earth.
								</p>
								<p className="card-text">Location: Humboldt, CA</p>
								<p className="card-text">Difficulty: Hard</p>
								<p className="card-text">Distance: 155 Mi</p>
								<br></br>
								<br></br>
								<a className="btn btn-primary js-scroll-trigger" href="#about">
									Add Trail
								</a>
							</div>
						</div>
					</div>
					{/* <!-- Trail 4 --> */}
					<div className="col-lg-4 col-sm-6 mb-4">
						<div className="card h-100">
							{/* <a href="#"><img className="card-img-top" src="./assets/img/jamesIrvine.jpg" alt=""></a> */}
							<div className="card-body">
								<h4 className="card-title">
									<a href="#">Solstice Canyon Trail</a>
								</h4>
								<p className="card-text">
									Description: Pomo Canyon Trail climbs through a lush redwood
									forest, then it follows along a wooded ridge with stunning
									vistas of the Pacific Ocean...
								</p>
								<p className="card-text">Location: Santa Monica, CA</p>
								<p className="card-text">Difficulty: Easy</p>
								<p className="card-text">Distance: 2 Mi</p>
								<a className="btn btn-primary js-scroll-trigger" href="#about">
									Add Trail
								</a>
							</div>
						</div>
					</div>
					{/* <!-- Trail 5 --> */}
					<div className="col-lg-4 col-sm-6 mb-4">
						<div className="card h-100">
							{/* <a href="#"><img className="card-img-top" src="./assets/img/lostCoast.jpg" alt=""></a> */}
							<div className="card-body">
								<h4 className="card-title">
									<a href="#">Pomo Canyon Trail</a>
								</h4>
								<p className="card-text">
									Description: Pomo Canyon Trail climbs through a lush redwood
									forest, then it follows along a wooded ridge with stunning
									vistas of the Pacific Ocean..
								</p>
								<p className="card-text">Location: Sonoma, CA</p>
								<p className="card-text">Difficulty: Easy</p>
								<p className="card-text">Distance: 4 Mi</p>
								<a className="btn btn-primary js-scroll-trigger" href="#about">
									Add Trail
								</a>
							</div>
						</div>
					</div>
					{/* <!-- Trail 6 --> */}
					<div className="col-lg-4 col-sm-6 mb-4">
						<div className="card h-100">
							{/* <a href="#"><img className="card-img-top" src="./assets/img/yosemite.jpg" alt=""></a> */}
							<div className="card-body">
								<h4 className="card-title">
									<a href="#">River Valley</a>
								</h4>
								<p className="card-text">
									Description: Stretching between Shelter Cove to the south and
									the Mattole , the Lost Coast is a wild land of forests, fog,
									waves, and sand.
								</p>
								<p className="card-text">Location: Humboldt, CA</p>
								<p className="card-text">Difficulty: Medium</p>
								<p className="card-text">Distance: 25 Mi</p>
								<a className="btn btn-primary js-scroll-trigger" href="#about">
									Add Trail
								</a>
							</div>
						</div>
					</div>
				</div>
				{/* <!-- /.row --> */}

				{/* <!-- Page Display --> */}
				<ul className="pagination justify-content-center">
					<li className="page-item">
						<a className="page-link" href="#" aria-label="Previous">
							<span aria-hidden="true">&laquo;</span>
							<span className="sr-only">Previous</span>
						</a>
					</li>
					<li className="page-item">
						<a className="page-link" href="#">
							1
						</a>
					</li>
					<li className="page-item">
						<a className="page-link" href="#">
							2
						</a>
					</li>
					<li className="page-item">
						<a className="page-link" href="#">
							3
						</a>
					</li>
					<li className="page-item">
						<a className="page-link" href="#" aria-label="Next">
							<span aria-hidden="true">&raquo;</span>
							<span className="sr-only">Next</span>
						</a>
					</li>
				</ul>
			</div>
			{/* <!-- /.container --> */}
            </div>
            </div>

		// </section>
		// 	{/* <!-- Footer--> */}
		// 	<footer className="footer bg-black small text-center text-white-50">
		// 		<div className="container">Copyright © Nomad LLC 2020</div>
		// 	</footer>
		// </div>
	);
}

export default Profile;