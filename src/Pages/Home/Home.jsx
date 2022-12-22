import React, {useEffect, useState} from "react";
import axios from 'axios';
import "./Home.css";
import Beranda from "./components/beranda/Beranda";
import Footer from "./components/footer/Footer";
import Kosan from './components/list/Kosan';
import Contact from "./components/contact/Contact";
import Reason from './components/reason/reason';
import News from './components/news/news';
import Menu from './components/menu/menu';

const Home = () => {
  const [kost, setKost] = useState([]);

  useEffect(() => {
    getKost();
  });

  const getKost = async () => {
    const response = await axios.get('http://localhost:5000/kosthunt/kost');
    setKost(response.data);
  }

  return (
    <>
      <Menu />
      <News kost={kost}/>
      <Beranda />
      <Kosan kost={kost}/>
      <Reason />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;