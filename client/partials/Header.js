Template.Header.rendered = function() {
  Meteor.setTimeout(function() {
    
    this.$('.dropdown-button').dropdown({
      inDuration: 300,
      outDuration: 225,
      constrain_width: false,
      hover: false,
      alignment: 'right',
      gutter: 0,
      belowOrigin: true
    });

    this.$('.button-collapse').sideNav({
      menuWidth: 240,
      activationWidth: 70,
      closeOnClick: true
    });

  }.bind(this), 200);
};

Template.Header.events({
  'click .logout': function(evt) {
    evt.preventDefault();
    
    AccountsTemplates.logout();
  }
});

Template.Header.helpers({
  pictureExist: function() {
    return (typeof Meteor.user().profile != "undefined")
  },
  userProfile: function() {
    return Meteor.user().profile;
  }
});