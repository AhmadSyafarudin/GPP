import React from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from 'axios';


const KosanList = (props) => {
  // console.log(props);
  const navigate = useNavigate();

  const deleteKost = async (id) => {
    await axios.delete(`http://localhost:5000/kosthunt/kost/delete/${id}`);
    navigate("/user");
  }

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
              <th>Lokasi Kosan</th>
              <th>Alamat Kosan</th>
              <th>Whatsapp</th>
              <th>Harga per-Tahun</th>
              <th>Luas</th>
              <th>Fasilitas</th>
              <th>Foto</th>
              <th>Aksi</th>
            </tr>
          </thead>

          <tbody>
            {props.kost.map((kosan, index) => (
              <tr key={kosan.id}>
                <td>{index+1}</td>
                <td>{kosan.nama}</td>
                <td>{kosan.lokasi}</td>
                <td>{kosan.alamat}</td>
                <td>{kosan.no_wa}</td>
                <td>{kosan.harga}</td>
                <td>{kosan.panjang}x{kosan.lebar}m</td>
                <td>{kosan.fasilitas}</td>
                <td>
                <div>
                  <p>Foto Luar</p>
                  <img alt="Foto Luar" width="200" src={kosan.url1}/>
                  <p>Foto Dalam</p>
                  <img alt="Foto Dalam" width="200" src={kosan.url2}/>
                </div>
                </td>
                <td>
                  <Link to={`/kost/user/edit/${kosan.id}`}><button className="dlt-btn" >Edit</button></Link>
                  <button className="dlt-btn" onClick={() => {if(window.confirm('Yakin Ingin Hapus Data Kosan?')) deleteKost(kosan.id)}}>
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
