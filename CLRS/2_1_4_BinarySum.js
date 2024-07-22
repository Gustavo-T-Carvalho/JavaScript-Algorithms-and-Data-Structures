const b1 = [1, 0, 1, 1];
const b2 = [1, 1]
// 1110
console.log(sumBinary(b1, b2));

function sumBinary(b1, b2) {
    let bigger = b1;
    let smaller = b2;
    let difference = 0;

    if (b1.length !== b2.length) {
        bigger = b1.length > b2.length ? b1 : b2;
        smaller = b1.length > b2.length ? b2 : b1;
        difference = bigger.length - smaller.length;
    }

    const result = new Array(bigger.length + 1)

    for (let i = bigger.length; i > 0; i--) {
        const entryPosition = i - 1;

        const positionSum = (result[i] || 0) + (bigger[entryPosition] || 0) + ((entryPosition - difference) >= 0 ? smaller[entryPosition - difference] : 0);

        if (positionSum === 3) {
            result[i - 1] = 1;
            result[i] = 1;
        } else if (positionSum === 2) {
            result[i - 1] = 1;
            result[i] = 0;
        } else {
            result[i] = positionSum;
        }


    }
    return result;
}