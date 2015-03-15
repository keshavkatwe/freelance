// js/services/todos.js
angular.module('userService', [])

    // super simple service
    // each function returns a promise object 
    .factory('Users', function($http) {
        return {
            create : function(userData) {
                return $http.post('/user/create', userData);
            }
        };
    });