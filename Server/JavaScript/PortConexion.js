import express from 'express';
const app = express();

export const Conexion = () => {
    app.listen(3001, () => {
        console.log("Corriendo en el puerto 3001");
    });
};