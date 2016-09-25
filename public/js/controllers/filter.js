angular.module('MyApp')
    .controller('FilterCtrl', function($scope) {
        $scope.minRangeSlider = {
            minValue: 200000,
            maxValue: 500000,
            options: {
                floor: 100000,
                ceil: 1000000,
                step: 500
            }
        };
    });
