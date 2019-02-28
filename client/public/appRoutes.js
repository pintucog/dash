angular
    .module('appRoutes', ["ui.router"])
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

    $stateProvider.state({
        name: 'dashboard',
        url: '/',
        templateUrl: 'public/components/dashboard/templates/dash.template',
        controller: 'DashController'
    });

    $urlRouterProvider.otherwise('/');
}]);