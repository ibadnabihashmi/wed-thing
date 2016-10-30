angular.module('MyApp')
    .controller('FilterCtrl', function($scope,_,filterService) {
        $scope.nothingFound = false;
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
        var constructQuery = function(){
            var query = {$and:[]};
            for(var a in $scope.search){
                if($scope.search.hasOwnProperty(a)){
                    if($scope.search[a] !== undefined &&
                    $scope.search[a] !== ""){
                        var obj = {};
                        obj[a] = $scope.search[a];
                        query.$and.push(obj);
                    }
                }
            }
            return query;
        };
        $scope.searchHall = function(){
            $scope.search.price = {
                $gte:$scope.price.minValue,
                $lte:$scope.price.maxValue
            };
            $scope.search.capacity = {
                $gte:$scope.capacity.minValue,
                $lte:$scope.capacity.maxValue
            };
            $scope.search.name = $scope.name;
            $scope.search.catering = $scope.catering;
            filterService.filter(constructQuery()).then(function(res){
                nothingFound = false;
                $scope.halls = res.data.halls;
            },function(err){
                $scope.nothingFound = true;
                console.log(err);
            });
        };

        init();
    });
