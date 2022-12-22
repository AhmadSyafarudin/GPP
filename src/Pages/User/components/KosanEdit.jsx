import React from "react";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from 'axios';


const KosanEdit = () => {
  const [inputs, setInputs] = useState({});
  const [preview, setPreview] = useState("");
  const [preview2, setPreview2] = useState("");
  const {id} = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getKostById();
  }, []);

  const getKostById = async () => {
      const response = await axios.get(`http://localhost:5000/kosthunt/kost/${id}`);
      setInputs(response.data);
      setInputs((values) => ({ ...values, 'foto_depan': "" }));
      setInputs((values) => ({ ...values, 'foto_dalam': "" }));
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('====================================');
    console.log(inputs);
    console.log('====================================');
    await axios.patch(`http://localhost:5000/kosthunt/kost/update/${id}`, inputs, {
      headers: {
        "Content-type": "multipart/form-data",
      },
    });
    navigate("/user");
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

        <label>Kontak Whatsapp: </label>
        <p>*contoh 62895604395176</p>
        <input value={inputs.no_wa} type="text" name="no_wa" onChange={handleChange}></input>

        <label>Harga per-Tahun : </label>
        <input value={inputs.harga} type="text" name="harga" onChange={handleChange}></input>

        <label>Panjang: </label>
        <input value={inputs.panjang} type="text" name="panjang" onChange={handleChange}></input>
        
        <label>Lebar: </label>
        <input value={inputs.lebar} type="text" name="lebar" onChange={handleChange}></input>
        
        <label>Fasilitas: </label>
        <input value={inputs.fasilitas} type="text" name="fasilitas" onChange={handleChange}></input>

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
        {preview2 ? (
            <figure >
              <img width="200" src={preview2} alt="Preview Image" />
            </figure>
          ) : (
            ""
          )}

        <button>Save</button>
      </form>
    </div>
  );
};

export default KosanEdit;
