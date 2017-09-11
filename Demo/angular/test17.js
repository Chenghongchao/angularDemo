angular.module('app', [])
    .directive('bookList', function () {
        return {
            restrict: 'ECAM',
            //好处就是可以在多个指令之间通过依赖注入
            controller: function ($scope) {
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
                //添加事件
                
                // this.addBook=function(){
                //     alert(11);
                // }
                $scope.addBook=function(){
                    alert(11);
                }
                
            },
          
            //控制器命名
            controllerAs:'bookListController',
            template: '<ul><li ng-repeat="book in books">{{book.name}}</li></ul>',
            replace: true,
            //iElement是整个ul
            link:function(scope,iElement,iAttrs,bookListController){
                // iElement.on('click',bookListController.addBook);
                iElement.on('click',scope.addBook);
                
            }
        }
    })
    .controller('firstController', ['$scope', function ($scope) {
        
    }]);   