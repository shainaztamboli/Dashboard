'use strict';

/**
 * @ngdoc function
 * @name dashboardApp.controller:OrganizationseditCtrl
 * @description
 * # OrganizationseditCtrl
 * Controller of the dashboardApp
 */
angular.module('dashboardApp')
  .controller('OrganizationsEditCtrl', ['$scope', '$stateParams', function ($scope, $stateParams) {
    console.log($stateParams);
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }]);
