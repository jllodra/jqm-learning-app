var app = {

	aplicacio: "Aplicacio premis CODE",

	rutes: {
		/*
		'#page1': app.c1,
		'#page2': app.c2,
		'#page3': app.c3
		*/
	},

	deviceReady: false,
	deviceLanguage: 'es-ES',

	preparaRutes: function() {
		for(var prop in app) {
			if(app[prop].hasOwnProperty("page")) { // hem trobat un controlador
				app.rutes[app[prop].page] = app[prop];
			}
		}
	},

	onDeviceReady: function() {
		app.deviceReady = true;
		navigator.globalization.getPreferredLanguage(function(language) {
			app.deviceLanguage = language.value;
			for(controlador in app.rutes) {
				app.rutes[controlador].updateLanguage();
			}
		}, function() {
			console.error("Error reading language.");
		})
	},

	init: function() {

		document.addEventListener("deviceready", app.onDeviceReady, false);

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

	},

};

app.init();




















