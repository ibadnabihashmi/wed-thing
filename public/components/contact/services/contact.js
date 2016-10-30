angular.module('MyApp')
    .factory('contactService',function($http){
        return {
            send: function (data) {
                return $http.post('/api/contact/send',data);
            },
            get: function () {
                return $http.get('/api/contact/get');
            }
        };
    });