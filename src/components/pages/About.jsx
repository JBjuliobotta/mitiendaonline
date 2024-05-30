import React from 'react';
import "../css/about.css";
import Me from "/src/assets/me.jpg"

const About = () => {
    return (
        <div className='about-container'>
            <div className='about-image-container'>
                <img src={Me} alt="" className='about-image' />
            </div>
            <div className='about-logos'>
            <i className="bi bi-whatsapp"/>
            <i className="bi bi-instagram"/>
            <i className="bi bi-github"></i>
            <i className="bi bi-linkedin"></i>
            <i className="bi bi-discord"></i>
            <i className="bi bi-envelope-at"></i>
            </div>
            <div className='about-text-container'>
                <h1>Hola! Soy Julio Rafael Botta</h1>
                <p>Soy un estudiante que finalizó el cursado de Ingeniería Civil y</p>
                <p>descubrió el mundo IT a través de una beca en Rolling Code School</p>
                <p>Llevo 6 meses programando cómo FullStack con el stack MERN</p>
                <p>Actualmente estoy realizando proyectos personales y freelance para ganar experiencia</p>
                <p>Mi objetivo sería poder ingresar al mercado laboral para mejorar mis habilidades, aprender</p>
                <p>y mejorarlas, para desarrollar apps, páginas web, y también aprender ciencia de datos, que es un tema que me resulta interesante</p>
            </div>
        </div>
    );
};

export default About;