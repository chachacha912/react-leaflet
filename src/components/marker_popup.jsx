import React from 'react';
import { Popup } from 'react-leaflet';

const MarkerPopup = (props) => {
    const { name, description } = props.data;

    return (
        <Popup>
            <div className='poup-text'>{name}</div>
            <div>{description}</div>
        </Popup>
    );
};

export default MarkerPopup;
