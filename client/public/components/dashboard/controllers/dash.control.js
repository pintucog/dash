dashboard
    .controller('DashController', function($scope, Plot) {
        Plot.query().$promise.then(function(data) {
            $scope.chains = data;
        });
});