/* const numeros = [1, 2, 3, 4, 5, 4, 5, 6, 7, 2, 2, 3, 65];

for(let posicion = 0; posicion <5; posicion++){
    console.log(numeros[posicion]);
}

for(let posicion = 0; posicion < numeros.length; posicion++){
    console.log(numeros[posicion]);
}

console.log(numeros);
numeros.push("Mariana");


let nombre = prompt("ingrese un nombre");
numeros.push = nombre;

console.log(numeros); 

HACEMOS UNA ARRAY Y AGREGAMOPS CON PUSH Y CON PUSH PROMPT

*/




// EL PUSH AGREGA AL FINAL
/* const numeros = [1, 2, 3, 4, 5, 4, 5, 6, 7, 2, 2, 3, 65];
numeros.push("Mariana"); */




//EL UNSHIFT AGREAGA ELEMENTOS AL PRINCIPIO

/* numeros.unshift(true)
console.log(numeros); */


//SPLICE SIRVE PARA ELIMININAR SELECTIVO

/* const nombres = ['rita', 'Pedro', 'Migue;', 'Ana', 'Vanesa'];
nombres.splice(2,4)

console.log(nombres); */

//JOIN UNE EL ARRAY

/* const nombres = ['rita', 'Pedro', 'Migue;', 'Ana', 'Vanesa'];
;

console.log(nombres.join("+")); */


// Aca unimos nombres y apellido separdos por un string vacio

/* let persona = ['andres', 'ruiz'];

console.log(persona.join(" ")); */

// .CONCAT UNIMOS LOS ARRAY 

/* const perros = ['perritos', 'dog'];
const gatos = ['michi'];

const mascotas = perros.concat(gatos);
console.log(mascotas); */

// INDEXOJF DEVUELVE LA POSICION DE UN ELEMENTO

/* const nombres = ['rita', 'Pedro', 'Migue;', 'Ana', 'Vanesa'];

console.log(nombres.indexOf('Ana'));
 */
// .INCLUDES DEVUELVE TRUE/FALSE SI ESTA LA BUSQUEDA DEL ELEMENTO

/* console.log(nombres.includes('Pedro')); */

// .REVERSE DEVUELVE DADO VUELTA EL ARRAY 

/* nombres.reverse();
console.log(nombres); */



/* class personas = [
    {nombre: 'pepito', edad: 4},
    {nombre: 'marianela', edad: 3},
    {nombre: 'juan', edad: 2}

]

console.log(persona);
persona.push({nombre: 'carolina', edad: 7});
console.log(personas);
 */


/* const productos = [
    {id: 1, producto: "Arroz"},
    {id: 2, producto: "Fideo"},
    {id: 2, producto: "Pan"}
];

for (const producto of productos) {
    console.log(producto.id);
    console.log(producto.producto);
} */






//VARIABLES Y CONSTANTES




/* 
class Persona {

    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }

    saludar () {
        console.log(`Hola mi nombre es ${this.nombre} y tengo ${this.edad}`);
    }

    static definicion() {
        console.log('Una persona es un humano');
    }


}

let persona = new Persona('Lucas', '28')

/* persona.saludar();

Persona.definicion(); */


/* class Desarrollador extends Persona {

    constructor(nombre,edad, dev){
        super(nombre, edad);
        this.dev = dev;
    }
                                 
    saludoDesarrollador() {
        this.saludar();
        console.log(`Soy un ${this.dev} developer`);
    }

}

/* Desarrollador.definicion(); */
/* let desarrollador = new Desarrollador('Lucas', 28, 'Frontend');

desarrollador.saludoDesarrollador(); */





const juegos  = [
    {
        id: 0,
        title: 'FIFA'
    },
    {
        id: 1,
        title: 'CS'
    },
    {
        id: 2,
        title: 'MAFIA'
    },
    {
        id: 3,
        title: 'F1'
    }

];

function saludar() {
    for(let posicion = 0; posicion < juegos.length; posicion++){
        console.log(juegos[posicion]);
    }
}

function agregar() {
    let nombre = prompt("ingrese el nombre del JUEGO");
    juegos.push = nombre;
    console.log(juegos);
}

function eliminar() {
    let eliminar = parseInt(prompt("ingrese el numero del JUEGO"));
        
        let revisarNombre = juegos.some(post => post.id === eliminar);

        console.log(revisarNombre);

        while(revisarNombre == false) {
            revisarNombre = prompt("ingrese el numero del JUEGOOOOOOOOOOOOOOOOOOOOO ");
    }
        
        if (revisarNombre == true) {
            
            console.log("ENTRASTE AL true PARA BORRAR");
            juegos.splice(eliminar,1);
            console.log(juegos);
        }
}


alert("Bienvenidos, en consola le van a aparecer los juegos que tenemos! ");

saludar();

    
var producto = prompt("Seleccione: A- Agregar un juego o B- Eliminar un juego")

while(producto.toUpperCase() !== "A" && producto.toUpperCase() !== "B"){
    producto = prompt("selecione que desea: A- Agregar o B - Eliminar");
}

if (producto.toUpperCase () == "A") {
    alert ("Elegiste Agregar!")
    agregar();

    } else {
        alert ("Elegiste Eliminar") 
        eliminar();
    };
    
