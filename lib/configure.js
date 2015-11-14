var mySubmitFunc = function(error, state){
  if (!error) {
    Meteor.call('restaurantCounter', restaurantCount);
    function restaurantCount(err, count) {
      if (count == 0) {
        FlowRouter.go('admin-restaurant-sign-up');
      }
    }
    if (state === "signIn") {
      console.log('Successfully logged in');
      FlowRouter.go('admin-restaurants')
    }
    if (state === "signUp") {
      console.log('Successfully registered');
      FlowRouter.go('admin-restaurants')
    }
  }
};

AccountsTemplates.configure({
    onSubmitHook: mySubmitFunc
});

var myPostLogout = function(){
    console.log('Successfully logged out!')
    FlowRouter.go('home');
};

AccountsTemplates.configure({
    onLogoutHook: myPostLogout
});
