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
  .config(function ($stateProvider, $urlRouterProvider) {
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
