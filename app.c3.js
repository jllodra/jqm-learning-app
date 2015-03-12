app.c3 = {

	page: "#page3",

	data: {
		index: null
	},

	init: function() {
		console.log("INIT del controlador3, page3");

		$('#page3savebutton').on("click", function() {
			var alumne = {
				nom: $('#page3name').val(),
				cognoms: $('#page3surnames').val(),
				telefon: $('#page3phone').val()
			};
			if(app.c3.data.index !== null) {
				app.m.actualitzaAlumne(app.c3.data.index, alumne);
			} else {
				app.m.afegeixAlumne(alumne);
			}
			app.m.proxy.ajax.guardarDades(function() {
				$.mobile.back();
			});
		});

		$('#page3deletebutton').on("click", function() {
			app.m.eliminaAlumne(app.c3.data.index);
		});
	},

	beforeShow: function() {
		console.log("beforeShow c3");
		app.c3.update();
	},

	afterShow: function() {
		console.log("afterShow c3");
	},

	update: function() {
		console.log("UPDATE del controlador3, page3");

		if(app.c3.data.index !== null) { // tenim alumne seleccionat
			var alumne = app.m.alumnes[app.c3.data.index];
			$('#page3header').text(alumne.nom + " " + alumne.cognoms);
			$('#page3name').val(alumne.nom);
			$('#page3surnames').val(alumne.cognoms);
			$('#page3phone').val(alumne.telefon);
			$('#page3deletebutton').show();
			//$('#page3savebutton').attr("href", "#page1");
		} else { // no tenim alumne seleccionat
			$('#page3header').text("Afegir alumne");
			$('#page3name').val("");
			$('#page3surnames').val("");
			$('#page3phone').val("");
			$('#page3deletebutton').hide();

		}
	}

};