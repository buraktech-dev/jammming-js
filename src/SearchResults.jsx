import Track from "./Track";

function SearchResults() {
  return (
    <div className="flex flex-col">
      <div className="max-w-xs rounded overflow-hidden shadow-lg m-4">
        <Track />
      </div>

      <div className="max-w-xs rounded overflow-hidden shadow-lg m-4">
        <Track />
      </div>
    </div>
  );
}

export default SearchResults;
