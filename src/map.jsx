import React, { useState } from 'react';
import { MapContainer, TileLayer, useMapEvent, Circle } from 'react-leaflet';

const fillBlueOptions = { fillColor: 'blue' };

function MyComponent({ addPos }) {
    // const map = useMapEvents({
    //     click: () => {
    //         map.locate();
    //     },
    //     locationfound: (location) => {
    //         console.log('location found:', location);
    //     },
    // });

    // const map = useMapEvent('click', () => {
    //     map.setCenter([50.5, 30.5]);
    // });

    useMapEvent('click', (e) => {
        // console.log('event', e);
        console.log(e.latlng);
        addPos(e.latlng);
    });

    return null;
}

function MyMapComponent() {
    const [routePos, setRoutePos] = useState([]);
    const addPos = (pos) => {
        setRoutePos((routePos) => [...routePos, [pos.lat, pos.lng]]);
        console.log(routePos);
    };

    return (
        <MapContainer center={[50.5, 30.5]} zoom={13}>
            <MyComponent addPos={addPos} />
            {routePos.map((pos) => (
                <Circle
                    center={pos}
                    pathOptions={fillBlueOptions}
                    radius={100}
                />
            ))}
            <TileLayer
                url='https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png'
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
        </MapContainer>
    );
}

export default MyMapComponent;
