import express from 'express';
import routerCliente from './routes/routerCliente.js';
import dataBase from './database/connectDatabase.js';
import cors from 'cors';


const app = express();
const port = 3100;

try {
  await dataBase.authenticate();
  console.log("Se conectó a la base de datos correctamente");
  console.log("Servidor corriendo en el puerto " + port);
  console.log(`http://localhost:${port}`);
  
} catch (error) {
  console.log("Conexión no exitosa "+error);
  
}

app.use(cors())
app.use(express.json())
//app.use(routerCliente)
app.use('/clientes', routerCliente)
app.listen(port, ()=> {
    console.log(`Servidor corriendo en el puerto ${port}`)
    console.log(`Servidor funcionando en http://localhost:3100`)
  });


