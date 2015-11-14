Accounts.onCreateUser(function(options, user) {
  if (user.services.facebook) {
      options.profile.picture = "http://graph.facebook.com/" + user.services.facebook.id + "/picture/?type=large";
      user.profile = options.profile;
      console.log('Successfully inserted proifle picture!')
  }
  return user;
});
