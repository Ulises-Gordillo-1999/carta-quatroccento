import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

function MapaGoogle() {
  const containerStyle = {
    width: '600px',
    height: '700px'
  };
  
  const center = {
    lat: -28.46683390445284, //-28.46683390445284, -65.79370326073446
    lng: -65.79370326073446
  };
  
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: `${import.meta.env.VITE_KEY_GOOGLE_MAPS}`
  })

 
  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={18}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
  ) : <></>
}

export default MapaGoogle