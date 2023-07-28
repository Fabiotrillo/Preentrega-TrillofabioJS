function saludar(nombre, apellido) {
    alert("Bienvenido " + nombre + " " + apellido);
  }


class Producto{
    constructor(id,nombre, precio, cantidad){
        this.id = id
        this.nombre = nombre
        this.precio = precio
        this.cantidad = cantidad
    }

    sumar_iva() {
        return this.precio * 1.21;
      }


    aumentarCantidad(cantidad){
        this.cantidad =  this.cantidad + cantidad
    }

    descripcion(){

        return "\nProducto: "+ this.id+
               "\nNombre: "+ this.nombre+
               "\nPrecio: "+ this.precio+
               "\nPrecio + IVa: "+ this.sumar_iva()+
               "\n";   
      }   
     
}

const listaProductos = [    new Producto(1,"Fideos",200),

                            new Producto(2,"Arroz",400),

                            new Producto(3,"Leche",700)

]

 

const carrito = []

 

let rta = ""

let acumuladora = ""

do {
    //usuario
  let nombre = prompt("Ingrese su Nombre");
  let apellido = prompt("Ingrese su Apellido");

  saludar(nombre, apellido);

    //le muestro al usuario la lista de productos

    listaProductos.forEach((producto, index) => {
        acumuladora += (index + 1) + producto.descripcion();
      });

    alert(acumuladora)

 

    let opcion = prompt("Ingrese el N° del elemento a comprar: ")

 

    if(opcion == 1){

        carrito.push(listaProductos[opcion-1])

    }else if ( opcion == 2){

        carrito.push(listaProductos[opcion-1])

    }else if (opcion == 3){

        carrito.push(listaProductos[opcion-1])

    }else{

        alert("No tenemos esa opción :(")

    }

 

    rta = prompt("Ingrese 'ESC' para salir. o la tecla enter para continuar.").toUpperCase()

    

} while (rta != 'ESC');

let acumuladora2 = ""

for (const producto of carrito) {

    acumuladora2 = acumuladora2 + producto.descripcion()

}

alert(acumuladora2)