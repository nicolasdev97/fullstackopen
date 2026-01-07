import { useState, useEffect } from "react";
import countriesData from "../services/countriesData";
import Search from "./Search";
import Countries from "./Countries";

function App() {
  const [countries, setCountries] = useState([]);
  const [filter, setFilter] = useState("");

  // Get all countries data from the API

  useEffect(() => {
    countriesData.get().then((response) => {
      setCountries(response.data);
    });
  }, []);

  const filteredCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <Search filter={filter} setFilter={setFilter} />
      <Countries filteredCountries={filteredCountries} />
    </>
  );
}

export default App;
