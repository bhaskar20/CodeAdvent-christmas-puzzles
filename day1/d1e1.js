var fs = require("fs");

fs.readFile("./input.txt",function(err,data){
	var res=0;
	if(err){
		console.log('Error:'+err);
	}
	data=data.toString();
	for(var i=0;i<data.length;i++){
		if(data[i]==="("){
			res++;
		}
		else if(data[i]===")"){
			res--;
		}
		else{
			console.log("wrong input");
		}
		//console.log(res);
	}
	console.log(res);
});