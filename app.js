var app = {

	aplicacio: "Aplicacio premis CODE",

	rutes: {
		/*
		'#page1': app.c1,
		'#page2': app.c2,
		'#page3': app.c3
		*/
	},

	preparaRutes: function() {
		for(var prop in app) {
			if(app[prop].hasOwnProperty("page")) { // hem trobat un controlador
				app.rutes[app[prop].page] = app[prop];
			}
		}
	},

	init: function() {
		$(document).on("pagecreate", "div:jqmData(role='page')", function() {
			if($.isEmptyObject(app.rutes)) {
				app.preparaRutes();
				app.m.proxy.ls.carregarDades();
			}
			app.rutes["#" + this.id].init();
		});

		$(document).on("pagecontainerbeforeshow pagecontainershow", function(event, ui) {
		  var toPage = ui.toPage[0] || null;
		  if(app.rutes.hasOwnProperty("#" + toPage.id)) {
		  	switch(event.type) {
		  		case 'pagecontainerbeforeshow':
		  			app.rutes["#" + toPage.id].beforeShow();
		  			break;
		  		case 'pagecontainershow':
		  			app.rutes["#" + toPage.id].afterShow();
		  			break;
		  		default:
		  			break;
		  	}
		  }
		});

		/*$(document).on("pagecontainershow", function(event, ui) {
		  console.log("PAGECONTAINERSHOW change page");
		});*/
	},

};

app.init();




















