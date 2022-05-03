class Producto{

    constructor(marca, modelo, precio){
 
        this.marca = marca;
        this.modelo = modelo;
        this.precio = precio;

    }

    obtenerDatos(){

        return `Marca: ${this.marca}.\nModelo: ${this.modelo}.\nPrecio: ${this.precio}.`;

    }
}

class Carrito{

    constructor(){

        this.productosSeleccionados = [];

    }

    agregarProducto(nuevoProducto){
        this.productosSeleccionados.push(nuevoProducto);
    }

    eliminarProducto(productoAEliminar){

        let index = this.productosSeleccionados.indexOf(productoAEliminar);

        this.productosSeleccionados.splice(index, 1);
    }

    obtenerProductosSeleccionados(){

        let auxProductosSeleccionados = [];

        for(let i = 0; i < this.productosSeleccionados.length; i++){

            auxProductosSeleccionados.push( `Producto: ${i + 1}.\n` + this.productosSeleccionados[i].obtenerDatos() + "\n");

        }

        auxProductosSeleccionados.push(`\nIngrese 0 si no quiere eliminar ningun producto.\n`);

        return auxProductosSeleccionados.join("\n");

    }
}

class Catalogo{

    constructor(producto, stock){
        this.producto = producto;
        this.stock = stock; 
    }

    agregarStock(cantidad){
        this.stock += cantidad;
    }

    reducirStock(cantidad){
        // this.stock = this.stock - cantidad; Es lo mismo que la expresión de abajo.
        this.stock -= cantidad;
    }

    obtenerDatos(){

        return this.producto.obtenerDatos() + `\nStock: ${this.stock}.`; 

    }

}

class Supermercado{

    constructor(){

        this.catalogo = [];

        this.carrito = new Carrito();

    }

    agregarCatalogoProducto(catalogo){
        this.catalogo.push(catalogo);
    }

    obtenerCatalogo(){

        let auxCatalogo = [];

        for(let i = 0; i < this.catalogo.length; i++){

            if(this.catalogo[i].stock > 0)
                auxCatalogo.push( `Producto: ${i + 1}.\n` + this.catalogo[i].obtenerDatos() + "\n");

        }

        auxCatalogo.push(`\nIngrese 0 si no quiere agregar ningun producto.\n`);

        return auxCatalogo.join("\n");
    }

    obtenerIndiceCatalogo(catalogo){
        return this.catalogo.find(catalogo);
    }

}



/* ----------------------------------------------------------------------- */

function cargaPreviaDatos(){
    const productoUno = new Producto("Imperial", "APA", 300);
    const productoDos = new Producto("Imperial", "IPA", 300);
    const productoTres = new Producto("Imperial", "Lager", 300);
    const productoCuatro = new Producto("Imperial", "Stout", 300);
    const productoCinco = new Producto("Quilmes", "Golden", 200);

    const supermercado = new Supermercado();

    supermercado.agregarCatalogoProducto(new Catalogo(productoUno, 10));
    supermercado.agregarCatalogoProducto(new Catalogo(productoDos, 5));
    supermercado.agregarCatalogoProducto(new Catalogo(productoTres, 15));
    supermercado.agregarCatalogoProducto(new Catalogo(productoCuatro, 23));
    supermercado.agregarCatalogoProducto(new Catalogo(productoCinco, 0));

    return supermercado;
}

const mensajeBienvenida = "--- Bienvenido al Supermercado ---\n" +
                          "1 - Agregar producto al carrito.\n" +
                          "2 - Eliminar producto del carrito.\n" +
                          "3 - Finalizar compra.\n" +
                          "\n0 - Salir del programa.\n";


const validarRango = (valor) =>{ return (minimo, maximo) => minimo <= valor && maximo >= valor }

const validarOpcionIngresada= (minimo, maximo, mensaje) => {

    let opcion;
    let auxFuncion;

    do{

        opcion = parseInt(prompt(mensaje));

        auxFuncion = validarRango(opcion);

    } while(!auxFuncion(minimo, maximo));

    return opcion;
}

const supermercado = cargaPreviaDatos();

function agregarProductoCarrito() {

    let cantidad = 0;

    for(const aux of supermercado.catalogo){
        if(aux.stock > 0)
         cantidad++;
    }

    let producto = validarOpcionIngresada(0, cantidad, supermercado.obtenerCatalogo());
    
    if (!Number.isNaN(producto)){
        if(producto != 0) {
            producto--;
            let productoSeleccionado = supermercado.catalogo[producto].producto;
            supermercado.carrito.agregarProducto(productoSeleccionado);
            supermercado.catalogo[producto].reducirStock(1);
        }
    }

}

function eliminarProductoCarrito(){

    let producto = validarOpcionIngresada(0, supermercado.carrito.productosSeleccionados.length, supermercado.carrito.obtenerProductosSeleccionados());

    if (!Number.isNaN(producto)){
        if(producto != 0) {
            /*  Dejo este comentario para corregir el stock porque no lo explique en el meet. 
                1 - Corregimos la diferencias de índices respecto al producto seleccionado con el vector en sí. Para eso le restamos 1 a "producto".
                2 - Buscamos el producto dentro del array de productos seleccionados. Lo almaceno en "productoSeleccionado".
                3 - Ejecutamos un foreach para recorrer el catalogo. En cada iteracion chequeamos si el elemento (parametro de la funcion flecha) la propiedad producto == productoSeleccionado.
                    Si se encuentra igualdad, se ejecuta "agregarStock". Cabe destacar que en cada iteracion "elemento" es un objeto de tipo Catalogo.
                4 - Se elimina el producto de el carrito.
            */
            
            producto--;

            let productoSeleccionado = supermercado.carrito.productosSeleccionados[producto];

            supermercado.catalogo.forEach((element)=>{
                if (element.producto == productoSeleccionado){
                    element.agregarStock(1);
                }
            });

            supermercado.carrito.eliminarProducto(productoSeleccionado);
        }
    }
}

function ejecutarOpcion(opcion){

    if(opcion == 0){

        return true;

    } else if (opcion == 1){

        agregarProductoCarrito();
        
    } else if(opcion == 2) {

        eliminarProductoCarrito();

    }else if (opcion == 3){
        
       // finalizarCompra();
    
    } else {
        
        return false;
    
    }
}


let terminarPrograma = false;


while(!terminarPrograma){

    let opcion = validarOpcionIngresada(0, 3, mensajeBienvenida);

    terminarPrograma = ejecutarOpcion(opcion);
}








