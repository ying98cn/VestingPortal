(function () {
    'use strict';

    angular
        .module('app')
        .controller('signupController', controller);

    controller.$inject = ['signupService'];

    function controller(signupService) {
        /* jshint validthis:true */
        var vm = this;

        vm.emailFormat = /^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,5}$/;
        vm.fullnameFormat = /^[a-zA-Z ]*$/;
        vm.HasNewsletter = false;

        signupService.getUsers()
            .success(function (result) {
                vm.SignupUserList = result;
            });

        function AddToSignupList() {
            var newUser = {
                'Fullname': vm.Fullname,
                'Email': vm.Email,
                'HasNewsletter': vm.HasNewsletter
            };

            // add new user to this list on the UI.
            signupService.signupUser(newUser)
                .success(function () {
                    vm.SignupUserList.push(newUser);
                })
        }

        // exports
        vm.AddToSignupList = AddToSignupList;

    }

})();