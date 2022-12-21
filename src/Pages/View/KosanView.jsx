import React, {useEffect, useState} from "react";
import axios from 'axios';


//Sub Components
import Header from "./components/header/Header";
import Content from "./components/content/Content";
import Footer from "../Home/components/footer/Footer";

const KosanView = () => {
  const [kosan, setKosan] = useState([]);
  useEffect(() => {
    getKost();
  },[]);

  const getKost = async () => {
    const response = await axios.get('http://localhost:5000/kosthunt/kost');
    setKosan(response.data);
  }

  return (
    <>
      <Header />
      <Content kosan={kosan} />
      <Footer />
    </>
  );
};

export default KosanView;
