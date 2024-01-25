import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";

import "./App.css";
import getResponse from "./httpRequests/getMockApiData";

type CityData = {
  coord: {
    lon: number;
    lat: number;
  };
  weather: [
    {
      id: number;
      main: string;
      description: string;
      icon: string;
    }
  ];
  base: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
    sea_level: number;
    grnd_level: number;
  };
  visibility: number;
  wind: {
    speed: number;
    deg: number;
    gust: number;
  };
  rain: {
    "1h": number;
  };
  clouds: {
    all: number;
  };
  dt: number;
  sys: {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  id: number;
  name: string;
  cod: number;
};
function App() {
  let city = "Paris";
  const [cityData, setCityData] = useState<CityData | null>(null);

  useEffect(() => {
    getResponse()
    .then((res) => {
      // // console.log('Current Weather RES', res)
      // if (res.status === 200) {
      //   setCityData({ ...res.data, name: city });
      // }
      console.log('MockData', res)
      if (res.status === 200) {
        city = res.data;
      }
    })
    .catch(function (error) {
      console.log(error);
    });
  }, []);

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Welcome to my React World!</h1>
      <h3>{city}</h3>
      {/* {cityData && <h2>{`${Math.round(cityData.main.temp)}°C`}</h2>} */}
    </>
  );
}

export default App;
