import Track from "./Track";

function SearchResults(props) {
  return (
    <div>
      <h1 className="mb-5">Results</h1>
      {props.searchResults.map((song) => {
        return (
          <div>
            <Track
              songName={song.name}
              albumName={song.album}
              artist={song.artist}
              handleSong={props.addSong}
              id={song.id}
            />
          </div>
        );
      })}
    </div>
  );
}

export default SearchResults;
