'use strict';

describe('Controller: WeeklychartCtrl', function () {

  // load the controller's module
  beforeEach(module('dashboardApp'));

  var WeeklychartCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    WeeklychartCtrl = $controller('WeeklychartCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});