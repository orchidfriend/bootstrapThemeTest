app.constant('fbURL','https://bootstraptest-rollen.firebaseio.com/');

app.factory('BlogData',function($firebaseArray,fbURL) {
    return $firebaseArray(new Firebase(fbURL));
});