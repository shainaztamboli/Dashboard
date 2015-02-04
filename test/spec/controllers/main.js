'use strict';

describe('Controller: MainCtrl', function () {

  // load the controllers's module
  beforeEach(module('dashboardApp'));

  var MainCtrl,
    scope;

  // Initialize the controllers and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
