Meteor.publish('restaurants', function () {
  return Restaurants.find({owner: this.userId});
});

Meteor.methods({
  restaurantCounter: function () {
    return Restaurants.find({owner: Meteor.userId}).count();
  }
});

Meteor.publish('customers', function () {
  return Customers.find({restaurantId: this.userId});
});
