Meteor.subscribe('customers');

Template.AdminCustomer.events({
  'click #twilio': function(evt) {
    evt.preventDefault();

    // var customer = Customers.find({_id: this._id});
    var customerTel = '+818065530366';
    var messageUrl = 'http://jun-microscope.meteor.com/twilio/notification-message.xml';

    Meteor.call('callCustomer', customerTel, messageUrl, function(err, result) {
      if (err) {
        console.log(err);
      }
    });
  },
  'click #remove': function(evt) {
    evt.preventDefault();

    if (!confirm('本当に削除しますか？')) {
  		return false;
  	}
    Customers.remove({_id: this._id});
  }
});
