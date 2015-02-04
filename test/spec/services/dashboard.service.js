'use strict';

describe('Service: dashboard.service', function () {

  // load the service's module
  beforeEach(module('dashboardApp'));

  // instantiate service
  var dashboard.service;
  beforeEach(inject(function (_dashboard.service_) {
    dashboard.service = _dashboard.service_;
  }));

  it('should do something', function () {
    expect(!!dashboard.service).toBe(true);
  });

});
