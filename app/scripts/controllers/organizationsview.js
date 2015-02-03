'use strict';

/**
 * @ngdoc function
 * @name dashboardApp.controller:OrganizationsviewCtrl
 * @description
 * # OrganizationsviewCtrl
 * Controller of the dashboardApp
 */
angular.module('dashboardApp')
  .controller('OrganizationsViewCtrl',['$scope', '$stateParams' , function ($scope, $stateParams) {
    console.log($stateParams);
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }]);
