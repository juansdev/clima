import React, {useEffect, useState} from "react";
import axios from "axios";
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";
import markerIconPng from "leaflet/dist/images/marker-icon.png"
import {Icon} from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './Map.css';
import History from "../History/History";

const Map = ({API, API_KEY}) => {
    const [humidityData, setHumidityData] = useState([]);
    const [weatherHistory, setWeatherHistory] = useState([]);
    const [selectedCity, setSelectedCity] = useState("");
    const fetchData = async () => {
        const responseMiami = await axios.get(
            `${API}/onecall?lat=25.7741728&lon=-80.19362&appid=${API_KEY}&lang=sp, es`
        );
        const responseOrlando = await axios.get(
            `${API}/onecall?lat=28.5421109&lon=-81.3790304&appid=${API_KEY}&lang=sp, es`
        );
        const responseNewYork = await axios.get(
            `${API}/onecall?lat=40.7127281&lon=-74.0060152&appid=${API_KEY}&lang=sp, es`
        );
        setHumidityData([
            {
                name: "Miami",
                coordinates: [
                    responseMiami.data.lat,
                    responseMiami.data.lon,
                ],
                humidity: responseMiami.data.current.humidity,
            },
            {
                name: "Orlando",
                coordinates: [
                    responseOrlando.data.lat,
                    responseOrlando.data.lon,
                ],
                humidity: responseOrlando.data.current.humidity,
            },
            {
                name: "New York",
                coordinates: [
                    responseNewYork.data.lat,
                    responseNewYork.data.lon,
                ],
                humidity: responseNewYork.data.current.humidity,
            },
        ]);
    };
    const fetchWeatherHistory = async ([lat, lon]) => {
        const response = await axios.get(
            `${API}/onecall/timemachine?lat=${lat}&lon=${lon}&dt=${Math.round(new Date().getTime() / 1000)}&appid=${API_KEY}&lang=sp, es`
        );
        setWeatherHistory(response.data.data);
    };
    const showHideSideBar = (show) => document.getElementsByClassName('sidebar')[0]?.setAttribute('style', `z-index: ${show ? '1' : '-1'};`);
    useEffect(() => {
        fetchData();
    }, []);
    useEffect(() => showHideSideBar(selectedCity), [selectedCity]);

    // MIAMI COORDENADAS
    const position = [25.7741728, -80.1918];
    return (
        <>
            <MapContainer id="map" center={position} zoom={4} className="map-container">
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                {humidityData.map((city) => (
                    <Marker icon={new Icon({iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41]})}
                            position={city.coordinates} key={city.name} eventHandlers={{
                        click: () => {
                            setSelectedCity(city.name);
                            fetchWeatherHistory(city.coordinates);
                        },
                    }}>
                        <Popup>
                            <div>{city.name}</div>
                            <div>Humedad {city.humidity}%</div>
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
            {selectedCity && (
                <History city={selectedCity} weatherHistory={weatherHistory} showHideSideBar={showHideSideBar}/>
            )}
        </>
    );
};

Map.propTypes = {};

Map.defaultProps = {};

export default Map;
