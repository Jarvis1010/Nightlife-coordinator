angular.module('nightlife').controller('MainController',MainController);

function MainController($http,Authfactory){
    var vm=this;
    
    vm.isLoggedIn=function(){
        return Authfactory.isLoggedIn;
    };
    
    vm.username=function(){
        return Authfactory.username;
    };
    
    vm.findBars=function (){
        $http.get('/api/bars?location='+vm.location).then(function(res){
            vm.bars=res.data;
            console.log(vm.bars);
        }).catch(function(err){
            console.log(err);
        });
    };
    
}