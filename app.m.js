app.m = {

	// store // collection

	alumnes: [
		{
			nom: 'Andreu',
			cognoms: 'Nadal',
			telefon: '97100000'
		},
		{
			nom: 'Joan',
			cognoms: 'Llull',
			telefon: '97134324'
		},
		{
			nom: 'Jaume',
			cognoms: 'Gomila',
			telefon: '08832423'
		},
		{
			nom: 'Maria',
			cognoms: 'Quetgles',
			telefon: '03-4345-123'
		}

	],

	actualitzaAlumne: function(index, alumne) {
		app.m.alumnes[index] = alumne;
		app.m.proxy.ls.guardarDades();
	},

	// proxy

	proxy: {
		ls: {
			carregarDades: function() {
				var alumnes = localStorage.getItem('alumnes');
				if(alumnes !== null) {
					console.info("Hem carregat alumnes");
					app.m.alumnes = JSON.parse(alumnes);
				} else {
					console.warn("Alumnes no existeix al localStorage");
				}
			},
			guardarDades: function() {
				var s = JSON.stringify(app.m.alumnes);
				localStorage.setItem('alumnes', s);
			}
		}
	}

};

app.m.proxy.ls.carregarDades();