export const EditDoctor = (app , db) =>{

    app.put("/EditDoctor/:id_doctor", (req, res) => {
        const id_doctor = req.params.id_doctor;
        const {
          doc_nombre,
          doc_apellidos,
          doc_turno,
          doc_telefono,
          doc_estado,
          doc_colonia,
          doc_calle,
          doc_numero_calle,
          doc_especialidad,
        } = req.body;
      
        const sql = `
          UPDATE doctor 
          SET doc_nombre = ?, doc_apellidos = ?, doc_turno = ?, doc_telefono = ?, doc_estado = ?, doc_colonia = ?, doc_calle = ?, doc_numero_calle = ?, doc_especialidad = ? 
          WHERE id_doctor = ?`;
      
        db.query(
          sql,
          [
            doc_nombre,
            doc_apellidos, 
            doc_turno,
            doc_telefono,
            doc_estado,
            doc_colonia,
            doc_calle,
            doc_numero_calle,
            doc_especialidad,
            id_doctor,
          ],
          (err, result) => {
            if (err) {
              console.error("Error al actualizar los datos del doctor:", err);
              res.status(500).send("Error al actualizar los datos del doctor");
              return;
            }
            res.send("Datos del doctor actualizados correctamente");
          }
        );
      });

}