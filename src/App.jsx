import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Charactere from "./Pages/CharacterPages/Character";
import Home from "./Pages/HomePage/Home";
import Comics from "./Pages/ComicPages/Comics";
import CharactersDetail from "./Pages/CharacterPages/CharactersDetails";
import ComicsDetails from "./Pages/ComicPages/ComicsDetails";
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/comics" element={<Comics />} />
        <Route path="/characters" element={<Charactere />} />
        <Route
          path="/characterdetail/:characterID"
          element={<CharactersDetail />}
        />
        <Route path="/comicsdetail/:comicID" element={<ComicsDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
