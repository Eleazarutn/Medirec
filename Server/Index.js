import express from 'express'
import cors from 'cors'
import mysql from 'mysql'
import { UserRegister } from './JavaScript/UserRegister.js'

import { UserAuthentication } from './JavaScript/ValiLogin.js'


const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"reactmedirec"
});



UserRegister(app,db)
UserAuthentication(app,db)


app.listen(3001,()=>{
    console.log("Corriendo en el puerto 3001");
});
