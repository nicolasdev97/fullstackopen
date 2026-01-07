import axios from "axios";

const baseUrl = "http://localhost:3001/persons";

const getAllPersons = () => {
  return axios.get(baseUrl);
};

const createPerson = (newPerson) => {
  return axios.post(baseUrl, newPerson);
};

export default { getAllPersons, createPerson };
