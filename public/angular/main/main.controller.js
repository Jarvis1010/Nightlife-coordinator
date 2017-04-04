angular.module('nightlife').controller('MainController',MainController);

function MainController($http,Authfactory){
    var vm=this;
    
    vm.isLoggedIn=function(){
        return Authfactory.isLoggedIn;
    };
    
    vm.username=function(){
        return Authfactory.username;
    };
    
}