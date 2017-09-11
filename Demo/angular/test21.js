angular.module('app',[])
//数据
.factory('Data',function () {
    return[
      {
        title:'no1',
        content:'no1-content'
      } ,
      {
        title:'no2',
        content:'no2-content'
      } ,
      {
        title:'no3',
        content:'no3-content'
      }  
    ];
})
//控制器
.controller('firstController',['$scope','Data',function($scope,Data) {
    $scope.data=Data;
}])
//外层指令
.directive('kittencupGroup',function(){
    return {
        restrict:'E',
        replace:true,
        template:'<div class="panel-group" ng-transclude></div>',
        transclude:true,
        
        controllerAs:'kittencupGroupController',
        controller:function(){
            this.groups=[];
            this.closeOtherCollapse=function(nowScope){
                
                angular.forEach(this.groups,function(scope){
                    if(scope !==nowScope){
                        scope.isOpen=false;
                    }
                })
            }
        }
    }
})
.directive('kittencupCollapse',function(){
    return{
        restrict:'E',
        replace:true,
        require:'^kittencupGroup',
        
        //注意跳转页面必须要有一个元素如div标签等
        templateUrl:'kittencupCollapse.html',
        scope:{
            //这里是在页面去找title
            heading:'@heading'
        },
        //显示内容
        link:function(scope,element,attrs,kittencupGroupController){
           scope.isOpen=false;
            scope.changeOpen=function() {
                scope.isOpen=!scope.isOpen;
                kittencupGroupController.closeOtherCollapse(scope);
            }
            kittencupGroupController.groups.push(scope)
        },
        transclude:true
    }
})
