import "../styles/comics.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import ComicsCard from "../components/ComicsCard";
import Avengers from "../images/Avengers.png";
import AvengersLogo from "../images/Avengers-logo.png";

const Comics = () => {
  const dispatch = useDispatch();
  const url =
    "https://gateway.marvel.com:443/v1/public/comics?orderBy=modified&limit=16&apikey=51f502f53348b5a218887333707c8a5b";
  const fetchComics = async () => {
    const res = await fetch(url);
    const resApi = await res.json();
    dispatch({
      type: "SHOW_COMICS",
      payload: resApi.data.results,
    });
  };
  useEffect(() => {
    fetchComics();
  }, []);

  return (
    <>
      <div className="comics-nav">
        <p className="comics-nav-title">
          <span>Marvel</span> information portal
        </p>
        <div className="comics-links">
          <Link className="second-link" to="/">
            <h2>Characters /</h2>
          </Link>
          <Link className="second-link" to="/comics">
            <h2>Comics</h2>
          </Link>
        </div>
      </div>
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
      <div className="comics-wrapper">
        <ComicsCard />
      </div>
    </>
  );
};

export default Comics;
