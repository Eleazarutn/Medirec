export const DeleteDoctor  = (app , db) => {

    app.delete("/DeleteDoctor/:id_doctor", (req, res) => {
        const id_doctor = req.params.id_doctor;
      
        const sql = `DELETE FROM doctor WHERE id_doctor = ?`;
      
        db.query(sql, [id_doctor], (err, result) => {
          if (err) {
            console.error("Error al borrar el doctor:", err);
            res.status(500).send("Error al borrar el doctor");
            return;
          }
          res.send("Doctor borrado correctamente");
        });
      });
      
} 