Meteor.subscribe 'customers'

Template.AdminCustomer.events
  'click #twilio': (evt) ->
    evt.preventDefault()

    Materialize.toast 'Calling', 4000
    customer = Customers.findOne(_id: @_id)
    stringTel = customer.tel.toString()
    customerTel = '+81' + stringTel.substr(0)
    messageUrl = 'http://nomadify.meteor.com/twilio/notification-message.xml'

    Meteor.call 'callCustomer', customerTel, messageUrl, (err, result) ->
      if err
        console.log err
      else
        console.log 'Calling by Twilio'
      return
    return
  'click #remove': (evt) ->
    evt.preventDefault()
    if !confirm('Are you sure?')
      return false
    Customers.remove {_id: @_id}, (err, result) ->
      if err
        Materialize.toast 'Error', 4000
      else
        Materialize.toast 'Removed', 4000
      return
    return
  'click #check': (evt) ->
    evt.preventDefault()

    Customers.update @_id, { $set: checkedIn: !@checkedInt }, (err, result) ->
      if err
        Materialize.toast 'Error', 4000
      else
        Materialize.toast 'Checked', 4000
      return
    return