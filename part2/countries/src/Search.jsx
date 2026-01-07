const Search = ({ filter, setFilter }) => {
  return (
    <div>
      <p>
        find countries:{" "}
        <input value={filter} onChange={(e) => setFilter(e.target.value)} />
      </p>
    </div>
  );
};

export default Search;
