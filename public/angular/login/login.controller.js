angular.module('nightlife').controller('LoginController',LoginController);

function LoginController($route,$http,$location,$window,Authfactory,jwtHelper){
    var vm=this;
    
    vm.modal=$('#loginModal');
    
    vm.isLoggedIn=function(){
        return Authfactory.isLoggedIn;
    };
    
    vm.login=function(){
        
        if(vm.username&&vm.password){
            
            var user={
                username:vm.username,
                password:vm.password
            };
            
            
            $http.post('/api/users/login',user).then(function(res){
               if(res.data.success){
                    vm.modal.modal('hide');
                    $window.sessionStorage.token=res.data.token;
                    Authfactory.isLoggedIn=true;
                    vm.error='';
                    Authfactory.username=setUserName();
                    $location.path('/');
               }    
            }).catch(function(err){
                console.log(err);
                vm.error='Invalid Username or Password';
            });
        }
    };
    
    vm.logout=function(){
        delete $window.sessionStorage.token;
        Authfactory.isLoggedIn=false;
        Authfactory.username='';
        $location.path('/');
        vm.modal.modal('hide');
    };
    
    function setUserName(){
        var token = $window.sessionStorage.token;
        var decodedToken = jwtHelper.decodeToken(token);
        return decodedToken.username;
    }
    
}