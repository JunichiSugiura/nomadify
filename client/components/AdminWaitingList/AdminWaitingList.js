Meteor.subscribe('customers');

Template.AdminWaitingList.onRendered(function() {
  var restaurantId = Session.get('restaurantId');
  $('input[name=restaurantId]').val(restaurantId);
});

Template.AdminWaitingList.helpers({
  customers: function() {
    return Customers.find({ restaurantId: Session.get('restaurantId'), checkedIn: false });
  }
});