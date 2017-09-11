angular.module('code',[])
.controller('codecontroller',function ($scope,$http) {

    $scope.comits = function (phone) {
        alert(phone);
        var urls="http://139.129.251.119:1021/open/get_verifycode.json?userMobile="+phone+"&sceneType=change_mobile_new";
        $http({
            method:'POST',
            url:urls,
            heards:{'Accept':'application/json'}
        }).success(function (data) {
            if(data.code==0) {
                $scope.msg=data.msg;
                confirm(data.msg);
            }else{
                confirm(data.msg);
            }
        }).error(function () {
            confirm("内部错误")
        })
    }
})