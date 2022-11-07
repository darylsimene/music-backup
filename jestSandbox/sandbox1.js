const axios = require("axios");

const sum = (num1, num2) => {
    if (!num1 || !num2) return "missing numbers!";
    return num1 + num2;
};

const twoNumbers = (num1, num2) => {
    if (num1 && num2) {
        if (num1 > num2) {
            return num1 - num2;
        } else if (num1 === num2) {
            return num1 ** num2;
        } else {
            return num1 + num2;
        }
    } else {
        return "missing numbers!";
    }
};

const strings = (str) => {
    if (str) {
        return str.split(" ");
    } else {
        throw new Error("no string found");
    }
};

const arr3 = (arr) => {
    return arr.map((arr) => arr + 1);
};

const string4 = (str) => {
    return str.indexOf("t");
};

const isAnagram = (str1, str2) => {
    return formatString(str1) == formatString(str2);
};

const formatString = (str) => {
    return str.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("");
};

const chunkArray = (arr, length) => {
    const chunkedArr = [];

    arr.forEach((val) => {
        const last = chunkedArr[chunkedArr.length - 1];

        if (!last || last.length === length) {
            chunkedArr.push([val]);
        } else {
            last.push(val);
        }
    });

    return chunkedArr;
};

const profile = {
    add: (num1, num2) => num1 + num2,
    isNull: () => null,
    checkValue: (x) => x,
    createUser: () => {
        const user = {firstname: "tony", lastname: "kim"};
        return user;
    },
    fetchUser: async () => {
        try {
            const result = await axios.get(
                "https://jsonplaceholder.typicode.com/users/1"
            );
            return result.data;
        } catch (err) {
            return "error";
        }
    },
};

const reverseString = (str) => {
    return str.toLowerCase().split("").reverse().join("");
};

module.exports = {
    sum,
    twoNumbers,
    strings,
    arr3,
    string4,
    isAnagram,
    chunkArray,
    profile,
    reverseString,
};
