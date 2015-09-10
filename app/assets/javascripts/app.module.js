/**
 * Created by madhouse on 9/10/2015.
 */
angular.module('app', ['ui.router', 'templates', 'app.info'])
    .config(['$stateProvider', '$httpProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $httpProvider, $urlRouterProvider, $locationProvider){
        $locationProvider.html5Mode(true);
        $urlRouterProvider.otherwise('/');
        $stateProvider.
            state('home', {
                url: '/',
                templateUrl: '/assets/_home.html',
                controller: 'app.controller'
            });
    }]);