Restaurants = new Mongo.Collection('restaurants');

RestaurantSchema = new SimpleSchema({
  name: {
    type: String,
    label: 'Name'
  },
  tel: {
    type: String,
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
    }
  },
  createdAt: {
    type: Date,
    label: 'Created At',
    autoValue: function() {
      return new Date()
    }
  }
});

Restaurants.attachSchema( RestaurantSchema );
