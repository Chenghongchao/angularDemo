angular.module('app', [])
    .factory('Data', function () {
        return {
            message:'Hello World',
            city: [
                {
                    name: '上海',
                    py: 'shanghai'
                },
                {
                    name: '重庆',
                    py: 'chongqing'
                },
                {
                    name: '北京',
                    py: 'beijing'
                }
            ]
        };
    })
    .controller('firstController', function ($scope, Data,$filter) {
        $scope.data = Data;
        $scope.today = new Date;
        
        //控制器里使用过滤器,在控制器里调用$filter
                           //过滤器（参数）,可以颗粒话后面随便写（参数）
       var number= $filter('number')(3000);
       console.log(number);
       //json主要用于调试
       var jsonString=$filter('json')($scope.data);
       console.log(jsonString);
       console.log($scope.data);
       //函数名checkName
       $scope.checkName =function(obj) {
           //会向浏览器传递整个的obj
        //    console.log(obj);
           if(obj.py.indexOf('h')===-1)
           //-1表示没有如果不包含h就不保留
               return false;
           return true;
           
       }
    })
