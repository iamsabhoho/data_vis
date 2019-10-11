Highcharts.chart('container', {
  chart: {
    type: 'bar'
  },
  title: {
    text: 'Fulltime Men vs. Women Enrolled from Year 2014-2018'
  },
  xAxis: {
    categories: [2014, 2015, 2016, 2017, 2018],
    title: {
      text: 'Year'
    }
  },
  yAxis: {
    min: 0,
    max: 4000,
    tickInterval: 500,
    title: {
      text: 'Number of Students'
    }
  },
  plotOptions: {
    bar: {
      dataLabels: {
        enabled: true
      }
    }
  },
  legend: {
    layout: 'vertical',
    align: 'right',
    verticalAlign: 'top',
    x: -20,
    y: 50,
    floating: true,
    borderWidth: 1,
    backgroundColor:
      Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
    shadow: true
  },
  credits: {
    enabled: false
  },
  series: [{
    name: 'Fulltime Men',
    data: [2583, 2711, 2669, 2725, 3220]
  }, {
    name: 'Fulltime Women',
    data: [2383, 2581, 3077, 2974, 3484]
  }]
});