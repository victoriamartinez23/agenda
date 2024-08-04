import React, {useState, useContext} from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const FormularioNuevoContacto = () => {
    const {store, actions} = useContext (Context)

    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");

    const guardarContacto = (e) => {
        e.preventDefault()
        actions.crearContacto(name, address, phone, email)
        setName("")
        setAddress("")
        setPhone("")
        setEmail("")
        window.location.href = "/";
    }

return (
    <div className="container">
      <div className="m-5">
    <h1 className="text-center">Add a new contact</h1>
    <form onSubmit={guardarContacto}>
      <div className="mb-3">
        <label className="form-label">Full Name</label>
        <input type="text" className="form-control" placeholder="Full name" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div className="mb-3">
        <label className="form-label"> Address </label>
        <input type="text" className="form-control" placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)} />
      </div>
      <div className="mb-3">
        <label className="form-label "> Phone </label>
        <input type="text" className="form-control" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
      </div>
      <div className="mb-3">
        <label className="form-label"> Email</label>
        <input type="email" className="form-control" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div className="d-grid gap-2">
        <button className="btn btn-primary" type="button" onClick={(e)=> guardarContacto(e)}> Save </button>
      </div>
    </form>
    <Link to="/">
      <p className="link-opacity-100-hover">or get back to contacts</p>
    </Link>
    </div>
</div>
);
};
