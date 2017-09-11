angular.module('app',[])
            //firstController为定义的控制器的方法名
.controller('firstController', function($scope) {
     $scope.name='张三';
     $scope.data={
         name:'李四',
         count:20
     }
     $scope.count=0;
     $scope.$watch('name',function(newValue,oldValue){
         ++$scope.count;
         if($scope.count>30){
             $scope.name='长度已经大于30了';
         }
     });
     //$watch的第三个参数
     $scope.$watch('data',function(){
         
     },true)
});
