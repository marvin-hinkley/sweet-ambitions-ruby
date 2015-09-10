/**
 * Created by madhouse on 9/10/2015.
 */
angular.module('app.info', [])
    .config(['$stateProvider', '$httpProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $httpProvider, $urlRouterProvider, $locationProvider){
            $stateProvider.
                state('info', {
                    url: '/info',
                    templateUrl: '/assets/info/_info.html',
                    controller: 'info.controller'
                });
    }]);