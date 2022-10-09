import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home/Home";
import Admin from "./Pages/Admin/Admin";
import Login from "./Pages/Admin/components/auth/Login";
import Register from './Pages/Admin/components/auth/Register';
import { AuthProvider } from "./context/AuthContext";
import KosanAdd from './Pages/Admin/components/KosanAdd';
import KosanEdit from './Pages/Admin/components/KosanEdit';
import KosanView from './Pages/View/KosanView';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/kosan" element={<KosanView />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/add" element={<KosanAdd />} />
          <Route path="/admin/edit" element={<KosanEdit />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
