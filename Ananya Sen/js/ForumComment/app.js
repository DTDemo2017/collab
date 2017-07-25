var app = angular.module('myApp', ['ngRoute']);



app.config(function($routeProvider) {
  $routeProvider

  .when('/', {
    templateUrl : 'ForumComment/view/home.html',
    controller : 'HomeController'
   
  })

  
   .when('/forumcomment', {
    templateUrl : 'ForumComment/view/post_forumcomment.html',
    controller : 'ForumCommentController as ctrl'
    
   
  })
  
  
  
  .when('/forumcomments', {
    templateUrl : 'ForumComment/view/list_forumcomments.html',
    controller : 'ForumCommentController as ctrl'
    
   
  })
  
  
  .when('/view_forumcomment/', {
    templateUrl : 'ForumComment/view/view_forumcomment.html',
    controller : 'ForumCommentController as ctrl'
    
   
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

