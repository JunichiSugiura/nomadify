Template.AdminRestaurantDashboard.onCreated(function() {
  var self = this;
  self.autorun(function() {
    self.subscribe('restaurants');
  });
});

Template.AdminRestaurantDashboard.helpers({
  restaurant: function() {
    return Restaurants.findOne({});
  },
  topGenresChart: function() {
    Meteor.call('checkedIn', function(error, response) {
      Session.set('checkedIn', response);
    });
    Meteor.call('canceled', function(error, response) {
      Session.set('canceled', response);
      });
    Meteor.call('dissapeared', function(error, response) {
      Session.set('dissapeared', response);
    });

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
          ['Checked in', parseInt(Session.get('checkedIn'))],
          ['Canceled', parseInt(Session.get('canceled'))],
          ['Dissapeared', parseInt(Session.get('dissapeared'))]
        ]
      }]
    };
  }
});
