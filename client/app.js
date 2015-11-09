Template.twilioButton.events({
  'click #call': function() {
    var customerTel = Meteor.settings.phoneNumberOfJun;
    var messageUrl = 'https://demo.twilio.com/docs/voice.xml';
    
    Meteor.call('callCustomer', [customerTel, messageUrl], function(err, result) {
      if (err) {
        console.log(err);
      }
    });
  }
});