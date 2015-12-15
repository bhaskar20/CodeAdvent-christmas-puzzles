var fs = require("fs");

fs.readFile("./test.txt",function(err,data){
	var visitedHouses=1;
	var visited = [];
	if(err){
		console.log('Error:'+err);
	}

	data=data.toString();
	var current=[0,0];
	visited.push(current);
	for(var i=0;i<data.length;i++){
		if(data[i]==="^"){
			for(var j=0;j<visited.length;j++){
				var flag=false;
				if(current[0]==visited[j][0] && current[1]+1==visited[j][1]){
					flag=true;
					//console.log(flag);
					console.log(current);
				}
			}
			if(!flag){
				visitedHouses++;
				visited.push([current[0],current[1]++]);
			}
			current[1]++;
			// console.log(current);
			// console.log(visitedHouses);
			// console.log(visited);
			console.log(current);
		}
		if(data[i]==="v"){
			for(var j=0;j<visited.length;j++){
				var flag=false;
				if(current[0]==visited[j][0] && current[1]-1==visited[j][1]){
					flag=true;
				}
			}
			if(!flag){
				visitedHouses++;
				visited.push([current[0],current[1]--]);
			}
			current[1]--;
			console.log(current);
			/*console.log(visitedHouses);
			console.log(visited);
			console.log(current);*/
		}
		if(data[i]===">"){
			for(var j=0;j<visited.length;j++){
				var flag=false;
				if(current[0]+1==visited[j][0] && current[1]==visited[j][1]){
					flag=true;
					break;
					console.log(flag);
					console.log(current);
				}
			}
			if(!flag){
				visitedHouses++;
				//console.log(visitedHouses);
				console.log(current);
				visited.push([current[0]++,current[1]]);
			}
			current[0]++;
			console.log(current);
			// console.log(visitedHouses);
			console.log(visited);
		}
		if(data[i]==="<"){
			for(var j=0;j<visited.length;j++){
				var flag=false;
				if(current[0]-1==visited[j][0] && current[1]==visited[j][1]){
					flag=true;
				}
			}
			if(!flag){
				visitedHouses++;
				visited.push([current[0]--,current[1]]);
			}
			current[0]--;
			console.log(current);
			// console.log(visitedHouses);
			console.log(visited);
		}
		//console.log(visitedHouses);
		// console.log(visited);
	}
	console.log(visitedHouses);
	//console.log(visited);
});