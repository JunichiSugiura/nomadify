Meteor.subscribe('customers');
Meteor.subscribe('restaurants');

Template.WaitingList.onRendered(function() {
  var restaurantId = Session.get('restaurantId');
  $('input[name=restaurantId]').val(restaurantId);
});

Template.WaitingList.helpers({
  restaurant: function() {
    var restaurantId = Session.get('restaurantId');
    return Restaurants.findOne(restaurantId);
  },
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
    var name = $('input[name="name"]').val();
    var tel = $('input[name="tel"]').val();
    var numberOfPeople = $('input[name="numberOfPeople"]').val();

    if (name != '' && tel != '' && numberOfPeople != '') {
      Materialize.toast('Added to the list', 4000);
    } else {
      Materialize.toast('Error', 4000);
    }
  }
});
