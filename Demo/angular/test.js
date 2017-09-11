angular.module('app',[])
            //firstController为定义的控制器的方法名
.controller('firstController', function($scope) {
     $scope.name ='张三';
     console.log($scope);
})
             //secondController为定义的控制器的方法名
.controller('secondController',function($scope){
    $scope.name='李四';
    console.log($scope);
})