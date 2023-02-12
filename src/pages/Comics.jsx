import "../styles/comics.css";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import ComicsCard from "../components/ComicsCard";
import Avengers from "../images/Avengers.png";
import AvengersLogo from "../images/Avengers-logo.png";
import { baseUrl } from "../constants";

const Comics = () => {
  const dispatch = useDispatch();
  const url = `${baseUrl}/comics?orderBy=modified&limit=16&apikey=51f502f53348b5a218887333707c8a5b`;
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
