Template.Restaurant.helpers({
  waitingCustomerNum: function() {
    return Customers.find({ restaurantId: this._id, checkedIn: false, status: 'waiting' }).count();
  },
  WaitingTime: function() {
    var curser = Customers.find({ restaurantId: this._id, checkedIn: false, status: 'waiting' }).count();
    return curser * 5;
  },
  avgWaitingTime: function() {
    var curser = Customers.find({ restaurantId: this._id, checkedIn: false, status: 'waiting' });
    curser.forEach(function(row) {
      console.log(row);
    });
  }
});
