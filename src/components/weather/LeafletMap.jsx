import React from 'react'
import * as L from "leaflet"
import { MapContainer, TileLayer, useMap } from 'react-leaflet'

const LeafletMap = () => {
    let map = L.map('map').setView([51.505, -0.09], 13);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    return (
        <div id='map' className="w-full h-full ">
        </div>
    )
}

export default LeafletMap