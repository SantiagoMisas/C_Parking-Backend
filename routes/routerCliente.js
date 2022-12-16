import express from "express";
import {agregarCliente, editarCliente, mostrarCliente, mostrarClientes, eliminarCliente } from "../controllers/controllerCliente.js";


const routerCliente = express.Router();

routerCliente .post('/', agregarCliente);
routerCliente .put('/id', editarCliente);
routerCliente .delete('/id', eliminarCliente);
routerCliente .get('/:id', mostrarCliente);
routerCliente .get('/', mostrarClientes);

export default routerCliente;
