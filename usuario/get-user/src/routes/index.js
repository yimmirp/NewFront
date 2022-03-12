const express = require('express');
const router = express.Router();
const connection = require('./dbconn');

router.get('/', (req, res) => {
    res.send('Hello get-users!')
});

router.get('/roles', (req, res) => {
    connection.query('SELECT id_rol, nombreRol FROM rol', 
    (err, result)=>{
        if(err){
            return res.status(500).json({error:err.message});
        }
        return res.status(200).json(result);
    });

});

router.get('/users', (req, res) =>{
    connection.query(`SELECT id_user, 
                        nombre, 
                        apellido, 
                        correoElectronico,
                        password,
                        celular,
                        fechanac,
                        foto,
                        dpi,
                        direccion,
                        esNormal
                        FROM users`, 
    (error, result)=>{
        if(error){
            return res.status(500).json({error:error.message});

        }
        return res.status(200).json(result);
    } );
    
});

router.get('/user/:id_user', (req, res) =>{
    const {id_user} = req.params;
    connection.query(`SELECT u.id_user,
                        u.nombre,
                        u.apellido,
                        u.correoElectronico,
                        u.password,
                        u.celular,
                        u.fechanac,
                        u.foto,
                        u.dpi,
                        u.direccion,
                        u.esNormal,
                        r.id_rol,
                        r.nombreRol
                        FROM users u INNER JOIN asig_rol ar on u.id_user = ar.id_user
                                    INNER JOIN rol  r on r.id_rol = ar.id_rol 
                                    WHERE u.id_user=${id_user}`, 
    (error, result)=>{
        if(error){
           return res.status(500).json({error:error.message});

        }
        return res.status(200).json(result);
    } );
    
})

router.post('/login',(req,res)=>{
    const {correoElectronico, password} = req.body;
    connection.query(`SELECT id_user FROM users WHERE password='${password}' AND correoElectronico='${correoElectronico}'`
    ,(error, result)=>{
        if(error){
            return res.status(500).json({error:error.message});    
        }
        if(result.length === 0){
            return res.status(401).json({message:"Credenciales inválidas" , ok:false});
        }

        return res.status(201).json({
            message:"Autenticado",
            id_user:result[0].id_user,
            ok:true
        });

    });





   
})


module.exports = router;