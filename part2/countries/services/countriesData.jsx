import axios from "axios";

const baseUrl = "https://studies.cs.helsinki.fi/restcountries/api/all";

const get = () => {
  return axios.get(baseUrl);
};

export default { get };
