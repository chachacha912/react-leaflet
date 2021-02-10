import React from 'react';
import Map from './map';
import './app.css';

function App() {
    return <Map zoom={8} center={{ lat: 51.5287718, lng: -0.2416804 }} />;
}

export default App;
