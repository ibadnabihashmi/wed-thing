angular.module('MyApp')
    .controller('HallCtrl', function($scope, $rootScope, $location, $window, $auth, Account, NgMap) {
        $scope.user = $rootScope.currentUser;
        var map;
        $scope.hall = {
            latitude:0,
            longitude:0
        };
        $scope.getThisLocation = function(e){
            $scope.hall.latitude = this.position.lat();
            $scope.hall.longitude = this.position.lng();
        };
        $scope.place = null;
        $scope.autocompleteOptions = {
            types: ['geocode']
        };
        $scope.onPlaceChange = function(place){
            var address = place.formatted_address.split(',');
            $scope.hall.country = address[address.length-1];
            $scope.hall.city = address[address.length-2];
            $scope.hall.area = place.vicinity;
            $scope.hall.latitude = place.geometry.location.lat();
            $scope.hall.longitude = place.geometry.location.lng();
            console.log($scope);
        };
        $scope.saveHall = function(){
            console.log($scope.hall);
        }
    });