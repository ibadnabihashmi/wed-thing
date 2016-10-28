angular.module('MyApp')
    .controller('FilterCtrl', function($scope,_,filterService) {
        $scope.filters = {};
        $scope.search = {
            country:'',
            city:'',
            area:''
        };
        $scope.price = {
            minValue: 0,
            maxValue: 10000000,
            options: {
                floor: 0,
                ceil: 10000000,
                step: 5000
            }
        };
        $scope.capacity = {
            minValue: 0,
            maxValue: 10000,
            options: {
                floor: 0,
                ceil: 5000,
                step: 100
            }
        };
        var init = function () {
            filterService.fetchAllVenues().then(function(response){
                $scope.halls = response.data.halls;
                $scope.filters.country = _.uniq(_.pluck($scope.halls,'country'));
                $scope.filters.city = _.uniq(_.pluck($scope.halls,'city'));
                $scope.filters.area = _.uniq(_.pluck($scope.halls,'area'));
                $scope.filters.near = _.uniq(_.pluck($scope.halls,'near'));
            });
        };

        $scope.searchHall = function(){
            $scope.search.price = {
                min:$scope.price.minValue,
                max:$scope.price.maxValue
            };
            $scope.search.capacity = {
                min:$scope.capacity.minValue,
                max:$scope.capacity.maxValue
            };
            $scope.search.name = $scope.name;
            $scope.search.catering = $scope.catering;
            filterService.filter($scope.search).then(function(res){
                console.log(res);
            },function(err){
                console.err(err);
            });
        };

        init();
    });
