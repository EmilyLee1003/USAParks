import React, {Component, useState} from "react";
import "./Home/logo.svg";
import "./Home/Home.css";
import { Link } from "react-router-dom";

// //grab the park that was clicked in the search page and then 
// //display additional information on this page 

// //also grab the weather api to display the weather of the city of the park searched

// //   const[description, setDescription]= useState([]);

function Information(props){
   console.log(props.search.description)
  
return (
    <div>
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
			{/* <!-- Basthead--> */}
			<header className="basthead">
				<div className="container d-flex h-100 align-items-center">
					<div className="mx-auto text-center">
						<h1 className="mx-auto my-0 text-uppercase">Project Parks</h1>
						<h2 className="text-white-50 mx-auto mt-2 mb-5">
							Your list of National Parks waiting to be discovered!
						</h2>
						{/* <!-- <a className="btn btn-primary js-scroll-trigger" href="#about">Get Started</a> --> */}
					</div>
				</div>
			</header>
			{/* <!-- About--> */}
      <div className="container">
						{/* <!-- Page Heading --> */}
						<h1 className="my-4">My Trails:</h1>
						{/* <!-- Trail 1 --> */}
						<div className="row">
							<div className="col-lg-4 col-sm-6 mb-4">
								<div className="card h-100">
									{/* <a href="#"><img className="card-img-top" src="./assets/img/lostCoast.jpg" alt=""></a> */}
									<div className="card-body">
										<h4 className="card-title">
											{props.search.fullName}
										</h4>
										<p className="card-text">
											{props.search.description}
										</p>
										<p className="card-text"> Website: {props.search.url} </p>
										<p className="card-text">{props.search.entranceFees.map( q => {
    						return <li className="list-group-item">{q.title} {q.description} {q.cost} </li>
  })}</p>
										<p className="card-text">
                    
    <li> Monday:  {props.search.operatingHours[0].standardHours.monday} </li>
    <li> Tuesday: {props.search.operatingHours[0].standardHours.tuesday}</li>
    <li> Wednesday: {props.search.operatingHours[0].standardHours.wednesday}</li>
    <li> Thursday: {props.search.operatingHours[0].standardHours.thursday} </li>
   <li> Friday:  {props.search.operatingHours[0].standardHours.friday}</li>
    <li> Saturday: {props.search.operatingHours[0].standardHours.saturday}</li>
   <li> Sunday: {props.search.operatingHours[0].standardHours.sunday}</li> 
                     </p>
                     <div classN>
                     {props.search.images.map( w => {
    return <img src = {w.url} />})}
                     </div>
										<a
											className="btn btn-primary js-scroll-trigger"
											href="/search"
										>
											Go back 
										</a>
									</div>
								</div>
							</div>
            </div>
      </div>


{/* <Container>
  <div>
    {props.search.description}
  </div>
  <div>
  {props.search.url}
  </div>
  <div> */}
  {/* {props.search.entranceFees.map( q => {
    return <li className="list-group-item">{q.title} {q.description} {q.cost} </li>
  })}
  </div>
  <div>
    <li> Monday:  {props.search.operatingHours[0].standardHours.monday} </li>
    <li> Tuesday: {props.search.operatingHours[0].standardHours.tuesday}</li>
    <li> Wednesday: {props.search.operatingHours[0].standardHours.wednesday}</li>
    <li> Thursday: {props.search.operatingHours[0].standardHours.thursday} </li>
   <li> Friday:  {props.search.operatingHours[0].standardHours.friday}</li>
    <li> Saturday: {props.search.operatingHours[0].standardHours.saturday}</li>
   <li> Sunday: {props.search.operatingHours[0].standardHours.sunday}</li>
  </div>

  <div>
     {props.search.images.map( w => {
    return <img src = {w.url} />})}
   </div>

  
  </Container>
     </div> */}
     </div>
)
};
export default Information; 