import Cliente from "../models/modelCliente";

const agregarCliente=()=>{
try {
    await Cliente.create(req.body);
    res.json({
        message: "Cliente creado con exito"
    })

} catch (error) {
    res.json({
        message: "No puede ser agregado" + error,
    });
}
}

const mostrarClientes = async (req, res) => {
try {
    const clientes = await Cliente.findAll();
    res.json(clientes)

} catch (error) {
    res.json({
        message: "No se encontraron" + error
    });

}
}
const mostrarCliente = async (req, res) => {
try {
    const cliente = await Cliente.findOne({
        where: 
            {Cedula: req.params.Cedula}
    });
    res.json(cliente)

} catch (error) {
    res.json({
        message: "No se pudo encontrar" + error
    });
}
}

const editarCliente = async (req, res) => {

try {
    await Cliente.update(req.body); {
        where: {
            {Cedula: req.params.Cedula}
            
        }
    }
    res.json({
        message: "Cliente editado"
    });

} catch (error) {
    res.json({
        message: "Cliente no se pudo editar" + error
    });
}

}

const eliminarCliente = async (req, res) => {
try {

    await Cliente.destroy({
        where: {Cedula: req.params.Cedula }
    });
    res.json({
        message: "Cliente eliminado con exito"
    });

} catch (error) {
    res.json({
        message: "El cliente no se pudo eliminar" + error
    });

}

}

export { agregarCliente, editarCliente, mostrarCliente, mostrarClientes, eliminarCliente }