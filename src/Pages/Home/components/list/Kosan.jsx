import React from "react";
import "./Kosan.css";

//Animation
import { Fade, Zoom } from "react-awesome-reveal";

//Assets
import IMG1 from "../../assets/image 2.png";
import IMG2 from "../../assets/image 3.png";
import IMG3 from "../../assets/image 4.png";

const Kosan = () => {
  return (
    <section className="produk" id="produk">
      <div className="container-section">
        <Fade direction="down" triggerOnce>
          <h2 className="title">Daftar Kosan</h2>
        </Fade>

        <div className="house-wrap">
          <Zoom delay={500} cascade triggerOnce>
            <div className="house">
              <img src={IMG1} alt="" className="house-img" />
              <h6>Kosan Melati</h6>
              <small>3x4</small>
            </div>

            <div className="house">
              <img src={IMG2} alt="" className="house-img" />
              <h6>Kosan Jaya</h6>
              <small>3x4</small>
            </div>

            <div className="house">
              <img src={IMG3} alt="" className="house-img" />
              <h6>Kosan Raymond</h6>
              <small>4x4</small>
            </div>
          </Zoom>
        </div>
      </div>
    </section>
  );
};

export default Kosan;
