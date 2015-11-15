Template.Restaurants.onCreated(function() {
  var self = this;
  self.autorun(function() {
    self.subscribe('customers');
  });
});

Template.AdminRestaurant.helpers({
  avgWaitingTime: function() {
    console.log(this._id);
    var curser = Customers.find({ restaurantId: this._id });
    curser.forEach(function(row) {
      console.log(row);
    });
  },
  waitingCustomerNum: function() {
    console.log(this._id);
    return Customers.find({restaurantId: this._id}).count();
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