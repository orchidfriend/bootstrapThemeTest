var app = angular.module('blog',['mainController','firebase']);

var app = angular.module('blog',['firebase']);

app.constant('fbURL','https://bootstraptest-rollen.firebaseio.com/');

app.factory('BlogData',function($firebaseArray,fbURL) {
    return $firebaseArray(new Firebase(fbURL));
});

app.controller('mainController',function($scope, $firebaseArray, BlogData){
    $scope.blogData = BlogData;
    $scope.text = '12345';
});
