
export const GetEmpleados = (app , db)=>{
    app.get("/empleados",(req,res)=>{
    
        db.query('SELECT * FROM empleados',
        (err,result)=>{
            if(err){
                console.log(err);
            }else{
                res.send(result);
            }
        }
    );
    });
    
}

