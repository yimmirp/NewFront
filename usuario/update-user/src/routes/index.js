const express = require('express');
const router = express.Router();

const Usuario = require('../models/user');
const Rols = require('../models/role'); 

router.get('/', (req, res) => {
    res.send('Hello update-users!')
});

router.put('/user/:_id', async(req, res) =>{
    const _id = req.params;
    

    const usuario = await Usuario.findByIdAndUpdate(
        _id,
        {
            $set: req.body
        },
        { useFindAndModify:false}
    ).catch(error=>res.status(500).json({error:error.message}));

    res.status(200).json({message:`${usuario.correoElectronico} actualizado`});


});

router.put('/user/asignarRol/:_id', async(req,res)=>{
    const _id = req.params;
    const {rol} = req.body;
    const usuario = await Usuario.findByIdAndUpdate(
        _id,
        {
            $push:{roles:rol}
        },
        {useFindAndModify:false}
    ).catch(error => res.status(500).json({error:error.message}));

    res.status(200).json({message:`${usuario.correoElectronico} rol asignado`});
})

module.exports = router;