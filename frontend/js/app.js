/**
 * Created by santosh on 3/27/17.
 */
var app = angular.module("app", []);


app.controller("firstController", function($scope){

    // business logic
    $scope.name = "Hello IRIS";


    $scope.clickme = function(){

        $scope.name = "IRIS INDIA";
    };

});






