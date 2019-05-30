module.exports = function main(str) {
    console.log("Debug Info");
	var firstline=["._.", "...", "._.", "._.", "...", "._.", "._.", "._.", "._.", "._."];
	var secondline=["|.|", "..|", "._|", "._|", "|_|", "|_.", "|_.", "..|", "|_|", "|_|"];
	var thirdline=["|_|", "..|", "|_.", "._|", "..|", "._|", "|_|", "..|", "|_|", "..|"];
	var len=str.length;
	
	for (var i=0; i<len; i++){
		var thisnum=parseInt(str[i]);
		console.log(firstline[thisnum]);
		if (i!=len-1){
			console.log(" ");
		}
	}
		
	for (var i=0; i<len; i++){
		var thisnum=parseInt(str[i]);
		console.log(secondline[thisnum]);
		console.log(" ");
		if (i!=len-1){
			console.log(" ");
		}
	}
	
	for (var i=0; i<len; i++){
		var thisnum=parseInt(str[i]);
		console.log(thirdline[thisnum]);
		console.log(" ");
		if (i!=len-1){
			console.log(" ");
		}
	}
	
		
    return 'Hello World!';
};