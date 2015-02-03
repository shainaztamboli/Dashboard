'use strict';

/**
 * @ngdoc overview
 * @name dashboardApp
 * @description
 * # dashboardApp
 *
 * Main module of the application.
 */
angular
  .module('dashboardApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap',
    'ui.router',
    'chart.js'
  ])
  .config(function ($stateProvider) {
    $stateProvider
      .state("dashboard", {
        templateUrl: "views/dashboard.html",
        controller: "DashboardCtrl",
        url: "/dashboard"
      })
    $stateProvider
      .state("organizations", {
        templateUrl: "views/organizations.html",
        controller: "OrganizationsCtrl",
        url: "/organizations"
      })
    $stateProvider
      .state("organizations.list", {
        templateUrl: "views/organizations.list.html",
        controller: "OrganizationsListCtrl",
        url: "/list"
      })
    $stateProvider
      .state("organizations.view", {
        templateUrl: "views/organizations.view.html",
        controller: "OrganizationsViewCtrl",
        url: "/view/:orgId"
      })
    $stateProvider
      .state("organizations.edit", {
        templateUrl: "views/organizations.edit.html",
        controller: "OrganizationsEditCtrl",
        url: "/edit/:orgId"
      })


  })
  .run(function($state){
    $state.go("dashboard");
  });


