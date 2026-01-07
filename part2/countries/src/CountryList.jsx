const CountryList = ({ filteredCountries }) => {
  return (
    <div>
      {filteredCountries.map((country) => (
        <p key={country.cca3}>{country.name.common}</p>
      ))}
    </div>
  );
};

export default CountryList;
