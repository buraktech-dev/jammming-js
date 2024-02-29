import Track from "./Track";

function Playlist() {
  return (
    <div className="flex flex-col">
      <div className="max-w-xs rounded overflow-hidden m-4">
        <input
          type="text"
          placeholder="Name your playlist..."
          className="rounded px-5 py-2.5 top-10 bg-emerald-700 w-full"
        />
        <button className="w-full">Create</button>
      </div>

      <div className="max-w-xs rounded overflow-hidden shadow-lg m-4">
        <Track />
      </div>
    </div>
  );
}

export default Playlist;
