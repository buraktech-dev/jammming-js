import { useEffect, useState } from "react";

import "./App.css";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";
import Playlist from "./Playlist";
import PreviousMap from "postcss/lib/previous-map";

function App() {
  const [token, setToken] = useState("");
  const [artistID, setArtistID] = useState("");
  const [artistName, setArtistName] = useState("");
  const [topSongs, setTopSongs] = useState([]);
  const [playlist, setPlaylist] = useState([]);
  const [playlistName, setplaylistName] = useState("");

  // Fetching the access-token upon launch (token is valid for 1 hour)
  useEffect(() => {
    getToken();
  }, []);

  useEffect(() => {
    getArtistID();
  }, [artistName]);

  const getToken = async () => {
    try {
      const tokenResponse = await fetch(
        "https://accounts.spotify.com/api/token",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body:
            "grant_type=client_credentials&client_id=" +
            CLIENTID +
            "&client_secret=" +
            CLIENTSECRET,
        }
      );

      if (tokenResponse.ok) {
        const jsonResponse = await tokenResponse.json();
        setToken(jsonResponse.access_token);
        console.log("Token: " + token);
      } else {
        throw new Error("Failed to fetch token");
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Fetching the artist ID for further API-calls
  const getArtistID = async () => {
    try {
      const artistIDresponse = await fetch(
        "https://api.spotify.com/v1/search?q=" + artistName + "&type=artist",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (artistIDresponse.ok) {
        const jsonResponse = await artistIDresponse.json();
        setArtistID(jsonResponse.artists.items[0].id);
      } else {
        throw new Error("Failed to fetch artist ID");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleName = (event) => {
    event.preventDefault();
    setArtistName(event.target.value);
    console.log("Current name: " + artistName);
  };

  const handlePLName = (event) => {
    event.preventDefault();
    setplaylistName(event.target.value);
  };

  const handleSearch = async () => {
    setTopSongs([]);
    console.log("ArtistID: " + artistID);
    await searchArtist();
  };

  // Fetching artists songs
  const searchArtist = async () => {
    try {
      console.log("ArtistID before songfetch: " + artistID);
      const artistResponse = await fetch(
        "https://api.spotify.com/v1/artists/" + artistID + "/top-tracks",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (artistResponse.ok) {
        const artistJsonResponse = await artistResponse.json();
        console.log("SONGS HOLEN");
        for (let i = 0; i < artistJsonResponse.tracks.length; i++) {
          console.log(artistJsonResponse.tracks[i].id);
          setTopSongs((prev) => [
            ...prev,
            {
              name: artistJsonResponse.tracks[i].name,
              artist: artistJsonResponse.tracks[i].album.artists[0].name,
              album: artistJsonResponse.tracks[i].album.name,
              id: artistJsonResponse.tracks[i].id,
            },
          ]);
        }

        console.log(topSongs);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Adds songs to playlist
  const addToPlaylist = (track) => {
    let inPlaylist = false;
    for (let i = 0; i < playlist.length; i++) {
      if (playlist[i].id === track.id) {
        inPlaylist = true;
      }
    }
    if (!inPlaylist) {
      setPlaylist((prev) => [...prev, track]);
    } else {
      alert("Song already in playlist!");
    }
  };

  // Adds songs to playlist
  const removeFromPlaylist = (track) => {
    setPlaylist(playlist.filter((song) => track.id !== song.id));
    console.log(playlist);
  };

  return (
    <div>
      <SearchBar
        handleName={handleName}
        handleSearch={handleSearch}
        artistName={artistName}
      />
      <div className="flex flex-wrap justify-center space-x-10">
        <div>
          <SearchResults searchResults={topSongs} addSong={addToPlaylist} />
        </div>

        <Playlist
          playlist={playlist}
          removeSong={removeFromPlaylist}
          handlePLName={handlePLName}
          playlistName={playlistName}
        />
      </div>
    </div>
  );
}

export default App;
