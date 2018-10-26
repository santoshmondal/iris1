var app = angular.module("app");

app.controller("scrollController", function($scope, $filter,  NgTableParams) {
    let data = []; // Start array empty and global

    for(let i=0; i<30; i++){
        data.push({"age":11, "name":"Iris India Ltd"});
        data.push({"age":12, "name":"Affixus Pvt Ltd"});
        data.push({"age":11, "name":"Rediff India Ltd"});
        data.push({"age":12, "name":"Infosys Pvt Ltd"});
        data.push({"age":21, "name":"Cts India Ltd"});
        data.push({"age":22, "name":"Capgemini Pvt Ltd"});
        data.push({"age":31, "name":"wipro India Ltd"});
    }

    $scope.tableParams = new NgTableParams({
        page: 1,                      // show first page
        count: data.length,           // count per page
    }, {
        counts: [],
        total: 1,
        
        getData: function($defer) {
            $scope.data = data.slice(0, 20);

            return $scope.data;
        }
    });


    $scope.getMoreData = function () {
        $scope.data = data.slice(0, $scope.data.length + 20);
    }
});