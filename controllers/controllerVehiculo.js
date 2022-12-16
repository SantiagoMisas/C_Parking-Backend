import Vehiculo from "../models/modelVehiculo.js";

const agregarVehiculo=async (req, res)=>{
try {
    await Vehiculo.create(req.body);
    res.json({
        message: "Vehiculo creado con exito"
    })

} catch (error) {
    res.json({
        message: "No puede ser agregado"+error,
    });
}
}

const mostrarVehiculos = async (req, res) => {
try {
    const Vehiculos = await Vehiculo.findAll();
    res.json(Vehiculos)

} catch (error) {
    res.json({
        message: "No se encontraron" + error
    });

}
}
const mostrarVehiculo = async (req, res) => {
try {
    const Vehiculo = await Vehiculo.findOne({
        where: 
            {id: req.params.id}
    });
    res.json(Vehiculo)

} catch (error) {
    res.json({
        message: "No se pudo encontrar" + error
    });
}
}

const editarVehiculo = async (req, res) => {

try {
    await Vehiculo.update(req.body, {
        where: {
            id: req.params.id
            
        }
    });
    res.json({
        message: "Vehiculo editado"
    });

} catch (error) {
    res.json({
        message: "Vehiculo no se pudo editar" + error
    });
}

}

const eliminarVehiculo = async (req, res) => {
try {

    await Vehiculo.destroy({
        where: {id: req.params.id}
    });
    res.json({
        message: "Vehiculo eliminado con exito"
    });

} catch (error) {
    res.json({
        message: "El Vehiculo no se pudo eliminar" + error
    });

}

}

export { agregarVehiculo, editarVehiculo, mostrarVehiculo, mostrarVehiculos, eliminarVehiculo }