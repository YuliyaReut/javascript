// Gauss formula for [min, max] 
// sum = max(max + 1)/2 - min(min - 1)/2

function isDataValid(value1, value2) {
    if (Number.isInteger(value1) && Number.isInteger(value2) && value1 < value2) {
        return true;
    }
    return;
}

function isResultValid(result) {
    if (result <= Number.MAX_SAFE_INTEGER) {
        return true;
    }
    return;
}

function partSum(value, changedValue) {
    return value * changedValue / 2;
}

const memoizedSumGauss = () => {
    const cache = {};
    let key = '';
    return (min, max) => {
        if (!isDataValid(min, max)) {
            return new Error('ERROR: data is incorrect!')
        }
        key = `${min}${max}`;
        if (!cache[key]) {
            cache[key] = partSum(max, max + 1) - partSum(min, min - 1);
            if (!isResultValid(cache[key])) {
                cache[key] = new Error('ERROR: result as infinity!');
            }
        }
        return cache[key];
    }
}

const calculateSumGauss = memoizedSumGauss();

//Test

calculateSumGauss(5, 7);
calculateSumGauss('abc', 10);
calculateSumGauss(1, 10);
calculateSumGauss(123456, 12345678901);