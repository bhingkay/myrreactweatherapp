import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <h1>Manila</h1>
      <ul>
        <li>Sunday 12:00</li>
        <li>Mostly Cloudy</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png"
            alt="mostly cloudy"
          />
          30°C
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
