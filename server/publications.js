Meteor.publish('restaurants', function () {
  return Restaurants.find({});
});

Meteor.methods({
  restaurantCounter: function () {
    return Restaurants.find({owner: Meteor.userId}).count();
  }
});

Meteor.publish('customers', function () {
  return Customers.find({});
});

Meteor.methods({
  checkedIn: function () {
    var allCustomers = Customers.find({ restaurantId: Meteor.userId }).count();
    var checkedIn = Customers.find({ restaurantId: Meteor.userId, status: 'checkedIn'}).count();

    checkedIn = checkedIn/allCustomers*100
console.log(checkedIn);
    return checkedIn
  }
});

Meteor.methods({
  canceled: function () {

    var allCustomers = Customers.find({ restaurantId: Meteor.userId }).count();
    var canceled = Customers.find({restaurantId: Meteor.userId, status: 'canceled'}).count();

    canceled = canceled/allCustomers*100
console.log(canceled);
    return canceled
  }
});

Meteor.methods({
  dissapeared: function () {

    var allCustomers = Customers.find({ restaurantId: Meteor.userId }).count();
    var dissapeared = Customers.find({restaurantId: Meteor.userId, status: 'dissapeared'}).count();

    dissapeared = dissapeared/allCustomers*100
console.log(dissapeared);
    return dissapeared
  }
});
