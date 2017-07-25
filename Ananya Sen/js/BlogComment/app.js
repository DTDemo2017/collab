var app = angular.module('myApp', ['ngRoute']);



app.config(function($routeProvider) {
  $routeProvider

  .when('/', {
    templateUrl : 'BlogComment/view/home.html',
    controller : 'HomeController'
   
  })

  
   .when('/blogcomment', {
    templateUrl : 'BlogComment/view/post_blogcomment.html',
    controller : 'BlogCommentController as ctrl'
    
   
  })
  
  
  .when('/blogcomments', {
    templateUrl : 'BlogComment/view/list_blogcomments.html',
    controller : 'BlogCommentController as ctrl'
    
   
  })
  
  
  .when('/view_blogcomment/', {
    templateUrl : 'BlogComment/view/view_blogcomment.html',
    controller : 'BlogCommentController as ctrl'
    
   
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

