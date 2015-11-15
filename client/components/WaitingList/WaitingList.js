Meteor.subscribe('customers');

Template.WaitingList.onRendered(function() {
  var restaurantId = Session.get('restaurantId');
  $('input[name=restaurantId]').val(restaurantId);
});

Template.WaitingList.helpers({
  customers: function() {
    return Customers.find({ status: 'waiting', restaurantId: Session.get('restaurantId'), checkedIn: false });
  },
  waitingCustomerNum: function() {
    var restaurantId = Session.get('restaurantId');
    return Customers.find({ restaurantId: restaurantId, checkedIn: false, status: 'waiting' }).count();
  },
  WaitingTime: function() {
    var restaurantId = Session.get('restaurantId');
    var curser = Customers.find({ restaurantId: restaurantId, checkedIn: false, status: 'waiting' }).count();
    return curser * 5;
  },
  avgWaitingTime: function() {
    var restaurantId = Session.get('restaurantId');
    var curser = Customers.find({ restaurantId: restaurantId, checkedIn: false, status: 'waiting' });
    curser.forEach(function(row) {
      console.log(row);
    });
  }
});

Template.WaitingList.events({
  'submit': function() {
    Materialize.toast('Added to the list', 4000);
  }
});
