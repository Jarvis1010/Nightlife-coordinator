angular.module("nightlife",['ngRoute','angular-jwt']).config(config).run(run);

function config($httpProvider,$routeProvider){
    //set routes
    $routeProvider
    .when('/',{
        templateUrl:'angular/main/main.html'
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

function run(){}