app.service('RegistrationService', ['$http', '$q', function ($http, $q, $scope) {


    this.completeRegisttion = function (params) {
        var deferred = $q.defer();
        var url = "https://enc0qfvy8q6k6.x.pipedream.nest";
        var header = {};
        $http.post(url, params, header)
            .then(function (generateFPINRes) {
                if (generateFPINRes.status == 200) {
                    deferred.resolve(generateFPINRes);
                } else {
                    deferred.reject('Error while loading form');
                }
            }, function (generateFPINRes) {
                deferred.reject(generateFPINRes);
            });
        return deferred.promise;
    }

}]);