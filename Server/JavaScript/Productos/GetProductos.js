export const GetProducts= ( app , db) =>{
    app.get("/GetAllProducts", (req, res) => {
        const query = 'SELECT * FROM producto';
    
        db.query(query, (err, result) => {
            if (err) {
                console.log(err);
                res.status(500).send('Error recuperando los productos');
            } else {
                res.json(result);
            }
        });
    });
    
}