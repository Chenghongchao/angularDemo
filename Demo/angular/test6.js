angular.module('app',[])
//服务工厂共享数据
.factory('Data',function(){
    return {
        message:'共享数据'
    };
})
.controller('firstController',function ($scope,Data) {  
//    console.log($scope);
//    $scope.name='张三';
   $scope.data={
       name:'张三'
   }
   //这个$scope.Data是创建的变量来接收工厂里的Data
   $scope.Data=Data;
})
.controller('secondController',function($scope,Data){
       //prevSibling返回指定成员的前一个兄弟项 ；
    $scope.data=$scope.$$prevSibling.data;
    //这个$scope.Data是创建的变量来接收工厂里的Data
    $scope.Data=Data;
    
});