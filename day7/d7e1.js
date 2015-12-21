'use strict';
var fs = require("fs");

var arrangeData = function(data) {
	var dataArr = data.split("\n");
	var cond1=/(\w+)?\s?(\w+)?(.+)?\s-\>\s(\w+)/i;

	var WireOp=[];

	for(var i=0;i<dataArr.length;i++){
		var match=cond1.exec(dataArr[i]);
		if(match[1]!=null && match[3]==null && match[2]!=null){
			//NOT a -> ss
			WireOp.push([2,match[1],match[2],match[4]]);

		}
		else if(match[3]==null && match[2]==null){
			//4 -> as
			WireOp.push([1,match[1],match[4]]);
		}
		else{
			//bn RSHIFT 2 -> bo
			WireOp.push([3,match[1],match[2],match[3].substr(1),match[4]]);
		}
	}
	return WireOp;
};
var findInArray = function(arr,x) {
	var i=0;
	if(arr.length!=0){
		for(i;i<arr.length;i++){
			if(arr[i][0]==x){
				return [true,i];
			}
		}
		return [false,null];
	}
	else{
		return [false,null];
	}
};
//OR,AND,RSHIFT,LSHIFT
//NOT
var onWireOne = function(arg,wire) {
	if(isNaN(arg[1])){
		if(findInArray(wire,arg[1])[0]){
			var res = wire[findInArray(wire,arg[1])[1]][1];
			return [arg[2],res];
		}
		else{
			return null;
		}
	}
	else{
		return [arg[2],arg[1]]; 
	}
};

var onWireTwo = function (arg,wire) {
	if(arg[1]=="NOT"){
		if(findInArray(wire,arg[2])[0]){
			var temp = wire[findInArray(wire,arg[2])[1]][1];
			var res = ~parseInt(temp);
			return [arg[3],res];
		}
		else{
			return null;
		}
	}
	else{
		console.log("undefined arg"+arg[0]);
	}
}

var onWireThree = function (arg,wire) {
	if(arg[2]=="AND"){
		if(isNaN(arg[1]) && isNaN(arg[3])){
			if(findInArray(wire,arg[1])[0] && findInArray(wire,arg[3])[0]){
				var temp1 = wire[findInArray(wire,arg[1])[1]][1];
				var temp2 = wire[findInArray(wire,arg[3])[1]][1];
				var res = parseInt(temp1) & parseInt(temp2);
				return [arg[4],res];
			}
			else{
				return null;
			}
		}
		else if(isNaN(arg[1]) && !isNaN(arg[3])){
			if(findInArray(wire,arg[1])[0]){
				var temp1 = wire[findInArray(wire,arg[1])[1]][1];
				var res = parseInt(temp1) & parseInt(arg[3]);
				return [arg[4],res];
			}
			else{
				return null;
			}
		}
		else if(!isNaN(arg[1]) && isNaN(arg[3])){
			if(findInArray(wire,arg[3])[0]){
				var temp1 = wire[findInArray(wire,arg[3])[1]][1];
				var res = parseInt(temp1) & parseInt(arg[1]);
				return [arg[4],res];
			}
			else{
				return null;
			}
		}
		else{
			return null;
		} 
	}
	else if(arg[2]=="OR"){
		if(isNaN(arg[1]) && isNaN(arg[3])){
			if(findInArray(wire,arg[1])[0] && findInArray(wire,arg[3])[0]){
				var temp1 = wire[findInArray(wire,arg[1])[1]][1];
				var temp2 = wire[findInArray(wire,arg[3])[1]][1];
				var res = parseInt(temp1) | parseInt(temp2);
				return [arg[4],res];
			}
			else{
				return null;
			}
		}
		else if(isNaN(arg[1]) && !isNaN(arg[3])){
			if(findInArray(wire,arg[1])[0]){
				var temp1 = wire[findInArray(wire,arg[1])[1]][1];
				var res = parseInt(temp1) | parseInt(arg[3]);
				return [arg[4],res];
			}
			else{
				return null;
			}
		}
		else if(!isNaN(arg[1]) && isNaN(arg[3])){
			if(findInArray(wire,arg[3])[0]){
				var temp1 = wire[findInArray(wire,arg[3])[1]][1];
				var res = parseInt(temp1) | parseInt(arg[1]);
				return [arg[4],res];
			}
			else{
				return null;
			}
		}
		else{
			return null;
		} 
	}
	else if(arg[2]=="RSHIFT"){
		if(findInArray(wire,arg[1])[0]){
			var temp1 = parseInt(wire[findInArray(wire,arg[1])[1]][1]);
			var temp2 = parseInt(arg[3]);
			var res = temp1 >>> temp2;
			return [arg[4],res];
		}
		else{
			return null;
		}
	}
	else if(arg[2]=="LSHIFT"){
		if(findInArray(wire,arg[1])[0]){
			var temp1 = parseInt(wire[findInArray(wire,arg[1])[1]][1]);
			var temp2 = parseInt(arg[3]);
			var res = temp1 << temp2;
			return [arg[4],res];
		}
		else{
			return null;
		}		
	}
	else{
		console.log("unsupported opeartion"+ arg);
	}
}

fs.readFile("./input.txt",function(err,data){
	if(err){
		console.log('Error:'+err);
	}
	data=data.toString();
	var wire=[];
	var wireOp = arrangeData(data);
	var fin=[];
	while(fin.length!=wireOp.length){
		for(var i=0;i<wireOp.length;i++){
			if(wireOp[i][0]==1){
				if(onWireOne(wireOp[i],wire)){
					wire.push(onWireOne(wireOp[i],wire));
					wireOp[i][0]="fin";
					fin.push("fin");
				}
			}
			else if(wireOp[i][0]==2){
				if(onWireTwo(wireOp[i],wire)){
					wire.push(onWireTwo(wireOp[i],wire));
					wireOp[i][0]="fin";
					fin.push("fin");	
				}
			}
			else if(wireOp[i][0]==3){
				//wireOp[i][0]==3
				if(onWireThree(wireOp[i],wire)){
					wire.push(onWireThree(wireOp[i],wire));
					wireOp[i][0]="fin";
					fin.push("fin");
				}
			}
			else{
				//console.log(wireOp[i][0]);
			}
			//console.log(wire);
		}
	}
	console.log(wire[findInArray(wire,"a")[1]]);
});