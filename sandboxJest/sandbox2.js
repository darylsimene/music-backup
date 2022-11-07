const axios = require("axios");

const twoSum = (nums, target) => {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
    return;
};

const fetchProfile = async () => {
    let result;
    try {
        result = await axios.get(
            `https://jsonplaceholder.typicode.com/users/2`
        );
    } catch (err) {
        throw new Error(`Error fetching for profile`);
    }

    return result.data;
};

const removeNumberFromArray = (arr, numberToRemove) => {
    if (!arr.length) {
        throw new Error("Missing array");
    } else if (arr.includes(numberToRemove)) {
        const index = arr.indexOf(numberToRemove);
        arr.splice(index, 1);
        return arr;
    } else {
        throw new Error(`Array does not include number ${numberToRemove}`);
    }
};

const addNewProperty = (obj, property, value) => {
    if (!property && !value) {
        throw new Error("Missing both property and value");
    } else {
        obj[property] = value;
        return obj;
    }
};

const sortArray = (arr) => {
    if (!arr || arr.length === 0) {
        throw new Error("Missing array");
    } else {
        return arr.sort();
    }
};

const upperCaseWords = (words) => {
    if (!words || words.length === 0) {
        throw new Error("Missing Array of Words");
    } else {
        return words.map((word) => word.toUpperCase());
    }
};

module.exports = {
    twoSum,
    fetchProfile,
    removeNumberFromArray,
    addNewProperty,
    sortArray,
    upperCaseWords,
};
