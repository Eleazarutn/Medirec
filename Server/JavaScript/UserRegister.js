export const UserRegister = (app, db) => {
    app.post("/RegisterUser", (req, res) => {
        const nombre = req.body.Nombre;
        const apellido = req.body.Apellido;
        const telefono = req.body.Telefono;
        const alergias = req.body.Alergias;
        const correo = req.body.Correo;
        const password = req.body.Contraseña;

        const query = 'INSERT INTO usuario (usa_nombre, usa_apellidos, usa_telefono, usa_alergias, usa_email, usa_contraseña) VALUES (?, ?, ?, ?, ?, ?)';

        db.query(query, [nombre, apellido, telefono, alergias, correo, password], (err, result) => {
            if (err) {
                console.log(err);
                res.status(500).send('Error registrando el usuario');
            } else {
                res.send('Usuario registrado con éxito');
            }
        });
    });
};
