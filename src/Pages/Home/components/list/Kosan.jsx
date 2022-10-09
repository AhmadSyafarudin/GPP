import React from "react";
import "./Kosan.css";

//Animation
import { Fade, Zoom } from "react-awesome-reveal";

//Assets
import IMG1 from "../../assets/type1.jpg";
import IMG2 from "../../assets/type2.jpg";
import IMG3 from "../../assets/type3.jpg";

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
              <h6>Type 1</h6>
              <small>3x4</small>
            </div>

            <div className="house">
              <img src={IMG2} alt="" className="house-img" />
              <h6>Type 2</h6>
              <small>4x2</small>
            </div>

            <div className="house">
              <img src={IMG3} alt="" className="house-img" />
              <h6>Type 3</h6>
              <small>5x3</small>
            </div>
          </Zoom>
        </div>
      </div>
    </section>
  );
};

export default Kosan;
