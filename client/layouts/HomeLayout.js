Template.HomeLayout.events({
  'click .goRestaurants': function(evt) {
    evt.preventDefault();
    FlowRouter.go('restaurants');
  },
  'click .goSignIn': function(evt) {
    evt.preventDefault();
    FlowRouter.go('sign-in');
  },
  'click .goSignUp': function(evt) {
    evt.preventDefault();
    FlowRouter.go('sign-up');
  }
});
