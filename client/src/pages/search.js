import React, { useState, useEffect } from "react";
import nationalParksAPI from "../utils/nationalparks";
import Container from "../components/container";
import SearchForm from "../components/searchForm";
import SearchResults from "../components/searchResults";
import Alert from "../components/alert";

function Search(){
    const[search,setSearch] = useState("");
    // const[states, setState] =useState("");
    const[results,setResults] =useState([]);
    const[description,setDescription] =useState([]);
    const [error, setError] =useState("");

const handleFormSubmit= () => {
        if(!search) {
            return;
        }
        console.log(".........................."+search)
        nationalParksAPI.searchParks(search)
        
        .then(res => {
            console.log(res)
            if(res.data.length===0){
                throw new Error("No results found. Enter a valid state code.")
            }
            if (res.data.status === "error") {
                throw new Error(res.data.data.fullName)
            }
           setResults(res.data.data.map(d => d.fullName));
           setDescription(res.data.data.map(d => d.description))
        }) 
        .catch(err => setError(err));
    }
    


const handleInputChange = event => {
    setSearch(event.target.value);
    console.log(event.target.value)
};
//updates the usestate

// handleFormSubmit =event => {
//     event.preventDefault();
//     nationalParksAPI.searchParks(this.state.search)
//     .then(res => {
//         if (res.data.status === "error"){
//             throw new Error (res.data.fullName);
//         }
//         this.setState({ results : res.data.fullName, error: ""});
//     })
//         .catch(err => this.setState({error: err.fullName}));
//     };

        return (
            <div>
                <Container style={{ minHeight: "80%" }}>
        <h1 className="text-center">Search by State</h1>
        <Alert type="danger" style={{ opacity: error ? 1 : 0, marginBottom: 10 }}>
          {error}
        </Alert>
          <SearchForm
          handleInputChange ={handleInputChange}
          results={search}
          description ={search}
            handleFormSubmit={handleFormSubmit}
            // handleInputChange={this.handleInputChange}
            // states={this.state.states}
          />
          <SearchResults results={results} 
                        description ={description}/>
     </Container>
            </div>
        )
    };

export default Search;