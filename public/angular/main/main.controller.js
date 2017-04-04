angular.module('nightlife').controller('MainController',MainController);

function MainController($http,Authfactory){
    var vm=this;
    
    vm.isLoggedIn=function(){
        return Authfactory.isLoggedIn;
    };
    
    vm.username=function(){
        return Authfactory.username;
    };
    
    vm.findClubs=function (){
        $http.get('/api/clubs?location='+vm.location).then(function(res){
            vm.clubs=res.data.results;
        }).catch(function(err){
            console.log(err);
        });
    };
    
}