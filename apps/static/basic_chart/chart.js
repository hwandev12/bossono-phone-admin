am5.ready(function() {

var root = am5.Root.new("chartdiv");


root.setThemes([
  am5themes_Animated.new(root)
]);


var chart = root.container.children.push(am5xy.XYChart.new(root, {
  panX: false,
  panY: false,
  wheelX: "panX",
  wheelY: "zoomX",
  layout: root.verticalLayout
}));


var legend = chart.children.push(
  am5.Legend.new(root, {
    centerX: am5.p50,
    x: am5.p50
  })
);

var data = [{
  "year": "2021",
  "europe": 2.5,
  "namerica": 2.5,
  "asia": 2.1,
  "lamerica": 1,
  "meast": 0.8,
  "africa": 0.4
}, {
  "year": "2022",
  "europe": 2.6,
  "namerica": 2.7,
  "asia": 2.2,
  "lamerica": 0.5,
  "meast": 0.4,
  "africa": 0.3
}, {
  "year": "2023",
  "europe": 2.8,
  "namerica": 2.9,
  "asia": 2.4,
  "lamerica": 0.3,
  "meast": 0.9,
  "africa": 0.5
}]


var xAxis = chart.xAxes.push(am5xy.CategoryAxis.new(root, {
  categoryField: "year",
  renderer: am5xy.AxisRendererX.new(root, {
    cellStartLocation: 0.1,
    cellEndLocation: 0.9
  }),
  tooltip: am5.Tooltip.new(root, {})
}));

xAxis.data.setAll(data);

var yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
  renderer: am5xy.AxisRendererY.new(root, {})
}));


function makeSeries(name, fieldName) {
  var series = chart.series.push(am5xy.ColumnSeries.new(root, {
    name: name,
    xAxis: xAxis,
    yAxis: yAxis,
    valueYField: fieldName,
    categoryXField: "year"
  }));

  series.columns.template.setAll({
    tooltipText: "{name}, {categoryX}:{valueY}",
    width: am5.percent(90),
    tooltipY: 0
  });

  series.data.setAll(data);

  series.appear();

  series.bullets.push(function () {
    return am5.Bullet.new(root, {
      locationY: 0,
      sprite: am5.Label.new(root, {
        text: "{valueY}",
        fill: root.interfaceColors.get("alternativeText"),
        centerY: 0,
        centerX: am5.p50,
        populateText: true
      })
    });
  });

  legend.data.push(series);
}



chart.appear(1000, 100);

});
