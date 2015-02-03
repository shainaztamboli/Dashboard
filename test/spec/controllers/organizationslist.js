'use strict';

describe('Controller: OrganizationslistctrlCtrl', function () {

  // load the controller's module
  beforeEach(module('dashboardApp'));

  var OrganizationslistctrlCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    OrganizationslistctrlCtrl = $controller('OrganizationslistctrlCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
