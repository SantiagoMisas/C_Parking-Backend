import { DataTypes } from "sequelize";
import dataBase from "../database/connectDatabase";

const Vehiculo=dataBase.define('vehiculo', {
    placa: {type: DataTypes.STRING},
    fecha_ingreso: {type: DataTypes.DATE},
    hora_ingreso: {type: DataTypes.TIME},
    hora_salida: {type: DataTypes.TIME},
    horas: {type: DataTypes.BIGINT},

})

export default Vehiculo