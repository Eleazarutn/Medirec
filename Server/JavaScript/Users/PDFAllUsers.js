
export const PdfAllUsers = (app, db, fs, PDFDocument) => {
  app.get("/generateUserReport", (req, res) => {
    const sql = 'SELECT * FROM usuario';
    db.query(sql, (err, results) => {
      if (err) {
        console.error("Error al obtener los usuarios:", err);
        res.status(500).send("Error al obtener los usuarios");
        return;
      }
  
      const doc = new PDFDocument();
      const filePath = path.join(__dirname, "Reporte_Usuarios.pdf");
      const stream = fs.createWriteStream(filePath);
  
      doc.pipe(stream);
  
      doc.fontSize(20).text("Reporte de Usuarios", { align: "center" });
   
      doc.moveDown();
  
      results.forEach((user, index) => {
        doc.fontSize(12).text(`ID: ${user.id_usuario}`);
        doc.text(`Nombre: ${user.usa_nombre}`);
        doc.text(`Apellidos: ${user.usa_apellidos}`);
        doc.text(`Edad: ${user.usa_edad}`);
        doc.text(`Teléfono: ${user.usa_telefono}`);
        doc.text(`Estado: ${user.usa_estado}`);
        doc.text(`Colonia: ${user.usa_colonia}`);
        doc.text(`Calle: ${user.usa_calle}`);
        doc.text(`Alergias: ${user.usa_alergias}`);
        doc.text(`Email: ${user.usa_email}`);
        doc.moveDown();
  
        if (index < results.length - 1) {
          doc.addPage();
        }
      });
  
      doc.end();
  
      stream.on("finish", () => {
        res.download(filePath, "Reporte_Usuarios.pdf", (err) => {
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
};
