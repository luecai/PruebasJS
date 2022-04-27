/* // estructura de los obejtos {Clave1: Valor1, Clave2: Valor2}

let persona1 = {nombre: "Andres", edad: 20, direccion: "Cra 32"};


let persona2 = {
    nombre: "Lucas", 
    edad: 26, 
    direccion: "Alvarez 12354"
};
// Se puede escribir de las dos maneras

console.log(persona2.nombre); // manera de llamar a la propiedad del objeto
console.log(persona2.edad);
 */

/* function Persona(nombre, edad, direccion) {
    this.nombre = nombre;
    this.edad = edad;
    this.direccion = direccion;
}

const persona1 = new Persona ("Andres", 20, 'Avenida')
const persona2 = new Persona ("Marina", 22, 'Ferrocarril')

/* console.log(persona1.nombre);  */

/* for (const propiedad in persona1) {
    console.log(persona1[propiedad]);
}  */


/* 

FORMA NUEVA QUE LLEGO PARA HACER UNA CLASE

class Persona { 
    constructor (nombre, edad, calle){
        this.nombre
        this.edad
        this.calle
    }
    
    hablar (){
        console.log("Hola Soy " + this.nombre);
    }

}

const persona1 = new Persona ("Alan", 1, "Kuireta") */




/* 
class Producto {
    constructor(nombre, precio){
        this.nombre = nombre;
        this.precio = precio;
        this.vendido = false;
    }

    vender(){
        this.vendido = true;
    }
}

const Producto1 = new Producto('pan', 1200);
const Producto2 = new Producto('harina', 2200);

console.log(Producto1.vendido);
Producto1.vender();
console.log(Producto1.vendido);
console.log(Producto2); */



class Perritos {
    constructor (nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }

    correr(){
        console.log(this.nombre + " Esta corriendo");
    }

    ladrar(){
        console.log(this.nombre + " Esta ladrar");
    }
}

const perrito1 = new Perritos("Golfo", 11, 4);
const perrito2 = new Perritos("Marlo", 8, 4);

console.log(perrito1.nombre);
perrito1.correr();
perrito1.ladrar();

