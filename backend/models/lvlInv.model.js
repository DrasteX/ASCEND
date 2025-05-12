const mongoose = require('mongoose')

const LvlInvSchema = mongoose.Schema({
    _id:{
        type: String,
        required: true,
        unique: true
    },
    xp:{
        type:Number,
        default: 0,
    },
    level:{
        type:Number,
        default: 1,
    },
    inventoryItems:{
        type:[String],
        default:[]
    }

})


const LvlInv = mongoose.model('LvlInv', LvlInvSchema);
module.exports = LvlInv