import stepImg1 from "../assets/step-1.png";
import stepImg2 from "../assets/step-2.png";
import appStore from "../assets/appStore.png";
import googlePlay from "../assets/googlePlay.png";
import "./styles/look.css";

const Look = () => {
  return (
    <div className="look">
      <h3>Get the look you want</h3>
      <p>Book stylists for 1-to-1 shopping trips.</p>
      <div className="imageWrapper">
        <img src={stepImg1} alt="step-1" />
        <img src={stepImg2} alt="step-2" />
      </div>
      <div className="appInfo">
        <span>Download App</span>
        <p>
          <b>available on</b>
          <div className="stores">
            <img src={appStore} alt="appStore" />
            <img src={googlePlay} alt="googlePlay" />
          </div>
        </p>
      </div>
    </div>
  );
};

export default Look;
