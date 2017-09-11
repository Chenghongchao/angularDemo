angular.module('app',[],[function ($provide) {
    //讲过
    //$provide.factory
    //$provide.service
    
    //$provide.constant
    // $provide.value;
    
    
}])  
.config(function(APIKEY){
    console.log(APIKEY);
    console.log('config');
}) 
//在config之后controller等其它服务之前
.run(function(){
    console.log('run');
})
    //它可以注入任何方法
.constant('APIKEY','xxxx')
    //只能注入Controller，service,factory
.value('vension','1.0.0')

.controller('firstController',['APIKEY','vension',function(APIKEY,vension){
    console.log(APIKEY);
    console.log(vension);
}])