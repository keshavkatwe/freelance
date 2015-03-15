var myApp = angular.module('freelancing', ['ui.router', 'oc.lazyLoad', 'ui.bootstrap','userrouting']);


myApp.controller('mainController', ['$scope', function ($scope) {
        $scope.project_name = 'Freelance';
    }]);


myApp.config(function ($stateProvider, $urlRouterProvider, $ocLazyLoadProvider) {

    $ocLazyLoadProvider.config({
        debug: false,
        events: true,
    });


    //
    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise("/home/dashboard");
    //
    $stateProvider

            .state('home', {
                url: "/home", // root route
                templateUrl: "views/main.html",
                resolve: {
                    loadMyDirectives: function ($ocLazyLoad) {
                        return $ocLazyLoad.load(
                                {
                                    name: 'freelance',
                                    files: [
                                        'bower_components/jquery/dist/jquery.min.js',
                                        'bower_components/bootstrap/dist/js/bootstrap.js',
                                        'assets/js/app.js',
                                        'bower_components/slimScroll/jquery.slimscroll.min.js',
                                        'bower_components/fastclick/lib/fastclick.js'
                                    ]
                                });
                    }
                }
            })


            .state('home.dashboard', {
                url: "/dashboard", // root route
                templateUrl: "views/dashboard/dashboard.html",
                data: {pageTitle: 'Dashboard'}
            })


            .state('home.projects', {
                url: "/projects", // root route
                templateUrl: "views/project/projects.html",
                data: {pageTitle: 'Projects'}
            })
            .state('home.projects.add', {
                url: "/add", // root route
                templateUrl: "views/project/add_project.html",
                data: {pageTitle: 'Add project'}
            });

});

myApp.run(['$rootScope', '$state', '$stateParams',
    function ($rootScope, $state, $stateParams) {

        // It's very handy to add references to $state and $stateParams to the $rootScope
        // so that you can access them from any scope within your applications.For example,
        // <li ng-class="{ active: $state.includes('contacts.list') }"> will set the <li>
        // to active whenever 'contacts.list' or one of its decendents is active.
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
    }
]);


myApp.run(function($rootScope){

    $rootScope
        .$on('$stateChangeStart', 
            function(event, toState, toParams, fromState, fromParams){ 
                $("#ui-view").html("");
                $(".page-loading").removeClass("hidden");
        });

    $rootScope
        .$on('$stateChangeSuccess',
            function(event, toState, toParams, fromState, fromParams){ 
                $(".page-loading").addClass("hidden");
        });

});