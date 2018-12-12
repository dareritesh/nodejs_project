var express = require('express');
var router = express.Router();



var User = require('../model/user');
var Emp = require('../model/employe');
var Usersocial = require('../model/usersocial');
var Empsocial = require('../model/empsocial');


/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});


router.get('/hello',function(req, res, next){
console.log("helloooooooooooo");


           res.json({"msg": "welcome in first API."});

});



router.post('/insertintidatabase',function(req, res, next){
// req.body.fullname  req.body.username  req.body.age  req.body.address
    console.log("username===>>>"+req.body.username);

    console.log("2111111111");

    var userinsert = new User();
    console.log("22222222222222222222222222");

    userinsert.fullname = req.body.fullname;
    userinsert.username = req.body.username;
    userinsert.age = req.body.age;
    userinsert.address = req.body.address;
    userinsert.phoneno = req.body.phoneno;
    userinsert.emailid = req.body.emailid;
    userinsert.fname = req.body.fname;
    userinsert.mname = req.body.mname;

    console.log("userinsert==="+userinsert);
    console.log("233333333333333333333333333");

    userinsert.save(function (err) {
        if (err) {
           res.json({"status": "ERROR", "msg": "User not saved.", "err": err});

        } else {
           res.json({"status": "OK", "msg": "User saved successfully.", "data": userinsert});

        }
    });
});

//getRequestbyUser

router.post('/getRequestbyUsername', function(req, res, next){

    if(req.body.username){
        User.findOne({username:req.body.username}, function (err, userData) {
            if(err || !userData){
                res.json({ "status": "Error", "msg": "Error in fetching Request." });
            } else{
                res.json({ "status": 'ok', "message": "Request details fetched successfully","data":userData });
            }
        });
    }else{
        res.json({ "status": "Error", "msg": "Request details not found." });
    }

});

//getRequestbyid

router.post('/getRequestbyid', function(req, res, next){

	if(req.body.id){
		User.find({_id:req.body.id}, function(err, userData) {
			if (err || !userData) {
				res.json({"status": "Error", "msg":"Error in fetching Request"});
			} else{
				res.json({"status":'ok',"message":"Request details fetched successfully","data":userData});
			}	
			
		});
	}else{
		res.json({"status":"Error","msg":"Request details not found"});
	}
});

//getRequestbyage

router.post('/getRequestbyage',function(req,res,next){
	if(req.body.age){
		User.find({age:req.body.age}, function(err,userData){
			if(err|| !userData){
				res.json({"status":"Error","msg":"Error in fetching request"});

			} else{
				res.json({"status":'ok',"message":"request details fetching successfully","data":userData});

			}
		});
	}else{
		res.json({"status":"Error","msg":"reuest details not found"});
	}
});

//getRequestbyfname

router.post('/getRequestbyfname',function(req,res,next){
	if(req.body.fathername){
		User.find({fname:req.body.fathername}, function(err,userData){
			if(err|| !userData){
				res.json({"status":"Error","msg":"Error in fetching request"});

			} else{
				res.json({"status":'ok',"message":"request details fetching successfully","data":userData});

			}
		});
	}else{
		res.json({"status":"Error","msg":"reuest details not found"});
	}
});

//getRequestbymname

router.post('/getRequestbymname',function(req,res,next){
	if(req.body.mothername){
		User.find({mname:req.body.mothername}, function(err,userData){
			if(err|| !userData){
				res.json({"status":"Error","msg":"Error in fetching request"});

			} else{
				res.json({"status":'ok',"message":"request details fetching successfully","data":userData});

			}
		});
	}else{
		res.json({"status":"Error","msg":"reuest details not found"});
	}
});

/////////////// get API  for all user data //////////
router.get('/getallUserDetails', function(req, res, next){
	console.log("hhhhhhhhhhhhhhhhhhhhhhh");
        User.find({}, function (err, userData) {
            if(err || !userData){
                res.json({ "status": "Error", "msg": "Error in fetching Request." });
            } else{
                res.json({ "status": 'ok', "message": "Request details fetched successfully","data":userData });
            }
        });
});

//////////////////  employee APIs //////////////////

////   insert(save) employee details



router.post('/saveempdata', function(req ,res , next){

	console.log("req++"+req);
	console.log("2111111");

    
    var empinsert = new Emp();

	empinsert.fullname = req.body.fullname;
	empinsert.empname = req.body.empname;
	empinsert.age = req.body.age;
	empinsert.position = req.body.position;
	empinsert.workplace = req.body.workplace;

	console.log("empinsert==="+empinsert);
	console.log("23333333333333333");

	empinsert.save(function(err){
		if (err) {
			res.json({"status":"Error","msg":"emp not saved","err": err});
		} else{
			res.json({"status":"ok","message":"employe saved successfully","data":empinsert});
		}
	});
});


//// get all employee details API///////

router.get('/getallempdetails',function(req,res,next){
	console.log("hhhhhhhhhhhhhhhh");

	Emp.find({}, function(err, empdata){
		if(err || !empdata){
			res.json({"status":"Error","msg":"Error in fetching request"});
		} else {
			res.json({"status":'ok',"message":"Request details fetched successfull", "data": empdata});
		}
	});
});


///////findoneandUpdate API///////////

router.post('/updateemp',function(req,res,next){
	console.log("dsdddddddd======"+req.body.Empname);
	Emp.findOne({empname:req.body.Empname},function(err,empdetails){
		if(err || !empdetails){
			res.json({"status":"Error","msg":"emp not found"});
		} else{
			Emp.findOneAndUpdate({empname:req.body.Empname},{
				$set:{
					position: req.body.Position,
					workplace: req.body.Workplace
				}
			},{new: true},
			function(err,updateemp){
				if (err || !updateemp) {
					res.json({"status":"Error","msg":"Emp not updated","ERR":err});
					} else {
					res.json({"status":"ok","msg":"Emp updated successfully","data":updateemp});
					}
				}
			);
		}
	});
});

//////////findoneAndUpdate API for user Schema///////////

router.post('/updateuser',function(req,res,next){
	console.log("ppppppppp===="+req.body.Username);
	User.findOne({username:req.body.username},function(err,userdetails){
		if(err || !userdetails){
			res.json({"status":"Error","msg":"user not found"});
		} else {
			User.findOneAndUpdate({username:req.body.username},{
				$set:{
					emailid: req.body.Emailid,
					address: req.body.Address
				}
			},{new: true},
			function(err,updateuser) {
				if(err || !updateuser){
				res.json({"status":"Error","msg":"User not updated","ERR":err});
			}else {
				res.json({"status":"ok","msg":"User updated successfully","data":updateuser});
			}
			}
		);
		}
	});
});


////////// User social schema  ////////////////////

router.post('/saveusersocialdata',function(req ,res, next){
	console.log("req++"+req);
	console.log("2222222222");

	var usersocialinsert = new Usersocial();

	usersocialinsert.username =  req.body.Username;
    usersocialinsert.facebookid = req.body.Facebookid;
    usersocialinsert.city =  req.body.City;
    usersocialinsert.state = req.body.State;

    console.log("usersocialinsert++++"+usersocialinsert);
    console.log("33333333333");

    usersocialinsert.save(function(err){
    	if(err){
    		res.json({"status":"Error","msg":"user not saved","err":err});
    	} else {
    		res.json({"status":"ok","msg":"user saved successfully","data":usersocialinsert});
    	}
    });

});

/////////get all details of user social////////

router.get('/getallusersocialdetails',function(req , res , next){
	console.log("hhhhhhhhhhhhhhh");

	Usersocial.find({},function(err , usersocialdata){
		if (err || !usersocialdata) {
			res.json({"status":"Error","msg":"Error in fetching details"});

		} else {
			res.json({"status":"ok","msg":"Request details fetched successfully","data":usersocialdata});
		}
	});
});

//////getdetailbyusername/////////////

router.post('/getdetailbyusername', function(req ,res ,next){
	if(req.body.Username){
		Usersocial.find({username:req.body.Username}, function(err , usersocialdata){
			if(err || !usersocialdata){
				res.json({"status":"Error","msg":"ERROR in fetching request"});
			} else {
				res.json({"status":"ok","msg":"Request fetched successfully","data":usersocialdata});
			}
		}) ;
	} else  {
		res.json({"status":"Error","msg":"Request details not found"});
	}
});

////////findOneAndUpdate api for usersocial /////////////////

router.post('/updateusersocial', function(req, res ,next){
	console.log("eeeeeeeeee"+req.body.Username);
	Usersocial.findOne({username:req.body.Username},function(err , usersocialdetails){
		if(err || !usersocialdetails){
			req.json({"status":"Error","msg":"user not found"});
		} else {
			Usersocial.findOneAndUpdate({username:req.body.Username},{
				$set:{
					city: req.body.City,
					state: req.body.State
				}
			}, {new: true},
			function(err , updateusersocial){
				if(err || !updateusersocial){
				res.json({"status":"Error","msg":"user not updated","err":err});
			} else {
				res.json({"status":"ok", "msg":"update successfully","data":updateusersocial});
			}
			}
		);
        //req.json({"msg":"helll00000"});
    }

});
}); 

///////////////save api for empsocial schema//////////////////

router.post('/saveempsocialdata', function(req,res,next){
	console.log("req"+req.body.Username);
	console.log("2222222222222");

	var empsocialinsert = new Empsocial();

	empsocialinsert.username = req.body.Username;
	empsocialinsert.facebookid = req.body.Facebookid;
	empsocialinsert.city = req.body.City;
	empsocialinsert.state= req.body.State;

	console.log("empsocialinsert"+empsocialinsert);
	console.log("3333333333333");

	empsocialinsert.save(function(err){
		if(err) {
			res.json({"status":"Error","msg":" emp not saved","err":err});
		} else {
			res.json({"status":"ok","msg":"saved successfully","data": empsocialinsert});
		}
	});

});

///////////////getalldetails api///////////////////

router.get('/getallempsocialdetail', function(req ,res , next){
	console.log("jjjjjjjjjjjj");

	Empsocial.find({}, function(err , empsocialdata){
		if(err || !empsocialdata){
			res.json({"status":"ERROR","msg":"Error in fetching request"});
		} else {
			res.json({"status":"ok","msg":"Request fetched successfully","data":empsocialdata});

		}
	});
});

/////////////get empsocialdeailbyuser//////////////////////

router.post('/getempsocialdetailbyusername',function(req, res , next){
	 if (req.body.Username) {
	 	Empsocial.findOne({username:req.body.Username},function(err , empsocialdata){
	 		if(err || !empsocialdata){
	 			res.json({"status":"ERROR","msg":"ERROR in fetching details"});
	 		} else {

	 			var data ={
                    "USERNAME":req.body.Username,
					"state":empsocialdata.state,
					"city":empsocialdata.city
				};

	 			res.json({"status":"ok","msg":"Request fetched successfully","DATA":data});
	 		}
	 	});

	 } else {
	 	res.json({"status":"ERROR","msg":"Request details not found"});
	 }
});

////////////////findOneAndUpdate api for Empsocial///////////////

router.post('/findoneandUpdate', function(req , res , next){
	console.log("wwwwwwwwwww"+req.body.Username);

	Empsocial.findOne({username:req.body.Username},function(err ,empsocialdetails){
		if(err || !empsocialdetails){
			req.json({"status":"Error","msg":"user not found"});
		} else {
			Empsocial.findOneAndUpdate({username:req.body.Username},{
				$set:{
					city:req.body.City,
					state:req.body.State,
					emailid:req.body.email
				}
			} , {new: true},

			function(err , updateempsocial){
				if(err || !updateempsocial){
					res.json({"status":"ERROR","msg":"user not updated","err":err});
				} else {
					var mailoptions = {
						from:'testing@gmail.com',
						to:req.body.email,
						subject: 'yours details update successfull',
						// text: 'hi'+'user.username +', '\n\n you just reset your password of user account.'+'\n\n\nRegards,\',
						html:'<p>Hello<b>' + empsocialdetails.username + '</b>, <br><br><br> you just update your details of user account..<br> <br>Regards,<br>' + 'Team</p>'	
				};
			}
		 });
		}

	});
});

/////////////////////////delete user deatails from empsocial //////////////

router.post('/deleteuser', function(req,res,next){
	Empsocial.findOneAndRemove({username:req.body.Username},function(err,deletedUser){
		if (err) {
			res.status(HttpStatus.BAD_REQUEST).json({
				status:HttpStatus.BAD_REQUEST,
				result:'user not found.',
				data:[]
			});
		} else{
			if (deletedUser) {
				res.status(HttpStatus.OK).json({
					status:HttpStatus.OK,
					result:'user deleted successfully.',
					data:[]
				});
			} else{
				res.status(HttpStatus.BAD_REQUEST).json({
					status:HttpStatus.BAD_REQUEST,
					result:'user not found.',
					data:[]
				});
			}
		}
	})
});

module.exports = router;
