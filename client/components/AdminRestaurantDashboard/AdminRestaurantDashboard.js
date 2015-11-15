Meteor.subscribe('customers');

Template.AdminRestaurantDashboard.onCreated(function() {
  var self = this;
  self.autorun(function() {
    self.subscribe('restaurants');
  });
});

Template.AdminRestaurantDashboard.helpers({
  customers: function() {
    var restaurantId = Session.get('restaurantId');
    return Customers.find({ restaurantId: restaurantId });
  },
  restaurant: function() {
    var restaurantId = Session.get('restaurantId');
    return Restaurants.findOne({ _id: restaurantId });
  },
  topGenresChart: function() {
    return {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false
      },
      title: {
        text: 'Customer Response Rate'
      },
      tooltip: {
        pointFormat: '<b>{point.percentage:.1f}%</b>'
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: true,
            format: '<b>{point.name}</b>: {point.percentage:.1f} %',
            style: {
              color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
            },
            connectorColor: 'silver'
          }
        }
      },
      series: [{
        type: 'pie',
        name: 'genre',
        data: [
          ['Checked in', 45.0],
          ['Canceled', 30.0],
          ['Dissapeared', 25.0]
        ]
      }]
    };
  }
});
