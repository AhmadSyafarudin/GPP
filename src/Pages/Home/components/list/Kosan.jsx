import React from "react";
import { Link } from 'react-router-dom';
import "./Kosan.css";

//Animation
import { Fade, Zoom } from "react-awesome-reveal";

const Kosan = (props) => {
  return (
    <Link to="/kosan">
    <section className="produk" id="produk">
      <div className="container-section">
        <Fade direction="down" triggerOnce>
          <h2 className="title">Daftar Kosan</h2>
        </Fade>

        <div className="house-wrap">
          <Zoom delay={500} cascade triggerOnce>
          {props.kost.map((kosan, index) => (
            <div className="house">
              <img height="500" src={kosan.url2} alt="" className="house-img" />
              <h6>{kosan.nama} ({kosan.lokasi})</h6>
              <small>{kosan.panjang}x{kosan.lebar}m</small>
            </div>
          ))}
          </Zoom>
        </div>
      </div>
    </section>
    </Link>
  );
};

export default Kosan;
