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
              autoFocus="on"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-warning w-100"
            />
          </div>
        </div>
      </form>
      <h1>Portland</h1>
      <ul>
        <li>Monday 09:27</li>
        <li>Mostly Cloudy</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <div className="clearfix">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
              alt="partly cloudy icon"
              className="float-left"
            />

            <span className="temperature">54</span>
            <span className="unit">° F</span>
          </div>
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
