import loginImg from "../assets/loginImg.png";
import sizibleImg from "../assets/sizible.png";
import "./styles/homeTab.css";
const HomeTab = () => {
  return (
    <div className="tab homeTab">
      <div className="homeContainer">
        <div className="infoBox">
          <h3>You&apos;ll never buy the wrong size again.</h3>
          <p className="text">
            Sizible remembers your measurements and uses AI to match the correct
            garment.
          </p>
          <div className="loginImg">
            <img src={loginImg} alt="login" />
          </div>
          <div className="infoFootBox">
            <p className="footText">
              <span>Try it</span>
              <br />
              <span>for size</span>
            </p>
            <img src={sizibleImg} alt="sizible" />
          </div>
        </div>
        <div className="formContainer">
          <h3>Login / Signup</h3>
          <form>
            <div className="inputField">
              <input type="email" placeholder="Enter email address" />
            </div>
            <div className="inputField">
              <input type="password" placeholder="Password" />
            </div>
            <div className="formbtnGroup">
              <a href="#">Forgot Password?</a>
              <button type="submit" className="btn">
                Login
              </button>
            </div>
          </form>
          <div className="line"></div>
          <h3>Not a member? - Signup</h3>
          <button className="btn signup">Join Us</button>
        </div>
      </div>
    </div>
  );
};

export default HomeTab;
