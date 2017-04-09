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



app.controller("tableController", function($scope, $filter,  NgTableParams){
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



    // CUSTOM-1 CONFIGG
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



app.controller("tableController1", function($scope, $filter,  NgTableParams){
    // First Param is cofig object, and second param is your data list
    var simpleList = [];

    simpleList.push({"age":11, "name":"Iris India Ltd"});
    simpleList.push({"age":12, "name":"Affixus Pvt Ltd"});
    simpleList.push({"age":11, "name":"Rediff India Ltd"});
    simpleList.push({"age":12, "name":"Infosys Pvt Ltd"});
    simpleList.push({"age":21, "name":"Cts India Ltd"});
    simpleList.push({"age":22, "name":"Capgemini Pvt Ltd"});
    simpleList.push({"age":31, "name":"wipro India Ltd"});
    simpleList.push({"age":22, "name":"Capgemini Pvt Ltd"});
    simpleList.push({"age":31, "name":"wipro India Ltd"});
    simpleList.push({"age":22, "name":"Capgemini Pvt Ltd"});
    simpleList.push({"age":31, "name":"wipro India Ltd"});
    simpleList.push({"age":31, "name":"wipro India Ltd"});
    simpleList.push({"age":31, "name":"wipro India Ltd"});
    simpleList.push({"age":31, "name":"wipro India Ltd"});
    simpleList.push({"age":31, "name":"wipro India Ltd"});


    // CUSTOM-1 CONFIGG
    var initialParam = {};
    $scope.customConfigTableParams1 = new NgTableParams(initialParam, {
        "counts": [5, 10, 20],
        "getData": function (params) {
            var filteredData = params.filter() ? $filter('filter')(simpleList, params.filter()) : simpleList;
            var orderedData = params.sorting() ? $filter('orderBy')(filteredData, params.orderBy()) : simpleList;
            params.total(orderedData.length);


            var currentPage = params.page();
            var totalLength = simpleList.length;
            var perPageCount = params.count();

            var totalPages = (Math.floor(totalLength/perPageCount)) + ((totalLength%perPageCount==0)?0:1);
            if(currentPage == totalPages) {

                simpleList.push({"age":31, "name":"wipro India Ltd"});
                simpleList.push({"age":31, "name":"wipro India Ltd"});
                simpleList.push({"age":31, "name":"wipro India Ltd"});
                simpleList.push({"age":31, "name":"wipro India Ltd"});
                simpleList.push({"age":31, "name":"wipro India Ltd"});
                simpleList.push({"age":31, "name":"wipro India Ltd"});
                simpleList.push({"age":31, "name":"wipro India Ltd"});
                simpleList.push({"age":31, "name":"wipro India Ltd"});
                simpleList.push({"age":31, "name":"wipro India Ltd"});
                simpleList.push({"age":31, "name":"wipro India Ltd"});

                params.total(simpleList.length);

                var pageArray = simpleList.slice((params.page() - 1) * params.count(), params.page() * params.count());
                return pageArray;
            } else{
                var pageArray = orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count());
                return pageArray;
            }
        }
    });
});



/**
 * http://codepen.io/christianacca/pen/VLqqjP?editors=1010
 */
app.controller("tableController2", function($scope, $q, $http, $filter,  NgTableParams){

    // CUSTOM-1 CONFIGG
    var initialParam = {"page":1, "count":5};
    $scope.customConfigTableParams2 = new NgTableParams(initialParam, {
        "counts": [5, 10, 20],
        "getData": function(params) {

            return $http.get('./data.json')
                .then(function(data) {
                    var simpleList = data.data.dataList;

                    var filteredData = params.filter() ? $filter('filter')(simpleList, params.filter()) : simpleList;
                    var orderedData = params.sorting() ? $filter('orderBy')(filteredData, params.orderBy()) : simpleList;

                    params.total(orderedData.length);

                    var pageArray = orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count());
                    return pageArray;
                });
        }
    });
});




/**
 * http://codepen.io/christianacca/pen/VLqqjP?editors=1010
 */
app.controller("tableController3", function($scope, $q, $http, $filter,  NgTableParams){

    // CUSTOM-1 CONFIGG
    var initialParam = {"page":1, "count":5};
    $scope.customConfigTableParams3 = new NgTableParams(initialParam, {
        "counts": [5, 10, 20],
        "getData": function(params) {

            var promise = $http.get('./data.json')
            .then(function(data) {
                var simpleList = data.data.dataList;

                var filteredData = params.filter() ? $filter('filter')(simpleList, params.filter()) : simpleList;
                var orderedData = params.sorting() ? $filter('orderBy')(filteredData, params.orderBy()) : simpleList;

                params.total(orderedData.length);

                var pageArray = orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count());
                return pageArray;
            });

            return $q.resolve(promise);
        }
    });
});







