import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import Button from "react-bootstrap/Button";
import Loader from "react-loader-spinner";

export default function Weather(props) {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({});
  const [city, setCity] = useState(props.defaultcity);

  function handleResponse(response) {
    // console.log(response.data);
    //console.log(response.data.weather[0].icon);

    setWeatherData({
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      city: response.data.name,
      country: response.data.sys.country,
      date: new Date(response.data.dt * 1000),
      icon: response.data.weather[0].icon,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed),
    });
    setReady(true);
  }
  function Search() {
    if (city !== "") {
      const apiId = "a1436310c1d8f47f9c04f28cd4c73311";
      let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiId}&units=metric`;
      axios.get(apiUrl).then(handleResponse);
    } else {
      alert("Please check your spelling");
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    //alert(city);
    Search();
  }

  function handleCityChange(event) {
    event.preventDefault();
    setCity(event.target.value);
  }

  if (ready) {
    return (
      <div
        className={weatherData.temperature > 16 ? "Weather warm" : "Weather"}
      >
        <main>
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-9">
                <input
                  type="search"
                  placeholder="Type a city"
                  autoFocus="on"
                  className="inputCity form-control"
                  onChange={handleCityChange}
                />
              </div>
              <div className="col-3">
                <Button
                  variant="primary"
                  className="btnprimary"
                  onClick={handleSubmit}
                >
                  Search
                </Button>{" "}
              </div>
            </div>
          </form>
          <WeatherInfo data={weatherData} />
          <br />
          <br />
          <WeatherForecast coordinates={weatherData.coordinates} />
        </main>
      </div>
    );
  } else {
    Search();
    return (
      <div className="loader">
        <Loader type="BallTriangle" color="#00BFFF" height={100} width={100} />
      </div>
    );
  }
}
