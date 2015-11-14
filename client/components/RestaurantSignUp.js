AutoForm.hooks({
  insertRestaurantForm: {
    onSuccess: function(){
      FlowRouter.go('admin-waiting-list');
    }
  }
});
