import { useState } from "react";
import sliderImg from "../assets/slider.png";
import checkBox from "../assets/checkBox.png";
import "./styles/settings.css";

const Settings = () => {
  const [slider, setSlider] = useState(75);
  const [checked, setChecked] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  const handleCheck = (index) => {
    setChecked((prev) => {
      const newChecked = [...prev];
      newChecked[index] = !newChecked[index];
      return newChecked;
    });
  };
  const getSliderValue = (e) => {
    const sliderWidth = e.target.clientWidth;  // Get the width of the slider
    const newSliderValue = e.clientX - e.target.getBoundingClientRect().left; // Calculate relative to the slider's position
    // Ensure the value stays within the slider's range (0 to sliderWidth)
    const clampedValue = Math.max(0, Math.min(newSliderValue, sliderWidth - 20));
    setSlider(clampedValue);
  };
  const styles = [
    "Work Suits",
    "Night Out",
    "Sportswear",
    "Casual",
    "Work Suits",
    "Work Suits",
    "Eveningwear",
    "Mod",
  ];
  return (
    <div className="settings">
      <div className="settings-group">
        <button className="btn">Privacy</button>
        <button className="btn active">Stylists</button>
        <button className="btn">History</button>
      </div>
      <div className="settings-info">
        <h4>Stylists Distance</h4>
        <div className="sliderWrapper">
          <img src={sliderImg} alt="slider" onClick={getSliderValue} />
          <div className="dot" style={{ left: `${slider}px` }}></div>
          <p className="sliderText">
            <span>My Country Only</span>
            <span>Worldwide</span>
          </p>
        </div>
        <h4>Styles I like</h4>
        <div className="checkBoxGroup">
          {styles.map((style, i) => (
            <div
              key={i}
              onClick={() => handleCheck(i)}
              className="checkBoxWrapper"
            >
              <div className={`checkBox ${checked[i] && "active"}`}>
                {checked[i] && <img src={checkBox} alt="checked" />}
              </div>
              <p>{style}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Settings;
