import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

export const VenueLocationIcon = L.icon({
    iconUrl: '/camino.png',
    // shadowUrl: './camino.svg',

    iconSize: [40, 60], // size of the icon
    // shadowSize: [50, 64], // size of the shadow
    iconAnchor: [0, 0], // point of the icon which will correspond to marker's location
    // shadowAnchor: [4, 62], // the same for the shadow
    popupAnchor: [10, -6], // point from which the popup should open relative to the iconAnchor
});

// 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
// iconUrl: 'camino.svg',
// iconRetinaUrl: 'camino.svg',
// iconAnchor: null,
// shadowUrl: null,
// shadowSize: null,
// shadowAnchor: null,
// iconSize: [35, 35],
// className: 'leaflet-venue-icon',
