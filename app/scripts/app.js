'use strict';

/**
 * @ngdoc overview
 * @name ohrmCustomizationApp
 * @description
 * # ohrmCustomizationApp
 *
 * Main module of the application.
 */
angular
  .module('ohrmCustomizationApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router'
  ])
  .config(function ($httpProvider, $stateProvider, $urlRouterProvider) {
    $httpProvider.defaults.useXDomain = true;
    $httpProvider.defaults.withCredentials = true;
    delete $httpProvider.defaults.headers.common["X-Requested-With"];
    $httpProvider.defaults.headers.common["Accept"] = "application/json";
    $httpProvider.defaults.headers.common["Content-Type"] = "application/json";
    $urlRouterProvider.otherwise("/home");
    $stateProvider
      .state('home', {
        templateUrl: '../views/home.html',
        //controller: 'HomeCtrl',
        url: '/home'
      })
      .state('about', {
        templateUrl: '../views/about.html',
        //controller: 'AboutCtrl',
        url: '/aboutme'
      });
  });
