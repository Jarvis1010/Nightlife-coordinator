angular.module('nightlife').controller('MainController',MainController);

function MainController($http,Authfactory){
    var vm=this;
    
    vm.isLoggedIn=function(){
        return Authfactory.isLoggedIn;
    };
    
    vm.username=function(){
        return Authfactory.username;
    };
    
    vm.isGoing=function(index){
        var going=vm.bars[index].users.map(function(username){
            return username==Authfactory.username;
        });
        return going.length>0;
    };
    
    vm.findBars=function (){
        $http.get('/api/bars?location='+vm.location).then(function(res){
            vm.bars=res.data;
            console.log(vm.bars);
        }).catch(function(err){
            console.log(err);
        });
    };
    
    vm.update=function(index){
        
        if(!vm.isGoing(index)){
            vm.bars[index].users.push(Authfactory.username);
        }else{
            vm.bars[index].users.splice(Authfactory.username);
        }    
    };
    
  
    
}