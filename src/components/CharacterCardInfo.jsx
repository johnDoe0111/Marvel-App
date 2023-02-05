import { Link } from "react-router-dom";
import "../styles/character-card-info.css";

const CharacterCardInfo = ({ info }) => {
  if (!info) {
    return (
      <div className="card-info-block">
        <p className="card-default-text">
          Please select a character to see information
        </p>
        <div className="info-second-block">
          <div className="info-round-block"></div>
          <div className="buttons-block">
            <div className="info-long-block"></div>
          </div>
        </div>
        <div className="wide-block"></div>
        <div className="wide-block"></div>
        <div className="wide-block"></div>
      </div>
    );
  }
  return (
    <div className="card-info-block">
      <p className={`${info ? `card-default-text-none` : `card-default-text`}`}>
        Please select a character to see information
      </p>
      <div className={`${info ? `info-block` : `info-second-block`}`}>
        <div
          className={`${
            info.thumbnail?.path ? `card-img` : "info-round-block"
          }`}
        >
          <img
            src={`${info.thumbnail?.path}.${info.thumbnail?.extension}`}
            alt="error"
          />
        </div>
        <div className="buttons-block">
          <div className={`${info.name ? "card-name" : `info-long-block`}`}>
            {info.name}
          </div>
          <Link className="info-first-btn" to={`/characters/${info.id}`}>
            homepage
          </Link>
          <Link className="info-second-btn" to={info.urls[1].url}>
            wiki
          </Link>
        </div>
      </div>
      <div className={`${info ? "wide-block-none" : "wide-block"}`}></div>
      <div className={`${info ? "wide-block-none" : "wide-block"}`}></div>
      <div className={`${info ? "wide-block-none" : "wide-block"}`}></div>
      <p className={`${info ? "info-description" : "text-none"}`}>
        {info.description}
      </p>
    </div>
  );
};

export default CharacterCardInfo;
