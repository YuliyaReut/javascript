// Gauss formula for [min, max] 
// sum = max(max + 1)/2 - min(min - 1)/2

function checkDataIsCorrect(value1, value2) {
    if (!Number.isInteger(value1) || !Number.isInteger(value2)) {
        throw new Error('ERROR: argument is not an integer number!');
    } else
        if (value1 > value2) {
            throw new Error('ERROR: min > max!');
        }
    return true;
}

function checkResultIsCorrect(result) {
    if (result > Number.MAX_SAFE_INTEGER) {
        throw new Error('ERROR: result as infinity!');
    } else return true;
}

const memoizedSum = () => {
    const cache = {};
    return (value, changedValue) => {
        if (!cache[value]) {
            cache[value] = value * changedValue / 2;
        }
        return cache[value];
    }
}

const partSum = memoizedSum();

function calculateSumGauss(min, max) {
    if (checkDataIsCorrect(min, max)) {
        const result = partSum(max, max + 1) - partSum(min, min - 1);
        if (checkResultIsCorrect(result)) {
            return result;
        }
    }
}

//Test

calculateSumGauss(5, 7);
calculateSumGauss('abc',);
calculateSumGauss(1, 10);
calculateSumGauss(123456, 1234567890);