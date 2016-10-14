angular.module('MyApp')
    .controller('HallCtrl', function($scope, $rootScope, $location, $window, $auth, hallService, NgMap, Upload) {
        $scope.user = $rootScope.currentUser;
        $scope.map;
        NgMap.getMap().then(function(map){
            $scope.map = map;
        });
        $scope.hall = {
            latitude:0,
            longitude:0
        };
        $scope.getThisLocation = function(e){
            $scope.hall.latitude = e.latLng.lat();
            $scope.hall.longitude = e.latLng.lng();
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
            $scope.hall.address = place.formatted_address;
            var marker = new google.maps.Marker({
                position: {
                    lat:$scope.hall.latitude,
                    lng:$scope.hall.longitude
                },
                map: $scope.map,
                draggable: true,
                animation: google.maps.Animation.DROP
            });
            marker.addListener('dragend',$scope.getThisLocation);
            $scope.map.panTo({
                lat:$scope.hall.latitude,
                lng:$scope.hall.longitude
            });
        };
        $scope.uploadFiles = function (files) {
            $scope.files = files;
        };

        $scope.saveHall = function(){
            
            var promise = hallService.saveHall(
                $scope.hall,
                $scope.files
            );
            promise.then(function(response){
                console.log(response);
            },function(error){
                console.log(error);
            });
        };
    });