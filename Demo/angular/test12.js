var app=angular.module('app',[])
            //firstController为定义的控制器的方法名
.controller('firstController', function($scope) {
    $scope.status=false;
    $scope.changestatus=function (event) {
        //得到当前对象
        console.log(event.target);
        $scope.status=!$scope.status;
         //通过element转换成 jquery对象
        angular.element(event.target).html('切换状态为'+!$scope.status);
    }
    $scope.defaultStype={
        color:'red',
        'margin-top':'50px'
    }
    $scope.src='http://static.adzerk.net/Advertisers/8c72abb5ff154d1f9daba58a2ce84a0d.png';
})
