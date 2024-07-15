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
						crearAgenda();
					} else {
						return response.json();
					}
				})
				.then(data=>setStore({agenda: data.contacts}))
				.catch(error => console.log(error))
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
				.then((response) => response.json())
				.then(data => setStore({agenda: data.contacts}))
				.catch(error => console.error(error))
				getActions().obtenerAgenda();
			},

			borrarContacto: (id)  => {
				fetch(`https://playground.4geeks.com/contact/agendas/victoria/contacts/${id}`, {
            		method: 'DELETE',
					headers: {"Content-Type": "application/json"}})
				.then((response)=>response.json())
				.then(data => setStore({agenda: data.contacts}))
				.catch(error => console.log(error))
			},

			// editarContacto: (id, name, address, phone, email) => {
			// 	fetch(`https://playground.4geeks.com/contact/agendas/victoria/contacts/${id}`, {
			// 		method: 'PUT',
			// 		headers: {
			// 			"Content-Type": "application/json"
			// 		},
			// 		body: JSON.stringify({
			// 			"name": name,
			// 			"phone": "",
			// 			"email": "",
			// 			"address": ""
			// 		})
			// 		.then((response) => response.json())
			// 		.then(data => setStore({agenda: data.contacts}))
			// 		.catch(error => console.error(error))
			// 	} 

			// 	)
			// }
		}
	};
};

export default getState;