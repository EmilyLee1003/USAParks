import React from "react";
import CardBtn from "../CardBtn";
// import "./style.css";

function Searchcard(props) {
return (



<div className="col-lg-4 col-sm-6 mb-4">
    <div className="card h-100">
        {/* <a href="#"><img className="card-img-top" src="./assets/img/lostCoast.jpg" alt=""></a> */}
        <div className="card-body">
            <h4 className="card-title">
                <a href="#">{props.fullName}</a>
            </h4>
           <img src={props.images}></img>
            <p className="card-text">
            {props.discription}
            </p>
            <p className="card-text">{props.entranceFees}</p>
            {/* <p className="card-text">Difficulty: Hard</p>
            <p className="card-text">Distance: 25 Mi</p> */}
            <br></br>
            <a className="btn btn-primary js-scroll-trigger" href="#about">
                Add Park
            </a>

        </div>
    </div>
        </div>
    
);
}

export default Searchcard;