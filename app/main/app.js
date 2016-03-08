'use strict';

var app = angular
.module('NicsKnacks', [
  'ngRoute',
  'ngAnimate',
  'ui.bootstrap',
  'ui.router',
  'btford.socket-io',
  'firebase',
]);

app.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise("/home");

  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'home/home.html',
      // controller: 'homeController'
    })
    .state('shop', {
      url: '/shop',
      templateUrl: 'shop/shop.html',
      // controller: 'shopController'
    })
    .state('admin', {
      url: '/admin',
      templateUrl: 'admin/admin.html',
      // controller: 'adminController'
    })
    .state('health', {
      url: '/health',
      templateUrl: 'blog/blog.html',
      // controller: 'blogController'
    })
    .state('about', {
      url: '/about',
      templateUrl: 'about/about.html',
      // controller: 'aboutController'
    })
});
