import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";


const KosanEdit = () => {
  const [inputs, setInputs] = useState({});

  const handleSubmit = () => {
    alert("Data Kosan Diubah");
  }

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  return (
    <div>
      <div className="form_input">
        <h2 className="menu_title">Ubah Data Kosan</h2>
        <Link to="/admin"><h6 className="admin_link">back to Dashboard</h6></Link>
      </div>

      <form onSubmit={handleSubmit} className="form_admin">
        <label>Nama: </label>
        <input type="text" name="nama" onChange={handleChange}></input>

        <label>Alamat: </label>
        <input type="text" name="alamat" onChange={handleChange}></input>

        <label>Harga per-Tahun : </label>
        <input type="text" name="harga" onChange={handleChange}></input>

        <label>Luas: </label>
        <input type="text" name="luas" onChange={handleChange}></input>
        
        <label>Fasilitas: </label>
        <input type="text" name="fasilitas" onChange={handleChange}></input>

        <button>Save</button>
      </form>
    </div>
  );
};

export default KosanEdit;
