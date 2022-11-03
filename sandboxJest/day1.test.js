const {twoNumbers, stringTest, arrayTest, objectTest} = require("./day1");
let name = "ti";

beforeAll(() => {
    name = "tin";
});

afterAll(() => {
    name = "done";
});

test(`Should expect the value of name != 'ti'`, () => {
    expect(name).not.toBe("ti");
});

describe("twoNumbers function", () => {
    //!case 1
    test(`Should return 'two numbers are equal'`, () => {
        expect(twoNumbers(5, 5)).toBe("two numbers are equal");
        expect(twoNumbers(5, 5)).toBeTruthy();
    });

    //!case 2
    test(`Should return the difference between num 1 & 2 if num1 > num2`, () => {
        expect(twoNumbers(10, 5)).toBe(5);
        expect(twoNumbers(10, 5)).not.toBeNull();
    });

    //!case 3
    test(`Should return the sum between num 1 & 2 if num1 < num2`, () => {
        expect(twoNumbers(5, 10)).toBe(15);
        expect(twoNumbers(5, 10)).not.toBe(0);
    });

    //!case 4
    test(`Should return 'missing numbers`, () => {
        expect(twoNumbers(5, 10)).toBe(15);
        expect(twoNumbers(5, 10)).not.toBe(0);
    });
});

// ===========================================
describe("stringTest", () => {
    //!case 1
    test(`Should return false`, () => {
        expect(stringTest("")).toBeFalsy();
        expect(stringTest("")).not.toBeTruthy();
    });

    //!case 2
    test(`Should return the index of letter T in a word.`, () => {
        expect(stringTest("british")).toBe(3);
        expect(stringTest("british")).toBeGreaterThan(0);
    });

    //!case 3
    test(`Should return 'Letter 't' was not found'`, () => {
        expect(stringTest("awake")).toBe(`Letter 't' was not found`);
    });
});

//============================================================
describe("stringTest", () => {
    //!case 1
    test(`Should return false`, () => {
        expect(stringTest("")).toBeFalsy();
        expect(stringTest("")).not.toBeTruthy();
    });

    //!case 2
    test(`Should return the index of letter T in a word.`, () => {
        expect(stringTest("british")).toBe(3);
        expect(stringTest("british")).toBeGreaterThan(0);
    });

    //!case 3
    test(`Should return 'Letter 't' was not found'`, () => {
        expect(stringTest("awake")).toBe(`Letter 't' was not found`);
    });
});

//============================================================
describe("arrayTest", () => {
    let case1; //aray is undefined
    const case2 = []; //array's length is 0
    const case3 = [1, 2, 3, 4, 5];
    const case4 = [3, 6, 9];

    //!case1
    test(`Should return false if the array is null/undefines`, () => {
        expect(arrayTest(case1)).toBeFalsy();
        expect(arrayTest(case2)).toBeFalsy();
    });

    //!case2
    test(`Should return true if the array contains 5`, () => {
        expect(arrayTest(case3)).toBeTruthy();
    });
    //!case3
    test(`Should return double the value pf the array`, () => {
        expect(arrayTest(case4)).toEqual([6, 12, 18]);
    });
});

//============================================================

describe(`objectTest function`, () => {
    const user = {};
    const user1 = {
        name: "tony",
        age: 28,
        address: `Somewhere, Down D' Rainbow`,
    };
    const user2 = {
        name: "kitty perry",
        age: 28,
        address: `California Gurlz`,
    };

    test(`Should return false if the Object is empty`, () => {
        expect(objectTest(user)).toBeFalsy();
    });

    //!case2
    test(`Should return false if the Object is empty`, () => {
        expect(objectTest(user1)).toBeTruthy();
    });

    //!case3
    test(`Should return false if Tony isn't in the Object`, () => {
        expect(() => objectTest(user2)).toThrow(
            "tony was not found in the object!"
        );
    });
});
