import { useNavigate, Link } from "react-router-dom";
import React, { useState, useEffect } from 'react'
import axios from 'axios';
import jwt_decode from "jwt-decode";

import "./admin.css";
import KosanList from './components/KosanList';

const Admin = () => {
  const [username, setUsername] = useState('');
  const [token, setToken] = useState('');
  const [expire, setExpire] = useState('');
  const [kost, setKost] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
      refreshToken();
      getKost();
  }, []);

  const refreshToken = async () => {
      try {
          const response = await axios.get('http://localhost:5000/kosthunt/user/token');
          setToken(response.data.accessToken);
          const decoded = jwt_decode(response.data.accessToken);
          setUsername(decoded.username);
          setExpire(decoded.exp);
      } catch (error) {
          if (error.response) {
              navigate("/login");
          }
      }
  }

  const axiosJWT = axios.create();

  axiosJWT.interceptors.request.use(async (config) => {
      const currentDate = new Date();
      if (expire * 1000 < currentDate.getTime()) {
          const response = await axios.get('http://localhost:5000/kosthunt/user/token');
          config.headers.Authorization = `Bearer ${response.data.accessToken}`;
          setToken(response.data.accessToken);
          const decoded = jwt_decode(response.data.accessToken);
          setUsername(decoded.username);
          setExpire(decoded.exp);
      }
      return config;
  }, (error) => {
      return Promise.reject(error);
  });

  const getKost = async () => {
      const response = await axiosJWT.get('http://localhost:5000/kosthunt/kost', {
          headers: {
              Authorization: `Bearer ${token}`
          }
      });
      setKost(response.data);
  }
 
  return (
    <>
     <div className="nav_admin">
        <div className="nav_wrap">
          <h2>Dashboard Admin</h2>
          <ul>
            <li>
              <Link className="admin_link" to="/admin/add">
                <h6>Tambah Data Kosan</h6>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="content">
        <KosanList />
      </div>
    </>
  );
};

export default Admin;
