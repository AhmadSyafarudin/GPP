import React from "react";
import "./beranda.css";

//Animation
import { Fade } from "react-awesome-reveal";

//React-router
import { useNavigate } from "react-router-dom";

import Sukarame from "../../assets/Sukarame.jpeg";
import WayHuwi from "../../assets/Way Huwi.jpeg";

const Beranda = () => {
  const navigate = useNavigate();

  return (
    <section className="beranda" id="beranda">
      <Fade duration={2500}>
        <h2>KostHunt</h2>
      </Fade>

      <div className="container-section">
        <div className="location-wrap row justify-content-md-center">
          <div
            className="location col col-lg-3"
          >
            <h5>Way Hui</h5>
            <a target="_blank" rel="noreferrer" href="https://www.bing.com/maps?osid=c2bd355a-6d70-44f3-9dca-bc5084694a6e&cp=-5.354366~105.285623&lvl=15&v=2&sV=2&form=S00027">
              <img height="230" width="300" src={WayHuwi} alt=""/>
            </a>
          </div>

          <div
            className="location col col-lg-3"
          >
            <h5>Sukarame</h5>
            <a target="_blank" rel="noreferrer" href="https://www.bing.com/maps?osid=91d9d240-0b03-44bb-9a1c-28e21e1fe083&cp=-5.382866~105.278061&lvl=14&v=2&sV=2&form=S00027">
              <img height="230" width="300" src={Sukarame} alt=""/>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Beranda;
