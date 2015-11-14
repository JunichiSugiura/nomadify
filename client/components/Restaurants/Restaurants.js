Template.Restaurants.onCreated(function() {
  var self = this;
  self.autorun(function() {
    self.subscribe('restaurants');
  });
});

Template.Restaurants.helpers({
  restaurants: () => {
    var q = Session.get('q');
    console.log(q);
    return Restaurants.find({ name: { $regex: new RegExp(q, 'i') } });
  }
});

Template.Restaurants.events({
  'keyup #q': function(e) {
    FlowRouter.setQueryParams({ q: e.target.value || null });
    var q = location.search.substr(1).split('=')[1];
    Session.set('q', q);
  }
});