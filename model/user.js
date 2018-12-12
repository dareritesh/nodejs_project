var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    fullname: {
        type: String,
        trim: true
    },
    username: {
        type:String,
        unique: true,
        trim: true,
        lowercase: true
    },
    age: {
        type:Number
    },

    address: {
        type: String
    },
    phoneno:{
        type: Number
    },
    emailid:{
        type: String
    },
    fname:{
        type: String
    },
    mname:{
        type: String
    }
    },{

    timestamps: true
});


var user = mongoose.model('user', userSchema);
module.exports = user;