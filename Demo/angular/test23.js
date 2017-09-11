angular.module('app',[]) 

.controller('firstController',['$scope',function ($scope) {
   $scope.hobbies=[
       {
         id:1,
         name:'上课'  
       },
       {
         id:2,
         name:'睡觉'  
       },
       {
         id:3,
         name:'打豆豆'  
       },
   ];
   $scope.cities=[
       
   ]
   $scope.data={
       hobbies:[1,2,]
   };
   $scope.qiehuanaihao=function (id) {
       var index=$scope.data.hobbies.indexOf(id);
       if(index===-1){
           $scope.data.hobbies.push(id);
       }else{
           $scope.data.hobbies.splice(index,1);
       }
    //    console.log($scope.data.hobbies);
   }
}]);