import PropTypes from "prop-types";
import Star from "../assets/star.svg";
import "./styles/overLay.css";
const OverLay = ({ text }) => {
  return (
    <div className="overLay">
      <div className="overLayWrapper">
        <div className="imageWrapper">
          <img src={Star} alt="star" />
          <div className="text">
            <p>
              {text === "on"
                ? "Sizible Suggestions Active"
                : "Sizible Suggestions Turned Off"}
            </p>
          </div>
        </div>
        <p className="statusText">{text}</p>
      </div>
    </div>
  );
};

export default OverLay;
OverLay.propTypes = {
  text: PropTypes.string,
};
