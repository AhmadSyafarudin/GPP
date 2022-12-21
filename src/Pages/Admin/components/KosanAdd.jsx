import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Alert } from "react-bootstrap";
import axios from 'axios';
import { useCookies } from "react-cookie";

const KosanAdd = () => {
  const [cookies, setCookie] = useCookies();
  const [preview, setPreview] = useState("");
  const [preview2, setPreview2] = useState("");
  const [msg, setMsg] = useState('');
  const [inputs, setInputs] = useState({'lokasi' : 'Way Huwi', 'user_id': cookies.id, 'foto_depan': "", 'foto_dalam': "" });
  const navigate = useNavigate();
  
  const handleSubmit = async(e) => {
    e.preventDefault();
    // const formData = new FormData();
    // formData.append("nama", inputs.nama);
    // formData.append("foto_depan", inputs.foto_depan);
    console.log('====================================');
    console.log(inputs);
    console.log('====================================');
    try {
      await axios.post(`http://localhost:5000/kosthunt/kost/add`, inputs, {
        headers: {
          "Content-type": "multipart/form-data",
        },
      });
      navigate("/admin");
    } catch (error) {
      if(error.response) {
        setMsg(error.response.data.msg);
      }
    }
  }

  const imageChange = (event) => {
    const name = event.target.name;
    const value = event.target.files[0];
    setInputs((values) => ({ ...values, [name]: value }));
    setPreview(URL.createObjectURL(value));
  };
  const imageChange2 = (event) => {
    const name = event.target.name;
    const value = event.target.files[0];
    setInputs((values) => ({ ...values, [name]: value }));
    setPreview2(URL.createObjectURL(value));
  };

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

        <label>Foto Luar: </label>
        <input type="file" name="foto_depan" onChange={imageChange}></input>
        {preview ? (
            <figure >
              <img width="200" src={preview} alt="Preview Image" />
            </figure>
          ) : (
            ""
          )}

        <label>Foto Dalam: </label>
        <input type="file" name="foto_dalam" onChange={imageChange2}></input>
        {msg && <Alert variant="danger">{msg}</Alert>}
        {preview2 ? (
            <figure >
              <img width="200" src={preview2} alt="Preview Image" />
            </figure>
          ) : (
            ""
          )}

        <button>Create</button>
      </form>
    </div>
  );
};

export default KosanAdd;
