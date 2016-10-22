angular.module('MyApp')
    .controller('HomeCtrl', function($scope,homeService) {
        homeService.fetchFeatured()
            .then(function (res) {
                $scope.featured = res.data.featured;
            });
        homeService.fetchPopular()
            .then(function (res) {
                $scope.popular = res.data.popular;
            })
    });