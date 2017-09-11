var app=angular.module('app',[])
//地址渲染
.directive('customTages',function () {
    return {
        restrict:'ECAM',
        templateUrl: 'other.html',
        replace:true
    }
    })
    //id渲染
    .directive('customTages2',function () {
    return {
        restrict:'ECAM',
        templateUrl: 'customTages2',
        replace:true
    }
    })
    //控制器渲染
    .controller('firstController',['$scope',function($scope) {
        $scope.name='张三';
    }]);
