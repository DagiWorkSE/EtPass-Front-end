import "../styles/homePageStyles.css";
import ethiopia from '../assets/ethiopia.png';
import passport from '../assets/passport.png';
import Signupmodal from "./Signupmodal";
import { Link } from "react-router-dom";
import Resetpassword from "./Resetpassword"
import CheckStatusWithoutLogin from "./CheckaStatusWithoutLogin";




const Intro = () => {
  return (
<section className="hero">
  <div className="container ">
    <div className="row">
      <div className="col-md-6">
      
        <div className="hero-content hero-hero-text">
          <h1 className="display-4">We Make Dreams <br />Come True!</h1>

        <div className="text-hero-regular">
            Apply For your Ethiopian passport and <br /> other services
          </div>   
        </div>
      
              <button className="hero-butn"><Signupmodal/> </button>
          
      </div>
      <div className="col-md-6 d-none d-md-block">
        <div className="hero-image">
        <img className="ethiopia" src={ethiopia} alt="ethiopia" />
        <img className="passport" src={passport} alt="passport" />
        </div>
      </div>
    </div>
  </div>
</section>

  );
};

export default Intro;
