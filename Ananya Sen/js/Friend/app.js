var app = angular.module('myApp', ['ngRoute']);



app.config(function($routeProvider) {
  $routeProvider

  .when('/', {
    templateUrl : 'Friend/view/home.html',
    controller : 'HomeController'
   
  })

  
   .when('/friend', {
    templateUrl : 'Friend/view/post_friend.html',
    controller : 'FriendController as ctrl'
    
   
  })
  
  
  
  .when('/friends', {
    templateUrl : 'Friend/view/list_friends.html',
    controller : 'FriendController as ctrl'
    
   
  })
  
  
   .when('/view_friend/', {
    templateUrl : 'Friend/view/view_friend.html',
    controller : 'FriendController as ctrl'
    
   
  })
  
  .when('/new_requests/', {
    templateUrl : 'Friend/view/new_request_list.html',
    controller : 'FriendController as ctrl'
    
   
  })
  
  
  .when('/friends_list/', {
    templateUrl : 'Friend/view/friends_list_with_U.html',
    controller : 'FriendController as ctrl'
    
   
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

