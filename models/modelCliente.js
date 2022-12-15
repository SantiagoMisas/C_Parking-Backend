import { DataTypes } from "sequelize";
import dataBase from "../database/connectDatabase";

const Cliente=dataBase.define('cliente', {
    cedula: {type: DataTypes.STRING},
    nombre: {type: DataTypes.STRING},
    direccion: {type: DataTypes.STRING},
    correo: {type: DataTypes.STRING},
    celular: {type: DataTypes.STRING}
})

export default Cliente