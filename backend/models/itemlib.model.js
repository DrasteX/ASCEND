const mongoose = require('mongoose');

const itemLibSchema = mongoose.Schema({
    
    itemName:{
        type: String,
        required: true,
        default: '',
    },
    itemDescription:{
        type: String,
        required: true,
    },
    itemURL:{
        type: String,
        default:''
    }


})


const itemlib = mongoose.model('itemlib', itemLibSchema);
module.exports = itemlib;