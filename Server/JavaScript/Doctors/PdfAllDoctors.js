export const PdfAllDoctors = (app , db, fs,PDFDocument) =>{

    app.get("/generateDoctorReport", (req, res) => {
      const sql = 'SELECT * FROM doctor';
        db.query(sql, (err, results) => {
          if (err) {
            console.error("Error al obtener los doctores:", err);
            res.status(500).send("Error al obtener los doctores");
            return;
          }
      
          const doc = new PDFDocument();
          const filePath = path.join(__dirname, "Reporte_Doctors.pdf");
          const stream = fs.createWriteStream(filePath);
      
          doc.pipe(stream);
      
          doc.fontSize(20).text("Reporte de Doctores", { align: "center" });
      
          doc.moveDown();
      
          results.forEach((doctor, index) => {
            doc.fontSize(12).text(`ID: ${doctor.id_doctor}`);
            doc.text(`Nombre: ${doctor.doc_nombre}`);
            doc.text(`Apellidos: ${doctor.doc_apellidos}`);
            doc.text(`Turno: ${doctor.doc_turno}`);
            doc.text(`Teléfono: ${doctor.doc_telefono}`);
            doc.text(`Estado: ${doctor.doc_estado}`);
            doc.text(`Colonia: ${doctor.doc_colonia}`);
            doc.text(`Calle: ${doctor.doc_calle}`);
            doc.text(`Número: ${doctor.doc_numero_calle}`);
            doc.text(`Especialidad: ${doctor.doc_especialidad}`);
            doc.moveDown();
      
            if (index < results.length - 1) {
              doc.addPage();
            }
          });
      
          doc.end();
      
          stream.on("finish", () => {
            res.download(filePath, "Reporte_Doctors.pdf", (err) => {
              if (err) {
                console.error("Error al enviar el PDF:", err);
                res.status(500).send("Error al enviar el PDF"); 
              }
      
              // Elimina el archivo temporal después de enviarlo
              fs.unlink(filePath, (err) => {
                if (err) {
                  console.error("Error al eliminar el archivo temporal:", err);
                }
              });
            });
          });
        });
      });
}