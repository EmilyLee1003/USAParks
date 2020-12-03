import React, {Component} from "react";
import nationalWeatherAPI from "../utils/nationalparks";
import Card from "../components/card";
import Alert from "../components/alert";

class Discover extends Component {
    state ={
        name: "",
        description: "",
        image: "",
        parkCount: 0
    };

loadResults = () => {
    nationalWeatherAPI.searchParks()
    .then(res => this.setState({
        result: res.data.fullName,
        description:res.data.description,
        image:res.data.images[0]
    }))
    .catch(err => console.log(err));
}


componentDidMount(){
    this.loadResults();
}

handleBtnClick = event => {
    // const btnType = event.target.attributes.getNamedItem("data-value").value;
    // const newState ={...this.state};
    // if (btnType === "add"){
    //     newState.parkCount = this.state.parkCount
    //     newState.parkCount + 1 : newState.parkCount
    //     //???????????????????? how to set the this.state.parkCount to increase 
    // } else {
    //     newState = this.state
    // }
    // this.setState(newState);
    this.loadResults();
};

render(){
    return (
        <div>
        <Card image={this.state.image} handleBtnClick={this.handleBtnClick}/>
        <h1> added {this.state.parkCount} parks to your list!</h1>
        <Alert>
            ADDED TO YOUR LIST
        </Alert>
        </div>
    )
} 
}

export default Discover ;