import Track from "./Track";

function Playlist(props) {
  return (
    <div className="">
      <h1 className="mb-5">New playlist</h1>
      <div className="mb-5 flex justify-between space-x-2">
        <input
          type="text"
          name="playlistName"
          value={props.playlistName}
          onChange={props.handlePLName}
          placeholder="Name your playlist..."
          className="rounded px-5 py-2.5 bg-emerald-700 w-full"
        />
        <button>Create</button>
      </div>
      <h1 className="text-left text-xl mb-5">{props.playlistName}</h1>
      {props.playlist.map((song) => {
        return (
          <div>
            <Track
              songName={song.name}
              albumName={song.album}
              artist={song.artist}
              id={song.id}
              handleSong={props.removeSong}
              playlist={props.playlist}
            />
          </div>
        );
      })}
    </div>
  );
}

export default Playlist;
