export const GetDoctors = (app,db) =>{

    app.get("/GetAllDoctors", (req, res) => {
        const query = 'SELECT * FROM doctor';
    
        db.query(query, (err, result) => {
            if (err) {
                console.log(err);
                res.status(500).send('Error recuperando los doctores');
            } else {
                res.json(result);
            }
        });
    });
    
}
