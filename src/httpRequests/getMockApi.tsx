import axios from "axios";

const getMock = () => {
  return axios.get(
    'https://httpbin.org/get'
  );
};

export default getMock;
