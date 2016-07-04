angular.module('DigitConverterApp').controller('mainCtrl', ['$scope', 'converterService', function ($scope, converterService) {

    $scope.convertDigit = function () {
        $scope.selectedNumber = $scope.myNumber !== "" ? $scope.myNumber : "Please enter your number and press convert";
        var convertedText = converterService.convertDigitToText($scope.myNumber);
        $scope.myConvertedNumber = convertedText;
    };

    $scope.init = function () {
        $scope.myNumber = "";
        $scope.selectedNumber = "Please enter your number and press convert";
        $scope.myConvertedNumber = "N/A";
    };
}]);