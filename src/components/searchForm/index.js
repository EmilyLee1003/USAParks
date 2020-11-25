import React from "react";
import "./style.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function Searcprops) {
  return (
    <form className="search">
      <div className="form-group">
        <label htmlFor="language">Search Parks</label>
        <input
          value={props.search}
          onChange={props.handleInputChange}
          name="stateCode"
          list="term"
          type="text"
          className="form-control"
          placeholder=""
          id="term"
        />
      </div>
    </form>
  );
}

export default SearchForm;