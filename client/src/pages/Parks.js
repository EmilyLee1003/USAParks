import React, { useEffect } from 'react'
import logo from './logo.svg'
import './Home.css'

function Parks() {



return (
    <div>
  		    {/* <!-- Navigation--> */}
    <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
        <div className="container">
            <a className="navbar-brand js-scroll-trigger" href="#page-top">Nomad</a>
            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
                data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false"
                aria-label="Toggle navigation">
                Menu
                <i className="fas fa-bars"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a className="nav-link js-scroll-trigger" href="./index.html">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link js-scroll-trigger" href="./parks.html">Parks</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link js-scroll-trigger" href="./profile.html">Profile</a>
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
                    <h2 className="text-white mb-4">Plan your next adevnture here!</h2>
                    <p className="text-white-50">
                        We are committed to help young adults connect with our national parks
                        and nature more broadly. Whether that means planning a road trip to get a full hands
                        on experience or simply learning more about the surrounding parks. These experiences help
                        young people have an immersive outdoor experiences in nature. Which we hope they can share and
                        teach with to the generations to come.
                        <a
                            href="https://www.nationalgeographic.com/travel/travel-interests/tips-and-advice/9-tips-to-remember--traveling-national-parks/">Learn
                            more about resources here</a>
                    </p>
                </div>
                
            </div>
            {/* <!-- Map  --> */}
            <img className="img-fluid" src="assets/img/mapp.jpg" alt="Arches National Park at night" />
            <br></br>
            <br></br>
            <br></br>
            <form className="form-inline d-flex">
                <input className="form-control flex-fill mr-0 mr-sm-2 mb-3 mb-sm-0" id="inputEmail" type="email"
                    placeholder="Search Location..." />
            </form>
            <br></br>
            <br></br>
            <form className="form-inline d-flex">
                <input className="form-control flex-fill mr-0 mr-sm-2 mb-3 mb-sm-0" id="inputEmail" type="email"
                    placeholder="Search Difficulty..." />
            </form>
            <br></br>
            <br></br>
            <form className="form-inline d-flex">
                <input className="form-control flex-fill mr-0 mr-sm-2 mb-3 mb-sm-0" id="inputEmail" type="email"
                    placeholder="Search Distance..." />
            </form>
        </div>
            <br></br>
        <a className="btn btn-primary js-scroll-trigger" href="#about">Search</a>
            <br></br>
    </section>

    {/* <!-- Trail Content --> */}
    <div className="container">

        {/* <!-- Page Heading --> */}
        <h1 className="my-4">Park Trails:
            <small>Be sure to select trails within your ability and comfort.</small>
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
                        <p className="card-text">Description: Stretching between Shelter Cove to the south and the Mattole
                            River to the north, the Lost Coast is a wild land of forests, fog, waves, and sand.</p>
                        <p className="card-text">Location: Humboldt, CA</p>
                        <p className="card-text">Difficulty: Hard</p>
                        <p className="card-text">Distance: 25 Mi</p>
                <br></br>
                        <a className="btn btn-primary js-scroll-trigger" href="#about">Add Trail</a>
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
                        <p className="card-text">Description: One of the best hikes in Yosemite National Park, this trail
                            provides close-up views of Yosemite's most spectacular waterfall, as well as panoramic
                            vistas of the valley floor</p>
                        <p className="card-text">Location: Yosemite, CA</p>
                        <p className="card-text">Difficulty: Easy</p>
                        <p className="card-text">Distance: 5 Mi</p>
                <br></br>
                        <a className="btn btn-primary js-scroll-trigger" href="#about">Add Trail</a>
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
                        <p className="card-text">Description: his grove of old-growth coastal redwood trees descends from a
                            primeval forest that existed when dinosaurs roamed the Earth.</p>
                        <p className="card-text">Location: Humboldt, CA</p>
                        <p className="card-text">Difficulty: Hard</p>
                        <p className="card-text">Distance: 155 Mi</p>
                <br></br>
                <br></br>
                        <a className="btn btn-primary js-scroll-trigger" href="#about">Add Trail</a>
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
                        <p className="card-text">Description: Pomo Canyon Trail climbs through a lush redwood forest, then
                            it
                            follows along a wooded ridge with stunning vistas of the Pacific Ocean...</p>
                        <p className="card-text">Location: Santa Monica, CA</p>
                        <p className="card-text">Difficulty: Easy</p>
                        <p className="card-text">Distance: 2 Mi</p>
                        <a className="btn btn-primary js-scroll-trigger" href="#about">Add Trail</a>
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
                        <p className="card-text">Description: Pomo Canyon Trail climbs through a lush redwood forest, then
                            it
                            follows along a wooded ridge with stunning vistas of the Pacific Ocean..</p>
                        <p className="card-text">Location: Sonoma, CA</p>
                        <p className="card-text">Difficulty: Easy</p>
                        <p className="card-text">Distance: 4 Mi</p>
                        <a className="btn btn-primary js-scroll-trigger" href="#about">Add Trail</a>
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
                        <p className="card-text">Description: Stretching between Shelter Cove to the south and the Mattole
                            , the Lost Coast is a wild land of forests, fog, waves, and sand.</p>
                        <p className="card-text">Location: Humboldt, CA</p>
                        <p className="card-text">Difficulty: Medium</p>
                        <p className="card-text">Distance: 25 Mi</p>
                        <a className="btn btn-primary js-scroll-trigger" href="#about">Add Trail</a>
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
                <a className="page-link" href="#">1</a>
            </li>
            <li className="page-item">
                <a className="page-link" href="#">2</a>
            </li>
            <li className="page-item">
                <a className="page-link" href="#">3</a>
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
    // </section>
	// 	{/* <!-- Footer--> */}
	// 	<footer className="footer bg-black small text-center text-white-50">
	// 		<div className="container">Copyright © Nomad LLC 2020</div>
	// 	</footer>
    // </div>
)
}

export default Parks