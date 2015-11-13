Template.Twilio.events({
  'click #call': function() {
    var customerTel = Meteor.settings.public.phoneNumberOfJun;
    var messageUrl = 'http://localhost:3030/twilio/notification-message.xml';
    
    Meteor.call('callCustomer', customerTel, messageUrl, function(err, result) {
      if (err) {
        console.log(err);
      }
    });
  }
});