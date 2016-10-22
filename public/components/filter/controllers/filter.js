angular.module('MyApp')
    .controller('FilterCtrl', function($scope,filterService) {
        var init = function () {
            $scope.minRangeSlider = {
                minValue: 200000,
                maxValue: 500000,
                options: {
                    floor: 100000,
                    ceil: 1000000,
                    step: 500
                }
            };
            filterService.fetchAllVenues().then(function(response){
                $scope.halls = response.data.halls;
            });
        };

        init();
    });
