const characters = [
    {
        name: "Donatello",
        height: 145,
        weight: 66,
        gender: "male",
        eye_color: "Black"
    },
    {
        name: "Raphael",
        height: 155,
        weight: 67,
        gender: "male",
        eye_color: "Black"
    },
    {
        name: "Leonardo",
        height: 155,
        weight: 70,
        gender: "male",
        eye_color: "Black"
    },
    {
        name: "Michelangelo",
        height: 152,
        weight: 68,
        gender: "male",
        eye_color: "Black"
    },
    {
        name: "April O'Neil",
        height: 173,
        weight: 52,
        gender: "female",
        eye_color: "Dark Brown"
    },
    {
        name: "Krang",
        height: 45,
        weight: 8,
        gender: "male",
        eye_color: "Purple"
    }
]

/***MAP***/
// 1. Get an array of all names
const names = characters.map(character => character.name);
// 2. Get an array of all heights
const heights = characters.map(character => character.height);
// 3. Get an array of objects with just name and height properties
const minifiedRecords = characters.map(character => ({name: character.name, height: character.height}));
// 4. Get an array of all first names
const firstNames = characters.map(character => character.name.split(" ")[0]);

/***REDUCE***/
// 1. Get the total weight of all characters
const totalWeight = characters.reduce((acc, cur) => acc + cur.weight, 0);
// 2. Get the total height of all characters
const totalHeight = characters.reduce((acc, cur) => acc + cur.height, 0);
// 3. Get the total number of characters by eye color
const allEyeColors = characters.reduce((acc, cur) => {
    const color = cur.eye_color
    if(acc[color]){
        acc[color]++;
    }else {
        acc[color] = 1;
    }
    return acc;
}, {});
// 4. Get the total number of characters in all character names
const totalCharacters = characters.reduce((acc, cur) => acc + cur.name.length, 0);

/***FILTER***/
// 1. Get characters with weigth greater than 60
const greaterThan60 = characters.filter(character => {
    return character.weight > 60;
});
// 2. Get characters with height less than 160
const lessThan160 = characters.filter(character => character.height < 160);
// 3. Get all male characters
const male = characters.filter(character => character.gender === 'male');
// 4. Get all female characters
const female = characters.filter(character => character.gender === 'female');

/***SORT***/
// 1. Sort by weight
const sortWeight = characters.sort((a, b) => {
    return a.weight - b.weight;
});
// 2. Sort by height
const sortHeight = characters.sort((a, b) => {
    return a.height - b.height;
});
// 3. Sort by name
const byName = characters.sort((a, b) => {
    if(a.name < b.name) return -1;
    return 1;
});
// 4. Sort by gender
const byGender = characters.sort((a, b) => {
    if(a.gender === 'female') return -1;
    return 1;
});
// 5. Sort decreasing height
const decreasingHeight = characters.sort((a, b) => {
    return b.height - a.height;
});

/***EVERY***/
// 1. Does every character have black eyes?
const blackEyes = characters.every((character) => character.eye_color === 'Black');
// 2. Does every character have weight more than 5?
const moreThan5 = characters.every((character) => character.weight > 5);
// 3. Is every character shorter than 170?
const shorterThan170 = characters.every((character) => character.height > 170);
// 4. Is every character male?
const allMale = characters.every((character) => character.gender === 'male');

/***SOME***/
// 1. Is there at least one male character?
const oneMale = characters.some((character) => character.gender === 'male');
// 2. Is there at least one character with puprle eyes?
const onePurple = characters.some((character) => character.eye_color === 'Purple');
// 3. Is there at least one character taller than 170?
const oneMoreThan170 = characters.some((character) => character.height > 170);
// 4. Is there at least one character that weighs less than 50?
const oneLessThan50 = characters.some((character) => character.weight < 50);