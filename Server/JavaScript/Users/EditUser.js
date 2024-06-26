export const EditUser = (app, db) => {
    app.put('/EditUser/:id', (req, res) => {
      const userId = req.params.id;
      const { usa_nombre, usa_apellidos, usa_telefono, usa_alergias, usa_email } = req.body;
      const query = 'UPDATE usuario SET usa_nombre = ?, usa_apellidos = ?, usa_telefono = ?, usa_alergias = ?, usa_email = ? WHERE id_usuario = ?';
  
      db.query(query, [usa_nombre, usa_apellidos, usa_telefono, usa_alergias, usa_email, userId], (err, result) => {
        if (err) {
          console.error('Error editando el usuario:', err);
          res.status(500).send('Error editando el usuario');
        } else {
          res.send('Usuario editado con éxito');
        }
      });
    });
  }
  