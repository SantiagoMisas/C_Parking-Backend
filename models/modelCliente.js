import { DataTypes } from "sequelize";
import dataBase from "../database/connectDatabase.js";

const Cliente=dataBase.define('clientes', {
    cedula: {type: DataTypes.STRING},
    nombre: {type: DataTypes.STRING},
    direccion: {type: DataTypes.STRING},
    correo: {type: DataTypes.STRING},
    celular: {type: DataTypes.STRING}
})

export default Cliente