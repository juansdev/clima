import React, {useState} from 'react';

const History = ({infoCity, showHideSideBar}) => {
    const [timePeriod, setTimePeriod] = useState('hourly');
    const toggleStyleHeaderButtons = (element) => {
        for (const elementToggleButton of document.getElementsByClassName('toggleButton')) {
            if (elementToggleButton !== element.target) elementToggleButton.style = '';
            else elementToggleButton.style = 'background-color: black;';
        }
    };
    return (
        <div className="sidebar">
            <div className="siderbar-header" tabIndex="0">
                <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" strokeWidth="1"
                     style={{width: '50px'}}
                     stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round"
                          d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z"/>
                </svg>
                <span className="siderbar-header-title">Historial del Clima de {infoCity['name']}</span>
            </div>
            <hr/>
            <div className="history-container">
                <table className="history-table">
                    <thead className="history-thead">
                    <tr>
                        <td colSpan="3" className="p-0">
                            <div className="inline-flex rounded w-full" role="group">
                                <button type="button"
                                        className="w-1/2 toggleButton px-4 py-2 text-sm font-medium text-dark bg-dark-700 border border-dark-600"
                                        onClick={(element) => {
                                            setTimePeriod('hourly');
                                            toggleStyleHeaderButtons(element);
                                        }} style={{backgroundColor: 'black'}}>
                                    Por hora
                                </button>
                                <button type="button"
                                        className="w-1/2 toggleButton px-4 py-2 text-sm font-medium text-dark bg-dark-700 border border-dark-600"
                                        onClick={(element) => {
                                            setTimePeriod('daily');
                                            toggleStyleHeaderButtons(element);
                                        }}>
                                    Por día
                                </button>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Tiempo
                        </th>
                        <th scope="col" className="px-6 py-3">
                            {timePeriod === 'daily' ? 'Temperatura promedio' : 'Temperatura'}
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Humedad
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {infoCity['history'][timePeriod].map((data) => (
                        <tr className="history-tbody-tr" key={data.dt}>
                            <td scope="row"
                                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">{timePeriod === 'daily' ? new Date(data.dt * 1000).toLocaleDateString() : `${new Date(data.dt * 1000).toLocaleDateString()} ${new Date(data.dt * 1000).toLocaleTimeString()}`}</td>
                            <td className="px-6 py-4">{timePeriod === 'daily' ? Math.round(((data.temp.min + data.temp.max) / 2) - 273.15) : Math.round(data.temp - 273.15)}°C</td>
                            <td className="px-6 py-4">{data.humidity}%</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
            <div className="sidebar-close" onClick={() => showHideSideBar(false)}>
                    <span className="sidebar-close-container">
                        <span className="sidebar-close-btn"></span>
                        <span className="sidebar-close-btn-reverse"></span>
                    </span>
                <button tabIndex="0" className="sidebar-close-menu">Cerrar Menú</button>
            </div>
        </div>
    );
};

History.propTypes = {};

History.defaultProps = {};

export default History;
