Meteor.subscribe('customers');

Template.Customer.events({
  'click .cancel-waiting': function(evt) {
    evt.preventDefault();

    var num = $('input.' + this._id).val();
    var customerId = this._id;

    var customer = Customers.findOne({ _id: customerId });
    console.log(customer.tel == num.substr(1));

    if (customer.tel == num.substr(1)) {
      Customers.update(customerId, { $set: { status: 'canceled' } }, function(err, doc) {
        if (err) {
          Materialize.toast('Error', 4000);
        } else {
          Materialize.toast('Canceled', 4000);
        }
      });
    } else {
      Materialize.toast('Error', 4000);
    }
  },
  'click .delete-btn': function() {
    $('div#' + this._id).css('height', '250px');
  },
  'click .close-btn': function() {
    $('div#' + this._id).css('height', 'auto');
  }
});
