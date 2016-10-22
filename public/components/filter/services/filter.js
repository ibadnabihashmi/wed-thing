angular.module('MyApp')
    .factory('filterService',function($http){
        return {
            fetchAllVenues: function(){
                return $http.get('/api/filter/fetchAllvenues');
            }
        };
    });