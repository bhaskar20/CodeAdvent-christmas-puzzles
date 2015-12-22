'use strict';
var fs = require("fs");

fs.readFile("./input.txt",function(err,data){
	if(err){
		console.log('Error:'+err);
	}
	var count = 0;
	data=data.toString();
	var dataArr = data.split("\n");
	var match;
	for(var i=0;i<dataArr.length;i++){
		var cond1=/\\\\/g;
		var cond2=/\\["]/g;
		var cond3=/\\x[0-9a-f]{2}/g;
		while(match=cond1.exec(dataArr[i].substr(1,dataArr[i].length-2))){
			console.log(match);
			count+=2;
		};
		while(match=cond2.exec(dataArr[i].substr(1,dataArr[i].length-2))){
			console.log(match);
			count+=2;
		}
		while(match=cond3.exec(dataArr[i].substr(1,dataArr[i].length-2))){
			console.log(match);
			count+=1;
		}
		count+=4;
	}
	console.log(count);
});