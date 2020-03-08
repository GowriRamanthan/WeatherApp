import React from 'react';
const WeatherTile = ({ currentWeather }) => (
    <div className="tile tile-weather">
        <h2>{currentWeather.name} </h2>

        <div className="weather-detail">
            <span className={getWeatherIcon(currentWeather)}></span>
            <span className="weather-detail--temp">
                { Math.round((currentWeather.main.temp - 32) * 5 / 9) }
            </span>
            <span className="weather-degree">
                &#176;C
            </span>
            <span className = "weather-sunrise-sunset">
                Sunrise : { getTime(currentWeather.sys.sunrise)}
            </span>
            <span className = "weather-sunrise-sunset">
                Sunset : { getTime(currentWeather.sys.sunset)}
            </span>
            <span className = "weather-humidity">
                Humidity : { currentWeather.main.humidity}%
            </span>
        </div>
        <h3> { Math.round((currentWeather.main.temp_max - 32) * 5 / 9) }&#176;  / { Math.round((currentWeather.main.temp_min - 32) * 5 / 9) }&#176;  Feels like  { Math.round((currentWeather.main.feels_like - 32) * 5 / 9) }&#176; </h3>

        <style jsx>{`
            h2 {
              margin: 0 0 20px 0;
              font-weight: 100;
            }
            h3{
              margin : 107px 0 20px 0;
              font-weight: 100;
            }  
            .tile {
             padding: 20px;
            }  
           .weather-sunrise-sunset {
             float: left;
             padding-left: 30px;
             padding-bottom: 4px;
           } 
           .weather-humidity {
             float: left;
             padding-left: 60px;
             padding-bottom: 4px;
           }
           .weather-degree {
             float: left;
             padding: 7px;
             font-size: 1em;
           }
          
           .weather-detail--temp {
             float: left;
             font-size: 5em;
             font-weight: 100;
             line-height: 80px;
             opacity: 1;
           }
           
           .owi {
              float: left;
              margin-right: 20px;
           }
        `}</style>
    </div>

);


const getWeatherIcon = (currentWeather) => {
    return "owi-"+ currentWeather.weather[0].icon+" owi-5x owi";
};

const getTime = (unix_timestamp) => {
    const date = new Date(unix_timestamp * 1000);
    const hours = date.getHours();
    const minutes = "0" + date.getMinutes();
    return hours + ':' + minutes.substr(-2);
};

export default WeatherTile;
export {getWeatherIcon, getTime};



