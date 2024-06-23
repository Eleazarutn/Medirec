import express from 'express'
import cors from 'cors'
import mysql from 'mysql'
import { UserRegister } from './JavaScript/UserRegister.js'

import { UserAuthentication } from './JavaScript/ValiLogin.js'
import { GetUsers } from './JavaScript/Getusers.js'
import { DeleteUser } from './JavaScript/DeleteUsers.js'
import { EditUser } from './JavaScript/EditUser.js'


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
GetUsers(app,db);
DeleteUser(app,db);
EditUser(app,db)

app.listen(3001,()=>{
    console.log("Corriendo en el puerto 3001");
});
