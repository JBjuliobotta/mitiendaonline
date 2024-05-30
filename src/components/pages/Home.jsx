import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Flannel from "/src/assets/pexels-dylanspangler-13316724.jpg";
import Rangler from "/src/assets/pexels-mnzoutfits-1598507.jpg";
import Sneackers from "/src/assets/pexels-pixabay-267202.jpg";
import alpinestarlogo from "/src/assets/alpinestarlogo.jpg"
import converselogo from "/src/assets/converselogo.png"
import logolevis from "/src/assets/logolevis.png"
import quicksilverlogo from "/src/assets/quicksilverlogo.png"
import tommyhlogo from "/src/assets/tommyhlogo.png"
import vanslogo from "/src/assets/vanslogo.jpg"
import volcomlogo from "/src/assets/volcomlogo.png"
import wranglerlogo from "/src/assets/wranglerlogo.png"
import "../css/home.css";

const Home = () => {
  return (
    <>
        <div className="carousel-container">
          <Carousel>
            <Carousel.Item >
              <div
                className="carousel-img"
                style={{
                  backgroundImage: `url(${Flannel})`,
                }}
              >
                <Carousel.Caption className="carousel-caption">
                  <h3>Las mejores marcas las encontrás aquí</h3>
                  <p>
                    Armá tus ourfit cómo más te guste
                  </p>
                </Carousel.Caption>
              </div>
            </Carousel.Item>
            <Carousel.Item >
              <div
                className="carousel-img"
                style={{
                  backgroundImage: `url(${Rangler})`,
                }}
              >
                <Carousel.Caption className="carousel-caption">
                  <h3>Abrigate para el frío</h3>
                  <p>
                    Aprovechá los descuentos en todas las prendas de ésta temporada
                  </p>
                </Carousel.Caption>
              </div>
            </Carousel.Item>
            <Carousel.Item >
              <div
                className="carousel-img"
                style={{
                  backgroundImage: `url(${Sneackers})`,
                }}
              >
                <Carousel.Caption className="carousel-caption">
                  <h3>No te olvidés de tus píes</h3>
                  <p>
                    Ningún look está completo sin unas buenas zapas
                  </p>
                </Carousel.Caption>
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
        <div className="main-container">
            <h2>Nuestras Marcas</h2>
            <div className="logos">
              <div className="logos-slider">
                  <img src={alpinestarlogo} alt="alpinestar" />
                  <img src={converselogo} alt="converse" />
                  <img src={logolevis} alt="levis" />
                  <img src={quicksilverlogo} alt="quicksilver" />
                  <img src={tommyhlogo} alt="tommyh" />
                  <img src={vanslogo} alt="vans" />
                  <img src={volcomlogo} alt="volcom" />
                  <img src={wranglerlogo} alt="wrangler" />
              </div>
              <div className="logos-slider">
                  <img src={alpinestarlogo} alt="alpinestar" />
                  <img src={converselogo} alt="converse" />
                  <img src={logolevis} alt="levis" />
                  <img src={quicksilverlogo} alt="quicksilver" />
                  <img src={tommyhlogo} alt="tommyh" />
                  <img src={vanslogo} alt="vans" />
                  <img src={volcomlogo} alt="volcom" />
                  <img src={wranglerlogo} alt="wrangler" />
              </div>
            </div>
        </div>
    </>
  );
};

export default Home;
