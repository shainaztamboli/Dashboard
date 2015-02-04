'use strict';

describe('Controller: HomeCtrl', function () {

  // load the controllers's module
  beforeEach(module('dashboardApp'));

  var HomeCtrl,
    scope;

  // Initialize the controllers and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    HomeCtrl = $controller('HomeCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
