var app = angular.module('myApp', ['ngRoute']);



app.config(function($routeProvider) {
  $routeProvider

  .when('/', {
    templateUrl : 'User/view/home.html',
    controller : 'HomeController'
   
  })

  
   .when('/user', {
    templateUrl : 'User/view/post_user.html',
    controller : 'UserController as ctrl'
    
   
  })
  
  
   .when('/users', {
    templateUrl : 'User/view/list_users.html',
    controller : 'UserController as ctrl'
    
   
  })
  
  
   .when('/view_user/', {
    templateUrl : 'User/view/view_user.html',
    controller : 'UserController as ctrl'
    
   
  })
  
  
  .when('/myProfile', {
    templateUrl : 'User/view/my_profile.html',
    controller : 'UserController as ctrl'
    
   
  })
  
  
  .when('/about_us', {
    templateUrl : 'Blog/view/about_us.html'
    
  })
  
  
  .when('/contact_us', {
    templateUrl : 'Blog/view/contact_us.html'
    
  })
  
  
  .when('/register', {
    templateUrl : 'User/view/register.html',
    controller : 'UserController as ctrl'
  })
  
  
  .when('/user/login', {
    templateUrl : 'User/view/login.html',
    controller : 'UserController as ctrl'
  })
  
  
  .when('/user/logout', {
    templateUrl : 'User/view/home.html',
    controller : 'UserController as ctrl'
  })

  .otherwise({redirectTo: '/'});
});

