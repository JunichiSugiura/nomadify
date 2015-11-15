Template.Restaurant.helpers({
  waitingCustomerNum: function() {
    console.log(this._id);
    return Customers.find({ restaurantId: this._id, checkedIn: false, status: 'waiting' }).count();
  },
  WaitingTime: function() {
    console.log(this._id);
    var curser = Customers.find({ restaurantId: this._id, checkedIn: false, status: 'waiting' }).count();
    return curser * 5;
  },
  avgWaitingTime: function() {
    console.log(this._id);
    var curser = Customers.find({ restaurantId: this._id, checkedIn: false, status: 'waiting' });
    curser.forEach(function(row) {
      console.log(row);
    });
  }
});
