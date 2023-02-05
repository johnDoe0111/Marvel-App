import { useState } from "react";
import { useSelector } from "react-redux";
import "../styles/character-card.css";
import FixImg from "../images/fix.png";
import CharacterCardInfo from "./CharacterCardInfo";

const CharacterCard = () => {
  const [count, setCount] = useState(9);
  const showCards = () => {
    setCount(count + 3);
  };
  const [info, setInfo] = useState();
  const handleClick = (card) => {
    setInfo(card);
  };
  const cards = useSelector((state) => state.cards);
  if (!cards || !cards.length) {
    return <p className="absence-cards">no cards</p>;
  } else {
    return (
      <div className="general-wrapper">
        <div className="cards-wrapper">
          <div className="map-div">
            {cards.slice(0, count).map((card) => (
              <div
                key={card.id}
                className={`${info?.id === card.id ? "click-card" : "card"}`}
                onClick={() => handleClick(card)}
              >
                <img
                  src={`${card.thumbnail?.path}.${card.thumbnail?.extension}`}
                  alt="error"
                />
                <p className="character-name">{card.name}</p>
              </div>
            ))}
          </div>
          <div className="info-div">
            <CharacterCardInfo info={info} />
          </div>
        </div>
        <img src={FixImg} alt="error" className="fixed-img" />
        <div className="load-more-btn-block">
          <button className="load-btn" onClick={showCards}>
            load more
          </button>
        </div>
      </div>
    );
  }
};

export default CharacterCard;
