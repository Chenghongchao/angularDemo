                                        //写了$provide后angular会自动帮你注入到这个function里面来
var myapp=angular.module('app',[],function($provide){
    //通过$provide下面的provider方法自定义服务   ---服务名---
$provide.provider('Customerservice',function(){
   
    this.$get =function(){
        return{
            message:'Customerservice message'
        }
    };
});
});
myapp.controller('firstcontroller',function (Customerservice,$scope) {
    $scope.name='张三';
    console.log(Customerservice);
})