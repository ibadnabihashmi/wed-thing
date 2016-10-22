angular.module('MyApp')
    .factory('hallService',function($http,Upload){
        return {
            saveHall:function(hall,files){
                return Upload.upload({
                    url: '/api/hall/addHall',
                    arrayKey: '',
                    data:{
                        files:files,
                        data:hall
                    }
                });
            },
            fetchDetails: function (id) {
                return $http.get('/api/hall/fetchDetails/'+id);
            },
            fetchRelated: function (data) {
                return $http.get('/api/hall/fetchRelated?price='+data.price+'&capacity='+data.capacity);
            }
        }
    });