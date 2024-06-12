import express from 'express'
import cors from 'cors'
import mysql from 'mysql'
import {GetEmpleados} from './JavaScript/ConsultaEjemplo.js'

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"empleados_crud"
});


GetEmpleados(app, db);



app.listen(3001,()=>{
    console.log("Corriendo en el puerto 3001");
});
