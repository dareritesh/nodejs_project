var mongoose = require('mongoose');

var empsocialschema = new mongoose.Schema({

	username:{
		type: String,
		trim: true,
		unique: true
	},
	emailid:{
		type: String,
		trim: true
	},

	facebookid:{
		type: String,
		unique: true
	},

	city:{
		type: String
    },

	state:{
		type: String
	}
},{

	timestamps: true
});

var empsocial = mongoose.model('empsocial', empsocialschema);
module.exports = empsocial;