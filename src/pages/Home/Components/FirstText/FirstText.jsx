import React from "react";
import "./FirstText.scss";
import logo from "../../../../assets/images/logo.jpg";

const FirstText = () => {
  return (
    <div>
      <div class="star-wars-intro">
        <h2 class="main-logo"></h2>
        <p class="intro-text"></p>

        <div class="main-content">
          <div class="title-content">
            <p class="content-body">
              Es un placer darles la bienvenida, a mi portafolio electrónico en
              el cual encontraras información sobre mi formación académica, mi
              experiencia laboral y sobre los trabajos que he realizado de
              manera individual y colectiva.
              Para cualquier duda o consulta, rellena el formulario y me pondré 
              en contacto contigo lo antes posible.
              ¡¡¡Gracias!!!
            </p>
            <p class="content-header">
              <img className="logo" src={logo} alt="logo"></img>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstText;
