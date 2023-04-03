import React from "react";
import "../styles/ForecastDetails.css";

function ForecastDetails({ forecast }) {
  return (
    <div className="forecast-details">
      <div className="forecast-details__date">
        {new Date(forecast.date).toDateString()}
      </div>
      <div className="forecast-details__temperature-max">
        Max Temperature: {forecast.temperature.max}
        &deg;C
      </div>
      <div className="forecast-details__temperature-min">
        Min Temperature: {forecast.temperature.min}
        &deg;C
      </div>
      <div className="forecast-details__humidity">
        Humidity: {forecast.humidity}
      </div>
      <div className="forecast-details__wind-speed">
        Wind Speed: {forecast.wind.speed}
      </div>
      <div className="forecast-details__wind-direction">
        Wind Direction: {forecast.wind.direction}
      </div>
    </div>
  );
}

export default ForecastDetails;
