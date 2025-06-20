const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, unique: true },
    password: { type: String, required: true },
    cartData: { type: Object}, 
    date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('userInfo', userSchema);
