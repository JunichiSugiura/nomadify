var mySubmitFunc = function(error, state){
  if (!error) {
    Meteor.call('restaurantCounter', restaurantCount);
    function restaurantCount(err, count) {
      if (count == 0) {
        FlowRouter.go('restaurant-sign-up');
      }
    }
    if (state === "signIn") {
      console.log('Successfully logged in');
      FlowRouter.go('waiting-list')
    }
    if (state === "signUp") {
      console.log('Successfully registered');
      FlowRouter.go('waiting-list')
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
