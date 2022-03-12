const express = require('express');
const router = express.Router();
const uuid = require('uuid');
const AWS = require('aws-sdk');
const aws_key = require('../cred-template');
const bucket = new AWS.S3(aws_key.S3);

const URL_BUCKET = 'https://ejemplo-ayd2.s3.us-east-2.amazonaws.com';

const connection = require('./dbconn');



router.get('/', (req, res) => {
    res.send('Hello users!')
});

router.post('/user', (req, res) =>{
    const {nombre, 
        apellido, 
        correoElectronico,
        password,
        celular,
        fechanac,
        foto,
        dpi,
        direccion,
        id_rol,
        extension
    } = req.body;

    //console.log(req.body);

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

    // let newUser = {
    //     foto: path,
    //     extension,
    //     fechanac:fechanac ? new Date(fechanac) : null ,
    //     celular: celular ? celular : 0,
    //     dpi: dpi ? dpi: 0,
    //     direccion: direccion ? direccion: null,
    // };

    connection.query(`CALL sp_insert_user('${nombre}',
                                    '${apellido}',
                                    '${correoElectronico}',
                                    '${password}',
                                    ${celular},
                                    ${fechanac ? "'" + fechanac+"'" :'null'},
                                    '${path}',
                                    ${dpi } ,
                                    ${direccion ?"'"+direccion+"'" : 'null' },
                                    TRUE,
                                    ${id_rol})`, 
    (err, result) =>{
        if(err){
            console.log(err);
            return res.status(500).json({error:err.message});
        }

        if(result[0][0].encontrado){
            return res.status(401).json({message:'Usuario ya Registrado!', ok:false});

        }

        return res.status(200).json({message:'Registrado',id_user:result[0][0].id_user});
    });
   
    

});







module.exports = router;