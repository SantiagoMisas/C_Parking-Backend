import express from 'express'
import { agregarCliente } from '../controllers/controllerParkingApp'
import { editarCliente } from '../controllers/controllerParkingApp'
import { eliminarCliente } from '../controllers/controllerParkingApp'
import { mostrarCliente } from '../controllers/controllerParkingApp'
import { mostrarClientes } from '../controllers/controllerParkingApp'

const routerParking=express.Router();

export default routerParking