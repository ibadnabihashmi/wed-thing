angular.module('MyApp')
    .controller('ServicesCtrl', function($scope, $rootScope, $location, $window, $auth, Account) {
        $scope.user = $rootScope.currentUser;
    });