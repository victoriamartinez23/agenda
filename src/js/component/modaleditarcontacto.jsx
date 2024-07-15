import React, { useContext, useState} from "react";
import { Context } from "../store/appContext";

export const ModalEditarContacto = () => { 
    const {store, actions} = useContext(Context);

    return (
        <div className="modal"  id="editar" tabIndex="-1">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">Edit contact</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" value={name} onChange={(e) => setName(e.target.value)}></button>
                </div>
                <div className="modal-body">
                <form>
                    <div className="mb-3">
                        <label className="form-label">Full Name</label>
                        <input type="text" className="form-control" placeholder="Full name" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label"> Address </label>
                        <input type="text" className="form-control" placeholder="Address"/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label "> Phone </label>
                        <input type="text" className="form-control" placeholder="Phone"/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label"> Email</label>
                        <input type="email" className="form-control" placeholder="Email"/>
                    </div>
                    <div className="d-grid gap-2">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal"> Cancel </button>
                        <button type="button" className="btn btn-primary" onClick={(e)=> editarContacto(e)}> Save </button>
                    </div>
                </form>
                </div>
            </div>
        </div>
    </div>
  );
  };
  
  