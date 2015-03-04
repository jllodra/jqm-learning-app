var app = {

	aplicacio: "Aplicacio premis CODE",

	init: function() {
		$(document).on("pagecreate", "#page1", function() {
		  app.c1.init();
		});

		$(document).on("pagecreate", "#page2", function() {
		  app.c2.init();
		});

		$(document).on("pagecontainerbeforeshow", function(event, ui) {
		  var toPage = ui.toPage[0] || null;
		  switch(toPage.id) {
		  	case 'page1':
		  		app.c1.update();
		  		break;
		  	case 'page2':
		  		app.c2.update();
		  		break;
		  	default:
		  		console.error("Error, no se a quina pagina anam...");
		  		break;
		  }
		});

		/*$(document).on("pagecontainershow", function(event, ui) {
		  console.log("PAGECONTAINERSHOW change page");
		});*/
	},

};

app.init();




















