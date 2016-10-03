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

        $scope.saveHall = function(){
            console.log($scope.hall);
        }
    });