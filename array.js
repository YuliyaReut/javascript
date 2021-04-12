//Home task :
// - should return four the most popular letters
// - should decode phrase

let array = [47, 46, 48, 31, 63, 47, 36, 48, 36, 49, 50, 31, 50,
    59, 63, 38, 35, 31, 50, 59, 63, 45, 36, 46, 38, 40, 35, 31,
    45, 45, 58, 53, 63, 47, 46, 35, 31, 48, 42, 46, 33, 63, 46,
    50, 63, 38, 40, 39, 45, 40, 63, 31, 63, 49, 31, 44, 46, 44,
    51, 63, 35, 36, 43, 31, 50, 59, 63, 38, 40, 39, 45, 59];

const letters = ['а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и',
    'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф',
    'х', 'ц', 'ч', 'ш', 'щ', 'ы', 'ь', 'э', 'ю', 'я'];

function getLetter(code) {
    return letters[code - 31];
}

function getTheMostPopularLetter(arrLettersCode) {
    let map = new Map();
    arrLettersCode.forEach(item => map.set(item, map.get(item) ? map.get(item) + 1 : 1)); // -> get entries where key is a code and value is an amount times of repeat
    map = Array.from(map).sort((a, b) => b[1] - a[1]);  // -> get sorted arr by an amount times of repeat 

    if (!getLetter(map[0][0])) {  // -> checked the first symbol: it can be undefined that means the it is a space
        map = map.splice(1, 4);
        console.log('map - ', map);
    } else {
        map = map.splice(0, 4);
    }
    return map.map((item) => getLetter(item[0]));
}

function getDecodePhrase(arrLettersCode) {
    return arrLettersCode.map(code => getLetter(code) ?? ' ').join('');
}

// TEST

getTheMostPopularLetter(array);
getDecodePhrase(array);