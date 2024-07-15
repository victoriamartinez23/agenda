import React, { useState, useEffect, useContext } from "react";
import { FormularioNuevoContacto } from "../component/formulario.jsx";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Demo = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<FormularioNuevoContacto/>
		</div>
	);
};
