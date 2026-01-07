const Search = ({ filter, setFilter, setSelectedCountry }) => {
  return (
    <div>
      <p>
        Find countries:{" "}
        <input
          value={filter}
          onChange={(e) => {
            setFilter(e.target.value);
            setSelectedCountry(null);
          }}
        />
      </p>
    </div>
  );
};

export default Search;
