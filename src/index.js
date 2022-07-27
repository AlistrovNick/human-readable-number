module.exports = function toReadable(number) {
    let rest = number;
    if (number === 0) {
        return 'zero';
    }
    let result = [];
    result.push(getHundred(number));
    rest = number % 100;
    result.push(getDozen(rest));
    if (rest >= 20 || rest < 10) {
        rest = rest % 10;
        result.push(getUnit(rest));
    }
    return result.filter(num => num !== '').join(' ');
}

function getUnit(number) {
    switch (number) {
        case 0: return '';
        case 1: return 'one';
        case 2: return 'two';
        case 3: return 'three';
        case 4: return 'four';
        case 5: return 'five';
        case 6: return 'six';
        case 7: return 'seven';
        case 8: return 'eight';
        case 9: return 'nine';
    }
}

function getDozen(number) {
    let dozen = Math.trunc(number / 10);
    switch (dozen) {
        case 0: return '';
        case 1:
            switch (number) {
                case 10: return 'ten';
                case 11: return 'eleven';
                case 12: return 'twelve';
                case 13: return 'thirteen';
                case 15: return 'fifteen';
                case 18: return 'eighteen';
                default: return getUnit(number % 10) + 'teen';
            }
        case 2: return 'twenty';
        case 3: return 'thirty';
        case 4: return 'forty';
        case 5: return 'fifty';
        case 6: return 'sixty';
        case 7: return 'seventy';
        case 8: return 'eighty';
        case 9: return 'ninety';
    }
}

function getHundred(number) {
    let hundred = Math.trunc(number / 100);
    switch (hundred) {
        case 0: return '';
        default: return getUnit(hundred) + ' hundred';
    }
}