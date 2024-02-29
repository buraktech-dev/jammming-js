function SearchBar() {
  return (
    <div className="flex justify-center ">
      <div className="absolute top-10">
        <input
          type="text"
          placeholder="Search for a keyword..."
          className="rounded-full px-5 py-2.5 w-96 top-10 m-2 bg-emerald-700"
        />
        <button className="rounded-full top-10 w-36 m-2">Search</button>
      </div>
    </div>
  );
}

export default SearchBar;
