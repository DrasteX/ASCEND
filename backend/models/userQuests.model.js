const mongoose = require('mongoose');

const userQuestSchema = mongoose.Schema({
    _id: {
        type: String,
        required: true,
        unique: true
    },
    availableQuests : {
        type: Object,
    },
    completedQuests : {
        type: [String]
    },
    
    },{timestamps : true})

const UserQuest = mongoose.model('UserQuest', userQuestSchema);
module.exports = UserQuest;