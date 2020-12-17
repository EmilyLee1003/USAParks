import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';


const containerStyle = {
  width: '600px',
  height: '600px'
};
const center = {
  lat: 34.0,
  lng: -118.4
};


 
function Mapcontainer(props) {
  console.log(props)
  const [map, setMap] = React.useState(null)
 
  // const onLoad = React.useCallback(function callback(map) {
  //   const bounds = new window.google.maps.LatLngBounds();
  //   map.fitBounds(bounds);
  //   setMap(map)
  // }, [])
 
  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])
  console.log(center.lat+"%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%")
  console.log(center.lng+"%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%")
console.log(props)
 
  return (
    <LoadScript
      googleMapsApiKey="AIzaSyCLlZs_DChIEtKYevVBR1cUjeKSYLHfePM"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={5}
        // onLoad={onLoad}
        onUnmount={onUnmount}
      >
       {props.results.map(r=><Marker position={{lat:+r.latitude, lng: +r.longitude}}/>
       
       
    
       )} 

  
         

      
      </GoogleMap>
    </LoadScript>
  )
}
//+ converts string into a number 

export default React.memo(Mapcontainer)
