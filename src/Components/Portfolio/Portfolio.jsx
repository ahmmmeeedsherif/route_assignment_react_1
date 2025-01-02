import { useState } from "react";
import cabin from "../../assets/img/portfolio/cabin.png";
import cake from "../../assets/img/portfolio/cake.png";
import circus from "../../assets/img/portfolio/circus.png";
import game from "../../assets/img/portfolio/game.png";
import safe from "../../assets/img/portfolio/safe.png";
import submarine from "../../assets/img/portfolio/submarine.png";
import Modal from "../Modal/Modal";

function Portfolio() {
  const [modal, setModal] = useState([
    {
      name: "cabin",
      image: cabin,
    },
    {
      name: "cake",
      image: cake,
    },
    {
      name: "circus",
      image: circus,
    },
    {
      name: "game",
      image: game,
    },
    {
      name: "safe",
      image: safe,
    },
    {
      name: "submarine",
      image: submarine,
    },
  ]);
  return (
    <>
      <section className="page-section portfolio m-4" id="portfolio">
        <div className="container">
          <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">
            Portfolio
          </h2>
          <div className="divider-custom">
            <div className="divider-custom-line"></div>
            <div className="divider-custom-icon">
              <i className="fas fa-star"></i>
            </div>
            <div className="divider-custom-line"></div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-6 col-lg-4 mb-5">
              <div
                className="portfolio-item mx-auto"
                data-bs-toggle="modal"
                data-bs-target="#cabin"
              >
                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                  <div className="portfolio-item-caption-content text-center text-white">
                    <i className="fas fa-plus fa-3x"></i>
                  </div>
                </div>
                <img className="img-fluid" src={cabin} alt="..." />
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-5">
              <div
                className="portfolio-item mx-auto"
                data-bs-toggle="modal"
                data-bs-target="#cake"
              >
                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                  <div className="portfolio-item-caption-content text-center text-white">
                    <i className="fas fa-plus fa-3x"></i>
                  </div>
                </div>
                <img className="img-fluid" src={cake} alt="..." />
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-5">
              <div
                className="portfolio-item mx-auto"
                data-bs-toggle="modal"
                data-bs-target="#circus"
              >
                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                  <div className="portfolio-item-caption-content text-center text-white">
                    <i className="fas fa-plus fa-3x"></i>
                  </div>
                </div>
                <img className="img-fluid" src={circus} alt="..." />
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-5 mb-lg-0">
              <div
                className="portfolio-item mx-auto"
                data-bs-toggle="modal"
                data-bs-target="#game"
              >
                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                  <div className="portfolio-item-caption-content text-center text-white">
                    <i className="fas fa-plus fa-3x"></i>
                  </div>
                </div>
                <img className="img-fluid" src={game} alt="..." />
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-5 mb-md-0">
              <div
                className="portfolio-item mx-auto"
                data-bs-toggle="modal"
                data-bs-target="#safe"
              >
                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                  <div className="portfolio-item-caption-content text-center text-white">
                    <i className="fas fa-plus fa-3x"></i>
                  </div>
                </div>
                <img className="img-fluid" src={safe} alt="..." />
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div
                className="portfolio-item mx-auto"
                data-bs-toggle="modal"
                data-bs-target="#submarine"
              >
                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                  <div className="portfolio-item-caption-content text-center text-white">
                    <i className="fas fa-plus fa-3x"></i>
                  </div>
                </div>
                <img className="img-fluid" src={submarine} alt="..." />
              </div>
            </div>
          </div>
        </div>
      </section>
      {modal.map((elem, index) => (
        <Modal key={index} name={elem.name} image={elem.image} />
      ))}
    </>
  );
}

export default Portfolio;
