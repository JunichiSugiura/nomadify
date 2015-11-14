Meteor.publish('restaurants', function () {
  return Restaurants.find({owner: Meteor.userId});
});

Meteor.methods({
  restaurantCounter: function () {
    return Restaurants.find({owner: Meteor.userId}).count();
  }
});
