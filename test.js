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

var o3 = {
	prop1: 2,
	"prop 2": 5
}

console.log(o.prop2);
console.log(o["prop2"]);

var p = "prop 2";

console.log(o3[p]);
console.log(o3["prop 2"]);


// Funcions

function suma(a1, a2, a3) {
	var tercer = a3 || 0;
	return a1 + a2 + tercer;
};

var suma2 = function(a1, a2, a3) {
	return suma(a1, a2, a3);
}

var resultat = suma(6, suma2(20, 10));

