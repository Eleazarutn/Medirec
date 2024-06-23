export const GetUsers = (app,db) =>{

    app.get("/GetAllUsers", (req, res) => {
        const query = 'SELECT * FROM usuario';
    
        db.query(query, (err, result) => {
            if (err) {
                console.log(err);
                res.status(500).send('Error recuperando los usuarios');
            } else {
                res.json(result);
            }
        });
    });
    
}
