// agregando elementos al localstorage

localStorage.setItem('nombre','Agustin')
sessionStorage.setItem('nombre','Agustin')

// solo acepta strings

const producto = {
    nombre: "Monitor 22 pulgadas",
    precio: 2000
}

const meses = ["enero", "febrero", "marzo"]
const mesesString = JSON.stringify(meses)
localStorage.setItem("meses", mesesString)

// convertimos un objeto a strinf con "JSON.stringfy"
const productoString = JSON.stringify(producto)
/* console.log(typeof productoString); */

localStorage.setItem("producto",productoString)
/* sessionStorage.setItem("producto",productoString) */


/* ------------------------------------------------------------- */
// obtener elementos del localstorage

const mes = localStorage.getItem("meses")
/* console.log(JSON.parse(mes)); */

const prod = localStorage.getItem("producto")
/* console.log(JSON.parse( prod)); */

/* ------------------------------------------------------------- */
// actualizar y eliminar elementos del localstorage

// ELIMINAR
localStorage.removeItem("nombre");

// ACTUALIZAR
const mesesArray = JSON.parse( localStorage.getItem("meses"))
console.log(mesesArray);
mesesArray.push("nuevo mes")
console.log(mesesArray);

