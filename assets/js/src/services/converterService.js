angular.module('DigitConverterApp').service('converterService', [function () {

    // removed zero from the singles array to prevent seeing twenty zero or thirty zero when 20, 30 or other numbers are provided 
    var singles = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    var teens = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
    // should never get values of index 1 and 2
    var tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    var convert = function (num) {

        if (num == 0) {
            // zero was originally placed inside the convert doubles func however after the text 'zero' was being returned when request 20 or 30 and so on. I decided to check for that first 
            return "zero";
        } else {

            // start with largest number and the start to break the number down by finding the remainders (using modulo)
            return convertMillions(num);
        }

    };

    var convertDoubles = function (num) {
        // check to see if the number is a single
        if (num < 10) {
            return singles[num];
        } else if (num >= 10 && num <= 19) {

            // because the 10 to 19 are individual values we can store these in an array and request it by subtracting 10 from the array giving is single numerical representation
            return teens[num - 10];

        } else {
            // we get 
            // get the first number by dividing the two digit number by 10 and get it from the tens array and the get the modulas of num value from the singles array
            return tens[Math.floor(num / 10)] + " " + singles[num % 10];
        }
    };

    var convertHundreds = function (num) {
        if (num > 99) {

            var mod = (num % 100);
            var hundredStr = " hundred ";

            // mod has remainders else dont add the word 'and' used for 108 for example
            if(mod > 0){
                hundredStr += "and ";
            }

            return singles[Math.floor(num / 100)] + hundredStr + convertDoubles(num % 100);
        }
        return convertDoubles(num);
    };

    var convertThousands = function (num) {
        if (num > 999) {

            var mod = (num % 1000);
            var thousandStr = " thousand ";

            // mod has remainders but is less than 99 then add the word 'and' used in 1045 forexample
            if (mod > 0 && mod <= 99) {
                thousandStr += "and "
            }

            return convertHundreds(Math.floor(num / 1000)) + thousandStr + convertHundreds(num % 1000);
        }
        return convertHundreds(num);
    }

    var convertMillions = function (num) {
        if (num >= 1000000) {
            return convertMillions(Math.floor(num / 1000000)) + " million " + convertThousands(num % 1000000);
        }
        return convertThousands(num);
    };

    var convertDigitToText = function (digit) {

        var reg = new RegExp('^\\d+$');

        var isNumber = reg.test(digit);

        // make sure its a valid number and is within range
        if (isNumber && digit.length < 10) {

            // parse int
            var num = parseInt(digit);

            // convert the number to text
            var convertedTextNumber = convert(num);

            return convertedTextNumber;
        } else {
            return "Invalid Number"
        }
    };

    return {
        convertDigitToText: convertDigitToText
    };
}]);