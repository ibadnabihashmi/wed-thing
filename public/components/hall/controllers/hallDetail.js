angular.module('MyApp')
    .controller('HallDetailCtrl', function($scope,hallService,$routeParams,NgMap,$location) {
        var init = function () {
            hallService.fetchDetails($routeParams.id)
                .then(function(res){
                    $scope.hall = res.data.hall;
                    $scope.map;
                    NgMap.getMap().then(function(map){
                        $scope.map = map;
                        var marker = new google.maps.Marker({
                            position: {
                                lat:$scope.hall.latitude,
                                lng:$scope.hall.longitude
                            },
                            map: $scope.map,
                            draggable: false,
                            animation: google.maps.Animation.DROP
                        });
                        $scope.map.panTo({
                            lat:$scope.hall.latitude,
                            lng:$scope.hall.longitude
                        });
                        hallService.fetchRelated({
                            price:$scope.hall.price,
                            capacity:$scope.hall.capacity
                        }).then(function (res) {
                            $scope.related = res.data.halls;
                        });
                    });
                });

        };

        init();
    });