const {profile} = require("../jestSandbox/sandbox1");
const {
    twoSum,
    fetchProfile,
    removeNumberFromArray,
    addNewProperty,
    sortArray,
    upperCaseWords,
} = require("./sandbox2");

describe("twoSum function", () => {
    const arr = [1, 2, 3];

    test("Should return the an array of index position of two numbers", () => {
        expect(twoSum(arr, 5)).toEqual([1, 2]);
    });
    test("Should return an undefined value when numbers in an array isn't equal to the target value.", () => {
        expect(twoSum(arr, 9)).toBeUndefined();
    });
});

describe("fetchProfile function", () => {
    // Case 1: Use a matcher to test if the expected payload has a email value of ‘Shanna@melissa.tv’
    test(`Should return true if the email is "Shanna@melissa.tv"`, async () => {
        const data = await fetchProfile();
        expect(data.email).toEqual("Shanna@melissa.tv");
    });

    // Case 2: Use a matcher to test if the expected payload has a city value of ‘Wisokyburgh’
    test(`Should return true if the city is "Wisokyburgh"`, async () => {
        const data = await fetchProfile();
        expect(data.address.city).toEqual("Wisokyburgh");
    });

    // Case 3: Use a matcher to test if the expected payload has a company name of ‘Deckow-Crist’
    test(`Should return true if the company name is "Deckow-Crist"`, async () => {
        const data = await fetchProfile();
        expect(data.company.name).toEqual("Deckow-Crist");
    });

    // Case 4: Use a matcher to test if the expected payload DOES NOT have a zipcode of ‘90388-2220’
    test(`Should return true if there is no zipcode of "90388-2220"`, async () => {
        const data = await fetchProfile();
        expect(data.address.zipcode).not.toEqual("90388-2220");
    });
});

describe(`removeNumberFromArray fucntion`, () => {
    const arrEmpty = [];
    const arr = [1, 2, 4];

    test(`Should return "Missing Array" if the array passed is empty`, () => {
        expect(() =>
            removeNumberFromArray(arrEmpty, 2).toThrow("Missing array")
        );
    });
    test(`Should return array [1,4] when an array and numberToRemove is valid`, () => {
        expect(removeNumberFromArray(arr, 2)).toEqual([1, 4]);
    });
    test(`Should return 'Array does not include number include <specified number>' where numberToRemove is not in the array`, () => {
        expect(() => removeNumberFromArray(arr, 5)).toThrow(
            `Array does not include number 5`
        );
    });
});

describe("addNewProperty function", () => {
    test(`Should return an error saying 'Missing both property and value' if
    property and value are undefined. `, () => {
        expect(() => addNewProperty({}, "", "")).toThrow(Error);
    });
    test(`Should return the objects the user passed in `, () => {
        obj = {
            holiday: "New Year's Eve",
            event: "New Year's Rockin Eve 2022",
        };
        expect(addNewProperty(obj, "artist", "Mariah Carey")).toEqual({
            holiday: "New Year's Eve",
            event: "New Year's Rockin Eve 2022",
            artist: "Mariah Carey",
        });
    });
});

describe("sortArray function", () => {
    test(`Should return an error message 'Missing array'`, () => {
        arr = [];
        expect(() => sortArray(arr)).toThrow("Missing array");
    });
    test(`Should return a sorted array`, () => {
        arr = [5, 6, 4, 7, 3, 1, 2];
        expect(sortArray(arr)).toEqual([1, 2, 3, 4, 5, 6, 7]);
    });
});

describe("upperCaseWords functions", () => {
    test(`Should return an error message "Missing Array of Words"`, () => {
        expect(() => upperCaseWords([])).toThrow(Error);
    });
    test(`Should return an array of words that are all in upper case`, () => {
        arr = ["cat", "dog"];
        expect(upperCaseWords(arr)).toEqual(["CAT", "DOG"]);
    });
});
