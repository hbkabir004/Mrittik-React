import { GoogleMap, LoadScript } from '@react-google-maps/api';
import React from 'react';

const Map = () => {

    const containerStyle = {
        width: '100%',
        height: '100%'
    };

    const center = {
        lat: 51.508742,
        lng: -0.120850
    };

    return (
        <LoadScript
            googleMapsApiKey="AIzaSyCUiaBC-cJ0wcEtqCUtoXF3I91o9wS42gQ"
        >
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={8}
            >
                <section className="gmap box_padding">
                    <div className="gmapbox">
                        <div id="googleMap" className="map"></div>
                    </div>
                </section>
            </GoogleMap>
        </LoadScript>

    );
};

export default Map;