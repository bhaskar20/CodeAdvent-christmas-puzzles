var fs = require("fs");

fs.readFile("./test.txt",function(err,data){
	flag=false;

	if(err){
		console.log('Error:'+err);
	}

	data=data.toString();

	cond1=/\w*[aeiou]\w*[aeiou]\w*[aeiou]\w*/ig;
	

}