app.m = {

	url: 'http://aawefohiwef',

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

	// funcions per manipular store/collection

	afegeixAlumne: function(alumne) {
		app.m.alumnes.push(alumne);
		app.m.proxy.ls.guardarDades();
	},

	actualitzaAlumne: function(index, alumne) {
		app.m.alumnes[index] = alumne;
		app.m.proxy.ls.guardarDades();
	},

	eliminaAlumne: function(index) {
		app.m.alumnes.splice(index, 1);
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
		},
		ajax: {
			carregarDades: function(callback) {
				// ajax get
				$.mobile.loading('show');
				$.getJSON("server.php")
				.done(function(data, status) {
					app.m.alumnes = data;
    				callback();
  				})
  				.fail(function() {
    				window.alert("Ha fallado ajax");
  				})
  				.always(function() {
					$.mobile.loading('hide');
  				});
			},
			guardarDades: function(callback) {
				// ajax post
				$.mobile.loading('show');
				$.post("server.php", { data: JSON.stringify(app.m.alumnes) })
				.done(function(data, status) {
    				callback();
  				})
  				.fail(function() {
    				window.alert("Ha fallado ajax");
  				})
  				.always(function() {
					$.mobile.loading('hide');
  				});
  			}
		}
	}

};