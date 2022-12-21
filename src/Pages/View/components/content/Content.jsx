import React from "react";
import "./content.css";



// Card Component
import Card from "./components/Card";
import { Fade } from "react-awesome-reveal";

const Content = (props) => {
   return (
    <div className="content-container">
      <div className="content-wrap">
        <div className="card-wrap">
          <Fade cascade triggerOnce>
            {props.kosan.map((kosan) => (
              <Card nama={kosan.nama} alamat={kosan.alamat} harga={kosan.harga} fasilitas={kosan.fasilitas} panjang={kosan.panjang} lebar={kosan.lebar} url1={kosan.url1} url2={kosan.url2}></Card>
            ))}
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Content;
