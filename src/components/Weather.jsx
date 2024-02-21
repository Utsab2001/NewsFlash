import React, { useState, useEffect } from "react";

const Weather = () => {
  const [current, setCurrent] = useState({});
  const [forecast, setForecast] = useState({});
  const API_KEY = "cade3e429711499681b190434240402";
  const [URL, setURL] = useState(
    `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=kolkata&aqi=yes&days=5`
  );
    const array1 = [
      0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
      21, 22, 23,
    ];
    const fetchWeather = async () => {
      let url = URL;
      try {
        let data = await fetch(url);
        if (data.ok) {
          let parseData = await data.json();
          setCurrent(parseData.current);
          setForecast(parseData.forecast);
          console.log(current);
        } else {
          console.error("Something went wrong while fetching weather data:", data.status);
        }
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };
    useEffect(() => {
      fetchWeather();
    }, []);
  return (
    <>
      {forecast && forecast.forecastday && forecast.forecastday[0] && (
        <>
          <div
            className="w-full rounded-xl h-60 gap-3 flex flex-col p-3 text-white"
            style={{
              backgroundImage:
                "url(https://images.pexels.com/photos/1154510/pexels-photo-1154510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)",
            }}
          >
            <p className="text-xs font-semibold">Kolkata</p>
            <div className="flex justify-between items-center">
              <div className="left flex items-center">
                <h2 className="text-3xl font-bold">
                  {current.temp_c}°c
                  {/* {forecast.forecastday[0].day.maxtemp_c}°c */}
                </h2>
                <img src={forecast.forecastday[0].day.condition.icon} alt="" />
              </div>
              <div className="right flex flex-col gap-2 text-xs items-center">
                <p>Mostly Clean</p>
                <div className="flex justify-between">
                  <p>{current.humidity}%</p>
                  <p>{current.pressure_mb}hPa</p>
                </div>
              </div>
            </div>
            <div
              className="flex flex-col justify-center overflow-y-hidden overflow-x-scroll no-scrollbar h-24"
            >
              <div className="flex gap-4 justify-between">
                {array1.map((item) => {
                  // Check if forecast and forecastday exist and have length > 0
                  if (
                    forecast &&
                    forecast.forecastday &&
                    forecast.forecastday.length > 0
                  ) {
                    // Check if forecastday[0].hour[item] exists
                    const hourData = forecast.forecastday[0].hour[item];
                    if (hourData) {
                      return (
                        <div
                          className="flex text-xs px-5 py-2 rounded-lg gap-2 flex-col items-center"
                          style={{ backgroundColor: "rgba(48, 58, 58, 0.7)" }}
                        >
                          <p className="">{hourData.time.substring(11)}</p>
                          <img src={hourData.condition.icon} alt="" className=""/>
                          <p className="">{hourData.temp_c}°</p>
                        </div>
                      );
                    } else {
                      // If hourData doesn't exist, return null or a placeholder
                      return null; // or return a placeholder div
                    }
                  } else {
                    // If forecast data is not available, return null or a loading indicator
                    return null; // or return a loading indicator
                  }
                })}
              </div>
            </div>
            {/* <div className="left flex "></div>
        <div className="right"></div> */}
          </div>
        </>
      )}
    </>
  );
};

export default Weather;
