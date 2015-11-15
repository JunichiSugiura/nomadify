Meteor.subscribe('customers');

Template.WaitingList.onRendered(function() {
  var restaurantId = Session.get('restaurantId');
  $('input[name=restaurantId]').val(restaurantId);
});

Template.WaitingList.helpers({
  customers: function() {
    return Customers.find({ restaurantId: Session.get('restaurantId'), checkedIn: false });
});
