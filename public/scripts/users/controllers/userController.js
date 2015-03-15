angular.module('userController',[])

// inject the Todo service factory into our controller
    .controller('userMainController', function($scope, $http, Users) {
        $scope.formData = {};

        $scope.submitForm = function() {
            
                //alert('ss');
                console.log('ss');
            //if (!$.isEmptyObject($scope.formData)) {
                
                
                
                
                // call the create function from our service (returns a promise object)
                Users.create($scope.formData)

//                    // if successful creation, call our get function to get all the new todos
                    .success(function(data) {
////                        $scope.formData = {}; // clear the form so our user is ready to enter another
////                        $scope.todos = data; // assign our new list of todos
                           console.log(data);
                                //alert('Success');
                    });
            //}
        };

        
    });