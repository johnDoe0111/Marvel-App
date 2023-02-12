import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import "../styles/characters.css";
import { Link } from "react-router-dom";
import Decoration from "../images/Decoration.png";
import CharacterCard from "../components/CharacterCard";
import { baseUrl } from "../constants";

const Characters = () => {
  const [info, setInfo] = useState("");
  const [random, setRandom] = useState("");
  const dispatch = useDispatch();
  const url = `${baseUrl}/characters?limit=15&apikey=51f502f53348b5a218887333707c8a5b`;
  const fetchApi = async () => {
    const res = await fetch(url);
    const resApi = await res.json();
    setInfo(resApi.data.results[1]);
    setRandom(resApi.data.results);
    dispatch({
      type: "SHOW_CARDS",
      payload: {
        label: resApi.data.results,
      },
    });
  };
  useEffect(() => {
    fetchApi();
  }, []);
  const handleClick = () => {
    const randomIndex = Math.floor(Math.random() * (random.length - 1));
    const result = random[randomIndex];
    setInfo(result);
  };
  if (!info) {
    return <></>;
  }
  return (
    <div>
      <div className="random-character">
        <div className="random-first-block">
          <div className="random-first-block-img">
            <img
              src={`${info.thumbnail?.path}.${info.thumbnail?.extension}`}
              alt="error"
            />
          </div>
          <div className="random-first-block-info">
            <p className="character-nam">{info.name}</p>
            <p className="character-description">{info.description}</p>
            <div className="random-first-block-buttons">
              <Link className="random-first-btn" to={`/characters/${info.id}`}>
                homepage
              </Link>
              <Link className="random-second-btn" to={info.urls[1].url}>
                wiki
              </Link>
            </div>
          </div>
        </div>
        <div className="random-second-block">
          <img src={Decoration} alt="error" />
          <p className="random-second-block-first-text">
            Random character for today! <br /> Do you want to get to know him
            better?
          </p>
          <p className="random-second-block-second-text">
            Or choose another one
          </p>
          <button onClick={handleClick} className="red-btn">
            try it
          </button>
        </div>
      </div>
      <div className="main-wrapper">
        <CharacterCard />
      </div>
    </div>
  );
};

export default Characters;
