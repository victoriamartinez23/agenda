import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";

export const ModalEditarContacto = ({ id }) => {
    const { store, actions } = useContext(Context);
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");

    useEffect(() => {
        if (id) {
            const contacto = store.agenda.find(contacto => contacto.id === id);
            if (contacto) {
                setName(contacto.name);
                setAddress(contacto.address);
                setPhone(contacto.phone);
                setEmail(contacto.email);
            }
        }
    }, [id, store.agenda]);

    const cambiarContacto = (e) => {
        e.preventDefault();
        actions.editarContacto(id, name, address, phone, email);
        setName("");
        setAddress("");
        setPhone("");
        setEmail("");
    }

    return (
        <div className="modal" id="editar" tabIndex="-1">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Edit contact</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={cambiarContacto}>
                            <div className="mb-3">
                                <label className="form-label">Full Name</label>
                                <input type="text" className="form-control" placeholder="Full name" value={name} onChange={(e) => setName(e.target.value)} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label"> Address </label>
                                <input type="text" className="form-control" placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label"> Phone </label>
                                <input type="text" className="form-control" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label"> Email</label>
                                <input type="email" className="form-control" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div className="d-grid gap-2">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal"> Cancel </button>
                                <button type="submit" className="btn btn-primary" data-bs-dismiss="modal" onClick={() => actions.cambiarContacto(id)}> Save </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

  