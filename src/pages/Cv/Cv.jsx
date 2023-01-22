import React from "react";
import cv from "../../assets/images/cv.jpg";
import "./Cv.scss";
import pdf from '../../PdfDownload/Oscar Sánchez-Marín Baquero___CV.pdf'
import IconoDescarga from "../../../src/assets/images/pdf.png";
import confetti from 'canvas-confetti';

const Cv = () => {

    //funcion para descargar pdf
    // const onButtonClick = () => {
    //     confetti()
    // }


  return (
    <section className="cv">
      <div className="cv__container">
        <img className="cv__image" src={cv} alt={cv}></img>
      </div>
      <div className="nuevo-gasto">
        <figure>
        <a href={pdf} target="_blank" rel="noopener noreferrer" download="Oscar Sanchez-Marin Baquero_cv.pdf"> 
          <img
            src={IconoDescarga}
            alt="icono nuevo aviso"
            //onClick={onButtonClick}
            onClick={() => confetti()}
          />
       </a>   
        </figure>
        {/* </Link> */}
      </div>
    </section>
  );
};

export default Cv;
