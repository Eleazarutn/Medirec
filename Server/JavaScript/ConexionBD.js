
import mysql from 'mysql'

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"empleados_crud"
});

export const ConexionBD = () =>{
    db.connect((err) =>{
        if(err){
            console.error('Error conextando a la base de datos',err);
        }else{
            console.log("Conexión exitosa a la base de datos");
        }
    })
}

export default db;