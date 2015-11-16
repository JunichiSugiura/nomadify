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
  CustomerResponse: function() {
    return {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false
      },
      title: {
        text: 'Response',
        align: 'center',
        verticalAlign: 'middle',
        y: 80
      },
      tooltip: {
        pointFormat: '<b>{point.percentage:.1f}%</b>'
      },
      plotOptions: {
        pie: {
          dataLabels: {
            enabled: true,
            distance: -50,
            style: {
                fontWeight: 'bold',
                color: 'white',
                textShadow: '0px 1px 2px black'
            }
          },
          startAngle: -90,
          endAngle: 90,
          center: ['50%', '75%']
        }
      },
      series: [{
        type: 'pie',
        name: 'Response',
        innerSize: '50%',
        data: [
          ['Checked in', 45.0],
          ['Canceled', 30.0],
          ['Dissapeared', 25.0]
        ]
      }]
    };
  },
  Age: function() {
    return {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false
      },
      title: {
        text: 'Age',
        align: 'center',
        verticalAlign: 'middle',
        y: 80
      },
      tooltip: {
        pointFormat: '<b>{point.percentage:.1f}%</b>'
      },
      plotOptions: {
        pie: {
          dataLabels: {
            enabled: true,
            distance: -50,
            style: {
                fontWeight: 'bold',
                color: 'white',
                textShadow: '0px 1px 2px black'
            }
          },
          startAngle: -90,
          endAngle: 90,
          center: ['50%', '75%']
        }
      },
      series: [{
        type: 'pie',
        name: 'Age',
        innerSize: '50%',
        data: [
          ['~10', 5.0],
          ['11~20', 13.0],
          ['21~30', 22.0],
          ['31~40', 20.0],
          ['41~50', 15.0],
          ['51~', 15.0]
        ]
      }]
    };
  },
  Gender: function() {
    return {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false
      },
      title: {
        text: 'Gender',
        align: 'center',
        verticalAlign: 'middle',
        y: 80
      },
      tooltip: {
        pointFormat: '<b>{point.percentage:.1f}%</b>'
      },
      plotOptions: {
        pie: {
          dataLabels: {
            enabled: true,
            distance: -50,
            style: {
                fontWeight: 'bold',
                color: 'white',
                textShadow: '0px 1px 2px black'
            }
          },
          startAngle: -90,
          endAngle: 90,
          center: ['50%', '75%']
        }
      },
      series: [{
        type: 'pie',
        name: 'CustomerResponse',
        innerSize: '50%',
        data: [
          ['Man', 51.0],
          ['Woman', 49.0]
        ]
      }]
    };
  }
});
