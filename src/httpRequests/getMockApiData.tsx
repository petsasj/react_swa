import axios from "axios";

const getResponse = () => {
  return axios.get(
    '/api/WeatherApiMock'
  );
};

export default getResponse;
