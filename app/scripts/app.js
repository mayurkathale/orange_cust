'use strict';


var scrollContent = function() {
  window.scrollTo(0, 0);
};
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
        url: '/home',
        onEnter: scrollContent
      })
      .state('about', {
        templateUrl: '../views/about.html',
        //controller: 'AboutCtrl',
        url: '/aboutme',
        onEnter: scrollContent
      })
      .state('contact', {
        templateUrl: '../views/contact.html',
        //controller: 'ContactCtrl',
        url: '/contact',
        onEnter: scrollContent
      })
      .state('services', {
        templateUrl: '../views/services.html',
        //controller: 'AboutCtrl',
        url: '/services',
        onEnter: scrollContent
      })
      .state('work', {
        templateUrl: '../views/work.html',
        //controller: 'AboutCtrl',
        url: '/work',
        onEnter: scrollContent
      });
  });
