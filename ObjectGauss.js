function randn_bm() {
    let u = 0, v = 0;
    while (u === 0)
        u = Math.random();
    while (v === 0)
        v = Math.random();
    return Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v) * 2 | 0;
}

function displayStrLikeTable(entries) {
    let str = '\n';
    for (const [key, value] of entries) {
        str += `${key} : ${value} \n`;
    }
    console.log(str);
}

function createObjectGauss(n) {
    let randomNumb;
    let obj = {};

    [...Array(n)].forEach(() => {
        randomNumb = randn_bm();
        if (obj[randomNumb]) {
            obj[randomNumb]++;
        } else {
            obj[randomNumb] = 1;
        }
    });

    displayStrLikeTable(Object.entries(obj));
}

function createMapGauss(n) {
    let randomNumb;
    let map = new Map();

    [...Array(n)].forEach(() => {
        randomNumb = randn_bm();
        if (map.get(randomNumb)) {
            map.set(randomNumb, map.get(randomNumb) + 1);
        } else {
            map.set(randomNumb, 1);
        }
    });

    displayStrLikeTable(map);
}

createObjectGauss(10);
createMapGauss(10);


