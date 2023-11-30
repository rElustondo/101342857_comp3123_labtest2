import logo from './logo.svg';
import axios from 'axios'
import './App.css';
import {useState, useEffect} from 'react'
import Search from './components/Search';
import Weather from './components/Weather';
import Forecast from './components/Forecast';

function App() {
  const [data , setData] = useState()
  const [forecast , setForecast] = useState()
  const [city , setCity] = useState("Toronto")

  
  
  useEffect(()=>{
    const getData = async ()=>{
      let res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e3c2f67596398854ce8a81c3d0bc583e`)
      
      setData(res.data)
      const res2 = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=7&appid=e3c2f67596398854ce8a81c3d0bc583e`);
      setForecast(res2.data);
      console.log(res2.data)
    }
    
    getData()
  },[city])
  return data?(
    <div className="App">
        <Search setCity={setCity}/>
        <Weather data={data}/>
        <Forecast data={forecast}/>
     
    </div>
  ):"Loading";
}

export default App;
