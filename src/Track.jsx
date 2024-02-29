function Track() {
  return (
    <div className="flex justify-start space-x-10 p-5 bg-emerald-700 rounded-xl">
      <div>
        <p className="mb-2 text-left">Lose Yourself</p>
        <ul className="flex space-x-2 text-left">
          <li>Eminem</li>
          <li> | </li>
          <li>Pups Album</li>
        </ul>
      </div>
      <button className="text-xl">+</button>
    </div>
  );
}

export default Track;
