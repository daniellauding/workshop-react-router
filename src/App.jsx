// TODO: Import necessary modules and data
import { BrowserRouter, Routes, Route } from "react-router";
// import songs from "./data/songs.json";
import Home from "./pages/Home";
import SongInfo from "./pages/SongInfo";

// https://reactrouter.com/api/declarative-routers/Router
  // TODO: Set up the two routes. One for the list of songs, one for the song details
export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Cant have props here, good to know */}
          <Route path="/" element={<Home />}/>
          <Route path="/songs/" element={<SongInfo />}/>
          <Route path="/songs/:title" element={<SongInfo />}/>
        </Routes>
     
       </BrowserRouter>
    </>
  )
}
