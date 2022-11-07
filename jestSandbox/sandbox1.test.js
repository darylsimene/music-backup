const {
    sum,
    twoNumbers,
    strings,
    arr3,
    string4,
    isAnagram,
    chunkArray,
    profile,
    reverseString,
} = require("./sandbox1");
const axios = require("axios");

let letter = "a";

beforeAll(() => {
    letter = "kar";
});
// beforeEach(() => {
//     console.log('Johannes loves BTS')
// })

afterAll(() => {
    letter = "done!";
    console.log(letter);
});

test("should expect to checkl if the value of letter is not equal to A before running this test", () => {
    expect(letter).not.toBe("a");
});

describe("sum function", () => {
    test("Should return me a total of num1 and num2", () => {
        expect(sum(2, 3)).toBe(5);
    });

    test("should return a text that says misisng numbers if arguments are missing", () => {
        expect(sum(1)).toBe("missing numbers!");
    });
});

describe("twoNumbers function", () => {
    test("should return the difference of num1 and num2 if num1 > num2", () => {
        expect(twoNumbers(10, 5)).toBe(5);
    });

    test("should return the total of num1 and num2 if num1 === num2", () => {
        expect(twoNumbers(2, 2)).toBe(4);
    });

    test("should return the total of num1 and num2 if num1 < num2", () => {
        expect(twoNumbers(5, 10)).toBe(15);
    });

    test("should return a text that says misisng numbers if arguments are missing", () => {
        expect(twoNumbers(1)).toBe("missing numbers!");
    });
});

describe("objects", () => {
    const data = {
        firstname: "Tony",
        lastName: "Kim",
    };

    test("Should return obj with new property called age with value of 57", () => {
        data.age = 57;

        expect(data).toEqual({firstname: "Tony", lastName: "Kim", age: 57});
    });

    test("Should return true if address property is not contained in this data object", () => {
        expect(data).not.toContain({address: "someaddy"});
    });

    test("shoould return true if firstnaem property exists with value of tiny", () => {
        expect(data).toEqual({firstname: "Tony", lastName: "Kim", age: 57});
    });
});

describe("arrays", () => {
    const arr = [];

    test("should return false if the arr is empty", () => {
        expect(arr.length).toBeFalsy();
    });
});

describe("arrays2", () => {
    const arr = ["chicken", "nuggets", "chicken burger", "fries", "sundae"];

    test("should return false if the arr has fries", () => {
        expect(arr).toContain("fries");
    });
});

describe("strings", () => {
    test("should return an array of letters", () => {
        expect(strings("chicken nuggets")).toEqual(["chicken", "nuggets"]);
    });

    test("should return an error if no string is found", () => {
        expect(() => strings()).toThrow(Error);
    });
});

describe("objects 2", () => {
    const emptyObject = {};
    test("should expect to return an empty object", () => {
        expect(Object.values(emptyObject).length).toBeFalsy();
        expect(Object.values(emptyObject).length).toBe(0);
    });
});

describe("undefined", () => {
    let thisIsUndefined;

    test("should expect to truthy if the value is undefined", () => {
        expect(thisIsUndefined).toBeUndefined();
    });
});

describe("null", () => {
    let thisIsNull = null;

    test("should expect to truthy if the value is null", () => {
        expect(thisIsNull).toBeNull();
    });
});

describe("arr 3", () => {
    test("should expect to return a new array", () => {
        expect(arr3([1, 2, 3])).toEqual([2, 3, 4]);
    });
});

describe("string 4", () => {
    test("should expect to return index of t", () => {
        expect(string4("tony")).toEqual(0);
    });
});

describe("anagram", () => {
    test("should return true if Anagram is a function", () => {
        expect(typeof isAnagram).toEqual("function");
    });
    test("should return true if iceman and cinema are anagrams", () => {
        expect(isAnagram("iceman", "cinema")).toBeTruthy();
    });
    test("should return false if kassandra and kara not anagrams", () => {
        expect(isAnagram("Kassandra", "Kara")).toBeFalsy();
    });
    test(`should return true if ARE  is an anagram ear`, () => {
        expect(isAnagram("ARE", " a r e")).toBeTruthy();
    });
});

describe("chunked array", () => {
    test("should return true if chunkArray is a function", () => {
        expect(typeof chunkArray).toBe("function");
    });
    test("should return a chunked array in sizes of 3", () => {
        const num = [1, 2, 3, 4, 5, 6];
        const length = 3;

        expect(chunkArray(num, length)).toEqual([
            [1, 2, 3],
            [4, 5, 6],
        ]);
    });
    test("should return a chunked array in sizes of 1", () => {
        const num = [1, 2, 3];
        const length = 1;

        expect(chunkArray(num, length)).toEqual([[1], [2], [3]]);
    });
});

describe("profile", () => {
    describe("add()", () => {
        test("should return 4 when passing in 2 and 2 as an arguments", () => {
            expect(profile.add(2, 2)).toBe(4);
        });
        test("should return false when passing in 2 and 3 as an arguments", () => {
            expect(profile.add(2, 3)).not.toBe(4);
        });
    });
    describe("isNull()", () => {
        test("should return null", () => {
            expect(profile.isNull()).toBeNull();
        });
    });

    describe("checkValue()", () => {
        test("should return false if passed in undefined", () => {
            expect(profile.checkValue()).toBeUndefined();
            expect(profile.checkValue()).toBeFalsy();
        });
        test("should return true if passed in positive number", () => {
            expect(profile.checkValue(22)).toBeTruthy();
        });
    });
    describe("createUser()", () => {
        test("should return object with firstname and last name of Tony Kim", () => {
            expect(profile.createUser()).toEqual({
                firstname: "tony",
                lastname: "kim",
            });
        });
    });
    describe("fetchUser()", () => {
        test("should return name of Leanne Graham", async () => {
            const data = await profile.fetchUser();
            expect(data.name).toBe("Leanne Graham");
        });
        test("should return name of Romaguera-Crona", async () => {
            const data = await profile.fetchUser();
            expect(data.company.name).toBe("Romaguera-Crona");
        });
    });
});

describe("reverseString function", () => {
    test("should return olleh from hello", () => {
        expect(reverseString("hello")).toBe("olleh");
    });
    test("should return Hello from olleh", () => {
        expect(reverseString("Hello")).toBe("olleh");
    });
});
