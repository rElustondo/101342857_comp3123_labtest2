import React from 'react'

export default function Weather({data}) {
    const kToC = (kelvin) => {
        return (kelvin - 273.15).toFixed(2);
      };

    
    const timeFormat = (timestamp) => {
        const givenDate = new Date(timestamp * 1000);
        return givenDate.toLocaleTimeString();
    };
    const getWeatherIconUrl = (iconCode) => {
    return `http://openweathermap.org/img/wn/${iconCode}@2x.png`;
    };
    return (
        <div style={{display:"flex",flexDirection:"row", marginLeft: "40%", marginRight: "40%"}}>
            <div className='weather'>
                <h1>{data.name}, {data.sys.country}</h1>
                <h1>{data.weather[0].description}</h1>
                <p>Weather: {data.weather[0].main}</p>
                <img src={getWeatherIconUrl(data.weather[0].icon)} alt={data.weather[0].main}/>
            </div>
            <div className="details">
            <p>Temperature: {kToC(data.main.temp)}°C</p>
            <p>Feels Like: {kToC(data.main.feels_like)}°C</p>
            <p>Min Temperature: {kToC(data.main.temp_min)}°C</p>
            <p>Max Temperature: {kToC(data.main.temp_max)}°C</p>
            <p>Humidity: {data.main.humidity}%</p>
            <p>Wind Speed: {data.wind.speed} m/s</p>
            <p>Sunrise: {timeFormat(data.sys.sunrise)}</p>
            <p>Sunset: {timeFormat(data.sys.sunset)}</p>
            </div>


        </div>
    )
}
