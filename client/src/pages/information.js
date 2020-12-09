import React, {Component, useState} from "react";
import Container from "../components/container"
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
  </div>
<Container>
  <div>
    {props.search.description}
  </div>
  <div>
  {props.search.url}
  </div>
  <div>
  {props.search.entranceFees.map( q => {
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
 

)
};
export default Information; 