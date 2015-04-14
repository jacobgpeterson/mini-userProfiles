var app = angular.module("userProfiles");
app.service("mainService", function(){
	var data =
	[
	{
	    "id": 1,
	    "first_name": "george",
	    "last_name": "bluth",
	    "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg"
	},
	{
	    "id": 2,
	    "first_name": "lucille",
	    "last_name": "bluth",
	    "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg"
	},
	{
	    "id": 3,
	    "first_name": "oscar",
	    "last_name": "bluth",
	    "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/olegpogodaev/128.jpg"
	}
	]
	this.getUsers = function(){
		return data;
	}

	// console.log("Console log this");

	// this.myProperty = "this is a property";
	// this.someotherProperty = [1, 2, 3, 4];
	// this.countTheOdds = function(str){
	// 	str=str.split("");
	// 	var odds = 0
	// 	for(var i = 0; i < str.length; i++){
	// 		if(Number(str[i]) %2 === 1){
	// 			odds++;
	// 		}
	// 	}
	// 	return odds;
	// }
	// console.log(this);

});

