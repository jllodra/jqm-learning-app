// El primer fitxer javascript que feim

$(document).on("pagecreate", "#pageone", function() {
  //console.log("PAGECREATE pageone");
});

$(document).on("pagecreate", "#pagetwo", function() {
  //console.log("PAGECREATE pagetwo");
});

$(document).on("pagecontainerbeforeshow", function(event, ui) {
  //console.log("PAGECONTAINERBEFORESHOW change page");
  //console.log(event);
  //console.log(ui);
});

$(document).on("pagecontainershow", function(event, ui) {
  //console.log("PAGECONTAINERSHOW change page");
});


// cream variables de tipus elementals

var n = 10;
var s = "cadena de texte";
var b = true;

// Cream objectes

var o = {
	prop1: n+2,
	prop2: "cadena dins objecte",
	prop3: false
};

var o2 = {
	prop1: 2,
	prop2: o
};

// Funcions

function suma(a1, a2, a3) {
	var tercer = a3 || 0;
	return a1 + a2 + tercer;
};

var suma2 = function(a1, a2, a3) {
	return suma(a1, a2, a3);
}

var resultat = suma(6, suma2(20, 10));
console.log(resultat);
