Meteor.subscribe('customers');

Template.WaitingList.helpers({
  customers: function() {
    return Customers.find({ restaurantId: this.params._id, checkedIn: false });
  }
});
