(function () {
    'use strict';

    angular
        .module('jhipsterTraducereApp')
        .factory('Register', Register);

    Register.$inject = ['$resource'];

    function Register ($resource) {
        return $resource('api/register', {}, {});
    }
})();
