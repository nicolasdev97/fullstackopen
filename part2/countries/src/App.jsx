import { useState, useEffect } from "react";
import countriesData from "../services/countriesData";
import Search from "./Search";
import Countries from "./Countries";

function App() {
  const [countries, setCountries] = useState([]);
  const [filter, setFilter] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(null);

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
      <h1>Country Finder</h1>
      <Search
        filter={filter}
        setFilter={setFilter}
        setSelectedCountry={setSelectedCountry}
      />
      {countries.length === 0 ? (
        <p>Loading data...</p>
      ) : (
        <Countries
          filteredCountries={filteredCountries}
          selectedCountry={selectedCountry}
          setSelectedCountry={setSelectedCountry}
        />
      )}
    </>
  );
}

export default App;
