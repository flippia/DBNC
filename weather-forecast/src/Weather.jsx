import './Weather.css';
import { useState, useEffect } from 'react';

const Weather = () => {
    const [city, setCity] = useState('');
    const [cityData, setCityData] = useState(null);
    const [error, setError] = useState(null);

    const handleSubmit = e => {
        e.preventDefault();
        if(city !== ''){
            fetch(`https://forecast9.p.rapidapi.com/rapidapi/forecast/${city}/summary/`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "forecast9.p.rapidapi.com",
                // "x-rapidapi-key": "369ff7aedemshf44e7ef61c69bdcp1801edjsn69dc6f801e9e"
                "x-rapidapi-key": "27e8efadbdmshccf5740dfee8194p184379jsnfb14b1a40f73"
                }
            })
            .then(response => {
                return response.json();
            })
            .then(data => {
                setCityData(data);
                console.log(data);
            })
            .catch(err => {
                setError(err);
                console.error(err);
            });
        };        
    };

    return (  
        <form className="weather" onSubmit={handleSubmit}>
            <input type="text" placeholder="Input city" value={city}
            onChange={e => {
                setCity(e.target.value);
            }}
            />
            {cityData ?  
            <div>
                <h3>{cityData.location.name}</h3>
                <div className="result-display">
                    {cityData.forecast.items.slice(0,5).map(day => (
                        <div className="one-display" key={day.date}>
                            <h3>{day.date}</h3>
                            <h5>{day.weather.text}</h5>
                            <p>{day.temperature.min}°C ~ {day.temperature.max}°C</p>
                        </div>
                    ))}
                </div>
            </div>
            :
            (error ? 
            <div className="error">error: {error}</div>
            :
            <div className="no-data">No data currently</div>    
            )
            }
        </form>
    );
}
 
export default Weather;