Meteor.subscribe('customers');

Template.Customer.events({
  'click .cancel-waiting': function(evt) {
    evt.preventDefault();

    var num = $('input#' + this._id).val();
    Meteor.call('updateCustomerStatus', num, this._id)
    Materialize.toast('Canceled', 4000);
  },
  'click .delete-btn': function() {
    $('div#' + this._id).css('height', '250px');
  },
  'click .close-btn': function() {
    $('div#' + this._id).css('height', 'auto');
  }
});
