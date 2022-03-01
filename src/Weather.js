import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city..."
              className="form-control"
            />
          </div>
          <div className="col-3">
            <input type="submit" value="Search" className="btn btn-warning" />
          </div>
        </div>
      </form>
      <h1>Portland</h1>
      <ul>
        <li>Monday 09:27</li>
        <li>Mostly Cloudy</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="partly cloudy icon"
          />
          54° F
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 24%</li>
            <li>Humidity: 90%</li>
            <li>Wind: 9 mph</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
