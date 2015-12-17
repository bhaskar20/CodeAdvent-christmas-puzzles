var fs = require("fs");

var count = 0;
fs.readFile("./input.txt",function(err,data){
	if(err){
		console.log('Error:'+err);
	}

	data=data.toString();
	dataArr = data.split("\n");
	cond1=/\w*[aeiou]\w*[aeiou]\w*[aeiou]\w*/i;
	
	for(var i=0;i<dataArr.length;i++){
		flag=false;
		for(j=0;j<dataArr[i].length-1;j++){
			if(dataArr[i][j]===dataArr[i][j+1]){
				flag=true;
				break;
			}
		}
		if(!cond1.test(dataArr[i])){
			flag=false;
		}
		if(/ab/gi.test(dataArr[i]) || /cd/gi.test(dataArr[i]) || /pq/gi.test(dataArr[i]) || /xy/gi.test(dataArr[i])){
			flag = false;
		}
		if(flag){
			count++;
		}
	}
	console.log(count);
});