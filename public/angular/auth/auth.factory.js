angular.module('nightlife').factory('Authfactory',Authfactory);

function Authfactory(){
    
    var auth={
      isLoggedIn:false  
    };
    
    return{
        auth:auth
    };
    
    
}