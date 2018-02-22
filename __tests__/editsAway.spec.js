// Minimum Positive integer

const editsAway = require("../lib/editsAway");

myStr1 = "pale";
myStr2 = "plex";

describe("Is input an object?", () => {
	test("Should stop the function if input is not a string", () => {
		const result = editsAway(myStr1, myStr2);
		console.log(result);
		expect(result).not.toBe("Error, you must enter a string");
	});
});

// describe("Is input an empty array?", () => {
// 	test("Should return warning", () => {
// 		const result = editsAway([]);
// 		expect(result).toBe("Not an object, or empty array");
// 	});
// });
