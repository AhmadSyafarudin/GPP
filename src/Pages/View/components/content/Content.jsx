import React from "react";
import "./content.css";

import { useState, useEffect } from "react";

// Card Component
import Card from "./components/Card";
import { Fade } from "react-awesome-reveal";

const Content = () => {
  const [kosan, setKosan] = useState([{no:1, 
    nama:"kosan melati",
    alamat:"Airan Raya",
    luas:"3x4",
    harga:"RP. 3.000.000",
    fasilitas:["toilet, ", "kasur, ", "lemari"]},
    {no:2, 
     nama:"kosan jaya",
     alamat:"jl. Raden Saleh",
     luas:"3x4",
     harga:"RP. 5.000.000",
     fasilitas:["toilet dalam, ", "kasur, ", "lemari, ", "meja belajar, ", "kipas angin"]},
     {no:3, 
       nama:"kosan raymond",
       alamat:"jl. Terusan Ryacudu",
       luas:"4x4",
       harga:"RP. 4.500.000",
       fasilitas:["toilet dalam, ", "kasur, ", "lemari, ", "meja"]}]);

  return (
    <div className="content-container">
      <div className="content-wrap">
        <div className="card-wrap">
          <Fade cascade triggerOnce>
            {kosan.map((kosan) => (
              <Card nama={kosan.nama} alamat={kosan.alamat} harga={kosan.harga} fasilitas={kosan.fasilitas} luas={kosan.luas}></Card>
            ))}
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Content;
