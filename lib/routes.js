FlowRouter.triggers.enter([function(context, redirect){
  if(!Meteor.userId()) {
    FlowRouter.go('sign-in');
  }
}], { except: ['home', 'sign-up'] });

FlowRouter.route('/', {
  name: 'home',
  action() {
    if(Meteor.userId()) {
      FlowRouter.go('waiting-list');
    }
    BlazeLayout.render('HomeLayout');
  }
});

FlowRouter.route('/sign-in', {
  name: 'sign-in',
  triggersEnter: [function(context, redirect) {
    if(Meteor.userId()) {
      redirect('/waiting-list');
    }
  }],
  action() {
    BlazeLayout.render('MainLayout', {main: 'SignIn'});
  },
});

FlowRouter.route('/sign-up', {
  name: 'sign-up',
  triggersEnter: [function(context, redirect) {
    if(Meteor.userId()) {
      redirect('/waiting-list');
    }
  }],
  action() {
    BlazeLayout.render('MainLayout', {main: 'SignUp'});
  }
});

FlowRouter.route('/restaurant-sign-up', {
  name: 'restaurant-sign-up',
  action() {
    BlazeLayout.render('MainLayout', {main: 'RestaurantSignUp'});
  }
});

FlowRouter.route('/restaurants', {
  name: 'restaurants',
  subscriptions: function(params, queryParams) {
    console.log(Meteor.subscribe('restaurants'));
    this.register('myRestaurants', Meteor.subscribe('restaurants'));
  },
  action() {
    BlazeLayout.render('MainLayout', {main: 'Restaurants'});
  }
});

FlowRouter.route('/restaurants/:id', {
  name: 'restaurants',
  action() {
    BlazeLayout.render('MainLayout', {main: 'WaitingList'});
  }
});

FlowRouter.route('/restaurants/:id/waiting-list', {
  name: 'waiting-list',
  action() {
    BlazeLayout.render('MainLayout', {main: 'WaitingList'});
  }
});

FlowRouter.route('/twilio/notification-message.xml', {
  where: 'server',
  action() {

    var xmlData = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>";
    xmlData += "<Response>";
    xmlData += "<Say voice=\"woman\" language=\"ja-JP\">じゅんくん、こんにちは！</Say>";
    xmlData += "</Response>";

    this.response.writeHead(200, {'Content-Type': 'application/xml'});
    this.response.end(xmlData);
  }
});
