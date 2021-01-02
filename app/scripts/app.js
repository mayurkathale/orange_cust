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
    var scrollContent = function() {
      window.scrollTo(0, 0);
    };
    $urlRouterProvider.otherwise("home");
    $locationProvider.hashPrefix('!');
    $stateProvider
      .state('home', {
        templateUrl: 'views/home.html',
        //controller: 'HomeCtrl',
        url: '/home',
        onEnter: scrollContent
      })
      .state('about', {
        templateUrl: 'views/about.html',
        //controller: 'AboutCtrl',
        url: '/aboutme',
        onEnter: scrollContent
      })
      .state('contact', {
        templateUrl: 'views/contact.html',
        //controller: 'ContactCtrl',
        url: '/contact',
        onEnter: scrollContent
      })
      .state('services', {
        templateUrl: 'views/services.html',
        //controller: 'AboutCtrl',
        url: '/services',
        onEnter: scrollContent
      })
      .state('work', {
        templateUrl: 'views/work.html',
        //controller: 'AboutCtrl',
        url: '/work',
        onEnter: scrollContent
      })
      .state('privacy-statement', {
        templateUrl: 'views/privacy-statement.html',
        //controller: 'AboutCtrl',
        url: '/privacy-statement',
        onEnter: scrollContent
      })
      .state('term-of-use', {
        templateUrl: 'views/term-of-use.html',
        //controller: 'AboutCtrl',
        url: '/term-of-use',
        onEnter: scrollContent
      });
      if(window.history && window.history.pushState){
         $locationProvider.html5Mode({
                 enabled: true,
                 requireBase: false
          });
        }
  });
