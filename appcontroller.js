var app = angular.module('myApp', ['pascalprecht.translate','ngRoute','ui.router']);

app.config(function ($translateProvider) {
    $translateProvider
    .useStaticFilesLoader({
        prefix: '/locale/local-',
        suffix: '.json'
    }) 
    // remove the warning from console log by putting the sanitize strategy
    .useSanitizeValueStrategy('sanitizeParameters')    
    .preferredLanguage('en');
});

app.run(['$rootScope', function($rootScope) {
    $rootScope.lang = 'en';
}])

app.factory('myHttpInterceptor', function($q, $rootScope, $location,$window) {
    return {
        'request': function (config) {
            config.data = {"tes":"test"};
            return config;
        },
        'response': function (config) {           
            return config;
        },
        'responseError': function (config) {           
            return config;
        },
        'requestError': function (config) {
            return config;
        },
    };
});

app.config(['$httpProvider', function ($httpProvider) {
    $httpProvider.interceptors.push('myHttpInterceptor');
}]);

// app.config(function($routeProvider) {
//     $routeProvider
//     .when("/", {
//         templateUrl : "home.html"
//     })
//     .when("/about", {
//         templateUrl : "about.html"
//     })
//     .when("/contact", {
//         templateUrl : "dashboard.html"
//     });
// });
app.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state("home", {
        url: "/home",
        templateUrl: "home.html",
        params: {data: null}       
      })
      .state("about", {
        url: "/about",
        templateUrl: "about.html"
      })      
      .state("contact", {
        url: "/contact",
        templateUrl: "ContactUs.html"
        // controller:"MyCtrl"
      })
      .state("edit", {
        url: "/edit",
        templateUrl: "edit.html",
        params: {param: null},
        controller: "editcontroller"
        
      });
  });
  //ui-sref controller: "homeController",
        
  //state.go('url',object)
  // ui-view
  //$stateParams,
  //$state