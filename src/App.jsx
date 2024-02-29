import { useState } from "react";

import "./App.css";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";
import Playlist from "./Playlist";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <SearchBar />
        <div className="flex flex-wrap justify-center">
          <SearchResults />
          <Playlist />
        </div>
      </div>
    </>
  );
}

export default App;
