Highcharts.chart('container', {
  chart: {
    plotBackgroundColor: null,
    plotBorderWidth: null,
    plotShadow: false,
    type: 'pie'
  },
  title: {
    text: 'Fulltime Men vs Women Applied in 2018'
  },
  tooltip: {
    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
  },
  plotOptions: {
    pie: {
      allowPointSelect: true,
      cursor: 'pointer',
      dataLabels: {
        enabled: true,
        format: '<b>{point.name}</b>: {point.percentage:.1f} %'
      }
    }
  },
  series: [{
    name: 'Gender',
    colorByPoint: true,
    data: [{
      name: 'Fulltime Men',
      y: 46.6,
      sliced: true,
      selected: true
    }, {
      name: 'Fulltime Women',
      y: 53.4
    }]
  }]
});