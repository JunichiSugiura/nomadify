Restaurants = new Mongo.Collection('restaurants');

Restaurants.allow({
  insert: function(userId, doc) {
    return !!userId;
  }
});

RestaurantSchema = new SimpleSchema({
  name: {
    type: String,
    label: 'Name'
  },
  desc: {
    type: String,
    label: 'Desc'
  },
  tel: {
    type: Number,
    label: 'Tel'
  },
  email: {
    type: String,
    label: 'Email'
  },
  owner: {
    type: String,
    label: 'Owner',
    autoValue: function() {
      return this.userId
    },
    autoform: {
      type: 'hidden'
    }
  },
  createdAt: {
    type: Date,
    label: 'Created At',
    autoValue: function() {
      return new Date()
    },
    autoform: {
      type: 'hidden'
    }
  },
  url: {
    type: String,
    optional: true,
    label: 'url'
  }
});

Restaurants.attachSchema( RestaurantSchema );
