import React from "react";
import "./Home.css";
import Beranda from "./components/beranda/Beranda";
import Footer from "./components/footer/Footer";
import Kosan from './components/list/Kosan';
import Contact from "./components/contact/Contact";
import Reason from './components/reason/reason';
import Hero from './components/hero/Hero';

const Home = () => {
  return (
    <>
      <Beranda />
      <Kosan />
      <Reason />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;