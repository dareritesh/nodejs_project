var mongoose = require('mongoose');

var usersocialschema = new mongoose.Schema({

username: {

	type: String,
    trim: true,
    unique: true
},

facebookid: {

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

var usersocial = mongoose.model('usersocial',usersocialschema);
module.exports = usersocial;