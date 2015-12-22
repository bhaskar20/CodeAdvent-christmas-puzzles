'use strict';
var fs = require("fs");

var findInArray= function (Arr,val1) {
	for(var i=0;i<Arr.length;i++){
		if(Arr[i]==val1){
			return true;
		}
	}
	return false;
}
var filterData = function (data) {
	var matrix = {};
	var cities =[];
	var dataArr = data.split("\n");
	var reg1 = /^(\w+)\sto\s(\w+)\s[=]\s(\d+)$/i;

	for(var i=0;i<dataArr.length;i++){
		var match = reg1.exec(dataArr[i]);
		var cityA = match[1];
		var cityB = match[2];
		var dist = match[3];

		if(!findInArray(cities,cityA)){
			cities.push(cityA);
		};
		if(!findInArray(cities,cityB)){
			cities.push(cityB);
		};
		var tem1 = [];
		tem1.push(cityB,dist);
		var tem2 = [];
		tem2.push(cityA,dist);
		if(!matrix.hasOwnProperty(cityA)){
			matrix[cityA]=[];
		};

		matrix[cityA].push(tem1);
		if(!matrix.hasOwnProperty(cityB)){
			matrix[cityB]=[];
		};
		matrix[cityB].push(tem2);
	};
	return [matrix,cities];
}
var minDist=function (matrix,city) {
	var dis = matrix[city];
	var min=0;
	for(var k=0;k<dis.length;k++){
		console.log(dis[k][1]);
	}
};

fs.readFile("./input.txt",function(err,data){
	if(err){
		console.log('Error:'+err);
	}

	data=data.toString();
	var matrix = filterData(data)[0];
	var cities = filterData(data)[1];
	//console.log(matrix,cities);

	for(var i=0;i<cities.length;i++){
		var visCities=[cities[i]];

		for(var j=0;i<cities.length;j++){
			if(!findInArray(visCities,cities[j])){
				minDist(matrix,cities[i]);
			}
		}
	}
});