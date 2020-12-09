import React from "react"
import Button from "./button";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { withRouter } from "react-router";

class Btn extends React.Component{

handleInputChange=() => {
  console.log("++++++++++++++++change is recorded")
}

handleInputChange2 =()=>{
  console.log("$$$$$$$$$$$$$$$ change is made!")
  this.props.setSearch(this.props.r)
  //props.r all it is the fullName
  this.props.history.push("/information")
  //history.push is only changing the page 
}
render(){
  return(
    <div>
    <Button click={this.handleInputChange} type={"primary"}>
      Add to my list
    </Button>
    <Button click={this.handleInputChange2} type={"danger"}>
    More Information
    <Link to="/information">Information</Link>
  </Button>
</div>
  );
  }
}

export default withRouter(Btn); 