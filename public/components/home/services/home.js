angular.module('MyApp')
    .factory('homeService',function($http){
        return {
            fetchFeatured: function () {
                return $http.get('/api/home/fetchFeatured');
            },
            fetchPopular: function () {
                return $http.get('/api/home/fetchPopular');
            }
        }
    });