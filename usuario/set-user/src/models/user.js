const mongoose = require('mongoose');
const {Schema} = mongoose;
const {roleSchema} = require('./role');


const usuarioSchema = new Schema({
    nombre:{type:String, required:true},
    apellido:{type:String, required:true},
    correoElectronico:{type:String, required:true},
    password:{type:String, required:true},
    celular:Number,
    fechanac:Date,
    foto:{type:String, required:true},
    dpi:Number,
    direccion:String,
    roles: [{type:Schema.Types.ObjectId, ref:'rols'}],
    esNormal:{type:Boolean, default:true}

});

module.exports = mongoose.model('usuarios', usuarioSchema);


