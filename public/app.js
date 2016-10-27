'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ui.router',
  'myApp.version'
]).
config(['$locationProvider', '$stateProvider', function($locationProvider, $stateProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');

  $stateProvider
      .state('app', {
        url: '/',
        views:{
          'contentView':{
            templateUrl: 'app/d3/d3.html',
            controller: 'D3',
            controllerAs: 'vm'
          }
        },
        onEnter: function () {
          //alert("shell init");
          console.log("enter main page");
        }
      });
}]);
