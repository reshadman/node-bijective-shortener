var exports = {};

exports.allowedChars = 'YRCAtS2qcL06JzFeWIsf9HbwgVPUoOkrZpaGm47vjNEuMT1dynlDxXhQK8i5B3';

exports.makeFromInteger = function(intNumber){

	intNumber = parseInt(intNumber);
	
	checkInteger(intNumber);

	if(intNumber === 0) return exports.allowedChars[0];

	var outputString = '',
		base = exports.allowedChars.length;

	while(intNumber > 0){
		
		outputString += exports.allowedChars[intNumber % base];

		intNumber = parseInt(intNumber / base);

	}

	return outputString.split("").reverse().join("");

};

exports.decodeToInteger = function(string){
	var stringLength = string.length,
		baseLength = exports.allowedChars.length,
		integerId = 0,
		pos;

	for (var i = 0; i < stringLength; i++) {
		pos = exports.allowedChars.indexOf(string[i]);

		integerId = (integerId * baseLength) + pos;
	};

	return integerId;
};

function isInteger(string){
	return (Number(string) === string) && ((string % 1) === 0); 
}

function checkInteger(intNumber){
	if(! isInteger(intNumber)) throw new Error("The passed number should be a valid integer");
	if(intNumber < 0) throw new Error("The passed number should be larger or eq to 0");	
}

module.exports = exports;