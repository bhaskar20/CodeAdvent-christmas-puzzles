md5 = require('md5');

var str = "iwrupvqb"
for(i=0;;i++){
	str1 = str+i.toString();
	//console.log(str1);
	hash=md5(str1);
	//console.log(hash.substr(0,6));
	if(hash.substr(0,6)=="000000"){
		console.log(i);
		break;
	}
}
