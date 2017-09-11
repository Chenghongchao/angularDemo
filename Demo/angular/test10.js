var app=angular.module('app',[],['$filterProvider','$provide','$controllerProvider',function(a,b,c) {
     console.log(a,b,c);
}])

.factory('CustomerService',['$window',function(a){
    console.log(a);
}])
//隐式的依赖注入
.controller('firstController',function ($scope,CustomerService) {
    console.log(CustomerService);
})
//显示的依赖注入
//如果写的是一个数组的形式那么就必须引入$scope,a为$scope,b为$filter
.controller('secondController',['$scope','$filter',function(a,b){
    console.log(b('json')([1,2,3,4,5]));
    
}]);

// //总的控制器，不属于app下
// function otherController(a){
//     console.log(a);
// }
// otherController.$inject =['$scope'];