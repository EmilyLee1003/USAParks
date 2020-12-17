import React, { useState, useEffect } from "react";
import CardBtn from "../CardBtn";
import "./style.css";
import API from "../../utils/API"
// import "../pages/Home/Home.css";

function Searchcard(props) {
const [parks, setParks] =useState([])
//load all parks and store them with setParks


  function addPark(){
      API.savePark({
        fullName : props.fullName,
        parkCode : props.parkCode,
        description : props.description
      })
      
  }



return (


<div className="col-lg-4 col-sm-6 mb-4">
    <div className="card h-100">
        {/* <a href="#"><img className="card-img-top" src="./assets/img/lostCoast.jpg" alt=""></a> */}
        <div className="card-body">
            <h4 className="card-title title-adjust">
                <a href="#">{props.fullName}</a>
            </h4>
            <div>
           <img className="parksPic" src={props.images}></img>
           </div>
           <div className="cardDiv1">
            <p className="card-text cardDis">
            {props.description}
            </p>
            </div>
            <br></br>
            <div className="entranceFee">
            <p className="card-text cardFees">{props.entranceFees}</p>
            </div>
            <br></br>
            <button id={props.parkCode} className="btn btn-primary js-scroll-trigger" onClick={addPark}  >
                Add Park 
            </button>

        </div>
    </div>
        </div>
    
);
}

export default Searchcard;