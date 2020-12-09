import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import Markers from "./googleMarker/marker"

const containerStyle = {
  width: '600px',
  height: '600px'
};
const center = {
  lat: -3.745,
  lng: -38.523
};
 
function Mapcontainer() {
  const [map, setMap] = React.useState(null)
 
  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map)
  }, [])
 
  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])
 
  return (
    <LoadScript
      googleMapsApiKey="AIzaSyCLlZs_DChIEtKYevVBR1cUjeKSYLHfePM"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        { <Markers> 
        



        </Markers>/* Child components, such as markers, info windows, etc. */ }
        
        <></>
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(Mapcontainer)