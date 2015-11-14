Meteor.subscribe('customers');

Template.WaitingList.helpers({
  customers: function() {
    return Customers.find({});
  }
});
