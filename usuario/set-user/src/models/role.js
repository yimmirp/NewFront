const mongoose = require('mongoose');
const {Schema} = mongoose;



const roleSchema = new Schema({
    nombreRol:String,
    nombres:[String]

});

module.exports = mongoose.model('rols', roleSchema);