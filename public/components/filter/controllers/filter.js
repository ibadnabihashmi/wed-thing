angular.module('MyApp')
    .controller('FilterCtrl', function($scope,_,filterService) {
        $scope.filters = {};
        $scope.search = {
            country:'',
            city:'',
            area:''
        };
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
                $scope.filters.country = _.uniq(_.pluck($scope.halls,'country'));
                $scope.filters.city = _.uniq(_.pluck($scope.halls,'city'));
                $scope.filters.area = _.uniq(_.pluck($scope.halls,'area'));
                $scope.filters.near = _.uniq(_.pluck($scope.halls,'near'));
                console.log($scope.filters);
            });
        };

        init();
    });
