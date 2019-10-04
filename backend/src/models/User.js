const mongoose = require('mongoose');

// criando a estrutura dos dados / schema

const UserSchema = new mongoose.Schema({
    email: String,
});

module.exports = mongoose.model('User', UserSchema);