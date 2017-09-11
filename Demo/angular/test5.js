                                        //写了$provide后angular会自动帮你注入到这个function里面来
var myapp=angular.module('app',[],function($provide){
    //通过$provide下面的provider方法自定义服务   ---服务名称，方法(参数)
$provide.provider('Customerservice',function(){
   
    this.$get =function(){
        return{
            message:'Customerservice message'
        }
    };
});
    //自定义工厂         --名称，方法(参数)
    $provide.factory('Customerfactory',function(){
        //返回任何类型
        return [1,2,3,4,5,6,7];
    })
    //自定义服务         --名称，方法(参数)
    $provide.service('CustomerService2',function(){
        //返回的必须是对象不能是字符串和其他对象
        return 'aa';
    })
});
myapp.controller('firstcontroller',function (Customerfactory,$scope,Customerservice,CustomerService2) {
    $scope.name='张三';
    console.log(Customerfactory);
    console.log(Customerservice);
    console.log(CustomerService2);
})
//这两个用法跟上边的一样，区别就是这里是myapp里面自己包含的，上面是自己定义的
myapp.service();
myapp.factory();