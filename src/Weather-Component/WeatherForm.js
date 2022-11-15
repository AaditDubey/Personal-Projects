import React, { useRef,useState } from 'react'
import WeatherInfo from './WeatherInfo'
import Button from 'react-bootstrap/Button';
function WeatherForm() {
    
    const [dataObj,setDataObj] = useState();
    const [success, setSuccess] = useState(false)
    const [wait,setWait] = useState(false)
    const [countryState, setCountryState] = useState()
    const cityRef = useRef()
    const APIKey = `91d055bcbabc73d29d6f8b4cfdaa8fba`

    const handleSubmit= (e)=>{
        e.preventDefault()
        setWait(true)
        const GEOCODING = `http://api.openweathermap.org/geo/1.0/direct?q=${cityRef.current.value}&limit=1&appid=${APIKey}`;
        fetch(GEOCODING)
        .then((data) => {
            
            return data.json()
        })
        .then(data => {
            setCountryState({country: data[0].country, state: data[0].state})
            const APILink = `https://api.openweathermap.org/data/2.5/weather?lat=${data[0].lat}&lon=${data[0].lon}&appid=${APIKey}&units=metric`
            return fetch(APILink)
        })
        // .then(dataObj =>{
        //     const APILink = `https://api.openweathermap.org/data/2.5/weather?lat=${dataObj.lat}&lon=${dataObj.lon}&appid=${APIKey}`
        //     return fetch(APILink)
        // })
        .then(res => res.json())
        .then(res => {
            
            setDataObj(res)
            setSuccess(true)
            setWait(false)
        })
        .catch(err => {
        setSuccess(false)
        setWait(false)
        })
        
        cityRef.current.value = null
    }
  return (
    <form onSubmit={handleSubmit} className="Main-Weather">
        <h1>Weather</h1><br/>
        <input type = "text" className="inp"
        ref = {cityRef} 
        autoFocus = {true}>
        </input>
        <Button variant="outline-primary" type="submit" className="btn">Search</Button>
        {wait ? <h2>Please wait...</h2> : success?<WeatherInfo data = {dataObj} countryState={countryState}/>:<h2>Please search a real place.</h2>}
    </form>

  )
}

export default WeatherForm