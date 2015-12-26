app.controller('mainController',function($scope, $firebaseArray, BlogData){
    $scope.blogData = BlogData;
});