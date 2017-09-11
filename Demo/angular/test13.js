    //通过注入一个$compileProvider方法来自定义指令
var app=angular.module('app',[],['$compileProvider',function ($complieProvider) {
    console.log($complieProvider); 
    //如果html页面名称为custom-tages那么自定义指令时必须为驼峰是命名为customTages
    //自定义指令 
    $complieProvider.directive('customTages',function () {
        return {
            //E表示的是元素，C表示的是class样式A表示属性M表示注释
            restrict:'ECAM',
            template:'<div>你懂的这是什么</div>',
            replace:true,
            // compile:function() {
            //     console.log(1);
            // }
           
        }
    });
}])
// .directive('')

