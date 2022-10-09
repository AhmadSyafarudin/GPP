import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Screen Components
import Home from "./Pages/Home/Home";
import Admin from "./Pages/Admin/Admin";
import Login from "./Pages/Admin/components/auth/Login";
import Sign from "./Pages/Admin/components/auth/Sign";
import { AuthProvider } from "./context/AuthContext";
import KosanList from './Pages/Admin/components/KosanList';
import KosanAdd from './Pages/Admin/components/KosanAdd';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/list" element={<KosanList />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/add" element={<KosanAdd />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign" element={<Sign />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
