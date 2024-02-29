function Track(props) {
  return (
    <div className="flex justify-between space-x-10 p-5 bg-emerald-700 rounded-xl mb-5">
      <div>
        <p className="mb-2 text-left">{props.songName}</p>
        <ul className="flex space-x-2 text-left text-xs">
          <li>{props.artist}</li>
          <li>|</li>
          <li>{props.albumName}</li>
        </ul>
      </div>
      <button className="text-l text-right">+</button>
    </div>
  );
}

export default Track;
