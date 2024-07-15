import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext.js";
import "../../styles/home.css";
import { CartaContacto } from "../component/cartacontacto.jsx";
import { ModalBorrarContacto } from "../component/modalborrarcontacto.jsx";
import { ModalEditarContacto } from "../component/modaleditarcontacto.jsx";

export const Home = () => {
	const {store, actions} = useContext(Context);
	const [id, setId] = useState(null);

useEffect(() => {
	actions.obtenerAgenda()
}, [])
	
	useEffect(() => {
		actions.obtenerAgenda()
	}, []);

	return (
	<div>
		{store.agenda.map((item) => (
			<CartaContacto 
				key={item.id}
				name={item.name}
				address={item.address}
				phone={item.phone}
				email={item.email}
				id={item.id}
				nuevoId={() => setId(item.id)}
			/>
		))}
		<ModalBorrarContacto 
		id={id}/>
		<ModalEditarContacto 
		id={id}
		name={name}/>
	</div>
	)
};
