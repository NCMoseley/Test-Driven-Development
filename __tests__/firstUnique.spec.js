const firstUnique = require("../lib/firstUnique");

describe("Is input a string?", () => {
	test("Should stop the function if input is not a string", () => {
		const result = firstUnique("aaabbbcccdeeefff");
		// const result = firstUnique(420);
		expect(result).not.toBe("Not a string");
	});
});

describe("Is the answer only one letter?", () => {
	test("Should see only one letter generated", () => {
		const result = firstUnique("aaabbbcccdeeefff");
		expect(result).toHaveLength(1);
	});
});

describe("Is the string all the same letter?", () => {
	test("Should return undefined", () => {
		const result = firstUnique("hhhhhhh");
		// const result = firstUnique("sssssnnnnnnaaaaakeeeeeesssss");
		expect(result).toBe(undefined);
	});
});
