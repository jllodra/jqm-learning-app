app.c1 = {
	
	page: "#page1",

	init: function() {
		console.log("INIT del controlador1, page1");
		
		$('#page1listview').on("click", "li", function() {
			app.c2.data.index = $(this).index();
		});

		$('#page1addbutton').on("click", function() {
			app.c3.data.index = null;
		});

		app.c1.updateList();
	},

	updateList: function() {
		var llista = [];
		for(var i = 0, max = app.m.alumnes.length; i < max; i++) {
			llista.push([
				'<li>',
				'	<a href="#page2">',
				app.m.alumnes[i].nom + ' ' + app.m.alumnes[i].cognoms,
				'	</a>',
				'</li>',
			].join(''));
		}
		$('#page1listview').html(llista.join(''));
		$('#page1listview').listview("refresh");
	},

	update: function() {
		console.log("UPDATE del controlador1, page1");
		app.c1.updateList();
	}

};