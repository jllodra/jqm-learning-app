app.c2 = {

	page: "#page2",

	data: {
		nombre: ""
	},

	init: function() {
		console.log("INIT del controlador2, page2");
	},

	update: function() {
		console.log("UPDATE del controlador2, page2");
		$('#page2header').text(app.c2.data.nombre);
	}

};