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
    $urlRouterProvider.otherwise("home");
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

$(document).ready(function(){
  function checkScroll(){
    var startY = $('.navbar').height() * 2; //The point where the navbar changes in px

    if($(window).scrollTop() > startY){
      $('.navbar').addClass("scrolled");
    }else{
      $('.navbar').removeClass("scrolled");
    }
  }

  if($('.navbar').length > 0){
    $(window).on("scroll load resize", function(){
      checkScroll();
    });
  }
});
