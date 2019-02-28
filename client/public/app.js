'use strict';

var dashboard = angular.module("dashboard", []);

angular
    .module('DashApplication', [
        'appRoutes',
        'dashboard',
        'ngResource'
    ]);