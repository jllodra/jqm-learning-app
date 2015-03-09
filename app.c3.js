app.c3 = {

	page: "#page3",

	data: {
		index: 0
	},

	init: function() {
		console.log("INIT del controlador3, page3");

		$('#page3savebutton').on("click", function() {
			var nom = $('#page3name').val();
			var cognoms = $('#page3surnames').val();
			var telefon = $('#page3phone').val();
			var alumne = {
				nom: nom,
				cognoms: cognoms,
				telefon: telefon
			};
			app.m.actualitzaAlumne(app.c3.data.index, alumne);
		});

		$('#page3deletebutton').on("click", function() {
			//app.m.alumnes[app.c3.data.index] = alumne;
			//app.m.proxy.ls.guardarDades();
		});
	},

	update: function() {
		console.log("UPDATE del controlador3, page3");

		// Anar a cercar l'alumne en questio
		var alumne = app.m.alumnes[app.c3.data.index];

		// Pintar l'alumne en pantalla
		$('#page3header').text(alumne.nom + " " + alumne.cognoms);
		$('#page3name').val(alumne.nom);
		$('#page3surnames').val(alumne.cognoms);
		$('#page3phone').val(alumne.telefon);
	}

};