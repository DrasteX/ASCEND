const mongoose = require('mongoose');
const questlibSchema = mongoose.Schema({
    questTitle: {
        type: String,
        required: true
    },
    questDescription: {
        type: String,
        required: true
    },
    questObjective: {
        type: [String],
        required: true
    },
    questReward: {
        type: String,
        required: true
    },
    questRewardXP: {
        type: Number,
        required: true
    },
    questRewardItem:{
        type:[]
    }
},
    {
        timestamps: true
    }
)


const Questlib = mongoose.model('Questlib', questlibSchema);
module.exports = Questlib;