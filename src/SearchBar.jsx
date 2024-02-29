function SearchBar(props) {
  return (
    <div>
      <div className="flex justify-between space-x-3 mb-28">
        <input
          type="text"
          id="artistName"
          name="artistName"
          value={props.artistName}
          onChange={props.handleName}
          placeholder="Search for an artist..."
          className="rounded-full px-5 py-2.5 bg-emerald-700 w-full"
        ></input>
        <button onClick={() => props.handleSearch()} className="rounded-full">
          Search
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
