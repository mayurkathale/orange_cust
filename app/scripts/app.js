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
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise("home");
    $locationProvider.hashPrefix('!');
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
      })
      .state('contact', {
        templateUrl: '../views/contact.html',
        //controller: 'AboutCtrl',
        url: '/contact'
      })
      .state('services', {
        templateUrl: '../views/services.html',
        //controller: 'AboutCtrl',
        url: '/services'
      })
      .state('work', {
        templateUrl: '../views/work.html',
        //controller: 'AboutCtrl',
        url: '/work'
      });
  });
