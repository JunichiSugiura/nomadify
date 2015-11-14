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
  },

  updateCustomerStatus: function(num, customerId) {
    var customer = Customers.findOne({ _id: customerId });
    if (customer.tel == num.substr(1))
    Customers.update(customerId, { $set: { status: 'canceled' } }, function(err, doc) {
      if (err) {
        console.log(err);
      } else {
        console.log(doc);
      }
    });
  }
});
