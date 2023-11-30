import React from 'react'

export default function Forecast({data}) {
    const kToC = (kelvin) => {
        return (kelvin - 273.15).toFixed(2);
      };
  return data?(
    <div className='forecast'>
       
        {data.list.map((item, index) => (
          <div key={index} className="forecast-day">
            <p>Date: {item.dt_txt}</p>
            <p>Temperature: {kToC(item.main.temp)}°C</p>
            <p>Weather: {item.weather[0].description}</p>
            <img
              src={`http://openweathermap.org/img/wn/${item.weather[0].icon}.png`}
              alt={item.weather[0].main}
            />
             <p>Humidity: {item.main.humidity}%</p>
            <p>Wind Speed: {item.wind.speed} m/s</p>
            <p>Pressure: {item.main.pressure} hPa</p>
          </div>
        ))}
      </div>
  ):"Loading"
}
