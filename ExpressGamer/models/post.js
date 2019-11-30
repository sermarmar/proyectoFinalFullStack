let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let postSchema = new Schema({
    titular: String,
    descripcion: String,
    texto: String,
    fechaAlta: String,
    categoria: String
});


module.exports = mongoose.model('Post', postSchema);