import React from "react";
import "../css/contact.css";
import ContactImage from "/src/assets/contactimage.jpg";

const Contact = () => {
  return (
    <>
      <div className="contact-container">
        <div className="leftSide">
          <h1>Contáctanos</h1>
          <h4>Envianos tus datos y tu consutla,</h4>
          <h4>y te responderemos a la brevedad</h4>
          <div className="form-container">
            <div className="mb-3 mt-2">
              <label for="name&lastnameinput" className="form-label">
                Nombre y Apellido
              </label>
              <input
                type="text"
                className="form-control"
                id="name&lastnameinput"
                placeholder="José Gómez"
              />
            </div>
            <div className="mb-3">
              <label for="cellphonenumberinput" className="form-label">
                Número de contacto
              </label>
              <input
                type="text"
                className="form-control"
                id="cellphonenumberinput"
                placeholder="3814013497"
              />
            </div>
            <div className="mb-3">
              <label for="emailinput" className="form-label">
                Correo electrónico
              </label>
              <input
                type="email"
                className="form-control"
                id="emailinput"
                placeholder="tuemail@gmail.com"
              />
            </div>
            <div className="mb-3">
              <label for="commentsectioninput" className="form-label">
                Aquí va tu comentario
              </label>
              <textarea
                className="form-control"
                id="commentsectioninput"
                rows="3"
              ></textarea>
            </div>
            <div className="button-container">
            <button type="submit" className="btn btn-light mb-2">Enviar</button>
            </div>
          </div>
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
