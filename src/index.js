module.exports = function toReadable(number) {
    if (number === 0) {
        return "zero";
    }
    let res = "";
    switch (Math.floor(number / 100)) {
        case 9:
            res += "nine hundred";
            break;
        case 8:
            res += "eight hundred";
            break;
        case 7:
            res += "seven hundred";
            break;
        case 6:
            res += "six hundred";
            break;
        case 5:
            res += "five hundred";
            break;
        case 4:
            res += "four hundred";
            break;
        case 3:
            res += "three hundred";
            break;
        case 2:
            res += "two hundred";
            break;
        case 1:
            res += "one hundred";
            break;
    }

    switch (Math.floor((number % 100) / 10)) {
        case 9:
            res += " ninety";
            break;
        case 8:
            res += " eighty";
            break;
        case 7:
            res += " seventy";
            break;
        case 6:
            res += " sixty";
            break;
        case 5:
            res += " fifty";
            break;
        case 4:
            res += " forty";
            break;
        case 3:
            res += " thirty";
            break;
        case 2:
            res += " twenty";
            break;
    }

    switch (number % 100) {
        case 19:
            res += " nineteen";
            return res.trim();
            break;
        case 18:
            res += " eighteen";
            return res.trim();
            break;
        case 17:
            res += " seventeen";
            return res.trim();
            break;
        case 16:
            res += " sixteen";
            return res.trim();
            break;
        case 15:
            res += " fifteen";
            return res.trim();
            break;
        case 14:
            res += " fourteen";
            return res.trim();
            break;
        case 13:
            res += " thirteen";
            return res.trim();
            break;
        case 12:
            res += " twelve";
            return res.trim();
            break;
        case 11:
            res += " eleven";
            return res.trim();
            break;
        case 10:
            res += " ten";
            return res.trim();
            break;
    }

    switch (number % 10) {
        case 9:
            res += " nine";
            break;
        case 8:
            res += " eight";
            break;
        case 7:
            res += " seven";
            break;
        case 6:
            res += " six";
            break;
        case 5:
            res += " five";
            break;
        case 4:
            res += " four";
            break;
        case 3:
            res += " three";
            break;
        case 2:
            res += " two";
            break;
        case 1:
            res += " one";
            break;
    }
    return res.trim();
};
