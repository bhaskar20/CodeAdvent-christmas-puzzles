var fs = require("fs");

fs.readFile("./input.txt",function(err,data){
	var res=0;
	var base=-1;
	pos=[];
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
		if(res==base){
			console.log("reached basement");
			pos.push(i+1);
		}
		//console.log(res);
	}
	console.log(res);
	console.log(pos[0]);
});