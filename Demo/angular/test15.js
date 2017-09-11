var app=angular.module('app',[])
.directive('customTages',function () {
    return {
        restrict:'ECAM',
        //会替换原始数据变成新的数据
        template:'<div>新数据<span ng-transclude></span></div>',
        replace:true,
        //为true会将原始数据嵌入新数据里面 
        transclude:true
    }
    })
    .directive('customTages2',function () {
    return {
        restrict:'ECAM',
        
        template:'<div>2</div>',
        replace:true,
        //优先级
        priority:-1
    }
    })
    .directive('customTages3',function () {
    return {
        restrict:'ECAM',
       
        template:'<div>3</div>',
        replace:true,
        priority:0,
        //只要小于0的directive都不会执行
        terminal:true
    }
    })
    
    //控制器渲染
    .controller('firstController',['$scope',function($scope) {
        $scope.name='张三';
    }]);
