const mongoose = require('mongoose');
const userInfoSchema = mongoose.Schema({
    _id: {
        type: String,
        required: true,
        unique: true
    },
    userRealName:{
        type: String,
    },
    userAge:{
        type: Number,
    },
    userAddress: {
        type: String,
    },
    userHobbies: {
        type: String,
    },
    userSkills: {
        type: String,
    },
    userInterests: {
        type: String,
    },
    userAbout: {
        type: String,
    },
    userStudent: {
        type: String,
    },
    userProfessional: {
        type: Boolean,
    }
},
{
    timestamps: true
}

)

const UserInfo = mongoose.model('UserInfo', userInfoSchema);
module.exports = UserInfo;
