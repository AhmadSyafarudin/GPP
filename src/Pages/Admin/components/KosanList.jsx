import React, {useState } from "react";
import { Link } from "react-router-dom";

const KosanList = () => {
  const [kosan, setKosan] = useState([{id:1, 
                                       nama:"kosan melati",
                                      alamat:"Airan Raya",
                                    luas:"3x4",
                                    harga:"RP. 3.000.000",
                                  fasilitas:["toilet ", "kasur ", "lemari"]}]);

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
                <td>{kosan.id}</td>
                <td>{kosan.nama}</td>
                <td>{kosan.alamat}</td>
                <td>{kosan.harga}</td>
                <td>{kosan.luas}</td>
                <td>{kosan.fasilitas}</td>
                <td>
                  <Link to={`${kosan.id}/edit/`}>Edit</Link>
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
