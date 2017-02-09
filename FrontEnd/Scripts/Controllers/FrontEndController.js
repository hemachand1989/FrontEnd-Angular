FrontEndApp.controller('FrontEndController', ['$scope', 'HttpService','DataService', function ($scope,HttpService,DataService) {
    $scope.merchantDetails = [];
    $scope.Initialize = function () {
        // As data is needed in page load, this function helps to get the data and populate it.
        var promise = HttpService.getMerchantDetails();
        promise.then(
            function (response) {
                $scope.merchantDetails = response.data;
            });
    };

}]);