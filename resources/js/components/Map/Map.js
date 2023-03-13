import React, {useEffect, useState} from "react";
import axios from "axios";
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";
import markerIconPng from "leaflet/dist/images/marker-icon.png"
import {Icon} from 'leaflet';
import 'leaflet/dist/leaflet.css';
import History from "../History/History";

const Map = ({API, API_KEY}) => {
    const dataByCity = {
        "Miami": {
            "lat": 25.7741728,
            "lon": -80.19362
        },
        "Orlando": {
            "lat": 28.5421109,
            "lon": -81.3790304
        },
        "New York": {
            "lat": 40.7127281,
            "lon": -74.0060152
        }
    };
    const [humidityData, setHumidityData] = useState([]);
    const [selectedCity, setSelectedCity] = useState({});
    const fetchData = async () => {
        const listHumidityData = [];
        for (const city in dataByCity) {
            const response = await axios.get(
                `${API}/onecall?lat=${dataByCity[city]['lat']}&lon=${dataByCity[city]['lon']}&appid=${API_KEY}&lang=sp, es`
            );
            listHumidityData.push({
                name: city,
                coordinates: [
                    response.data.lat,
                    response.data.lon,
                ],
                humidity: response.data.current.humidity,
                history: response.data
            });
        }
        setHumidityData(listHumidityData);
    };
    const showHideSideBar = (show) => document.getElementsByClassName('sidebar')[0]?.setAttribute('style', `z-index: ${show ? '1' : '-1'};`);
    useEffect(() => {
        fetchData();
    }, []);
    useEffect(() => showHideSideBar(Object.keys(selectedCity).length), [selectedCity]);
    const cities = Object.keys(dataByCity);
    const randomCity = dataByCity[cities[Math.floor(Math.random() * cities.length)]];
    const position = [randomCity['lat'], randomCity['lon']];
    return (
        <>
            <MapContainer id="map" center={position} zoom={4} className="map-container">
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                {humidityData.map((city) => (
                    <Marker icon={new Icon({iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41]})}
                            position={city.coordinates} key={city.name}
                            eventHandlers={{click: () => setSelectedCity(city)}}>
                        <Popup>
                            <div>{city.name}</div>
                            <div>Humedad {city.humidity}%</div>
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
            {Object.keys(selectedCity).length && (
                <History infoCity={selectedCity} showHideSideBar={showHideSideBar}/>
            )}
        </>
    );
};

Map.propTypes = {};

Map.defaultProps = {};

export default Map;
