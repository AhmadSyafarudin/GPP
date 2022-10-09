import React from "react";
import "./contact.css";

//React Icon
import { BsInstagram, BsMessenger, BsWhatsapp } from "react-icons/bs";

// Animation
import { Bounce } from "react-awesome-reveal";

import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_bb6brlt", "template_ud8ouyo", form.current, "kxJqQs-12oggKzcan");
    e.target.reset();
  };

  return (
    <section className="contact" id="contact">
      <div className="container-section">
        <h2 className="title">Kontak Kami</h2>
        <div className="item-wrap">
          <div className="left">
            <Bounce cascade triggerOnce>
              <div className="left-item">
                <BsWhatsapp className="icon" />
                <h5>WhatsApp</h5>
                <div className="small-wrap">
                  <small>081234567890</small>
                  <a href="https://wa.me/+6281234567890" target="_blank" rel="noreferrer">
                    Send a Message
                  </a>
                </div>
              </div>

              <div className="left-item">
                <BsMessenger className="icon" />
                <h5>Messenger</h5>
                <div className="small-wrap">
                  <small>KostHunt official</small>
                  <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                    Send a Message
                  </a>
                </div>
              </div>

              <div className="left-item">
                <BsInstagram className="icon" />
                <h5>Instagram</h5>
                <div className="small-wrap">
                  <small>KostHunt </small>
                  <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                    Send a Message
                  </a>
                </div>
              </div>
            </Bounce>
          </div>

          <form className="contact_form" ref={form} onSubmit={sendEmail}>
            <input className="input" type="text" name="name" placeholder="Full Name" required autoComplete="off" />
            <input className="input" type="email" name="email" placeholder="Email" required autoComplete="off" />
            <textarea className="text_area" name="message" rows="7" placeholder="Message" required></textarea>
            <button className="button" type="submit">
              Send Messages
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
