'use strict';

describe('Controller: BarCtrl', function () {

  // load the controllers's module
  beforeEach(module('dashboardApp'));

  var BarCtrl,
    scope;

  // Initialize the controllers and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BarCtrl = $controller('BarCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
