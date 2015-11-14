Meteor.startup(function() {
  ServiceConfiguration.configurations.update(
    { service: "facebook" },
    { $set: {
        appId: Meteor.settings.private.facebookAppId,
        secret: Meteor.settings.private.facebookAppSecret
      }
    },
    { upsert: true }
  );
});
