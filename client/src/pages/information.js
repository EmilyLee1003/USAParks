import React, {Component, useState} from "react";
import weatherAPI from "../utils/weather";
import nationalParkAPI from "../utils/nationalparks";
import search from "./search";
import Container from "../components/container"
import SearchResults from '../components/searchResults'

// //grab the park that was clicked in the search page and then 
// //display additional information on this page 

// //also grab the weather api to display the weather of the city of the park searched

// //   const[description, setDescription]= useState([]);

function Information(props){
   console.log(props.search.description)
  



return (
    <div>
<Container>
  <div>
    {props.search.description}
  </div>
  <div>
  {props.search.url}
  </div>
  <div>
  {props.search.entranceFees.map( q => {
    return <li className="list-group-item">{q.title} {q.description} {q.cost} </li>
  })}
  </div>
  <div>
    <li> Monday:  {props.search.operatingHours[0].standardHours.monday} </li>
    <li> Tuesday: {props.search.operatingHours[0].standardHours.tuesday}</li>
    <li> Wednesday: {props.search.operatingHours[0].standardHours.wednesday}</li>
    <li> Thursday: {props.search.operatingHours[0].standardHours.thursday} </li>
   <li> Friday:  {props.search.operatingHours[0].standardHours.friday}</li>
    <li> Saturday: {props.search.operatingHours[0].standardHours.saturday}</li>
   <li> Sunday: {props.search.operatingHours[0].standardHours.sunday}</li>
  </div>

  <div>
     {props.search.images.map( w => {
    return <img src = {w.url} />})}
   </div>

  
  </Container>
  </div>
)
};
export default Information; 