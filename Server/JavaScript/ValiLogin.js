export const UserAuthentication = (app, db) => {
    app.post("/LoginUser", (req, res) => {
        const correo = req.body.Correo;
        const password = req.body.Contraseña;

        const query = 'SELECT * FROM usuario WHERE usa_email = ? AND usa_contraseña = ?';

        db.query(query, [correo, password], (err, result) => {
            if (err) {
                console.log(err);
                res.status(500).send('Error en la consulta');
            } else if (result.length > 0) {
                res.send('Usuario autenticado con éxito');
            } else {
                res.status(401).send('Correo o contraseña incorrectos');
            }
        });
    });
};