angular.module('nightlife').controller('MainController',MainController);

function MainController($http,Authfactory){
    var vm=this;
    
    vm.isLoggedIn=function(){
        return Authfactory.isLoggedIn;
    };
    
    vm.username=function(){
        console.log(Authfactory.auth.username)
        return Authfactory.auth.username;
    };
    
    vm.isGoing=function(index){
        var going=false;
        vm.bars[index].users.forEach(function(username){
            if(username==Authfactory.auth.username){
                going=true
            }
        });
        return going;
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
            vm.bars[index].users.push(Authfactory.auth.username);
           
        }else{
            vm.bars[index].users.splice(Authfactory.auth.username);
        }
        
        $http.post('/api/bars/'+vm.bars[index].id,vm.bars[index]).then(function(res){
             console.log(res);   
        }).catch((err)=>{
            console.log(err);
        });
    };
    
  
    
}