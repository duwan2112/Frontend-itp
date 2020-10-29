import React from "react";
import {HomeHeaderStyled} from "./StyledHomePage";
import {Link} from "react-router-dom";
import laptop from "../../img/laptop-1.png";
import Particles from "react-particles-js";
export default function HomeHeader() {
  return (
    <HomeHeaderStyled>
      <Particles
        className="particles"
        params={{
          particles: {
            line_linked: {enable: false},
            number: {value: 100},
            density: {enable: true, value_area: 1000},
            size: {value: 1},
            color: {value: "#fff"},
          },
        }}
      />
      <div className="container-all">
        <div className="container-text">
          <h1>How developers work</h1>
          <p>
            Support your workflow with lightweight tools and features. Then work
            how you work best—we'll follow your lead.
          </p>
          <div className="container-button">
            <Link className="button" to="/login">
              {" "}
              Sign Up{" "}
            </Link>
            <Link className="button btn-white" to="/register">
              {" "}
              Register{" "}
            </Link>
          </div>
        </div>
        <div className="container-img">
          <img src={laptop} alt="" />
        </div>
      </div>
    </HomeHeaderStyled>
  );
}
