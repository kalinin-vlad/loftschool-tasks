//  задача #1 Фильтрация строки
const string = "Привет! Как дела?";

const vowels = ["у", "е", "ы", "а", "о", "э", "е", "я", "и"];

const getVowels = stringToFilter => {
    let extractedVowels = "";
    for (let i = 0; i < stringToFilter.length; i++) {
        const currentLetter = stringToFilter[i].toLowerCase();

        if(vowels.includes(currentLetter)) {
            extractedVowels += currentLetter;
        }
    }

    return extractedVowels;
};

console.log(getVowels(string));

//  задача #2 Выборка объекта

const workers = [
    {"name":"John","salary":500},
    {"name":"Mike","salary":1300},
    {"name":"Linda","salary":1500}
];

const getWorthyWorkers = workersArr => {
    const worthyWorkers = [];

    for (let i = 0; i < workersArr.length; i++) {
        const currentWorker = workersArr[i];

        if (currentWorker.salary > 1000) {
            worthyWorkers.push(currentWorker.name);
        }
    }

    return worthyWorkers;
};

console.log(getWorthyWorkers(workers));

// задача #3 Анализ строки

const path = "/users/download/index.html";

const isHtml = path => {
    const requiredExt = ".html";
    const pathExt = path.slice(-5);

    return pathExt === requiredExt;

};

console.log(isHtml(path));

// задача #4 Фильтрация массива

const mixedArray = [3,13,74,14,66,15,22,4];

const isEven = num => {
    return num % 2 === 0;
};

const filterArray = ( arrayToFilter, filterFn ) => {
    const filteredArray = [];

    arrayToFilter.forEach(num => {
        if (filterFn(num)) {
            filteredArray.push(num);
        }
    });

    return filteredArray;
};

console.log(filterArray(mixedArray, isEven));
