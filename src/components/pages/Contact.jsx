import React from "react";
import "../css/contact.css";
import ContactImage from "/src/assets/contactimage.jpg";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <>
      <div className="contact-container">
        <div className="leftSide">
          <h1>Contáctanos</h1>
          <h4>Envianos tus datos y tu consutla,</h4>
          <h4>y te responderemos a la brevedad</h4>
          <Link
            className="icon"
            to=""
            style={{ color: "black" }}
          >
            <p>
              <i style={{ fontSize: 50 }} className="bi bi-facebook" />
            </p>
          </Link>
          <Link
            className="icon"
            to=""
            style={{ color: "black" }}
          >
            <p>
              <i style={{ fontSize: 50 }} className="bi bi-instagram" />
            </p>
          </Link>
          <Link
            className="icon"
            to=""
            style={{ color: "black" }}
          >
            <p>
              <i style={{ fontSize: 50 }} className="bi bi-whatsapp" />
            </p>
          </Link>
          <Link
            className="icon"
            to="mailto:coachcaitobosio@gmail.com"
            style={{ color: "black" }}
          >
            <p>
              <i style={{ fontSize: 50 }} className="bi bi-envelope-at-fill" />
            </p>
          </Link>
        </div>
        <div
          className="rigthSide"
          style={{ backgroundImage: `url(${ContactImage})` }}
        ></div>
      </div>
    </>
  );
};

export default Contact;
