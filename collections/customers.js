Customers = new Mongo.Collection('customers');

Customers.allow({
  insert: function(userId, doc) {
    return !!doc;
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
  info: {
    type: String,
    label: 'Seat',
    allowedValues: ['Non-smoking', 'Smoking', 'Anywhere']
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
  }
});

Customers.attachSchema( CustomerSchema );
