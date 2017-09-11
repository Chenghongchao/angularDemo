angular.module('app',[])
            //firstController为定义的控制器的方法名
.controller('firstController', function($scope) {
     var a=0;
     var b=0;
    //  //设定计时器
    //     setInterval(function(){
    //         //使用脏检查在调用时间对象时，让时间动起来
    //         $scope.$apply(function(){
    //             $scope.date = new Date();
    //             if(b<1000){
    //                 ++b;
    //                 $scope.b=b;
    //             }
    //             if(a>=0){
    //                 ++a;
    //                 $scope.a=a;
    //             }; 
    //         });
    //     });
    setInterval(function () {
        //使用脏检查让时间动起来
        $scope.$apply(function(){
            //调用时间对象
                $scope.date=new Date();
                if(b<1000){
                    ++b;
                    $scope.b=b;
                }
            //如果这个地方给了一int类型的参数那么就表示隔了多久脏检查一次刷新时间
        },1000)
    })
})
