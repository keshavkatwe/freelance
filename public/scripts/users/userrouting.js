angular.module('userrouting', ['ui.router','userController','userService'])


        .config(function ($stateProvider, $urlRouterProvider, $ocLazyLoadProvider) {

            $ocLazyLoadProvider.config({
                debug: false,
                events: true,
            });

            $stateProvider
                    .state('home.users', {
                        url: "/users", // root route
                        templateUrl: "views/users/users.html",
                        data: {pageTitle: 'Users'}
                    })
                    .state('home.users.add', {
                        url: "/add", // root route
                        templateUrl: "views/users/add.html",
                        data: {pageTitle: 'Add user'},
                        controller: 'userMainController'
                    });

        });