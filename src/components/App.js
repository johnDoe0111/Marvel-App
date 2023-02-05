import "../styles/App.css";
import { Route, Routes } from "react-router-dom";
import Characters from "../pages/Characters";
import Comics from "../pages/Comics";
import AboutCharacters from "../pages/AboutCharacter";
import AboutComics from "../pages/AboutComics";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Characters />} />
        <Route path="/comics" element={<Comics />} />
        <Route path="/characters/:id" element={<AboutCharacters />} />
        <Route path="/comics/:id" element={<AboutComics />} />
      </Routes>
    </div>
  );
}

export default App;
