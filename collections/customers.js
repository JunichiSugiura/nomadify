Customers = new Mongo.Collection('customers');

Customers.allow({
  insert: function(userId, doc) {
    return !!doc;
  },
  update: function(userId, doc) {
    return true;
  },
  remove: function(userId, doc) {
    return !!userId;
  }
});

CustomerSchema = new SimpleSchema({
  name: {
    type: String,
    label: 'Name'
  },
  tel: {
    type: Number,
    label: 'Tel'
  },
  numberOfPeople: {
    type: Number,
    label: 'Number Of People'
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
  restaurantId: {
    type: String,
    label: 'Restaurant Id',
    autoValue: function() {
      return this.userId
    },
    autoform: {
      type: 'hidden'
    }
  },
  status: {
    type: String,
    label: 'status',
    defaultValue: 'waiting',
    autoform: {
      type: 'hidden'
    }
  }
});

Customers.attachSchema( CustomerSchema );
