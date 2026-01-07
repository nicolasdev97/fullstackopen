import CountryDetail from "./CountryDetail";

const CountryList = ({
  filteredCountries,
  selectedCountry,
  setSelectedCountry,
}) => {
  return (
    <div>
      {filteredCountries.map((country) => {
        if (selectedCountry && selectedCountry.cca3 === country.cca3) {
          return <CountryDetail key={country.cca3} country={country} />;
        } else {
          return (
            <p key={country.cca3}>
              {country.name.common}{" "}
              <button
                onClick={() => {
                  setSelectedCountry(country);
                  console.log(country);
                }}
              >
                Show
              </button>
            </p>
          );
        }
      })}
    </div>
  );
};

export default CountryList;
