angular.module('product', [])
    .service('productData', function () {
        return [
            {
                id: 100,
                name: '平衡车',
                price: 4300
            },
            {
                id: 200,
                name: 'iphone5',
              
                price: 4300
            },
            {
                id: 300,
                name: 'iphoneSE',             
                price: 4500
            },
            {
                id: 400,
                name: 'MAC',              
                price: 20000
            }
        ]

    })
    .controller('productController', function ($scope, productData, $filter) {
         $scope.productData=productData;
         
         $scope.orderType='id';
         
         $scope.order='-';
         $scope.changOrder=function(type) {
             $scope.orderType=type;
             if($scope.order===''){
                 $scope.order='-';
             }else{
                 $scope.order='';
             }
         }
    });
