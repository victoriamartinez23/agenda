import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const ModalBorrarContacto = ({id}) => { 
    const {store, actions} = useContext(Context);

    return (
        <div className="modal"  id="borrar" tabIndex="-1">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">Are you sure?</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <p> If you delete the thing the entire universe will go down! </p>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Oh no!</button>
                    <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={() => actions.borrarContacto(id)}>Yes baby!</button>
                </div>
                </div>
            </div>
        </div>
  );
  };
  
  