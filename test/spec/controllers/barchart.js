'use strict';

describe('Controller: BarchartCtrl', function () {

  // load the controllers's module
  beforeEach(module('dashboardApp'));

  var BarchartCtrl,
    scope;

  // Initialize the controllers and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BarchartCtrl = $controller('BarchartCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
