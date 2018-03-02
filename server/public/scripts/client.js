let myApp = angular.module('myApp', ['ngRoute', 'ngAria', 'ngMaterial', 'ngAnimate']) 
.config(function($mdThemingProvider) {
    $mdThemingProvider.theme('default')
      .dark();
    });

myApp.config(function($routeProvider) {
    console.log('Config Locked and Loaded!');
    $routeProvider
        .when('/addEmployee', {
            templateUrl: '/views/addEmployee.html',
            controller: 'AddEmployeeController as ae'
        })
        .when('/about', {
            templateUrl: '/views/about.html'
        })
        .otherwise({ redirectTo: '/'
    })
})