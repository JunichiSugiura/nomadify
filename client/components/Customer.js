Meteor.subscribe('customers');

Template.Customer.events({
  'click #twilio': function() {
    var customer = Customers.find({_id: this._id});
    var messageUrl = 'http://localhost:3030/twilio/notification-message.xml';
    
    Meteor.call('callCustomer', customerTel, messageUrl, function(err, result) {
      if (err) {
        console.log(err);
      }
    });
  },
  'click #remove': function() {
    if (!confirm('本当に削除しますか？')) {
  		return false;
  	}
    Customers.remove({_id: this._id});
  }
});
