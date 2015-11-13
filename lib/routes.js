FlowRouter.route('/', {
  name: 'home',
  action() {
    BlazeLayout.render('HomeLayout');
  }
});

FlowRouter.route('/restaurant-sign-up', {
  name: 'restaurant-sign-up',
  action() {
    BlazeLayout.render('MainLayout', {main: 'RestaurantSignUp'});
  }
});

FlowRouter.route('/waiting-list', {
  name: 'waiting-list',
  action() {
    BlazeLayout.render('MainLayout', {main: 'Twilio'});
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
