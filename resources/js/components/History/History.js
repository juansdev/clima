import React from 'react';
import './History.css';

const History = ({city, weatherHistory}) => {
    return (
        <div className="history-container">
            <h2>{city} Historial del Clima</h2>
            <table>
                <thead>
                <tr>
                    <th>Tiempo</th>
                    <th>Temperatura</th>
                    <th>Humedad</th>
                </tr>
                </thead>
                <tbody>
                {weatherHistory.map((data) => (
                    <tr key={data.dt}>
                        <td>{new Date(data.dt * 1000).toLocaleTimeString()}</td>
                        <td>{Math.round(data.temp - 273.15)}°C</td>
                        <td>{data.humidity}%</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

History.propTypes = {};

History.defaultProps = {};

export default History;
