var esNuevo:boolean = false
var deseaImprimir:boolean = true

var juan = "juan"
var juan2 = "juan"

var sonNombresIguales:boolean = (juan == juan2)
var aceptaDescuentos:boolean = (15 + 18 == 33)

console.log("Este booleano es: ", aceptaDescuentos)
console.log("Este booleano es: ", sonNombresIguales)

var sonAmbosVerdaderos:boolean = sonNombresIguales && aceptaDescuentos

console.log("El resultado de ambos booleanos", sonAmbosVerdaderos)
