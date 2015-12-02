var fs = require("fs");


fs.readFile("./input.txt",function(err,data){
	var area=0;
	var x;
	if(err)console.log("Error"+err);

	data=data.toString();
	var reg=/(\d+)x(\d+)x(\d+)\n/g;
	while(x=reg.exec(data)){
		//console.log(x[1],x[2],x[3]);
		area+=2*x[1]*x[2]+2*x[1]*x[3]+2*x[3]*x[2]+Math.min(x[1]*x[2],Math.min(x[1]*x[3],x[3]*x[2]));
	}
	console.log(area);
});