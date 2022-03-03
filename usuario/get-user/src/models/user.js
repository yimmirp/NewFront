const mongoose = require('mongoose');
const {Schema} = mongoose;


const usuarioSchema = new Schema({
    nombre:{type:String, required:true},
    apellido:{type:String, required:true},
    correoElectronico:{type:String, required:true},
    password:{type:String, required:true},
    celular:{type:String, default:0},
    fechanac:{type:Date, default:null},
    foto:{type:String, required:true},
    dpi:{type:Number, default:null},
    direccion:{type:String, default:null},
    roles: [{type:Schema.Types.ObjectId, ref:'rols'}],
    esNormal:{type:Boolean, default:true}

});

module.exports = mongoose.model('usuarios', usuarioSchema);


