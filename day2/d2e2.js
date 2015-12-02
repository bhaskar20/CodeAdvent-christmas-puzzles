var fs = require("fs");

fs.readFile("./input.txt",function(err,data){
	var length=0;
	if(err)console.log("Error"+err);

	data=data.toString();
	count=0;
	var reg=/(\d+)x(\d+)x(\d+)\n/g;
	while(x=reg.exec(data)){
		//console.log(x[1],x[2],x[3]);
		length+=2*Math.min(parseInt(x[1])+parseInt(x[2]),Math.min(parseInt(x[1])+parseInt(x[3]),
			parseInt(x[3])+parseInt(x[2])))+parseInt(x[1])*parseInt(x[2])*parseInt(x[3]);
		if(count<4){
			console.log(x[1],x[2],x[3]);
			console.log(Math.min(parseInt(x[1])+parseInt(x[2]),Math.min(parseInt(x[1])+parseInt(x[3]),
			parseInt(x[3])+parseInt(x[2]))));
			console.log(length);
			count++;
		}
	}
	console.log(length);
});