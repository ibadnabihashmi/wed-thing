angular.module('MyApp')
    .factory('hallService',function($http){
        return {
            saveHall:function(hall){
                return $http.post('http://localhost:3000/api/hall/addHall',hall);
            }
        }
    });