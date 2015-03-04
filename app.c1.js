app.c1 = {
	
	page: "#page1",

	init: function() {
		console.log("INIT del controlador1, page1");
		
		$('#page1listview').on("click", "li", function() {
			app.c2.data.nombre = $(this).text();
		});
	},

	update: function() {
		console.log("UPDATE del controlador1, page1");
	}

};