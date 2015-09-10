/**
 * Created by madhouse on 9/10/2015.
 */
var app = angular.module('app', [
    'ui.router',
    'templates',
    'app.info'
]);
app.config(['$stateProvider', '$httpProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $httpProvider, $urlRouterProvider, $locationProvider){
    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/');
    $stateProvider.
        state('home', {
            url: '/',
            templateUrl: 'home.html',
            controller: 'app.controller'
        });
}]);