import "../styles/App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import Characters from "../pages/Characters";
import Comics from "../pages/Comics";
import AboutCharacters from "../pages/AboutCharacter";
import AboutComics from "../pages/AboutComics";
import { Link } from "react-router-dom";


const navLinks = [
  { to: '/Marvel-App', name: 'Characters'},
  { to: '/comics', name: 'Comics'},
]

function App() {
  const {pathname} = useLocation()
  return (
    <div className="App">
      <div className="header-nav">
        <p className="header-nav-title">
          <span>Marvel</span> information portal
        </p>
        <div className="header-links">
          {navLinks.map(item => (
            <>
              <Link to={item.to} key={item.name} className={`links ${item.to === pathname && 'active-link'}`}>{item.name}</Link>
            </>
          ))}
        </div>
      </div>
      <Routes>
        <Route path="/Marvel-App" element={<Characters />} />
        <Route path="/comics" element={<Comics />} />
        <Route path="/characters/:id" element={<AboutCharacters />} />
        <Route path="/comics/:id" element={<AboutComics />} />
      </Routes>
    </div>
  );
}

export default App;
