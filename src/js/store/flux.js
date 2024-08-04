const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			agenda: []		
		},
		actions: {
			crearAgenda: () => {
				fetch("https://playground.4geeks.com/contact/agendas/victoria", {
            		method: 'POST',
					headers: {
                	"Content-Type": "application/json"},
       				})
					.then((response) => {
						if (response.status === 201) {
							obtenerAgenda();
						} else {
							return response.json();
						}})
				.then(data=>console.log(data))
				},	

			obtenerAgenda: () => {
				fetch("https://playground.4geeks.com/contact/agendas/victoria")
				.then((response) => {
					if (response.status === 404) {
						return getActions().crearAgenda();
					} else {
						return response.json();
					}
				})
				.then(data => {
					if (data.contacts) {
						setStore({agenda: data.contacts});
					}
				})
				.catch(error => console.log(error));
			},

			crearContacto: (name, address, phone, email) => {
				fetch("https://playground.4geeks.com/contact/agendas/victoria/contacts", {
					method: 'POST',
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify({
						"name": name,
						"phone": phone,
						"email": email,
						"address": address,
					})
				})
				.then((response) => {
					if (!response.ok) {
						throw new Error(`Error`);
					}
					return response.json();
				})
				.then(data => {
					setStore({personajes: [data.result.properties]});
					getActions().obtenerAgenda();
				})
				.catch(error => console.error("There was an error creating the contact:", error));
			},
			
			borrarContacto: (id) => {
				fetch(`https://playground.4geeks.com/contact/agendas/victoria/contacts/${id}`, {
					method: 'DELETE',
					headers: {"Content-Type": "application/json"}
				})
				.then((response) => {
					if (!response.ok) {
						throw new Error(`Error`);
					}
					return response;
				})
				.then((response) => {
					getActions().obtenerAgenda();
				})
				.catch(error => console.error("There was an error deleting the contact:", error));
			},
			
			editarContacto: (id, name, address, phone, email) => {
				fetch(`https://playground.4geeks.com/contact/agendas/victoria/contacts/${id}`, {
					method: 'PUT',
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify({
						"name": name,
						"phone": phone,
						"email": email,
						"address": address
					})
				})
				.then((response) => response.json())
				.then(data => {
					getActions().obtenerAgenda();
				})
				.catch(error => console.error(error));
			}
			
		}
	};
};

export default getState;