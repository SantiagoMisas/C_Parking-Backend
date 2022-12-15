import { DataTypes } from "sequelize";
import dataBase from "../database/connectDatabase";

const Producto=dataBase.define('producto', {
    nombre: {type: DataTypes.STRING},
    precio: {type: DataTypes.DOUBLE},
    inventario: {type: DataTypes.INT},
    descripcion: {type: DataTypes.STRING},
})

export default Producto