AutoForm.hooks({
  insertRestaurantForm: {
    onSuccess: function(){
      FlowRouter.go('waiting-list');
    }
  }
});
