import React from "react";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from 'axios';


const KosanEdit = () => {
  const [inputs, setInputs] = useState({});
  const {id} = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getKostById();
  }, []);

  const getKostById = async () => {
      const response = await axios.get(`http://localhost:5000/kosthunt/kost/${id}`);
      setInputs(response.data);
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.patch(`http://localhost:5000/kosthunt/kost/update/${id}`, inputs);
    navigate("/user");
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
        <Link to="/user"><h6 className="admin_link">back to Dashboard</h6></Link>
      </div>

      <form onSubmit={handleSubmit} className="form_admin">
        <label>Nama: </label>
        <input value={inputs.nama} type="text" name="nama" onChange={handleChange}></input>

        <label>Lokasi: </label>
        <select value={inputs.lokasi} name="lokasi" onChange={handleChange}>
            <option value="Way Huwi">Way Huwi</option>
            <option value="Sukarame">Sukarame</option>
        </select>
        
        <label>Alamat: </label>
        <input value={inputs.alamat} type="text" name="alamat" onChange={handleChange}></input>

        <label>Harga per-Tahun : </label>
        <input value={inputs.harga} type="text" name="harga" onChange={handleChange}></input>

        <label>Panjang: </label>
        <input value={inputs.panjang} type="text" name="panjang" onChange={handleChange}></input>
        
        <label>Lebar: </label>
        <input value={inputs.lebar} type="text" name="lebar" onChange={handleChange}></input>
        
        <label>Fasilitas: </label>
        <input value={inputs.fasilitas} type="text" name="fasilitas" onChange={handleChange}></input>

        <button>Save</button>
      </form>
    </div>
  );
};

export default KosanEdit;
