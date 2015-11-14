Template.Restaurants.onCreated(function() {
  var self = this;
  self.autorun(function() {
    self.subscribe('restaurants');
  });
});

Template.Restaurants.helpers({
  restaurants: () => {
    return Restaurants.find();
  }
});