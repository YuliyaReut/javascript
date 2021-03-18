// Gauss formula for [min, max] 
// sum = max(max + 1)/2 - min(min - 1)/2

function isDataValid(value1, value2) {
    return Number.isInteger(value1) && Number.isInteger(value2) && value1 < value2;
}

function isResultValid(result) {
    return result <= Number.MAX_SAFE_INTEGER;

}

const memoizedSumGauss = () => {
    const cache = {};
    let key = '';
    const partSum = (value, changedValue) => value * changedValue / 2;
    return (min, max) => {
        if (!isDataValid(min, max)) {
            return new Error('ERROR: data is incorrect!')
        }
        key = `${min}${max}`;
        if (!cache[key]) {
            let result = partSum(max, max + 1) - partSum(min, min - 1);
            if (!isResultValid(result)) {
                throw new Error('ERROR: result as infinity!');
            }
            cache[key] = result;
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