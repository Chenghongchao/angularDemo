//定义主方法模块
angular.module('app',[])
.controller('cartController',function($scope) {
 //也可以定义成这样的一个全局模块
// var contro=angular.module('app',[]);
// contro.controller('cartController',function($scope) {
    $scope.cart=[
        {
            id:100,
            name:'平衡车',
            quantity:4,
            price:4300
        },
         {
            id:200,
            name:'iphone5',
            quantity:3,
            price:4300
        },
         {
            id:300,
            name:'iphoneSE',
            quantity:1,
            price:4500
        },
         {
            id:400,
            name:'MAC',
            quantity:2,
            price:20000
        }
    ];
    /**
     * 计算购物总价
     */

    $scope.totalprice = function(){
        var total=0;
        angular.forEach($scope.cart,function(item) {
            total+=item.quantity * item.price;
        })
        return total;
    }
    /**
     * 计算购买的总数量
     */
    $scope.totalquantity=function() {
        var total=0;
        angular.forEach($scope.cart,function(item) {
            //判断当前输入框的只是否为空如果为空那么就默认赋值为0
            if(item.quantity==""||item.quantity==null){
                item.quantity=0;
            }else{
                item.quantity=parseInt(item.quantity);
            }
            total +=parseInt(item.quantity);
        });
        return total;
    };

     /**
     * 定义一个全局查找一个元素的索引
     */
   var findindex=function(id) {
        //定义索引为-1
        var index=-1;
        //如果找到了当前item.id等于当前id那么就把key这个索引值赋给index
        angular.forEach($scope.cart,function (item,key) {
            //返回根据id索引到的第index个对象
            if(item.id ===id){
                index=key;
                return;
            }
        });
        //如果找不到就返回-1
        return index;
    };

    /**
     * 删除的商品的方法
     *  */
    $scope.remove=function (id) {
       var index=findindex(id);

       //如果找到了那个item
       if(index!==-1){
           //splice从第几个开始删除1位
           $scope.cart.splice(index,1);
       }
       //执行的时候自动进行脏检查送一显示层就会自动计算价格和数量
    };

    /**
     * 为某个产品添加一个数量方法
     */
    $scope.add=function(id) {
       var index=findindex(id);
       if(index!==-1){
           ++$scope.cart[index].quantity;
       }
    }
    /**
     * 为某个产品减去一个数量的方法
     */
    $scope.del=function(id) {
        var index=findindex(id);
        if(index!==-1){
            //获取cart的第index元素的对象
            var item=$scope.cart[index];
            if(item.quantity>1){
                --item.quantity;
            }else{
                var returnkey=confirm('从购物车内删除该商品!');
                if(returnkey){
                    $scope.remove(id);
                }
            }
        }
    }
    /**
     * 脏检查判断提示是否删除
     */
    $scope.$watch('cart',function(newValue,oldValue) {
        angular.forEach(newValue,function(item,key) {
            //quantity为cart中的一个字段，item相当于就是cart对象
            if(item.quantity<1){
                var returnkey =confirm('是否从购物车删除该商品!');
                if(returnkey){
                    $scope.remove(item.id);
                }else{
                    item.quantity=oldValue[key].quantity;
                }
            }
        });
    },true);
})