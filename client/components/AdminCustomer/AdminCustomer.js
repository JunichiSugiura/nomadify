// Meteor.subscribe('customers');

// Template.AdminCustomer.events({
//   'click #twilio': function(evt) {
//     evt.preventDefault();

//     Materialize.toast('Calling', 4000);
//     var customer = Customers.findOne({ _id: this._id });
//     var stringTel = customer.tel.toString();
//     var customerTel = '+81' + stringTel.substr(0);
//     var messageUrl = 'http://nomadify.meteor.com/twilio/notification-message.xml';

//     Meteor.call('callCustomer', customerTel, messageUrl, function(err, result) {
//       if (err) {
//         console.log(err);
//       } else {
//         console.log('Calling by Twilio');
//       }
//     });
//   },
//   'click #remove': function(evt) {
//     evt.preventDefault();

//     if (!confirm('Are you sure?')) {
//   		return false;
//   	}
//     Customers.remove({ _id: this._id },
//       function( error, result) {
//         if ( error ) Materialize.toast('Error', 4000);
//         if ( result ) Materialize.toast('Removed', 4000);
//       }
//     );
//   },
//   'click #check': function(evt) {
//     evt.preventDefault();

//     Customers.update(this._id, {
//       $set: { checkedIn: ! this.checkedIn }
//     },
//       function( error, result) {
//         if ( error ) Materialize.toast('Error', 4000);
//         if ( result ) Materialize.toast('Checked', 4000);
//       }
//     );
//   }
// });
