angular.module('app',[])
            //firstController为定义的控制器的方法名
.controller('firstController', function($scope) {
     var a=0;
     var b=0;
        setInterval(function(){
            $scope.$apply(function(){
                $scope.date = new Date();
                if(b<1000){
                    ++b;
                    $scope.b=b;
                }
                if(a>=0){
                    ++a;
                    $scope.a=a;
                }; 
            });
        });
})
