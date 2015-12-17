'use strict';

var fs = require("fs");

var count = 0;
fs.readFile("./input.txt",function(err,data){
	if(err){
		console.log('Error:'+err);
	}

	data=data.toString();
	var dataArr = data.split("\n");
	var cond2=/(\w\w)\w*\1/i;
	var cond1=/(\w).\1/i;
	for(var i=0;i<dataArr.length;i++){
		var flag=false;
		if(cond1.test(dataArr[i]) && cond2.test(dataArr[i])){
			flag=true;
		}
		if(flag){
			count++;
		}
	}
	console.log(count);
});