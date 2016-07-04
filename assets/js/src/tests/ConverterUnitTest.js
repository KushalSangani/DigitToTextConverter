describe('Technical Test Sample Data', function () {
    beforeEach(module('DigitConverterApp'));

    it('Should return text "zero" when 0 is provided', inject(function (converterService) {
        expect(converterService.convertDigitToText("0")).toEqual("zero");
    }));
    it('Should return text "one" when 1 is provided', inject(function (converterService) {
        expect(converterService.convertDigitToText("1")).toEqual("one");
    }));

    it('Should return text "twenty one" when 21 is provided', inject(function (converterService) {
        expect(converterService.convertDigitToText("21")).toEqual("twenty one");
    }));

    it('Should return text "one hundred and five" when 105 is provided', inject(function (converterService) {
        expect(converterService.convertDigitToText("105")).toEqual("one hundred and five");
    }));

    it('Should return text "one hundred and twenty three" when 123 is provided', inject(function (converterService) {
        expect(converterService.convertDigitToText("123")).toEqual("one hundred and twenty three");
    }));

    it('Should return text "one thousand and five" when 1005 is provided', inject(function (converterService) {
        expect(converterService.convertDigitToText("1005")).toEqual("one thousand and five");
    }));

    it('Should return text "one thousand and forty two" when 1042 is provided', inject(function (converterService) {
        expect(converterService.convertDigitToText("1042")).toEqual("one thousand and forty two");
    }));

    it('Should return text "one thousand one hundred and five" when 1105 is provided', inject(function (converterService) {
        expect(converterService.convertDigitToText("1105")).toEqual("one thousand one hundred and five");
    }));

    it('Should return text "fifty six million nine hundred and forty five thousand seven hundred and eighty one" when 56945781 is provided', inject(function (converterService) {
        expect(converterService.convertDigitToText("56945781")).toEqual("fifty six million nine hundred and forty five thousand seven hundred and eighty one");
    }));

    it('Should return text "nine hundred and ninety nine million nine hundred and ninety nine thousand nine hundred and ninety nine" when 999999999 is provided', inject(function (converterService) {
        expect(converterService.convertDigitToText("999999999")).toEqual("nine hundred and ninety nine million nine hundred and ninety nine thousand nine hundred and ninety nine");
    }));
});

describe('My Converter Service Tests', function () {

    beforeEach(module('DigitConverterApp'));

    it('Should return text "Invalid Number" when invalid number is provided', inject(function (converterService) {

        expect(converterService.convertDigitToText("test")).toEqual("Invalid Number");

    }));

    it('Should return text "Invalid Number" when a negative number is provided', inject(function (converterService) {

        expect(converterService.convertDigitToText("-123")).toEqual("Invalid Number");

    }));

    it('Should return text "Invalid Number" when a fraction number is provided', inject(function (converterService) {

        expect(converterService.convertDigitToText("1.2")).toEqual("Invalid Number");

    }));

    it('Should return text "zero" when a valid number 0 is provided', inject(function (converterService) {

        expect(converterService.convertDigitToText("0")).toEqual("zero");

    }));

    it('Should return text "Fifteen" when a valid number 15 is provided', inject(function (converterService) {

        expect(converterService.convertDigitToText("15")).toEqual("fifteen");

    }));

    it('Should return text "Twenty" when a valid number 20 is provided', inject(function (converterService) {
        // because we have added a space after the doubles figure be sure to include that in the test
        expect(converterService.convertDigitToText("20")).toEqual("twenty "); 

    }));

    it('Should return text "fifty six" when a valid number 56 is provided', inject(function (converterService) {

        expect(converterService.convertDigitToText("56")).toEqual("fifty six");

    }));

    it('Should return text "One hundred and seven" when a valid number 107 is provided', inject(function (converterService) {

        expect(converterService.convertDigitToText("107")).toEqual("one hundred and seven");

    }));


    it('Should return text "One hundred and fifty six" when a valid number 156 is provided', inject(function (converterService) {

        expect(converterService.convertDigitToText("156")).toEqual("one hundred and fifty six");

    }));

    it('Should return text "nine hundred and ninty nine" when a valid number 999 is provided', inject(function (converterService) {

        expect(converterService.convertDigitToText("999")).toEqual("nine hundred and ninety nine");

    }));

    it('Should return text "one thousand and fifty six" when a valid number 1056 is provided', inject(function (converterService) {

        expect(converterService.convertDigitToText("1056")).toEqual("one thousand and fifty six");

    }));

    it('Should return text "one thousand five hundred and twenty two" when a valid number 1522 is provided', inject(function (converterService) {

        expect(converterService.convertDigitToText("1522")).toEqual("one thousand five hundred and twenty two");

    }));

    it('Should return text "ten thousand five hundred and twenty two" when a valid number 10522 is provided', inject(function (converterService) {
        expect(converterService.convertDigitToText("10522")).toEqual("ten thousand five hundred and twenty two");
    }));

    it('Should return text "three hundred and sixty four thousand five hundred and forty four" when a valid number 364544 is provided', inject(function (converterService) {
        expect(converterService.convertDigitToText("364544")).toEqual("three hundred and sixty four thousand five hundred and forty four");
    }));

    it('Should return text "Nine hundred thousand and twenty four" when a valid number 900024 is provided', inject(function (converterService) {
        expect(converterService.convertDigitToText("900024")).toEqual("nine hundred  thousand and twenty four");
    }));

    it('Should return text "three million four hundred and twenty six thousand five hundred and thirty six" when a valid number 3426536 is provided', inject(function (converterService) {
        expect(converterService.convertDigitToText("3426536")).toEqual("three million four hundred and twenty six thousand five hundred and thirty six");
    }));

    it('Should return text "Invalid Numver" when 1 billion is provided (1000000000) is provided', inject(function (converterService) {
        expect(converterService.convertDigitToText("1000000000")).toEqual("Invalid Number");
    }));
});