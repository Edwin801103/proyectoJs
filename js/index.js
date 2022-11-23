// const articulos = [
//   { nombre: "tornillos", precio: 10
//  },
//   { nombre: "clavos", precio: 20 },
//   { nombre: "cemento", precio: 100 },
//   { nombre: "arena", precio: 150 },
//   { nombre: "hierro", precio: 250 },
//   { nombre: "martillo", precio: 350 },
// ];
// let carrito = [];

// let seleccion = prompt("hola desea comprar algun producto? escriba si o no");

// while (seleccion != "si" && seleccion != "no") {
//   alert("por favor ingrese si o no ");
//   seleccion = prompt("hola desea comprar algo si o no");
// }
// if (seleccion === "si") {
//   alert("a continuacion nuestra lista de productos");
//   let todosLosProductos = articulos.map(
//     (producto) => producto.nombre + " " + producto.precio + "$"
//   );
//   alert(todosLosProductos.join(" - "));
// } else if (seleccion == "no") {
//   alert("gracias por venir, hasta pronto!!!");
// }
// while (seleccion != "no") {
//   let producto = prompt("agrega  un producto al carrito");
//   let precio = 0;
//   if (
//     producto == "tornillos" ||
//     producto == "clavos" ||
//     producto == "cemento" ||
//     producto == "arena" ||
//     producto == "hierro" ||
//     producto == "martillo"
//   ) {
//     switch (producto) {
//       case "torinllos":
//         precio = 10;
//         break;
//       case "clavos":
//         precio = 20;
//         break;
//       case "cemento":
//         precio = 100;
//         break;
//       case "arena":
//         precio = 150;
//         break;
//       case "hierro":
//         precio = 250;
//         break;
//       case "martillo":
//         precio = 350;
//         break;
//       default:
//         break;
//     }
//     let unidades = parseInt(prompt("cuantas unidades va a elegir"));
//     carrito.push({ producto, unidades, precio })
//     console.log(carrito)
//   } else {
//     alert("no tenemos ese producto");
//   }
//   seleccion = prompt("desea seguir comprando?")
//   while (seleccion === "no") {
//     alert("gracias por su compra")
//     carrito.forEach((carritoFinal) => {
//       console.log(`producto:${carritoFinal.producto}, unidades:${carritoFinal.unidades},
//         total a pagar por producto${carritoFinal.unidades * carritoFinal.precio}`)})
//         break;
//   }
// }
