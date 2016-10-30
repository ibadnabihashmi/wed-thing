angular.module('MyApp')
    .factory('filterService',function($http){
        return {
            fetchAllVenues: function(){
                return $http.get('/api/filter/fetchAllvenues');
            },
            filter: function (data) {
                return $http.post('/api/filter',data);
            }
        };
    });