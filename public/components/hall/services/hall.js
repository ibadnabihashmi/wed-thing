angular.module('MyApp')
    .factory('hallService',function($http,Upload){
        return {
            saveHall:function(hall,file){
                return Upload.upload({
                    url: 'http://localhost:3000/api/hall/addHall',
                    headers : {
                        'Content-Type': 'multipart/form-data'
                    },
                    data: hall,
                    files: file
                });
            }
        }
    });