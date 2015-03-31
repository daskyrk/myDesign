/**
 * Created by Jun on 2015/3/30.
 */
define(function (require, exports, module) {

    var barChartView = Backbone.View.extend({

        id: "",

        init: function () {
            //this.id = "barChart" + $("div[id^='chart']").length;
        },

        render: function () {
            var lastId = $("div[id^='chart']").length;
            //基于准备好的dom，初始化echarts图表
            var myChart = echarts.init(document.getElementById('chart' + lastId));

            var option = {
                tooltip: {
                    show: true
                },
                legend: {
                    data: ['销量']
                },
                xAxis: [
                    {
                        type: 'category',
                        data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
                    }
                ],
                yAxis: [
                    {
                        type: 'value'
                    }
                ],
                series: [
                    {
                        "name": "销量",
                        "type": "bar",
                        "data": [5, 20, 40, 10, 10, 20]
                    }
                ]
            };

            //为echarts对象加载数据
            myChart.setOption(option);
            window.charts.push(myChart);
            //return this;
        },

        events: {
            "click $('div[id^=\'chart\']:last')[0]": "addNew"
        },

        addNew: function () {//新增图表
            alert('new');
        }

    });

    module.exports = barChartView;
})