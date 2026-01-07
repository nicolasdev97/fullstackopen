import CountryDetail from "./CountryDetail";
import CountryList from "./CountryList";

const Countries = ({ filteredCountries }) => {
  if (filteredCountries.length > 10) {
    return <p>Too many matches, specify another filter</p>;
  }

  if (filteredCountries.length > 1) {
    return <CountryList filteredCountries={filteredCountries} />;
  }

  if (filteredCountries.length === 1) {
    const country = filteredCountries[0];
    return <CountryDetail country={country} />;
  }
};

export default Countries;
