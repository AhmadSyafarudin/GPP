import React from "react";
import "./beranda.css";

//Animation
import { Fade } from "react-awesome-reveal";

//React-router
import { useNavigate } from "react-router-dom";

const Beranda = () => {
  const navigate = useNavigate();

  return (
    <section className="beranda" id="beranda">
      <Fade duration={2500}>
        <h2>KostHunt</h2>
      </Fade>

      <div className="container-section">
        <div className="location-wrap">
          <div
            className="location"
            onClick={() => {
              navigate("/properti");
            }}
          >
            <h5>Ryacudu</h5>
          </div>

          <div
            className="location"
            onClick={() => {
              navigate("/properti");
            }}
          >
            <h5>Way Hui</h5>
          </div>

          <div
            className="location"
            onClick={() => {
              navigate("/properti");
            }}
          >
            <h5>Sukarame</h5>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Beranda;
