angular.module("nightlife",['ngRoute','angular-jwt']).config(config).run(run);

function config($httpProvider,$routeProvider){
    $httpProvider.interceptors.push('Authinterceptor');
    
    //set routes
    $routeProvider
    .when('/',{
        templateUrl:'angular/main/main.html',
        controller:MainController,
        controllerAs:'vm'
    })
    .when('/register',{
        templateUrl:'angular/register/register.html',
        controller:RegisterController,
        controllerAs:"vm"
    })
    .otherwise({
        redirect:'/'
    });
}

function run($rootScope,$location,$window,Authfactory){
    
    $rootScope.$on('$routeChangeStart',function(event,nextRoute,currentRoute){
        
        if(nextRoute.access!==undefined && nextRoute.access.restricted && !$window.sessionStorage.token && !Authfactory.isLoggedIn){
            event.preventDefault();
            $location.path('/');
        }
    });
}