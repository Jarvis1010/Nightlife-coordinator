angular.module('nightlife').directive('loginModal',loginModal);

function loginModal(){
    return{
        restrict:'E',
        templateUrl:'angular/login/login.html',
        controller:LoginController,
        controllerAs:"vm"
    };
}