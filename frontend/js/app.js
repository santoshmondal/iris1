/**
 * Created by santosh on 3/27/17.
 */
var app = angular.module("app", ["ngTable"]);


app.controller("firstController", function($scope){

    // business logic
    $scope.name = "Hello IRIS";


    $scope.clickme = function(){

        $scope.name = "IRIS INDIA";
    };

});



app.controller("tableController", function($scope,  NgTableParams){
    console.log("hello");

    // First Param is cofig object, and second param is your data list
    var simpleList = [];

    simpleList.push({"age":11, "name":"Iris India Ltd"});
    simpleList.push({"age":12, "name":"Affixus Pvt Ltd"});
    simpleList.push({"age":11, "name":"Rediff India Ltd"});
    simpleList.push({"age":12, "name":"Infosys Pvt Ltd"});
    simpleList.push({"age":21, "name":"Cts India Ltd"});
    simpleList.push({"age":22, "name":"Capgemini Pvt Ltd"});
    simpleList.push({"age":31, "name":"wipro India Ltd"});


    $scope.defaultConfigTableParams = new NgTableParams({}, { "dataset": simpleList});



    // CUSTOM CONFIG
    $scope.customConfigTableParams = new NgTableParams({"count":5}, {"counts": [5, 10, 20], "dataset": simpleList});



    // CUSTOM-1 CONFIG
    var initialParam = {"count":5};
    $scope.customConfigTableParams1 = new NgTableParams(initialParam, {
        "counts": [5, 10, 20],
        "getData": function ($defer) {
            //$defer.count(simpleList.length);
            $defer.page(1);
            $defer.total(simpleList.length);
            // return $defer.data = simpleList;
            return simpleList;
        }
    });



});






