AutoForm.hooks
  insertRestaurantForm:
    onSuccess: ->
      console.log 'hey'
      FlowRouter.go 'admin-restaurants'
      return
