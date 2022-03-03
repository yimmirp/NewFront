const express = require('express');
const router = express.Router();
const uuid = require('uuid');
const AWS = require('aws-sdk');
const aws_key = require('../cred-template');
const bucket = new AWS.S3(aws_key.S3);

const URL_BUCKET = 'https://ejemplo-ayd2.s3.us-east-2.amazonaws.com';

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
        roles,
        extension
    } = req.body;
    
    const usuario = await Usuario.findOne({correoElectronico});
    if(usuario){
        res.status(400).json({result:"Usuario ya registrado"});
    }else {
        let param ={
            Bucket: "ejemplo-ayd2",
            ACL:"public-read"
        }

        let path = null;
    
        if(extension ==='jpg' || extension ==='png'){
            const NOMBRE_FOTO = `imagenes-perfil/${uuid.v4()}.${extension}`;
            let buff = new Buffer.from(foto, 'base64');
            param['Key'] = NOMBRE_FOTO;
            param['Body'] = buff;
            param['ContentType'] = 'image' ;
            
            bucket.putObject(param).promise();
            path = URL_BUCKET+'/'+NOMBRE_FOTO;
        }
    

        const newUser = new Usuario({
            
                nombre,
                apellido,
                correoElectronico,
                password,
                foto: path,
                extension,
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