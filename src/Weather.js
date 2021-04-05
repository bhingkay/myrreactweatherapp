import React from "react";
import "./Weather.css";
import Button from "react-bootstrap/Button";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-6">
            <input
              type="search"
              placeholder="type a city"
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
      <h1>Manila</h1>
      <ul>
        <li>Sunday 12:00</li>
        <li>Mostly Cloudy</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <div className="d-flex weather-temperature">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png"
              alt="mostly cloudy"
            />

            <div className="float-left">
              <strong> 30 </strong>
              <span className="units">
                <a href="/">°C</a> | <a href="/">’F</a>
              </span>
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Percipitation: 1%</li>
            <li>Humidity: 62%</li>
            <li>Wind: 10 km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
