import express from 'express'
import cors from 'cors'
import mysql from 'mysql'
import { UserRegister } from './JavaScript/Users/UserRegister.js'
import fs from 'fs';
import PDFDocument  from 'pdfkit';

import { UserAuthentication } from './JavaScript/ValiLogin.js'
import { GetUsers } from './JavaScript/Users/Getusers.js'
import { DeleteUser } from './JavaScript/Users/DeleteUsers.js'
import { EditUser } from './JavaScript/Users/EditUser.js'
import { GetDoctors } from './JavaScript/Doctors/GetDoctors.js'
import { EditDoctor } from './JavaScript/Doctors/EditDoctor.js'
import { DeleteDoctor } from './JavaScript/Doctors/DeleteDoctor.js'
import { GetProducts } from './JavaScript/Productos/GetProductos.js';
import { PdfAllUsers } from './JavaScript/Users/PDFAllUsers.js';
import { PdfAllDoctors } from './JavaScript/Doctors/PdfAllDoctors.js';
import { EditProduct } from './JavaScript/Productos/EditProduct.js';

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"medirec_act"
});




UserRegister(app,db)

UserAuthentication(app,db)

GetUsers(app,db);
DeleteUser(app,db);
EditUser(app,db);

GetDoctors(app,db);
EditDoctor(app,db);
DeleteDoctor(app, db);



PdfAllDoctors(app,db,fs,PDFDocument);
PdfAllUsers(app,db,fs,PDFDocument)


GetProducts(app,db);
EditProduct(app,db);


app.listen(3001,()=>{
    console.log("Corriendo en el puerto 3001");
});
