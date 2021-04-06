import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import Button from "react-bootstrap/Button";
import Loader from "react-loader-spinner";

export default function Weather(props) {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({});

  function handleResponse(response) {
    console.log(response.data);

    setWeatherData({
      temperature: response.data.main.temp,
      city: response.data.name,
      date: "Sunday 12:00",
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed),
    });
    setReady(true);
  }

  if (ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-6">
              <input
                type="search"
                placeholder="Type a city"
                autoFocus="off"
                className="inputCity form-control"
              />
            </div>
            <div className="col-3">
              <Button variant="primary" className="btnprimary">
                Search
              </Button>{" "}
            </div>
            <div className="col-3">
              <Button variant="success" className="currentbtn">
                Current
              </Button>{" "}
            </div>
          </div>
        </form>
        <h1>{weatherData.city}</h1>
        <ul>
          <li>{weatherData.date}</li>
          <li className="text-capitalize">{weatherData.description}</li>
        </ul>
        <div className="row">
          <div className="col-6">
            <div className="d-flex weather-temperature">
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png"
                alt="mostly cloudy"
              />

              <div className="float-left">
                <strong className="temperature">
                  {" "}
                  {Math.round(weatherData.temperature)}{" "}
                </strong>
                <span className="units">
                  <a href="/">°C</a> | <a href="/">’F</a>
                </span>
              </div>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>Humidity:{weatherData.humidity}%</li>
              <li>Wind:{weatherData.wind} km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiId = "a1436310c1d8f47f9c04f28cd4c73311";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultcity}&appid=${apiId}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return (
      <div className="loader">
        <Loader type="BallTrianglef" color="#00BFFF" height={100} width={100} />
      </div>
    );
  }
}
