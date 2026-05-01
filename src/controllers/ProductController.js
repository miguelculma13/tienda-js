import { createProduct } from "../model/ProductModel.js";

document
  .querySelector("#btn_guardar_producto")
  .addEventListener("click", function () {
    let id = document.querySelector("#id").value;
    let creadoEn = document.querySelector("#creadoEn").value;
    let nombre = document.querySelector("#nombre").value;
    let descripcion = document.querySelector("#descripcion").value;
    let precio = document.querySelector("#precio").value;
    let stock = document.querySelector("#stock").value;
    let imagen = document.querySelector("#imagen").value;

    let producto = {id, creadoEn, nombre, descripcion, precio, stock, imagen}
    createProduct(producto)
    // let producto = {
    //   id: id,
    //   creadoEn: creadoEn,
    //   nombre: nombre,
    //   descripcion: descripcion,
    //   precio: precio,
    //   stock: stock,
    //   imagen: imagen,
    // };
  });
