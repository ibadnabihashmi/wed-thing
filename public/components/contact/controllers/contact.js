angular.module('MyApp')
    .controller('ContactCtrl', function($scope, contactService) {
        $scope.send = function() {
            contactService.send($scope.contact)
                .then(function(response) {
                    console.log(response);
                    $scope.messages = {
                        success: [response.data]
                    };
                },function(response) {
                    console.log(response);
                    $scope.messages = {
                        error: Array.isArray(response.data) ? response.data : [response.data]
                    };
                });
        };
    });
