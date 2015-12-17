'use strict';

var fs = require("fs");

var grid=[];
var result=0;

for(var i=0;i<1000;i++){
	var temp=[];
	for(var j=0;j<1000;j++){
		temp.push(0);
	}
	grid.push(temp);
};
fs.readFile("./input.txt",function(err,data){
	if(err){
		console.log('Error:'+err);
	}

	data=data.toString();
	var dataArr = data.split("\n");
	var regexpat=/^(\w+\s?\w+)\s(\d+,\d+)\sthrough\s(\d+,\d+)$/i;
	for(var i=0;i<dataArr.length;i++){
		var match=regexpat.exec(dataArr[i]);
		var cmd = match[1];
		var start= match[2].split(",");
		var end= match[3].split(",");
		switch(cmd){
			case "turn on":
				for(var p=parseInt(start[0]);p<=parseInt(end[0]);p++){
					for(var q=parseInt(start[1]);q<=parseInt(end[1]);q++){
						grid[p][q]++;
					}
				}
				break;
			case "turn off":
				for(var p=parseInt(start[0]);p<=parseInt(end[0]);p++){
					for(var q=parseInt(start[1]);q<=parseInt(end[1]);q++){
						if(grid[p][q]>0){
							grid[p][q]--;
						}
					}
				}
				break;
			case "toggle":
				for(var p=parseInt(start[0]);p<=parseInt(end[0]);p++){
					for(var q=parseInt(start[1]);q<=parseInt(end[1]);q++){
						grid[p][q]=grid[p][q]+2;
					}
				}
				break;
		}
	};
	for(var i=0;i<1000;i++){
		for(var j=0;j<1000;j++){
			result+=grid[i][j];
		}
	};
console.log(result);
});