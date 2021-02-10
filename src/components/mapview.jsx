import React, { Component } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import data from '../assets/data';
import Markers from './venue_marker';

class MapView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentLocation: { lat: 52.52437, lng: 13.41053 },
            zoom: 12,
        };
    }

    render() {
        const { currentLocation, zoom } = this.state;

        return (
            <MapContainer center={currentLocation} zoom={zoom}>
                <TileLayer
                    url='https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png'
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />

                <Markers venues={data.venues} />
            </MapContainer>
        );
    }
}

export default MapView;

// https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png
