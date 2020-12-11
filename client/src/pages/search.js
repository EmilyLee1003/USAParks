import React, { Component, useState, useEffect } from "react";
import nationalParksAPI from "../utils/nationalparks";
import Container from "../components/container";
import SearchForm from "../components/searchForm";
import SearchResults from "../components/searchResults";
import Alert from "../components/alert";
import Button from "../components/button/index";
import Btn from "../components/button/index";
import Mapcontainer from "./Mapcontainer";



//props is when its coming from parent to child 
//whenever there is a prop you have to look at the parent and see what they're passing in
//
function Search(props){
    const[currentValue, setCurrentValue] = useState("");
    // const[states, setState] =useState("");
    const[results,setResults] =useState([]);
    const [error, setError] =useState("");

const handleFormSubmit= () => {
        if(!currentValue) {
            return;
        }
        console.log(".........................."+currentValue)
        nationalParksAPI.searchParks(currentValue)
        
        .then(res => {
            console.log(res)
            if(res.data.length===0){
                throw new Error("No results found. Enter a valid state code.")
            }
            if (res.data.status === "error") {
                throw new Error(res.data.data)
            }
           setResults(res.data.data);
           console.log(res.data.data)
          
        }) 
        .catch(err => setError(err));
    }
    


const handleInputChange = event => {
    setCurrentValue(event.target.value);
    console.log(event.target.value)
};

console.log(results)

// const handleBtnClick =event => {
//     const btnType =event.target.attributes.getNamedItem("data-value").value;
//     if(btnType === "Add To My List"){

//     }
// }
// function handleBtnClick(event){
//     console.log("button was clicked")
// }

        return (
    <div>
        <Container style={{ minHeight: "80%" }}>
        <h1 className="text-center">Search by State</h1>
        <Alert type="danger" style={{ opacity: error ? 1 : 0, marginBottom: 10 }}>
          {error}
        </Alert>

        <Mapcontainer
          results={results}
          
        >
            
        </Mapcontainer>
          <SearchForm
          handleInputChange ={handleInputChange}
          results={currentValue}
            handleFormSubmit={handleFormSubmit}
          />
         
          <SearchResults
          
          setSearch={props.setSearch}
           results={results}
            />
            
            
        
     </Container>
      </div>
        )
    };

export default Search;