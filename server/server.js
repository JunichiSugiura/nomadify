Meteor.methods({
  callToJun: function() {
    var twilio = Twilio(Meteor.settings.twilioAccountSid, Meteor.settings.twilioAuthToken);
    twilio.makeCall({
      to: Meteor.settings.phoneNumberOfJun,
      from: Meteor.settings.twilioNumber,
      url: 'https://demo.twilio.com/docs/voice.xml'
    }, function(err, responseData) {
      if (err) {
        console.log(err);
      }
      console.log(responseData.from);
    });
  }
});
