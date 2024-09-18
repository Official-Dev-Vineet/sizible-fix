import { useState } from "react";
import homeBtn from "../assets/home.png";
import avatar1 from "../assets/avatar-1.png";
import avatar2 from "../assets/avtar-2.png";
import avatar3 from "../assets/avatar-3.png";
import avatar4 from "../assets/avatar-4.png";
import "./styles/tabber.css";
import HomeTab from "./HomeTab";
import Look from "./Look";
import Settings from "./Settings";
import Sizer from "./Sizer";
const Tabber = () => {
  const [activeTab, setActiveTab] = useState("sizer");
  return (
    <div className="tabber">
      <div className="tabberBtns">
        <button
          className={`btn ${activeTab === "home" && "active"}`}
          onClick={() => setActiveTab("home")}
        >
          <img src={homeBtn} alt="home" />
        </button>
        <button
          className={`btn ${activeTab === "sizer" && "active"}`}
          onClick={() => setActiveTab("sizer")}
        >
          Sizer
        </button>
        <button
          className={`btn ${activeTab === "look" && "active"}`}
          onClick={() => setActiveTab("look")}
        >
          Get the look
        </button>
        <button
          className={`btn ${activeTab === "settings" && "active"}`}
          onClick={() => setActiveTab("settings")}
        >
          Settings
        </button>
      </div>
      <div className="tabContainer">
        <div className="leftContainer">
          <span>Stylists</span>
          <div className="avatarWrapper">
            <img src={avatar1} alt="avatar" className="border" />
            <img src={avatar2} alt="avatar" className="border" />
            <img src={avatar3} alt="avatar" className="border" />
            <img src={avatar4} alt="avatar" className="border" />
            <div className="border">see all</div>
          </div>
        </div>
        <div className="rightContainer">
          {activeTab === "home" && <HomeTab />}
          {activeTab === "sizer" && <Sizer />}
          {activeTab === "look" && <Look />}
          {activeTab === "settings" && <Settings />}
        </div>
      </div>
    </div>
  );
};

export default Tabber;
