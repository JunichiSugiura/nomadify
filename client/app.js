Template.twilioButton.events({
  'click #call': function() {
    Meteor.call('callToJun');
  }
});