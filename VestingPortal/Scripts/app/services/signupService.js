(function () {
    'use strict';

    angular
        .module('app')
        .factory('signupService', service);

    service.$inject = ['$http'];

    function service($http) {
        var service = {
            getUsers: getUsers,
            signupUser: signupUser
        };

        return service;

        function getUsers() {
            return $http.get('http://localhost:52844/api/Signup');
        }

        function signupUser(user) {
            return $http.post('http://localhost:52844/api/Signup', user);
        }
    }
})();