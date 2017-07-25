var app = angular.module('myApp', ['ngRoute']);



app.config(function($routeProvider) {
  $routeProvider

  .when('/', {
    templateUrl : 'Blog/view/home.html',
    controller : 'HomeController'
   
  })

  
   .when('/blog', {
    templateUrl : 'Blog/view/post_blog.html',
    controller : 'BlogController as ctrl'
    
   
  })
  
  
  .when('/new_blogs', {
    templateUrl : 'Blog/view/list_newblogs.html',
    controller : 'BlogController as ctrl'
    
   
  })
  
  
  .when('/appr_blogs', {
    templateUrl : 'Blog/view/list_blogs.html',
    controller : 'BlogController as ctrl'
    
   
  })
  
  
  .when('/rej_blogs', {
    templateUrl : 'Blog/view/list_rejblogs.html',
    controller : 'BlogController as ctrl'
    
   
  })
  
  
  .when('/view_blog/', {
    templateUrl : 'Blog/view/view_blog.html',
    controller : 'BlogController as ctrl'
    
   
  })
  
  
  
  .when('/about_us', {
    templateUrl : 'Blog/view/about_us.html'
    
  })
  
  
  .when('/contact_us', {
    templateUrl : 'Blog/view/contact_us.html'
    
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


