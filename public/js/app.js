angular.module('MyApp', ['ngRoute', 'satellizer', 'rzModule', 'ngMap','google.places'])
    .config(function($routeProvider, $locationProvider, $authProvider) {
        $locationProvider.html5Mode(true);

        $routeProvider
            .when('/', {
                templateUrl: 'components/partials/home.html'
            })
            .when('/contact', {
                templateUrl: 'components/partials/contact.html',
                controller: 'ContactCtrl'
            })
            .when('/filter', {
                templateUrl: 'components/partials/filter.html',
                controller: 'FilterCtrl'
            })
            .when('/login', {
                templateUrl: 'components/partials/login.html',
                controller: 'LoginCtrl',
                resolve: { skipIfAuthenticated: skipIfAuthenticated }
            })
            .when('/signup', {
                templateUrl: 'components/partials/signup.html',
                controller: 'SignupCtrl',
                resolve: { skipIfAuthenticated: skipIfAuthenticated }
            })
            .when('/account', {
                templateUrl: 'components/partials/profile.html',
                controller: 'ProfileCtrl',
                resolve: { loginRequired: loginRequired }
            })
            .when('/forgot', {
                templateUrl: 'components/partials/forgot.html',
                controller: 'ForgotCtrl',
                resolve: { skipIfAuthenticated: skipIfAuthenticated }
            })
            .when('/reset/:token', {
                templateUrl: 'components/partials/reset.html',
                controller: 'ResetCtrl',
                resolve: { skipIfAuthenticated: skipIfAuthenticated }
            })
            .when('/addService', {
                templateUrl: 'components/services/views/addServices.html',
                controller: 'ServicesCtrl'
            })
            .when('/addHall', {
                templateUrl: 'components/hall/views/addHall.html',
                controller: 'HallCtrl'
            })
            .otherwise({
                templateUrl: 'components/partials/404.html'
            });

        $authProvider.loginUrl = '/login';
        $authProvider.signupUrl = '/signup';
        $authProvider.facebook({
            url: '/auth/facebook',
            clientId: '980220002068787',
            redirectUri: 'http://localhost:3000/auth/facebook/callback'
        });
        $authProvider.google({
            url: '/auth/google',
            clientId: '631036554609-v5hm2amv4pvico3asfi97f54sc51ji4o.apps.googleusercontent.com'
        });
        $authProvider.twitter({
            url: '/auth/twitter'
        });

        function skipIfAuthenticated($location, $auth) {
            if ($auth.isAuthenticated()) {
                $location.path('/');
            }
        }

        function loginRequired($location, $auth) {
            if (!$auth.isAuthenticated()) {
                $location.path('/login');
            }
        }
    })
    .run(function($rootScope, $window) {
        if ($window.localStorage.user) {
            $rootScope.currentUser = JSON.parse($window.localStorage.user);
        }
    });
