import Track from "./Track";

function Playlist() {
  return (
    <div className="">
      <h1 className="mb-5">New playlist</h1>
      <div className="mb-5 flex justify-between space-x-2">
        <input
          type="text"
          placeholder="Name your playlist..."
          className="rounded px-5 py-2.5 bg-emerald-700"
        />
        <button>Create</button>
      </div>

      <div className="">
        <Track />
      </div>
    </div>
  );
}

export default Playlist;
