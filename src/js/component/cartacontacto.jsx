import React from "react";
import "../../styles/home.css";

export const CartaContacto = ({id, name, address, phone, email, nuevoId}) => { 

  return (
	<div className="card d-flex flex-wrap my-3 mx-auto col-8" key={id}>
	<div className="row g-0">
	  <div className="col-md-2 d-flex justify-content-center align-items-center">
		<img src={`https://picsum.photos/200?random=${id}`} className="img-fluid rounded-circle m-3" alt="Random"/>
	  </div>
	  <div className="col-md-8">
		<div className="card-body">
		  <h5 className="card-title">{name}</h5>
		  <p className="card-text"><i className="fas fa-map-marker-alt me-2"></i> {address}</p>
		  <p className="card-text"><i className="fas fa-phone me-2"></i> {phone}</p>
		  <p className="card-text"><i className="fas fa-envelope me-2"></i> {email}</p>
		</div>
	  </div>
	  <div className="col-md-2 d-flex justify-content-center align-items-center" data-bs-toggle="modal" data-bs-target="#editar">
		<button className="btn mx-2" style={{ cursor: 'pointer' }}>
		  <i className="fas fa-edit"></i>
		</button>
		<button className="btn mx-2" style={{ cursor: 'pointer' }} onClick={nuevoId} data-bs-toggle="modal" data-bs-target="#borrar">
		  <i className="fas fa-trash-alt"></i>
		</button>
	  </div>
	</div>
  </div>
);
};

