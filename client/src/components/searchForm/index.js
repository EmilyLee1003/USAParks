import React from "react";
// import "./style.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function SearchForm(props) {
  return (
    <form className="search" onSubmit={(event)=> {
      event.preventDefault()
    }}>
      
      
      <div className="form-group">
        <label htmlFor="parks">State Code: </label>
        <input
          value={props.search}
          onChange={props.handleInputChange}
          name="stateCode"
          list="states"
          type="text"
          className="form-control"
          placeholder="Type a State Code"
          id="stateCode"
        />
        <datalist id="stateCode">
        </datalist>
        <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
