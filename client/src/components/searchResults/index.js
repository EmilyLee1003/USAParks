import React from "react";
import "./style.css";
import Searchcard from "../Searchcard/Searchcard"

function SearchResults(props) {
  console.log(props.results)
  // var testResults = ["1", "2","3"]
  return (
    
  <div className="row">
          {props.results.map(r => {
            return <Searchcard fullName={r.fullName}></Searchcard>
            
          })}
          </div>
        
    
  );
}

export default SearchResults;