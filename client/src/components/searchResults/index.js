import React from "react";
import "./style.css";
import Btn from "../button/index"


function SearchResults(props) {
  console.log(props.results)
  return (
    
    <ul className="list-group search-results">
          {props.results.map(r => {
            return <div> {r.fullName} {r.description} {r.entranceFees.map( q => {
              return <li className="list-group-item">{q.title} {q.description} {q.cost} </li>
            })} {r.images.map( w => {
              return <img src = {w.url} />})}
          



            </div>
        })}
        
         
    </ul>
  );
}

export default SearchResults;