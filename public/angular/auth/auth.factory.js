angular.module('nightlife').factory('Authfactory',Authfactory);

function Authfactory($window,jwtHelper){
    
    function setUserName(){
        var username=''
        if($window.sessionStorage.token){
            var token = $window.sessionStorage.token;
            var decodedToken = jwtHelper.decodeToken(token);
            username=decodedToken.username;
        }
        return username;
    }
    
    var username=setUserName();
    
    username=username?username:'';
    
    var auth={
      isLoggedIn:false,
      username:username
    };
    
    return{
        auth:auth
    };
    
    
}