import React, {useState } from "react";
import { Link } from "react-router-dom";

const KosanList = () => {
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
    <div>
      <div className="list_title">
        <h4>Daftar Kosan</h4>
      </div>

      <div className="list_table">
        <table>
          <thead>
            <tr>
              <th>No</th>
              <th>Nama Kosan</th>
              <th>Alamat Kosan</th>
              <th>Harga per-Tahun</th>
              <th>Luas</th>
              <th>Fasilitas</th>
              <th>Aksi</th>
            </tr>
          </thead>

          <tbody>
            {kosan.map((kosan) => (
              <tr>
                <td>{kosan.no}</td>
                <td>{kosan.nama}</td>
                <td>{kosan.alamat}</td>
                <td>{kosan.harga}</td>
                <td>{kosan.luas}</td>
                <td>{kosan.fasilitas}</td>
                <td>
                  <Link to="/admin/edit"><button className="dlt-btn" >Edit</button></Link>
                  <button className="dlt-btn" >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default KosanList;
