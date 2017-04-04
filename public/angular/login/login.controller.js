angular.module('nightlife').controller('LoginController',LoginController);

function LoginController(){
    var vm=this;
    
    vm.login=function(){
        console.log(vm.username,vm.password);
    };
}