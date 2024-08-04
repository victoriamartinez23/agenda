import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext.js";
import "../../styles/home.css";
import { CartaContacto } from "../component/cartacontacto.jsx";
import { ModalBorrarContacto } from "../component/modalborrarcontacto.jsx";
import { ModalEditarContacto } from "../component/modaleditarcontacto.jsx";

export const Home = () => {
    const { store, actions } = useContext(Context);
    const [id, setId] = useState(null);
    
    useEffect(() => {
        actions.obtenerAgenda();
    }, []);

    return (
        <div>
            {store.agenda.length > 0 ? (
                store.agenda.map((item) => (
                    <CartaContacto 
                        key={item.id}
                        name={item.name}
                        address={item.address}
                        phone={item.phone}
                        email={item.email}
                        id={item.id}
                        nuevoId={() => setId(item.id)}
                    />
                ))
            ) : (
                <h2 className="text-center">No hay contactos en la agenda.</h2>
            )}
            <ModalBorrarContacto id={id} />
            <ModalEditarContacto id={id} />
        </div>
    );
};
