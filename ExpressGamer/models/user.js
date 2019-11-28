const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let userSchema = new Schema({
    mail: String,
    username: String,
    password: String
});

module.exports = mongoose.model('User', userSchema);