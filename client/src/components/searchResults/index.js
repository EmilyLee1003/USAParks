import React from "react";
import "./style.css";

function SearchResults(props) {
  console.log(props.results)
  return (
    
    <ul className="list-group search-results">
          <h2>{props.results.map(r => {
            return <li className="list-group-item">{r} 
            <p class="parkDescription">{props.description}</p></li>
          })}</h2>
        
    </ul>
  );
}

export default SearchResults;