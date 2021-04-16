import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Sat</div>
          <WeatherIcon code="01d" size={50} />
          <div className="WeatherForecast-temperature">
            <span className="WeatherForecast-tempMax">19°</span>
            <span className="WeatherForecast-tempMin">10°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
