import React from "react";
import "./Home.css";
import Beranda from "./components/beranda/Beranda";
import Footer from "./components/footer/Footer";
import Kosan from './components/list/Kosan';
import Contact from "./components/contact/Contact";

function Home() {
  return (
    <>
      <Beranda />
      <Kosan />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;