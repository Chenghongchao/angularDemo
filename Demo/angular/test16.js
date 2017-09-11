var i=0;
var app=angular.module('app',[])
.directive('customTages',function () {
    return {
        restrict:'ECAM',
        //会替换原始数据变成新的数据
        template:'<div>{{user.name}}</div>',
        replace:true,
        //tElement当前元素的jquery对象
        compile:function(tElement,tAttrs,transclude){
            console.log(tElement);
            console.log(tAttrs);
            console.log(transclude);
            tElement.append(angular.element('<div>{{user.name}}{{user.count}}</div>'));
            //编译阶段。。。
            console.log('customTages compile 编译阶段');
            return{
                //表示在编译阶段之后，指令连接到子元素之前运行
                pref:function preLink(scope,iElement,iAttrs,controller){
                    console.log('customTages preLink..');
                },
                //表示所有子元素指令都链接后才运行
                post:function postLink(scope,iElement,iAttrs,controller){
                    //绑定点击时间
                    iElement.on('click',function(){
                        scope.$apply(function(){
                            scope.user.name='click after';
                            scope.user.count=++i;
                        })
                    })
                    console.log('customTages all child directive link..');
                }
            }
            // //可以直接返回postLink
            // return function(){
            //     console.log('compile return fun');
            // }
        },
        //此linke表示的就是postLink
        link:function(){
            
        }
       
    }
})
//只能有一个template
.directive('customTages2',function () {
   return {
        restrict:'ECAM',
      
        replace:true,
        //tElement当前元素的jquery对象
        compile:function(tElement,tAttrs,transclude){
         
            //编译阶段。。。
            console.log('customTages2 compile 编译阶段');
            return{
                //表示在编译阶段之后，指令连接到子元素之前运行
                pref:function preLink(){
                    console.log('customTages2 preLink');
                },
                //表示所有子元素指令都链接后才运行
                post:function postLink(){
                    console.log('customTages2 all child directive link..');
                }
            }
          
        }
   }
})
    .controller('firstController',['$scope',function($scope) {
        $scope.users=[{
            id:10,
            name:'张三',
            age:'18'
        },{
            id:10,
            name:'李四',
            age:'18'
        }]
    }])