const mongoose = require('mongoose');

const accountSchema = mongoose.Schema({
    _id: {
        type: String,
        required: true,
        unique: true
    },
    username : {
        type: String,
        required: true
    },
    password : {
        type: String,
        required: true
    }},{timestamps : true})


const Account = mongoose.model('Account', accountSchema);
module.exports = Account;