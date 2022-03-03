const express = require('express');
const router = express.Router();

const Usuario = require('../models/user');
const Rols = require('../models/role'); 

router.get('/', (req, res) => {
    res.send('Hello users!')
});

router.post('/user', async(req, res) =>{
    const {nombre, 
        apellido, 
        correoElectronico,
        password,
        celular,
        fechanac,
        foto,
        dpi,
        direccion,
        roles
    } = req.body;
    console.log(req.body);
    const usuario = await Usuario.findOne({correoElectronico});
    if(usuario){
        res.status(400).json({result:"Usuario ya registrado"});
    }else {
        
        const newUser = new Usuario({
            
                nombre,
                apellido,
                correoElectronico,
                password,
                foto,
                roles: roles ? roles: [],
                fechanac:fechanac ? new Date(fechanac) : null ,
                celular: celular ? celular : 0,
                dpi: dpi ? dpi: 0,
                direccion: direccion ? direccion: null
            }
        );
        await newUser.save().
        catch(error =>res.status(400).json({error:error.message}));
        res.status(200).json(newUser);
    }

});

router.post('/role', async(req, res) =>{
    const {nombreRol} = req.body;
    const rol = await Rols.findOne({nombreRol});
    if(rol){
        res.status(400).json({result:"Rol ya registrado"});
    }else {
        const newRol = new Usuario(req.body);
        await newRol.save().
        catch(error =>res.status(400).json({error:error.message}));
        res.status(200).json(newRol);
    }

})


module.exports = router;