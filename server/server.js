Meteor.methods({
  callCustomer: function(customerTel, messageUrl) {
    var twilio = Twilio(Meteor.settings.twilioAccountSid, Meteor.settings.twilioAuthToken);
    twilio.makeCall({
      to: customerTel,
      from: Meteor.settings.twilioNumber,
      url: messageUrl
    }, function(err, responseData) {
      if (err) {
        console.log(err);
      }
      console.log('calling to: ' + responseData.from);
    });
  }
});
