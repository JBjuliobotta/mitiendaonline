import React from "react";
import "../css/admin.css";
import { useNavigate } from "react-router-dom";

const Administration = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="admin-card-section">
        <div className="card">
          <div className="card-body">
            <h3 className="card-title">Usuarios</h3>
            <p className="card-info">
              <i
                className="bi bi-person-bounding-box"
                onClick={() => {
                  navigate("/users");
                }}
              ></i>
            </p>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <h3 className="card-title">Productos</h3>
            <p className="card-info">
              <i
                className="bi bi-bag-fill"
                onClick={() => {
                  navigate("/products");
                }}
              ></i>
            </p>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <h3 className="card-title">Consultas</h3>
            <p className="card-info">
              <i
                className="bi bi-chat-square-text-fill"
                onClick={() => {
                  navigate("/consults");
                }}
              ></i>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Administration;
