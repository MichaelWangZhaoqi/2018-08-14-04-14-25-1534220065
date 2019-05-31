module.exports = function main(str) {
    
	var firstline=["._.", "...", "._.", "._.", "...", "._.", "._.", "._.", "._.", "._."];
	var secondline=["|.|", "..|", "._|", "._|", "|_|", "|_.", "|_.", "..|", "|_|", "|_|"];
	var thirdline=["|_|", "..|", "|_.", "._|", "..|", "._|", "|_|", "..|", "|_|", "..|"];
	var len=str.length;
	var result="";
	
	for (var i=0; i<len; i++){
		var thisnum=parseInt(str[i]);
		result+=firstline[thisnum];
		if (i!=len-1){
			result+=" ";
		}
		else
			result+="\n";
	}
		
	for (var i=0; i<len; i++){
		var thisnum=parseInt(str[i]);
		result+=secondline[thisnum];
		if (i!=len-1){
			result+=" ";
		}
		else
			result+="\n";
	}
	
	for (var i=0; i<len; i++){
		var thisnum=parseInt(str[i]);
		result+=thirdline[thisnum];
		if (i!=len-1){
			result+=" ";
		}
		else
			result+="\n";
	}
	
	return result;
};
