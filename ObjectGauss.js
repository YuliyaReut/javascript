function randn_bm() {
    let u = 0, v = 0;
    while (u === 0)
        u = Math.random();
    while (v === 0)
        v = Math.random();
    return Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v) * 2 | 0;
}
let rundomNumb;
let str = '\n';

//WAY 1 - obj
let obj = {};

for (let i = 0; i < 10; i++) {
    rundomNumb = randn_bm();
    obj[rundomNumb] ? obj[rundomNumb]++ : obj[rundomNumb] = 1;
}

for (const [key, value] of Object.entries(obj)) {
    str += `${key} : ${value} \n`
}
console.log('obj - ', str);

//WAY 2 - map
let map = new Map();

for (let i = 0; i < 10; i++) {
    rundomNumb = randn_bm();
    map.set(rundomNumb, map.get(rundomNumb) ? map.get(rundomNumb) + 1 : 1);
}
str = '\n';
for (const [key, value] of map.entries()) {
    str += `${key} : ${value} \n`
}
console.log('map - ', str);