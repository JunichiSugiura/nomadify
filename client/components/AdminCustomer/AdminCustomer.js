Meteor.subscribe('customers');

Template.AdminCustomer.events({
  'click #twilio': function(evt) {
    evt.preventDefault();

    var customer = Customers.findOne({ _id: this._id });
    var stringTel = customer.tel.toString();
    var customerTel = '+81' + stringTel.substr(0);
    var messageUrl = 'http://nomadify.meteor.com/twilio/notification-message.xml';

    Meteor.call('callCustomer', customerTel, messageUrl, function(err, result) {
      if (err) {
        console.log(err);
      } else {
        console.log('Calling by Twilio');
      }
    });
  },
  'click #remove': function(evt) {
    evt.preventDefault();

    if (!confirm('本当に削除しますか？')) {
  		return false;
  	}
    Customers.remove({ _id: this._id });
  },
  'click #check': function(evt) {
    evt.preventDefault();

    Customers.update(this._id, {
      $set: { checkedIn: ! this.checkedIn }
    });
  }
});
