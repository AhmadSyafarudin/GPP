import React from "react";
import "./why.css";

//React Icon
import { IoIosHome } from "react-icons/io";
import { MdNaturePeople } from "react-icons/md";
import { AiOutlineSafetyCertificate } from "react-icons/ai";

//Animation
import { Fade } from "react-awesome-reveal";

const Why = () => {
  return (
    <section className="why" id="why">
      <div className="container-section">
        <Fade direction="down" triggerOnce>
          <h2 className="title">Kenapa harus di MN Property?</h2>
        </Fade>
        <div className="pros">
          <Fade direction="right" cascade delay={500} triggerOnce>
            <div className="pro">
              <IoIosHome className="icon" />
              <h4>Fasilitas nyaman</h4>
              <small>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem quae eius dolorem exercitationem commodi accusantium enim dolorum quod obcaecati est.</small>
            </div>

            <div className="pro">
              <MdNaturePeople className="icon" />
              <h4>Lingkungan bersih</h4>
              <small>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem quae eius dolorem exercitationem commodi accusantium enim dolorum quod obcaecati est.</small>
            </div>

            <div className="pro">
              <AiOutlineSafetyCertificate className="icon " />
              <h4>Keamanan Terjamin</h4>
              <small>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem quae eius dolorem exercitationem commodi accusantium enim dolorum quod obcaecati est.</small>
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default Why;
