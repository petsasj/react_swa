import axios from "axios";

const getGeoCode = (city: string) => {
  return axios.get(
    `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=12e3f69744a88112869dee430f7af36a`
  );
};

export default getGeoCode;
