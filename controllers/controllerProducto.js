import Producto from "../models/modelProducto.js";

const agregarProducto=async (req, res)=>{
try {
    await Producto.create(req.body);
    res.json({
        message: "Producto creado con exito"
    })

} catch (error) {
    res.json({
        message: "No puede ser agregado"+error,
    });
}
}

const mostrarProductos = async (req, res) => {
try {
    const Productos = await Producto.findAll();
    res.json(Productos)

} catch (error) {
    res.json({
        message: "No se encontraron" + error
    });

}
}
const mostrarProducto = async (req, res) => {
try {
    const Producto = await Producto.findOne({
        where: 
            {id: req.params.id}
    });
    res.json(Producto)

} catch (error) {
    res.json({
        message: "No se pudo encontrar" + error
    });
}
}

const editarProducto = async (req, res) => {

try {
    await Producto.update(req.body, {
        where: {
            id: req.params.id
            
        }
    });
    res.json({
        message: "Producto editado"
    });

} catch (error) {
    res.json({
        message: "Producto no se pudo editar" + error
    });
}

}

const eliminarProducto = async (req, res) => {
try {

    await Producto.destroy({
        where: {id: req.params.id}
    });
    res.json({
        message: "Producto eliminado con exito"
    });

} catch (error) {
    res.json({
        message: "El Producto no se pudo eliminar" + error
    });

}

}

export { agregarProducto, editarProducto, mostrarProducto, mostrarProductos, eliminarProducto }