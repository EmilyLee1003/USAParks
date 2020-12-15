import React from "react";
import CardBtn from "../CardBtn";
// import "../pages/Home/Home.css";

function Searchcard(props) {
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
           <div>
            <p className="card-text cardDis">
            {props.description}
            </p>
            </div>
            <br></br>
            <div>
            <p className="card-text cardFees">{props.entranceFees}</p>
            </div>
            <br></br>
            <button id={props.parkCode} className="btn btn-primary js-scroll-trigger" onClick={props.onClick}>
                Add Park
            </button>

        </div>
    </div>
        </div>
    
);
}

export default Searchcard;