export const EditProduct = (app,db) =>{
    app.put('/EditProduct/:id', (req, res) => {
        const productId = req.params.id;
        const { pro_nombre, pro_precio, pro_cantidad } = req.body;
        const query = 'UPDATE producto SET pro_nombre = ?, pro_precio = ?, pro_cantidad = ? WHERE id_producto = ?';
      
        db.query(query, [pro_nombre, pro_precio, pro_cantidad, productId], (err, result) => {
          if (err) {
            console.error('Error editando el producto:', err);
            res.status(500).send('Error editando el producto');
          } else {
            res.send('Producto editado con éxito');
          }
        });
      });
}