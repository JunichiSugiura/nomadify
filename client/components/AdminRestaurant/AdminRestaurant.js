Template.Restaurants.onCreated(function() {
  var self = this;
  self.autorun(function() {
    self.subscribe('customers');
  });
});

Template.AdminRestaurant.helpers({
  waitingCustomerNum: function() {
    console.log(this._id);
    return Customers.find({ restaurantId: this._id, checkedIn: false }).count();
  },
  WaitingTime: function() {
    console.log(this._id);
    var curser = Customers.find({ restaurantId: this._id, checkedIn: false }).count();
    return curser * 5;
  },
  avgWaitingTime: function() {
    console.log(this._id);
    var curser = Customers.find({ restaurantId: this._id, checkedIn: false });
    curser.forEach(function(row) {
      console.log(row);
    });
  }
});

Template.AdminRestaurant.events({
  'click .info': function() {
    console.log(this._id);
    var curser = Customers.find({restaurantId: this._id});
    curser.forEach(function(row) {
      console.log(row.createdAt.parse(dateString));
    });
  }
});