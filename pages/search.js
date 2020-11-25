import React, { Component } from "react";
import nationalParksAPI from "../utils/nationalparks";
import weatherAPI from "../utils/weather";
import Container from "../components/container";
import SearchForm from "../components/searchForm";
import SearchResults from "../components/searchResults";

class Search extends Component {
    state={
        search:"",
        states: [],
        results: [],
        error: ""
    };

componentDidMount(){
    nationalParksAPI.getParksList()
    .then(res => this.setState({states:res.data.fullName}))
    .catch(err => console.log(err));
}

handleInputChange = event=> {
    this.setState({ search: event.target.value});
};

handleFormSubmit =event => {
    event.preventDefault();
    nationalParksAPI.getParksByState(this.state.search)
    .then(res => {
        if (res.data.status === "error"){
            throw new Error (res.data.fullName);
        }
        this.setState({ results : res.data.fullName, error: ""});
    })
        .catch(err => this.setState({error: err.fullName}));
    };

    render(){
        return (
            <div>
                <Container style={{ minHeight:80%}}>
        <h1 className="text-center">Search by State</h1>

          <SearchForm
            handleFormSubmit={this.handleFormSubmit}
            handleInputChange={this.handleInputChange}
            states={this.state.states}
          />
          <SearchResults results={this.state.results} />
     </Container>
            </div>
        )
    }
}

export default Search;