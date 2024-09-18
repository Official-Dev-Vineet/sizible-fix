import { useState, useRef } from "react";
import HumanBody from "../assets/humanBody.png";
import "./styles/sizer.css";

const Sizer = () => {
  const sizer = [
    {
      name: "Neck",
      options: [14, 14.5, 15, 15.5, 16, 16.5, 17, 17.5, 18],
      type: "inches",
    },
    {
      name: "Shoulder",
      options: [33, 35, 37, 39, 41, 43, 45, 47, 49],
      type: "cm",
    },
    {
      name: "Arms",
      options: [73, 75, 77, 79, 81, 83, 85, 87, 89],
      type: "cm",
    },
    {
      name: "Leg",
      options: [73, 75, 77, 79, 81, 83, 85, 87, 89],
      type: "cm",
    },
    {
      name: "Height",
      options: [61, 63, 65, 67, 69, 71, 73, 75, 77],
      type: "cm",
    },
    {
      name: "Chest",
      options: [56, 57, 58, 59, 60, 61, 62, 63, 64],
      type: "cm",
    },
    {
      name: "Waist",
      options: [67, 69, 71, 73, 75, 77, 79, 81, 83],
      type: "cm",
    },
    {
      name: "Hips",
      options: [61, 63, 65, 67, 69, 71, 73, 75, 77],
      type: "cm",
    },
    {
      name: "Shoes",
      options: [3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5],
      type: "UK",
    },
  ];

  // State for height
  const [height, setHeight] = useState(67); // Default height value
  const [isDragging, setIsDragging] = useState(false);

  // State to store the selected values for each measurement
  const [selectedSizes, setSelectedSizes] = useState({
    Neck: '',
    Shoulder: '',
    Arms: '',
    Leg: '',
    Height: '',
    Chest: '',
    Waist: '',
    Hips: '',
    Shoes: ''
  });

  // Refs for select elements
  const selectRefs = useRef([]);

  // Function to handle dropdown selection change
  const handleSelectChange = (e, name, index) => {
    setSelectedSizes((prevSizes) => ({
      ...prevSizes,
      [name]: e.target.value
    }));

    // Move focus to the next select element if it exists
    if (selectRefs.current[index + 1]) {
      selectRefs.current[index + 1].focus();
    }
  };

  // Function to handle slider movement
  const handleHeightSlider = (e) => {
    const slider = e.target.getBoundingClientRect();
    const sliderHeight = slider.height; // Get slider height
    const clickY = e.clientY - slider.top; // Get relative click position from top
    const newHeight = Math.round((1 - clickY / sliderHeight) * (77 - 61) + 61); // Map to height range (61-77 cm)

    setHeight(Math.max(61, Math.min(newHeight, 77))); // Clamp height between 61 and 77 cm
  };

  const startDragging = () => {
    setIsDragging(true);
  };

  const stopDragging = () => {
    setIsDragging(false);
  };

  const onDrag = (e) => {
    if (isDragging) {
      handleHeightSlider(e);
    }
  };

  return (
    <div className="sizer">
      <h3>Set your perfect fit</h3>
      <div className="sizerWrapper">
        <div className="sizeUnits">
          {sizer
            .filter((_, index) => index <= 3)
            .map((item, index) => (
              <div className="sizerItem" key={index}>
                <h4>{item.name}</h4>
                <select
                  className="sizerOptions"
                  value={selectedSizes[item.name]} // Set selected value
                  onChange={(e) => handleSelectChange(e, item.name, index)} // Handle change
                  ref={(el) => (selectRefs.current[index] = el)} // Set ref
                >
                  <option disabled value="">
                    Select
                  </option>
                  {item.options.map((option, index) => (
                    <option className="sizerOption" key={index} value={option}>
                      {item.type === "inches"
                        ? `${option} ''`
                        : item.type === "cm"
                        ? `${option} cm`
                        : `${option} UK`}
                    </option>
                  ))}
                </select>
              </div>
            ))}
        </div>
        <div className="bodyContainer">
          <div className="bodyImgWrapper">
            <img src={HumanBody} alt="human body" />
            <div className="part active neck"></div>
            <div className="part shoulder"></div>
            <div className="part arms"></div>
            <div className="part leg"></div>
            <div className="part chest"></div>
            <div className="part waist"></div>
            <div className="part hips"></div>
            <div className="part shoes"></div>
          </div>
          <div
            className="heightSlider"
            onClick={handleHeightSlider}
            onMouseMove={onDrag}
            onMouseDown={startDragging}
            onMouseUp={stopDragging}
            onMouseLeave={stopDragging}
          >
            <span
              className="dot"
              style={{
                top: `${((77 - height) / (77 - 61)) * 100}%`, // Adjust position for vertical
                position: "absolute",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "15px",
                height: "15px",
                borderRadius: "50%",
              }}
            ></span>
          </div>
          <button className="btn">Apply</button>
        </div>
        <div className="sizeUnits">
          {sizer
            .filter((_, index) => index > 3)
            .map((item, index) => (
              <div className="sizerItem" key={index}>
                <h4>{item.name}</h4>
                <select
                  className="sizerOptions"
                  value={selectedSizes[item.name]} // Set selected value
                  onChange={(e) => handleSelectChange(e, item.name, index + 4)} // Handle change and shift index
                  ref={(el) => (selectRefs.current[index + 4] = el)} // Set ref
                >
                  <option disabled value="">
                    Select
                  </option>
                  {item.options.map((option, index) => (
                    <option className="sizerOption" key={index} value={option}>
                      {item.type === "inches"
                        ? `${option} ''`
                        : item.type === "cm"
                        ? `${option} cm`
                        : `${option} UK`}
                    </option>
                  ))}
                </select>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Sizer;
