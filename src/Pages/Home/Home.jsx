import React from "react";
import "./Home.css";
import Beranda from "./components/beranda/Beranda";
import Footer from "./components/footer/Footer";
import Kosan from './components/list/Kosan';
import Contact from "./components/contact/Contact";
import Reason from './components/reason/reason';
import News from './components/news/news';
import Menu from './components/menu/menu';

const Home = () => {
  return (
    <>
      <Menu />
      <News />
      <Beranda />
      <Kosan />
      <Reason />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;