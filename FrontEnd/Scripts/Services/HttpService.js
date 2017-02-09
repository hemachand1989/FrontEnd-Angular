FrontEndApp.service('HttpService', ['$q', 'DataService', 'AjaxHandler', 'My_App_Constants', function ($q, DataService, AjaxHandler, My_App_Constants) {

    this.getMerchantDetails = function () {
        // $q is used to make the request synchronous from the ajax usual behaviour of asynchronous call. So that data will be returned once the call is done and accordingly UI will be populated.
        var deferred = $q.defer();
        AjaxHandler.get(My_App_Constants.MerchantWebAPIUrl, My_App_Constants.MerchantAuthorizationHeader).then(
            function (response) {
                //The below commented code is other way of setting data at the application. We can use a DataService as an abstraction layer
                //and can provide data to the required controller across the application. As this is a small requirement jus returning the data

                //DataService.setMerchantData(response.data[0]);
                deferred.resolve(response);
            });
        return deferred.promise;
    };
}]);   