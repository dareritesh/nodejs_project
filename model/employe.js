var mongoose = require('mongoose');

var empSchema = new mongoose.Schema({
	fullname:{
		type: String,
		trim: true

	},
	empname:{
		type: String,
		unique: true,
		trim: true,
		lowercase: true
	},
	age:{
		type: Number,

    },
    position:{
     	type: String,
     	trim: true
    },
    workplace:{
    	type: String,
    	trim: true
    }

   },{

	timestamps: true

});

var employe = mongoose.model('employe' ,empSchema);
module.exports = employe;