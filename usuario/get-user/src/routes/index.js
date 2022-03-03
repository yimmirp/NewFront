const express = require('express');
const router = express.Router();

const Usuario = require('../models/user');
const Rols = require('../models/role'); 
const user = require('../../../set-user/src/models/user');

router.get('/', (req, res) => {
    res.send('Hello get-users!')
});

router.get('/users', async(req, res) =>{
    Usuario.find()
    .populate({path:'roles', options:{strictPopulate:false}})
    .exec((err, users) => {
        if(err){
            res.status(500).json({error:err.message});
        }
        res.status(200).json(users);
    });
    
});

router.get('/user/:_id', async(req, res) =>{
    const {_id} = req.params;
    
    Usuario.findById(_id)
    .populate({path:'roles', options:{strictPopulate:false}})
    .exec((err, user) =>{
        if(err){
            res.status(400).json({error:err.message});
        }
        res.status(200).json(user);
    });

    
    
})

router.post('/login', async(req,res)=>{
    const {correoElectronico, password} = req.body;
    const usuario = await Usuario.find({
        correoElectronico,
        password
    }).catch(error =>{
        res.status(500).json({error:error.message});
    });

    if(usuario.length === 0){
        res.status(401).json({message:"Credenciales inválidas"});
    }

    res.status(201).json({
        message:"Autenticado",
        _id:usuario[0]._id
    });



   
})


module.exports = router;