import React from "react";
import "./Home.css";
import Beranda from "./components/beranda/Beranda";
import Footer from "./components/footer/Footer";
import Kosan from './components/list/Kosan';



const Home = () => {
  return (
    <>
      <Beranda />
      <Kosan/>
      <Footer />
    </>
  );
};

export default Home;