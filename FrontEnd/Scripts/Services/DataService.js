FrontEndApp.service('DataService', [function () {
    var lstMerchantData = [];

    this.setMerchantData = function (data) {
        lstMerchantData.push(merchantData);
    };
    this.getMerchantData = function () {
        return merchantData;
    };

}]);