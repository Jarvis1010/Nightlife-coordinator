angular.module('nightlife').directive('titleHeader',titleHeader);

function titleHeader(){
    return{
        restrict:'E',
        templateUrl:'angular/header/header.html',
        scope:{
            title:'@'
        }
    };
}