app.l = {

	'en-US': {
		'Afegir': 'Add'
	},

	'es-ES': {
		'Afegir': 'Añadir'
	},

	get: function(key) {
		if(app.deviceLanguage in app.l) {
			if(key in app.l[app.deviceLanguage]) {
				return app.l[app.deviceLanguage][key];
			}
		}
		return key;
	}

}