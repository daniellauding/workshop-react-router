// TODO: Import necessary modules and data
import { Link, useParams } from "react-router";
import songs from "../data/songs.json";

// TODO: Destrcutrue props to receive information coming in from the parent comp
const SongInfo = () => {
  // TODO: Use the song title from the props to find the corresponding song data from the json file

// ! ||--------------------------------------------------------------------------------||
// ! ||                                      Woho                                      ||
// ! ||--------------------------------------------------------------------------------||

  const { title } = useParams();
  const params = useParams();
  const songsData = songs.songs;

  console.log("songsMappin", songsData);  
   
  const matchingSong = songsData.find((song) => song.title === params.title) // this works
  console.log(matchingSong);

  // Nice ser ut att fungera

  return (
    <>
      <h2>Song Information</h2>
      <div className="song-card">
        <h3>{matchingSong.title}</h3>
        <h4>{matchingSong.artist}</h4>
        <p>{matchingSong.album} {matchingSong.ye}</p>
        

        <Link to="/">Back to home</Link>
        
      </div>
    </>
  );
}

export default SongInfo;
