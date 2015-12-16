var fs = require("fs");

fs.readFile("./input.txt",function(err,data){
	var visitedHouses=1;
	var visited = [];
	if(err){
		console.log('Error:'+err);
	}

	data=data.toString();
	var santaCurrent=[0,0];
	var robosantaCurrent=[0,0];
	visited.push(santaCurrent);
	for(var i=0;i<data.length;i++){
		if(i%2==1){
			if(data[i]==="^"){
				var flag=false;
				for(var j=0;j<visited.length;j++){
					if(santaCurrent[0]==visited[j][0] && santaCurrent[1]+1==visited[j][1]){
						flag=true;
						break;
						//console.log(flag);
						//console.log(current);
					}
				}
				if(!flag){
					visitedHouses++;
					visited.push([santaCurrent[0],santaCurrent[1]+1]);
				}
				santaCurrent=[santaCurrent[0],santaCurrent[1]+1];
				// console.log(current);
				// console.log(visitedHouses);
				// console.log(visited);
				//console.log(current);
			}
			if(data[i]==="v"){
				var flag=false;
				for(var j=0;j<visited.length;j++){
					if(santaCurrent[0]==visited[j][0] && santaCurrent[1]-1==visited[j][1]){
						flag=true;
						break;
						//console.log(flag);
						//console.log(current);
					}
				}
				if(!flag){
					visitedHouses++;
					visited.push([santaCurrent[0],santaCurrent[1]-1]);
				}
				santaCurrent=[santaCurrent[0],santaCurrent[1]-1];
				// console.log(current);
				// console.log(visitedHouses);
				// console.log(visited);
				//console.log(current);
			}
			if(data[i]===">"){
				var flag=false;
				for(var j=0;j<visited.length;j++){
					if(santaCurrent[0]+1==visited[j][0] && santaCurrent[1]==visited[j][1]){
						flag=true;
						break;
						//console.log(flag);
						//console.log(current);
					}
				}
				if(!flag){
					visitedHouses++;
					visited.push([santaCurrent[0]+1,santaCurrent[1]]);
				}
				santaCurrent=[santaCurrent[0]+1,santaCurrent[1]];
				// console.log(current);
				// console.log(visitedHouses);
				// console.log(visited);
				//console.log(current);
			}
			if(data[i]==="<"){
				var flag=false;
				for(var j=0;j<visited.length;j++){
					if(santaCurrent[0]-1==visited[j][0] && santaCurrent[1]==visited[j][1]){
						flag=true;
						break;
						//console.log(flag);
						//console.log(current);
					}
				}
				if(!flag){
					visitedHouses++;
					visited.push([santaCurrent[0]-1,santaCurrent[1]]);
				}
				santaCurrent=[santaCurrent[0]-1,santaCurrent[1]];
				// console.log(current);
				// console.log(visitedHouses);
				// console.log(visited);
				//console.log(current);
			}
		}
		else{
			if(data[i]==="^"){
				var flag=false;
				for(var j=0;j<visited.length;j++){
					if(robosantaCurrent[0]==visited[j][0] && robosantaCurrent[1]+1==visited[j][1]){
						flag=true;
						break;
						//console.log(flag);
						//console.log(current);
					}
				}
				if(!flag){
					visitedHouses++;
					visited.push([robosantaCurrent[0],robosantaCurrent[1]+1]);
				}
				robosantaCurrent=[robosantaCurrent[0],robosantaCurrent[1]+1];
				// console.log(current);
				// console.log(visitedHouses);
				// console.log(visited);
				//console.log(current);
			}
			if(data[i]==="v"){
				var flag=false;
				for(var j=0;j<visited.length;j++){
					if(robosantaCurrent[0]==visited[j][0] && robosantaCurrent[1]-1==visited[j][1]){
						flag=true;
						break;
						//console.log(flag);
						//console.log(current);
					}
				}
				if(!flag){
					visitedHouses++;
					visited.push([robosantaCurrent[0],robosantaCurrent[1]-1]);
				}
				robosantaCurrent=[robosantaCurrent[0],robosantaCurrent[1]-1];
				// console.log(current);
				// console.log(visitedHouses);
				// console.log(visited);
				//console.log(current);
			}
			if(data[i]===">"){
				var flag=false;
				for(var j=0;j<visited.length;j++){
					if(robosantaCurrent[0]+1==visited[j][0] && robosantaCurrent[1]==visited[j][1]){
						flag=true;
						break;
						//console.log(flag);
						//console.log(current);
					}
				}
				if(!flag){
					visitedHouses++;
					visited.push([robosantaCurrent[0]+1,robosantaCurrent[1]]);
				}
				robosantaCurrent=[robosantaCurrent[0]+1,robosantaCurrent[1]];
				// console.log(current);
				// console.log(visitedHouses);
				// console.log(visited);
				//console.log(current);
			}
			if(data[i]==="<"){
				var flag=false;
				for(var j=0;j<visited.length;j++){
					if(robosantaCurrent[0]-1==visited[j][0] && robosantaCurrent[1]==visited[j][1]){
						flag=true;
						break;
						//console.log(flag);
						//console.log(current);
					}
				}
				if(!flag){
					visitedHouses++;
					visited.push([robosantaCurrent[0]-1,robosantaCurrent[1]]);
				}
				robosantaCurrent=[robosantaCurrent[0]-1,robosantaCurrent[1]];
				// console.log(current);
				// console.log(visitedHouses);
				// console.log(visited);
				//console.log(current);
			}
		}
	}
	console.log(visitedHouses);
	//console.log(visited);
});