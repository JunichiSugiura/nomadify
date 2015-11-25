Meteor.methods({
  callCustomer: function(customerTel, messageUrl) {
    var twilio = Twilio(Meteor.settings.private.twilioAccountSid, Meteor.settings.private.twilioAuthToken);
    twilio.makeCall({
      to: customerTel,
      from: Meteor.settings.private.twilioNumber,
      url: messageUrl
    }, function(err, responseData) {
      if (err) {
        console.log(err);
      }
      console.log('calling to: ' + responseData.from);
    });
  }
});
