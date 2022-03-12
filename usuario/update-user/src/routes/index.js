const express = require('express');
const router = express.Router();
const uuid = require('uuid');
const AWS = require('aws-sdk');
const aws_key = require('../cred-template.js');

const bucket = new AWS.S3(aws_key.S3);

const URL_BUCKET = 'https://ejemplo-ayd2.s3.us-east-2.amazonaws.com';

const connection = require('./dbconn');

router.get('/', (req, res) => {
    res.send('Hello update-users!')
});

router.put('/user/:id_user', (req, res) =>{
    const {id_user} = req.params;
    const {nombre, 
        apellido, 
        correoElectronico,
        password,
        celular,
        fechanac,
        dpi,
        direccion
    } = req.body;
    
    connection.query(`UPDATE users SET nombre ='${nombre}',
                                 apellido ='${apellido}',
                                 correoElectronico='${correoElectronico}',
                                 password='${password}',
                                 celular=${celular},
                                 fechanac='${fechanac}',
                                 dpi=${dpi},
                                 direccion='${direccion}'
                                 WHERE id_user =${id_user}`,
    (err, resutl) =>{
        if(err){
            return res.status(500).json({error:err.message});
        }
        return res.status(200).json({message:"Datos Actualizados con éxito"});
    })
});

router.put('/image/:id_user', (req, res) =>{
    const {id_user} = req.params;
    const {foto, extension} = req.body;

    //console.log(foto);
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
    
    connection.query(`UPDATE users SET foto='${path}' WHERE id_user =${id_user}`,
    (err, resutl) =>{
        if(err){
            return res.status(500).json({error:err.message});
        }
        return res.status(200).json({message:"Imagen actualizada con éxito"});
    })
});

router.put('/user/asignarRol/:id_user', (req,res)=>{
    const {id_user} = req.params;
    const {rol} = req.body;

    connection.query(`INSERT INTO asig_rol(id_user, id_rol) VALUES (${id_user}, ${rol})`,
    (err, resutl)=>{
        if(err){
            return res.status(500).json({error:error.message});
        }
        return res.status(200).json({message:'Rol asignado con éxito'});
    })

});

router.put('/user/desasignarRol/:id_user',(req,res)=>{
    const {id_user} = req.params;
    const {rol} = req.body;
    connection.query(`DELETE FROM asig_rol WHERE id_user= ${id_user} AND id_rol=${rol}`,
    (err, resutl)=>{
        if(err){
            return res.status(500).json({error:err.message});
        }
        return res.status(200).json({message:'Rol desasignado con éxito'});
    })
});


router.put('/user/actualizarRol/:id_user', (req, res)=>{
    const {id_user} = req.params;
    const {rol} = req.body;
    connection.query(`update asig_rol set id_rol = ${rol} where id_user = ${id_user}`,
    (err, resutl)=>{
        if(err){
            return res.status(500).json({error:err.message});
        }
        return res.status(200).json({message:'Rol actualizado con éxito'});
    })
})



module.exports = router;