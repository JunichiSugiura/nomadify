Meteor.subscribe('customers');

Template.AdminWaitingList.helpers({
  customers: function() {
    return Customers.find({ checkedIn: false });
  }
});
