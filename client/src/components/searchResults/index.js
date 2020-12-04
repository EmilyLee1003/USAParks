import React from "react";
import "./style.css";
import Searchcard from "../Searchcard/Searchcard"

function SearchResults(props) {
  console.log(props.results)
  // var testResults = ["1", "2","3"]
  return (
    
    <ul className="list-group search-results">
          <h2>{props.results.map(fullName => {
            return <Searchcard fullName={fullName}></Searchcard>
            // <p class="parkDescription">{props.description}</p></li>
          })}</h2>
        
    </ul>
  );
}

export default SearchResults;