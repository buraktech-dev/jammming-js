import Track from "./Track";

function SearchResults(props) {
  return (
    <div className="">
      <h1 className="mb-5">Results</h1>
      {props.searchResults.map((song) => {
        return (
          <div className="">
            <Track
              songName={song.name}
              albumName={song.album}
              artist={song.artist}
            />
          </div>
        );
      })}
    </div>
  );
}

export default SearchResults;
