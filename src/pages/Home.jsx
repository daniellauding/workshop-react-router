// TODO: Import necessary modules and data 
import { Link } from "react-router";
import songs from "../data/songs.json";

const Home = () => {
  // TODO: Implement logic to display the list of songs

   const songData = songs.songs;
  return (

    <main>
      <h1>Rolling Stones 500 Greatest Songs of all Time</h1>
      {/* TODO: Display the list of songs with links */}
      <ul className="song-list">
        {songData.map((song) => 
          <li key={song.rank} className="song-list__item">
            <Link to={`/songs/${song.title}`}>{song.title}</Link>
          </li>
        )}
      </ul>
      <Link to="/">Back to home</Link>
    </main>

  );
}

export default Home;
