'use strict';

describe('Service: organization.service', function () {

  // load the service's module
  beforeEach(module('dashboardApp'));

  // instantiate service
  var organization.service;
  beforeEach(inject(function (_organization.service_) {
    organization.service = _organization.service_;
  }));

  it('should do something', function () {
    expect(!!organization.service).toBe(true);
  });

});
