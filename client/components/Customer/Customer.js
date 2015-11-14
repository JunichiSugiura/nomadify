Meteor.subscribe('customers');

Template.Customer.events({
  'click .cancel-waiting': function(evt) {
    evt.preventDefault();

    var num = $('#enteredNum').val();
    Meteor.call('updateCustomerStatus', num, this._id)
  }
});
