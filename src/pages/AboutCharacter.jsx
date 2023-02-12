import "../styles/about-character.css";
import Avengers from "../images/Avengers.png";
import AvengersLogo from "../images/Avengers-logo.png";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { baseUrl } from "../constants";

const AboutCharacters = () => {
  const dispatch = useDispatch();
  const aboutCharacters = window.location.pathname;
  const url = `${baseUrl}${aboutCharacters}?apikey=51f502f53348b5a218887333707c8a5b`;
  const characterInfo = useSelector((state) => state.characterInfo);
  const fetchApi = async () => {
    const response = await fetch(url);
    const api = await response.json();
    dispatch({
      type: "GET_CHARACTER_INFO",
      payload: api.data.results[0],
    });
  };

  useEffect(() => {
    fetchApi();
  }, []);

  if (!characterInfo) {
    return <p>not info</p>;
  }
  return (
    <>
      <div className="about-block">
        <div className="about-first-block">
          <img src={Avengers} alt="error" />
          <p className="about-first-block-text">
            New comics every week! <br /> Stay tuned!
          </p>
        </div>
        <div className="about-second-block">
          <img src={AvengersLogo} alt="error" />
        </div>
      </div>
      <div className="character-block">
        <img
          className="character-img"
          src={`${characterInfo.thumbnail?.path}.${characterInfo.thumbnail?.extension}`}
          alt="error"
        />
        <div className="character-info">
          <div className="about-character-name">{characterInfo.name}</div>
          <p className="about-character-desc">{characterInfo.description}</p>
        </div>
      </div>
    </>
  );
};

export default AboutCharacters;
