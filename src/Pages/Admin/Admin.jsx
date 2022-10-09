import React from "react";
import { Link } from "react-router-dom";

import "./admin.css";
import KosanList from './components/KosanList';

const Admin = () => {
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
