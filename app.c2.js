app.c2 = {

	page: "#page2",

	data: {
		index: 0
	},

	init: function() {
		console.log("INIT del controlador2, page2");

		$('#page2editbutton').on("click", function() {
			app.c3.data.index = app.c2.data.index;
		});
	},

	beforeShow: function() {
		console.log("beforeShow c2");
		app.c2.update();
	},

	afterShow: function() {
		console.log("afterShow c2");
	},

	update: function() {
		console.log("UPDATE del controlador2, page2");

		// Anar a cercar l'alumne en questio
		var alumne = app.m.alumnes[app.c2.data.index];

		// Pintar l'alumne en pantalla
		$('#page2header').text(alumne.nom + " " + alumne.cognoms);
		$('#page2name').text(alumne.nom);
		$('#page2surnames').text(alumne.cognoms);
		$('#page2phone').text(alumne.telefon);
	}

};