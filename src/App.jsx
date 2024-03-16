import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Charactere from "./Pages/CharacterPages/Character";
import Comics from "./Pages/ComicPages/Comics";
import CharactersDetail from "./Pages/CharacterPages/CharactersDetails";
import ComicsDetails from "./Pages/ComicPages/ComicsDetails";
import Footer from "./Components/Footer";
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Charactere />} />
        <Route path="/comics" element={<Comics />} />
        <Route path="/characters" element={<Charactere />} />
        <Route
          path="/characterdetail/:characterID"
          element={<CharactersDetail />}
        />
        <Route path="/comicsdetail/:comicID" element={<ComicsDetails />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
