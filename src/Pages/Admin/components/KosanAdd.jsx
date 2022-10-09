import React from "react";
import { useState } from "react";

const KosanAdd = () => {
  const [inputs, setInputs] = useState({});

  const handleSubmit = () => {
    alert("Data Kosan Ditambahkan");
  }

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  return (
    <div>
      <div className="form_input">
        <h2 className="menu_title">Tambah Kosan Baru</h2>
        <h6 className="admin_link">back to Dashboard</h6>
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

        <button>Create</button>
      </form>
    </div>
  );
};

export default KosanAdd;
