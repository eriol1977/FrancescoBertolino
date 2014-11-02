angular.module('tabs', ['ngRoute']).
        config(['$routeProvider', function ($routeProvider) {
                $routeProvider.when('/1', {
                    templateUrl: 'pillole/1.html'
                }).when('/2', {
                    templateUrl: 'pillole/2.html'
                }).when('/3', {
                    templateUrl: 'pillole/3.html'
                }).when('/4', {
                    templateUrl: 'pillole/4.html'
                }).when('/5', {
                    templateUrl: 'pillole/5.html'
                }).when('/6', {
                    templateUrl: 'pillole/6.html'
                }).otherwise({redirectTo: '/1'});
            }]).
        controller('TabsCtrl', ['$location', function($location){
                var self = this;
                self.navigate = function(tab){
                    $location.path("/" + tab);
                };
        }]);