FrontEndApp.service('AjaxHandler', ['$http', '$q', function ($http, $rootScope, $window, $log, $q) {

    this.get = function (serverUri,authorizationHeader) { 
        $http.defaults.headers.common['Authorization'] = authorizationHeader;
        return $http.get(serverUri).then(_successEvent, _errorEvent);
    };

    this.post = function (serverUri, data) {
        return $http.post(serverUri, data).then(_successEvent, _errorEvent);
    };

    var _successEvent = function (response) {
        //Can check if there is any common thing to be performed for all the success events.
        return response.data;
    };
    var _errorEvent = function (response) { 
       // Can place error Code response Checks if there is any custom implementation needed for error codes.
        return $q.reject(response);
    };
}]);
