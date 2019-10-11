Highcharts.chart('container', {
  chart: {
    type: 'line'
  },
  title: {
    text: 'Fulltime Men vs. Women Applied from 2005-2018'
  },
  xAxis: {
    categories: [2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018], 
    title: {
      text: 'Year'
    }
  },
  yAxis: {
    title: {
      text: 'Number of Students'
    }
  },
  plotOptions: {
    line: {
      dataLabels: {
        enabled: true
      },
      enableMouseTracking: false
    }
  },
  series: [{
    name: 'Fulltime Men',
    data: [18147, 19838, 20566, 21590, 21725, 22332, 25097, 28758, 31992, 34618, 37009, 39779, 41583, 45636]
  }, {
    name: 'Fulltime Women',
    data: [22371, 23748, 24507, 25775, 25321, 25761, 28351, 32049, 35408, 38822, 41947, 44430, 46845, 52265]
  }]
});