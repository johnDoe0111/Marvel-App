import { useSelector } from "react-redux";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/comics-card.css";

const ComicsCard = () => {
  const comics = useSelector((state) => state.comics);
  const [count, setCount] = useState(8);
  const showCards = () => {
    setCount(count + 4);
  };
  if (!comics) {
    return <p>not comics</p>;
  }
  return (
    <div className="general-wrapper">
      <div className="comics-map-div">
        {comics.slice(0, count).map((comics) => (
          <div className="comics-card" key={comics.id}>
            <Link to={`/comics/${comics.id}`} className="comics-link">
              <img
                className="comics-img"
                src={`${comics.images[0]?.path}.${comics.images[0]?.extension}`}
                alt="error"
              />
              <p className="comics-title">{comics.title}</p>
            </Link>
            <p className="comics-price">{comics.prices[0].price}$</p>
          </div>
        ))}
      </div>
      <div className="load-more-comics-btn">
        <button className="comics-load-btn" onClick={showCards}>
          load more
        </button>
      </div>
    </div>
  );
};

export default ComicsCard;
