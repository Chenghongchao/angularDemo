// 自定义过滤器，通过$filterProvider,$provide,$controllerProvider注册过滤器
angular.module('app', [], function ($filterProvider,$provide,$controllerProvider) {
    $provide.service('Data', function () {
    return[
            {
                    name:'张三',
                    age:20,
                    city:'上海'
            },
            {
                    name:'李四',
                    age:21,
                    city:'北京'
            }
         ];
    });
    $filterProvider.register('filterAge', function () {
        return function(obj){
            //创建新的数组
            var newobj =[];
            angular.forEach(obj,function(o){
                if(o.age>20){
                    newobj.push(o);
                }
            });
            return newobj;
           
        }
    });
    $controllerProvider.register('firstController',function($scope,Data) {
        console.log(Data);
        $scope.data=Data;
    })
})
//filter的模块的快捷过滤器实现
.filter('filtercity',function(){
    return function(obj){

            //创建新的数组
            var newobj =[];
            angular.forEach(obj,function(o){
                if(o.city==='上海'){
                    newobj.push(o);
                }
            });
            return newobj;     
    }
});