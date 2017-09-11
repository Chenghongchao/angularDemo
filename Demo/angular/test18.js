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
                   $scope.$apply(function(){
                        $scope.books.push({
                       name:'Angularjs'
                   })
                   })
                  
                }
                
            },
            //控制器命名
            controllerAs:'bookListController',
            template: '<div><ul><li ng-repeat="book in books">{{book.name}}</li></ul><book-add></book-add></div>',
            replace: true
        }
    })
    
    .directive('bookAdd',function(){
        return {
            restrict:'ECAM',
            //往上找这个属性
            require:'^bookList',
            template:'<button type="button">添加</button>',
            replace:true,
            link:function(scope,iElement,iAttrs,bookListController){
                iElement.on('click',scope.addBook);
            }
        }
    })
    .controller('firstController', ['$scope', function ($scope) {
        
    }]);   