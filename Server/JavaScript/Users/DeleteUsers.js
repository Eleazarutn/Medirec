export const DeleteUser = (app, db) =>{
    app.delete('/DeleteUser/:id', (req, res) => {
        const userId = req.params.id;
        const query = 'DELETE FROM usuario WHERE id_usuario = ?';
    
        db.query(query, [userId], (err, result) => {
            if (err) {
                console.error('Error eliminando el usuario:', err);
                res.status(500).send('Error eliminando el usuario');
            } else {
                res.send('Usuario eliminado con éxito');
            }
        });
    });
    
}