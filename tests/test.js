var assert = require("assert");
var bijective = require("../src/bijective-shortener.js");

describe("BijectiveShortener", function(){
	describe("#makeFromInteger", function(){
		it("should make unique strings for unique integers and decode shortened to original integer on base 10", function(){
			var obj = {},
				shortened;

			for(var i = 0; i < 600000; i++){
				shortened = bijective.makeFromInteger(i);
				assert.equal(false, obj.hasOwnProperty(shortened));
				assert.equal(i, bijective.decodeToInteger(shortened));
				obj.shortened = i;
			}
		});
	});
});