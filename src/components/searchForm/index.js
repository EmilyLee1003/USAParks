import React from "react";
import "./style.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function SearchForm(props) {
  return (
    <form className="search">
      <div className="form-group">
        <label htmlFor="parks">State Code: </label>
        <input
          value={props.search}
          onChange={props.handleInputChange}
          name="stateCode"
          list="parks"
          type="text"
          className="form-control"
          placeholder="Type a State Code"
          id="parks"
        />
        <datalist id="parks">
          {props.parks.map(parks => (
            <option value={parks} key={parks} />
          ))}
        </datalist>
        <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
