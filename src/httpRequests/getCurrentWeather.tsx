import axios from "axios";

const getCurrentWeather = (lat: string, lon: string) => {
  return axios.get(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=12e3f69744a88112869dee430f7af36aχχψ`
  );
};

export default getCurrentWeather;
