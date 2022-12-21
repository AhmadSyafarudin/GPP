import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import { useCookies } from "react-cookie";

const KosanAdd = () => {
  const [cookies, setCookie] = useCookies();
  const [inputs, setInputs] = useState({'lokasi' : 'Way Huwi', 'user_id': cookies.id});
  const navigate = useNavigate();
  const options = [
    { value: 'Way Huwi', label: 'Way Huwi' },
    { value: 'Sukarame', label: 'Sukarame' }
  ]

  const handleSubmit = async(e) => {
    e.preventDefault();
    // console.log('====================================');
    // console.log(inputs);
    // console.log('====================================');
    await axios.post(`http://localhost:5000/kosthunt/kost/add`, inputs);
    navigate("/admin");
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
        <Link to="/admin"><h6 className="admin_link">back to Dashboard</h6></Link>
      </div>

      <form onSubmit={handleSubmit} className="form_admin">
        <label>Nama: </label>
        <input type="text" name="nama" onChange={handleChange}></input>

        <label>Lokasi: </label>
        <select value={inputs.lokasi} name="lokasi" onChange={handleChange}>
            <option value="Way Huwi">Way Huwi</option>
            <option value="Sukarame">Sukarame</option>
        </select>

        <label>Alamat: </label>
        <input type="text" name="alamat" onChange={handleChange}></input>

        <label>Harga per-Tahun : </label>
        <input type="text" name="harga" onChange={handleChange}></input>

        <label>Panjang: </label>
        <input  type="text" name="panjang" onChange={handleChange}></input>
        
        <label>Lebar: </label>
        <input type="text" name="lebar" onChange={handleChange}></input>
        
        <label>Fasilitas: </label>
        <input type="text" name="fasilitas" onChange={handleChange}></input>

        <button>Create</button>
      </form>
    </div>
  );
};

export default KosanAdd;
