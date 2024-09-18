import PropTypes from "prop-types";
import Arrow from "../assets/backArrow.svg";
import "./styles/sizible.css";
import { useLayoutEffect, useState } from "react";
import OverLay from "./OverLay";
import Tabber from "./Tabber";
const Sizible = ({ text }) => {
  const [activeBtn, setActiveBtn] = useState("off");
  const [overLay, setOverLay] = useState(false);
  const [isOverLayOpen, setIsOverLayOpen] = useState(false);
  useLayoutEffect(() => {
    setOverLay(true);
    const timer = setTimeout(() => {
      setOverLay(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, [activeBtn]);

  return (
    <section className="sizible">
      <div className={`tabBtn ${isOverLayOpen && "active"}`}>
        <button
          className="btn openBtn"
          onClick={() => setIsOverLayOpen(!isOverLayOpen)}
        >
          <img src={Arrow} alt="open" />
          {isOverLayOpen ? "Close" : "Open"}
        </button>
        <span className="sizibleText">{text}</span>
        <div className="toggleBtns">
          <button
            className={`btn ${activeBtn === "on" && "active"}`}
            onClick={() => setActiveBtn("on")}
          >
            on
          </button>
          <button
            className={`btn ${activeBtn === "off" && "active"}`}
            onClick={() => setActiveBtn("off")}
          >
            off
          </button>
        </div>
      </div>
      {
        isOverLayOpen && <Tabber />
      }
      {overLay && <OverLay text={activeBtn} />}
    </section>
  );
};

export default Sizible;

Sizible.propTypes = {
  text: PropTypes.string.isRequired,
};
