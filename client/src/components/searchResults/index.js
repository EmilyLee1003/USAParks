import React from "react";
import "./style.css";

import Searchcard from "../Searchcard/Searchcard"


function SearchResults(props) {
  console.log(props.results)
  // var testResults = ["1", "2","3"]
  return (
    

  <div className="row">
          {props.results.map(r => {
            return <Searchcard onClick={props.handleAddProfile} parkCode={r.parkCode} fullName={r.fullName} description={r.description} entranceFees={r.entranceFees.map( q => {
              return <li className="list-group-item">{q.title} {q.description} {q.cost} </li>
            })} images={r.images[0].url}></Searchcard>
            
          })}
          </div>

        
    
  );
}

export default SearchResults;