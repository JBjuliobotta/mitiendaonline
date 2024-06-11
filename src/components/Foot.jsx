import React from 'react';
import {Link} from "react-router-dom";
import "./css/footer.css"

const Foot = () => {
    return (
        <div className="container-fluid py-3 bg-foot border-top sticky-bottom">
            <div className="row justify-content-center align-items-center">

                <div className="col-12 col-md-3 mt-3 mb-3 mb-md-0">
                    <ul className="nav flex-column text-center">
                        <li className="nav-item mb-2"><Link to="/" className="foot-link">Inicio</Link></li>
                        <li className="nav-item mb-2"><Link to="/categories"
                                                            className="foot-link">Categorías</Link></li>
                        <li className="nav-item mb-2"><Link to="/contact" className="foot-link">Contacto</Link></li>
                        <li className="nav-item mb-2"><Link to="/about" className="foot-link">Sobre Nosotros</Link>
                        </li>
                    </ul>
                </div>
                <div className="col-12 col-md-3 mb-3 mb-md-0">
                    <Link to="/" className="foot-link d-block text-center">
                        <h1>JulioShop</h1>
                    </Link>
                </div>
                <div className="col-12 col-md-3 mb-4 mb-md-0">
                    <h5 className="text-center mb-4">Contacto</h5>
                    <ul className="list-unstyled d-flex justify-content-center">
                        <li className="me-3"><i className="bi bi-facebook"/></li>
                        <li className="me-3"><i className="bi bi-instagram"/></li>
                        <li className="me-3"><i className="bi bi-twitter-x"/></li>
                        <li className="me-3"><i className="bi bi-whatsapp"/></li>
                        <li className="me-3"><i className="bi bi-youtube"/></li>
                    </ul>
                </div>
            </div>

            <div className="row">
                <div className="col text-center">
                    <p className="mb-0">&copy; Todos los derechos reservados</p>
                </div>
            </div>
        </div>
    );
};

export default Foot;