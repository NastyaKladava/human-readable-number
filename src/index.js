let ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
let decimals = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
let teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];


let convertHundreds = (number) => {
    if (number > 99) {
        if (number % 100 != 0) {
            return ones[Math.floor(number / 100)] + ' hundred ' + convertTens(number % 100);
        }
        else {
            return ones[Math.floor(number / 100)] + ' hundred ';
        }
    }
    else {
        return convertTens(number);
    }
};

let convertTens = (number) => {
    if (number < 10) {
        return ones[number];
    }
    else if (number >= 10 && number < 20) {
        return teens[number - 10];
    }
    else {
        if (number % 10 != 0) {
            return decimals[Math.floor(number / 10)] + ' ' + ones[number % 10];
        }
        else {
            return decimals[Math.floor(number / 10)];
        }
    }
};

let convert = (number) => {
    return number === 0 ? 'zero' : convertHundreds(number);
};

module.exports = function toReadable(number) {
    return convert(number).trim();
}
