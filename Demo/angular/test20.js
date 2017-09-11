angular.module('app', [])
    .directive('bookList', function () {
        return {
            restrict: 'ECAM',
            //好处就是可以在多个指令之间通过依赖注入
            controller: function ($scope) {
                //&books
                // $scope.books=$scope.a();
                //=books
                // $scope.books=$scope.b;
                // $scope.b.push({name:'nodejs'});
                Console.log($scope.c);
            },
            //创建一个有继承链的独立作用域
            // scope:true,
            //当为对象是也会创建一个独立的作用域，但没法享受父集的继承链
            scope: {
                //将父元素的books封装成一个a函数
                // a:'&books'
                //双向绑定 b=parentBooks属性对应的父作用域的表达式
                // b:'=parentBooks'
                //使用简单数据类型的方法
                c: '@parentTitle'
            },
            //控制器命名
            controllerAs: 'bookListController',
            template: '<div><ul><li ng-repeat="book in books">{{book.name}}</li></ul></div>',
            replace: true
        }
    })

    .controller('firstController', ['$scope', function ($scope) {

        $scope.books = [
            {
                name: 'JAVA'
            },
            {
                name: 'PHP'
            },
            {
                name: '.NET'
            }
        ];
        $scope.title = '张三';

    }]);   